<script setup lang="ts">
const { locale } = useAppLocale()
useHead(() => ({
  htmlAttrs: { lang: locale.value === 'zh' ? 'zh-CN' : 'en' },
}))
</script>

<template>
  <div class="flex min-h-screen flex-col bg-white text-neutral-900 antialiased">
    <SiteHeader class="w-full shrink-0" />
    <div class="mx-auto w-full max-w-[800px] flex-1 px-6 pb-16 pt-10 sm:pt-14">
      <slot />
    </div>
    <SiteFloatActions />
  </div>
</template>
