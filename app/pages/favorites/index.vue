<script setup lang="ts">
import type { FavoriteEntry } from '~/constants/favorites'
import type { AppLocale } from '~/i18n/messages'
import { useHead } from 'nuxt/app'
import {
  favorites,
  favoriteSectionOrder,
  favoriteSubcategoryOrder,
} from '~/constants/favorites'

definePageMeta({ wide: true })

const { m, locale } = useAppI18n()

function localizeEntry(item: FavoriteEntry, loc: AppLocale) {
  return {
    name: item.name,
    icon: item.icon,
    url: item.url,
    install: item.install[loc],
    description: item.description[loc],
  }
}

const favoriteSections = computed(() => {
  const loc = locale.value as AppLocale

  return favoriteSectionOrder
    .map((sectionId) => {
      const sectionItems = favorites.filter(item => item.section === sectionId)
      if (sectionItems.length === 0)
        return null

      const subOrder = favoriteSubcategoryOrder[sectionId]
      const groups = subOrder?.length
        ? subOrder
            .map(subId => ({
              id: subId,
              label: m.value.favorites.subcategories[subId],
              items: sectionItems
                .filter(item => item.subcategory === subId)
                .map(item => localizeEntry(item, loc)),
            }))
            .filter(group => group.items.length > 0)
        : [{
            id: `${sectionId}-all`,
            label: null as string | null,
            items: sectionItems.map(item => localizeEntry(item, loc)),
          }]

      if (groups.length === 0)
        return null

      return {
        id: sectionId,
        label: m.value.favorites.sections[sectionId],
        groups,
      }
    })
    .filter(section => section !== null)
})

useHead(() => ({ title: m.value.pageTitle.favorites }))
</script>

<template>
  <div class="space-y-16">
    <section
      v-for="section in favoriteSections"
      :key="section.id"
      class="space-y-8"
    >
      <h2 class="text-base font-semibold tracking-tight text-neutral-900">
        {{ section.label }}
      </h2>

      <div
        v-for="group in section.groups"
        :key="group.id"
        class="space-y-6"
      >
        <h3
          v-if="group.label"
          class="font-dm-mono text-[13px] font-medium text-neutral-500"
        >
          {{ group.label }}
        </h3>
        <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <li
            v-for="item in group.items"
            :key="item.name"
            class="h-full"
          >
            <FavoriteSkillCard
              :name="item.name"
              :icon="item.icon"
              :url="item.url"
              :install="item.install"
              :description="item.description"
              :install-label="m.favorites.labelInstall"
            />
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
