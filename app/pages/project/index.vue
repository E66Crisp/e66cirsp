<script setup lang="ts">
import { useHead } from 'nuxt/app'

const { m } = useAppI18n()

useHead(() => ({ title: m.value.pageTitle.project }))
</script>

<template>
  <p class="font-dm-mono text-[16px] text-neutral-500">
    {{ m.placeholder }}
  </p>
</template>
