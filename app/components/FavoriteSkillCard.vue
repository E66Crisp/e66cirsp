<script setup lang="ts">
import type { FavoriteIconName } from '~/constants/favorites'
import { motion, useMotionValue, useSpring } from 'motion-v'
import { skillCardTiltFromPointer } from '~/utils/skillCardTilt'

defineProps<{
  name: string
  icon: FavoriteIconName
  url: string
  install: string
  description: string
  installLabel: string
}>()

const isHovering = ref(false)
const reduceMotion = ref(true)

const rotateX = useMotionValue(0)
const rotateY = useMotionValue(0)
const scale = useMotionValue(1)
const smoothRotateX = useSpring(rotateX, { stiffness: 260, damping: 22 })
const smoothRotateY = useSpring(rotateY, { stiffness: 260, damping: 22 })
const smoothScale = useSpring(scale, { stiffness: 260, damping: 22 })

onMounted(() => {
  reduceMotion.value = globalThis.matchMedia('(prefers-reduced-motion: reduce)').matches
})

function handleMouseMove(event: MouseEvent) {
  if (reduceMotion.value)
    return

  const el = event.currentTarget as HTMLElement
  const tilt = skillCardTiltFromPointer(
    event.clientX,
    event.clientY,
    el.getBoundingClientRect(),
  )
  rotateX.set(tilt.rotateX)
  rotateY.set(tilt.rotateY)
}

function handleMouseEnter() {
  isHovering.value = true
  if (!reduceMotion.value)
    scale.set(1.02)
}

function handleMouseLeave() {
  isHovering.value = false
  rotateX.set(0)
  rotateY.set(0)
  scale.set(1)
}
</script>

<template>
  <motion.div
    class="flex h-full flex-col rounded-lg bg-white ring-1 ring-black/5 will-change-transform"
    :class="[
      isHovering ? 'shadow-[0_14px_36px_-12px_rgba(0,0,0,0.14)] ring-black/12' : 'shadow-none',
      reduceMotion && isHovering ? '-translate-y-0.5' : '',
    ]"
    :style="reduceMotion ? undefined : {
      rotateX: smoothRotateX,
      rotateY: smoothRotateY,
      scale: smoothScale,
      transformPerspective: '900px',
    }"
    @mouseenter="handleMouseEnter"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <article class="flex h-full flex-col gap-4 p-5">
      <div class="flex items-start gap-3">
        <span class="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-neutral-800 ring-1 ring-black/5">
          <FavoriteSkillIcon :icon="icon" />
        </span>
        <div class="min-w-0 flex-1 space-y-2">
          <h3 class="text-base font-semibold tracking-tight">
            <a
              :href="url"
              class="inline-flex items-center gap-1.5 text-neutral-900 transition hover:opacity-70"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ name }}
              <svg
                class="h-3.5 w-3.5 shrink-0 text-neutral-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                aria-hidden="true"
              >
                <path
                  d="M7 17 17 7M17 7H8M17 7v9"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </h3>
          <p class="font-dm-mono text-[13px] leading-relaxed text-neutral-600">
            {{ description }}
          </p>
        </div>
      </div>
      <div class="mt-auto space-y-1.5">
        <p class="font-dm-mono text-[11px] uppercase tracking-wide text-neutral-400">
          {{ installLabel }}
        </p>
        <p class="break-all rounded-md bg-neutral-50 px-3 py-2 font-dm-mono text-[11px] leading-relaxed text-neutral-700">
          {{ install }}
        </p>
      </div>
    </article>
  </motion.div>
</template>
