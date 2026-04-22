<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'

const props = defineProps({
  text: { type: String, required: true },
  typeInterval: { type: Number, default: 45 },
  holdDuration: { type: Number, default: 2200 },
  deleteInterval: { type: Number, default: 45 },
  loopDelay: { type: Number, default: 500 },
  maskClass: { type: String, default: 'bg-white' },
})

/** 0 全遮、1 全显；遮罩自右宽 = (1 - progress) × 100% */
const progress = ref(0)
let raf: ReturnType<typeof requestAnimationFrame> | undefined
let active = true
let sleepId: ReturnType<typeof setTimeout> | undefined
let sleepResolve: (() => void) | undefined

const revealMs = computed(
  () => Math.max(500, props.text.length * props.typeInterval),
)
const concealMs = computed(
  () => Math.max(500, props.text.length * props.deleteInterval),
)

function lerp(
  a: number,
  b: number,
  t: number,
) {
  return a + (b - a) * t
}

function cancelRaf() {
  if (raf !== undefined) {
    cancelAnimationFrame(raf)
    raf = undefined
  }
}

function clearSleep() {
  if (sleepId !== undefined) {
    clearTimeout(sleepId)
    sleepId = undefined
  }
  if (sleepResolve !== undefined) {
    const r = sleepResolve
    sleepResolve = undefined
    r()
  }
}

function stopAll() {
  active = false
  cancelRaf()
  clearSleep()
}

function sleep(
  ms: number,
) {
  return new Promise<void>((resolve) => {
    sleepResolve = resolve
    sleepId = setTimeout(() => {
      sleepId = undefined
      sleepResolve = undefined
      resolve()
    }, ms)
  })
}

function animate(
  from: number,
  to: number,
  durationMs: number,
) {
  return new Promise<void>((resolve) => {
    const t0 = performance.now()
    function frame(now: number) {
      if (!active) {
        raf = undefined
        resolve()
        return
      }
      const t = Math.min(1, (now - t0) / durationMs)
      progress.value = lerp(from, to, t)
      if (t < 1) {
        raf = requestAnimationFrame(frame)
      }
      else {
        progress.value = to
        raf = undefined
        resolve()
      }
    }
    raf = requestAnimationFrame(frame)
  })
}

async function play() {
  if (!import.meta.client) {
    progress.value = 1
    return
  }
  if (globalThis.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    progress.value = 1
    return
  }

  // `active` 在 stopAll / unmount 中置为 false，循环条件并非恒定
  // eslint-disable-next-line no-unmodified-loop-condition
  while (active) {
    if (!props.text.length) {
      progress.value = 0
      return
    }

    progress.value = 0
    await animate(0, 1, revealMs.value)
    if (!active) {
      return
    }
    await sleep(props.holdDuration)
    if (!active) {
      return
    }
    await animate(1, 0, concealMs.value)
    if (!active) {
      return
    }
    await sleep(props.loopDelay)
  }
}

function restart() {
  stopAll()
  active = true
  void play()
}

onMounted(() => {
  restart()
})

onUnmounted(() => {
  stopAll()
})

watch(
  () => [
    props.text,
    props.typeInterval,
    props.deleteInterval,
    props.holdDuration,
    props.loopDelay,
  ],
  () => {
    restart()
  },
)

const maskWidth = computed(
  () => `${(1 - progress.value) * 100}%`,
)
</script>

<template>
  <span
    class="relative inline-block max-w-full min-h-[1.3em] align-baseline"
    :aria-label="text"
  >
    <!-- 占位定宽定高，避免仅绝对层时父级无尺寸 -->
    <span
      class="invisible block min-h-[1.3em] max-w-full select-none whitespace-pre-wrap break-words"
      aria-hidden="true"
    >{{ text }}</span>
    <span
      class="font-inherit text-inherit absolute left-0 top-0 z-0 min-h-[1.3em] max-w-full whitespace-pre-wrap break-words text-left"
      aria-hidden="true"
    >{{ text }}</span>
    <div
      class="pointer-events-none absolute inset-y-0 right-0 z-10 transition-shadow"
      :class="maskClass"
      :style="{ width: maskWidth }"
    />
    <span
      class="typewriter-caret pointer-events-none absolute z-20 top-1/2 h-[0.85em] w-px -translate-y-1/2 bg-neutral-500/90 ml-[3px]"
      :style="{ left: `calc(${progress * 100}% - 0.5px)` }"
      aria-hidden="true"
    />
  </span>
</template>

<style scoped>
.typewriter-caret {
  animation: typewriter-caret-blink 1.5s linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  .typewriter-caret {
    animation: none;
  }
}

@keyframes typewriter-caret-blink {
  0%,
  49% {
    opacity: 1;
  }
  50%,
  100% {
    opacity: 0;
  }
}
</style>
