<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'

const { locale } = useAppLocale()
const time = ref('')
const iso = ref('')

function timeLocale() {
  return locale.value === 'zh' ? 'zh-CN' : 'en-US'
}

function tick() {
  const d = new Date()
  time.value = d.toLocaleTimeString(timeLocale(), {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  })
  iso.value = d.toISOString()
}

let id

onMounted(() => {
  tick()
  id = setInterval(tick, 1000)
})

watch(locale, () => tick())

onUnmounted(() => {
  if (id)
    clearInterval(id)
})
</script>

<template>
  <time
    class="font-dm-mono text-[12px] tabular-nums text-neutral-600"
    :datetime="iso"
  >
    {{ time }}
  </time>
</template>
