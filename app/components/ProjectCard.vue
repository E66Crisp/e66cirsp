<script setup lang="ts">
defineProps<{
  name: string
  monogram: string
  url: string
  description: string
  tags: string[]
}>()
</script>

<template>
  <article
    class="group rounded-lg bg-white p-5 ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-12px_rgba(0,0,0,0.14)] hover:ring-black/12 motion-reduce:transform-none motion-reduce:hover:shadow-none"
  >
    <div class="flex items-start gap-3">
      <span
        class="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-neutral-50 font-dm-mono text-[10px] font-medium tracking-tight text-neutral-700 ring-1 ring-black/5"
        aria-hidden="true"
      >
        {{ monogram }}
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
        <ul
          v-if="tags.length"
          class="flex flex-wrap gap-2 pt-1"
        >
          <li
            v-for="tag in tags"
            :key="tag"
            class="rounded-md bg-neutral-50 px-2 py-0.5 font-dm-mono text-[11px] text-neutral-500 ring-1 ring-black/5"
          >
            {{ tag }}
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>
