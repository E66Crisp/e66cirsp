<script setup lang="ts">
import { useHead } from 'nuxt/app'
import { site } from '~/constants/site'

const { m, locale } = useAppI18n()

useHead({ title: site.name })
</script>

<template>
  <div>
    <section class="mb-14 flex flex-col gap-6 sm:mb-20 sm:flex-row sm:items-start sm:gap-8">
      <div
        v-if="!site.avatarUrl"
        class="h-24 w-24 shrink-0 rounded-full border border-dashed border-neutral-200 bg-neutral-50"
        aria-hidden="true"
      />
      <img
        v-else
        :src="site.avatarUrl"
        alt=""
        class="h-24 w-24 shrink-0 rounded-full object-cover ring-1 ring-black/5"
      >

      <div class="min-w-0 space-y-2">
        <h1 class="font-borel font-bold text-[30px] text-neutral-900 mt-[10px]">
          {{ site.name }}
        </h1>
        <p class="font-dm-mono text-[13px] text-neutral-500">
          <TypewriterText
            :key="locale"
            :text="m.tagline"
            :type-interval="90"
            :hold-duration="5400"
            :delete-interval="90"
            :loop-delay="1500"
          />
        </p>
      </div>
    </section>

    <section class="space-y-5">
      <h2 class="text-base font-semibold tracking-tight text-neutral-900">
        {{ m.aboutHeading }}
      </h2>
      <div class="space-y-4 font-dm-mono text-[16px] leading-relaxed text-neutral-800">
        <p
          v-for="(p, i) in m.aboutParagraphs"
          :key="i"
        >
          {{ p }}
        </p>
      </div>
    </section>
  </div>
</template>
