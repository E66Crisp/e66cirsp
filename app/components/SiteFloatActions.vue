<script setup lang="ts">
import { computed } from 'vue'

const { otherLocale, toggleLocale, m } = useAppI18n()

const langShort = computed(
  () => (otherLocale.value === 'zh' ? '中' : 'EN'),
)

function scrollToTop() {
  if (import.meta.client)
    window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div
    class="pointer-events-auto fixed bottom-6 right-6 z-20 flex flex-col gap-2"
  >
    <button
      type="button"
      class="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-neutral-600 shadow ring-1 ring-black/5 backdrop-blur transition hover:text-neutral-900"
      :aria-label="m.float.languageSwitch"
      @click="toggleLocale"
    >
      <span class="font-dm-mono text-[10px] tabular-nums leading-none">{{ langShort }}</span>
    </button>
    <button
      type="button"
      class="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-neutral-600 shadow ring-1 ring-black/5 backdrop-blur transition hover:text-neutral-900"
      :aria-label="m.float.scrollTop"
      @click="scrollToTop"
    >
      <svg
        class="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M5 15l7-7 7 7"
        />
      </svg>
    </button>
  </div>
</template>
