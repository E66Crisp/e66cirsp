<script setup lang="ts">
import type { FavoriteIconName } from '~/constants/favorites'

defineProps<{
  icon: FavoriteIconName
}>()
</script>

<template>
  <svg
    class="h-[18px] w-[18px] shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    aria-hidden="true"
  >
    <template v-if="icon === 'code-review'">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
      />
    </template>
    <template v-else-if="icon === 'tutor'">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
      />
    </template>
    <template v-else-if="icon === 'markdown'">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M8.25 12h3m-3 3h3m3-6h3m-3 3h3"
      />
    </template>
    <template v-else-if="icon === 'tooling'">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.43m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5A2.25 2.25 0 0 0 2.25 9.75v7.5A2.25 2.25 0 0 0 4.5 19.5h1.409"
      />
    </template>
    <template v-else-if="icon === 'git'">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6.75 7.5h3m-3 3h3m-3 3h3m-3 3h3M3 6.75A2.25 2.25 0 0 1 5.25 4.5h13.5A2.25 2.25 0 0 1 21 6.75v10.5A2.25 2.25 0 0 1 18.75 19.5H5.25A2.25 2.25 0 0 1 3 17.25V6.75Z"
      />
    </template>
    <template v-else>
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.065-.621a15.998 15.998 0 0 1 4.126-1.592M9.53 16.122 13.5 19.5m-3.97-3.378a15.998 15.998 0 0 1 4.126-1.592M13.5 19.5l2.25-2.25m0 0 2.25 2.25-2.25-2.25m2.25 2.25V15"
      />
    </template>
  </svg>
</template>
