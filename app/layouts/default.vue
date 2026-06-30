<script setup lang="ts">
const { locale } = useAppLocale()
const route = useRoute()

// ponytail: one layout; favorites sets meta.wide instead of a duplicate layout file
const isWide = computed(() => route.meta.wide === true)

useHead(() => ({
  htmlAttrs: { lang: locale.value === 'zh' ? 'zh-CN' : 'en' },
}))
</script>

<template>
  <div
    class="flex min-h-screen flex-col bg-white text-neutral-900 antialiased"
    :class="isWide ? 'relative' : ''"
  >
    <WideSideDecor v-if="isWide" />
    <SiteHeader
      class="w-full shrink-0"
      :class="isWide ? 'relative z-10' : ''"
    />
    <div
      class="mx-auto w-full flex-1 px-6 pb-16 pt-10 sm:pt-14"
      :class="[
        isWide ? 'relative z-10 max-w-[1080px]' : 'max-w-[800px]',
      ]"
    >
      <slot />
    </div>
    <SiteFloatActions />
  </div>
</template>
