<script setup lang="ts">
import { navRoutes, site } from '~/constants/site'

const { m } = useAppI18n()

const navItems = computed(() => {
  const labels = [m.value.nav.home, m.value.nav.project, m.value.nav.blogs] as const
  return navRoutes.map((r, i) => ({ to: r.to, label: labels[i]! }))
})
</script>

<template>
  <header
    class="sticky top-0 z-30 w-full select-none border-b border-neutral-100/80 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75"
  >
    <div
      class="flex w-full min-w-0 max-w-full items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5 lg:px-10"
    >
      <ClientOnly>
        <LiveClock />
        <template #fallback>
          <span
            class="font-dm-mono text-[12px] text-transparent"
            aria-hidden="true"
          >00:00:00 AM</span>
        </template>
      </ClientOnly>

      <nav
        class="flex items-center gap-3 font-dm-mono text-[12px] text-neutral-800 sm:gap-5"
      >
        <NuxtLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="text-neutral-800 transition hover:opacity-70"
          active-class="font-medium text-neutral-900"
        >
          {{ item.label }}
        </NuxtLink>

        <NuxtLink
          :to="site.githubUrl"
          external
          target="_blank"
          rel="noopener noreferrer"
          class="flex h-5 w-5 items-center justify-center text-neutral-800 transition-opacity hover:opacity-70"
          :aria-label="m.header.github"
        >
          <svg
            class="h-4 w-4"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M12 1C5.92 1 1 5.86 1 11.98c0 4.8 3.1 8.86 7.4 10.3.54.1.74-.24.74-.52 0-.25-.01-.86-.01-1.7-2.8.6-3.4-1.36-3.4-1.36-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.52 1.04 1.52 1.04.9 1.52 2.35 1.08 2.92.83.1-.64.35-1.08.64-1.32-2.24-.25-4.6-1.1-4.6-4.9 0-1.08.4-1.98 1.04-2.66-.1-.25-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.04a9.3 9.3 0 0 1 2.5-.35c.85.01 1.7.12 2.5.35 1.9-1.31 2.75-1.04 2.75-1.04.55 1.4.2 2.45.1 2.7.65.68 1.04 1.58 1.04 2.66 0 3.8-2.36 4.64-4.6 4.9.36.32.7.94.7 1.9 0 1.38-.01 2.5-.01 2.85 0 .28.2.63.75.52A10.1 10.1 0 0 0 23 12 11 11 0 0 0 12 1Z"
            />
          </svg>
        </NuxtLink>

        <button
          type="button"
          class="flex h-6 w-6 items-center justify-center rounded-full text-neutral-800 ring-1 ring-neutral-200 transition hover:bg-neutral-50"
          :aria-label="m.header.settings"
        >
          <svg
            class="h-3.5 w-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            aria-hidden="true"
          >
            <circle
              cx="12"
              cy="12"
              r="3"
            />
            <path
              d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </nav>
    </div>
  </header>
</template>
