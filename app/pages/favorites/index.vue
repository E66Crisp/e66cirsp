<script setup lang="ts">
import type { AppLocale } from '~/i18n/messages'
import { useHead } from 'nuxt/app'
import { favoriteSkills } from '~/constants/favoriteSkills'

const { m, locale } = useAppI18n()

const skillsRows = computed(() => {
  const loc = locale.value as AppLocale
  return favoriteSkills.map(item => ({
    name: item.name,
    url: item.url,
    install: item.install[loc],
    description: item.description[loc],
  }))
})

useHead(() => ({ title: m.value.pageTitle.favorites }))
</script>

<template>
  <div class="space-y-12">
    <section class="space-y-6">
      <h2 class="text-base font-semibold tracking-tight text-neutral-900">
        {{ m.favorites.sectionSkills }}
      </h2>
      <ul class="space-y-8">
        <li
          v-for="(item, i) in skillsRows"
          :key="i"
          class="border-b border-neutral-100 pb-8 last:border-0 last:pb-0"
        >
          <div class="space-y-3 font-dm-mono text-[16px] leading-relaxed text-neutral-800">
            <h3 class="text-base font-semibold tracking-tight text-neutral-900">
              {{ item.name }}
            </h3>
            <p class="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-2">
              <span class="shrink-0 text-neutral-500">{{ m.favorites.labelLink }}</span>
              <a
                :href="item.url"
                class="break-all text-neutral-800 underline decoration-neutral-300 underline-offset-2 transition hover:decoration-neutral-600"
                target="_blank"
                rel="noopener noreferrer"
              >{{ item.url }}</a>
            </p>
            <p class="flex flex-col gap-0.5 sm:flex-row sm:items-start sm:gap-2">
              <span class="shrink-0 text-neutral-500">{{ m.favorites.labelInstall }}</span>
              <span class="min-w-0">{{ item.install }}</span>
            </p>
            <p class="flex flex-col gap-0.5 sm:flex-row sm:items-start sm:gap-2">
              <span class="shrink-0 text-neutral-500">{{ m.favorites.labelAbout }}</span>
              <span class="min-w-0">{{ item.description }}</span>
            </p>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>
