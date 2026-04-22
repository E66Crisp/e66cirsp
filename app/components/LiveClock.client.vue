<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const time = ref('')
const iso = ref('')

function tick() {
  const d = new Date()
  time.value = d.toLocaleTimeString('en-US', {
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
