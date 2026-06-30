<script setup lang="ts">
import type { ProjectEntry } from '~/constants/projects'
import type { AppLocale } from '~/i18n/messages'
import { useHead } from 'nuxt/app'
import { ossContributions, ownProjects } from '~/constants/projects'

definePageMeta({ wide: true })

const { m, locale } = useAppI18n()

useHead(() => ({ title: m.value.pageTitle.project }))

function localizeProjects(items: ProjectEntry[]) {
  const loc = locale.value as AppLocale
  return items.map(item => ({
    name: item.name,
    monogram: item.monogram,
    url: item.url,
    tags: item.tags,
    description: item.description[loc],
  }))
}

const ownProjectRows = computed(() => localizeProjects(ownProjects))
const ossProjectRows = computed(() => localizeProjects(ossContributions))
</script>

<template>
  <div class="space-y-10">
    <section class="space-y-4">
      <div class="space-y-2">
        <h2 class="text-base font-semibold tracking-tight text-neutral-900">
          {{ m.project.sectionOwn }}
        </h2>
        <p class="max-w-[65ch] font-dm-mono text-[13px] leading-relaxed text-neutral-500">
          {{ m.project.introOwn }}
        </p>
      </div>
      <ul class="grid gap-4">
        <li
          v-for="project in ownProjectRows"
          :key="project.name"
        >
          <ProjectCard
            :name="project.name"
            :monogram="project.monogram"
            :url="project.url"
            :description="project.description"
            :tags="project.tags"
          />
        </li>
      </ul>
    </section>

    <section class="space-y-4">
      <div class="space-y-2">
        <h2 class="text-base font-semibold tracking-tight text-neutral-900">
          {{ m.project.sectionOss }}
        </h2>
        <p class="max-w-[65ch] font-dm-mono text-[13px] leading-relaxed text-neutral-500">
          {{ m.project.introOss }}
        </p>
      </div>
      <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <li
          v-for="project in ossProjectRows"
          :key="project.name"
          class="h-full"
        >
          <ProjectCard
            :name="project.name"
            :monogram="project.monogram"
            :url="project.url"
            :description="project.description"
            :tags="project.tags"
          />
        </li>
      </ul>
    </section>
  </div>
</template>
