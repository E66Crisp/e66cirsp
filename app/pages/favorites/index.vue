<script setup lang="ts">
import type { FavoriteEntry, FavoriteSectionId } from '~/constants/favorites'
import type { AppLocale } from '~/i18n/messages'
import { useHead } from 'nuxt/app'
import {
  favorites,
  favoriteSectionOrder,
  favoriteSubcategoryOrder,
} from '~/constants/favorites'

definePageMeta({ wide: true })

const { m, locale } = useAppI18n()

const collapsedSections = ref<Partial<Record<FavoriteSectionId, boolean>>>({})

function isSectionCollapsed(sectionId: FavoriteSectionId) {
  return collapsedSections.value[sectionId] === true
}

function toggleSection(sectionId: FavoriteSectionId) {
  collapsedSections.value[sectionId] = !isSectionCollapsed(sectionId)
}

function sectionToggleLabel(sectionId: FavoriteSectionId, sectionLabel: string) {
  return isSectionCollapsed(sectionId)
    ? `${m.value.favorites.labelExpand} ${sectionLabel}`
    : `${m.value.favorites.labelCollapse} ${sectionLabel}`
}

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
        <button
          type="button"
          class="group -mx-2 flex w-full cursor-pointer items-center justify-between gap-3 rounded-md px-2 py-1.5 text-left transition-colors hover:bg-neutral-50 active:bg-neutral-100"
          :aria-expanded="!isSectionCollapsed(section.id)"
          :aria-label="sectionToggleLabel(section.id, section.label)"
          @click="toggleSection(section.id)"
        >
          <span class="transition-colors group-hover:text-neutral-700">{{ section.label }}</span>
          <svg
            class="h-4 w-4 shrink-0 text-neutral-400 transition-[transform,color] duration-200 group-hover:text-neutral-700"
            :class="isSectionCollapsed(section.id) ? '-rotate-90' : 'rotate-0'"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            aria-hidden="true"
          >
            <path
              d="m6 9 6 6 6-6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </h2>

      <div
        v-show="!isSectionCollapsed(section.id)"
        class="space-y-8"
      >
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
      </div>
    </section>
  </div>
</template>
