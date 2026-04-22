<template>
  <div class="flex min-h-screen flex-col bg-white text-neutral-900 antialiased">
    <SiteHeader class="w-full shrink-0" />
    <div class="mx-auto w-full max-w-screen-md flex-1 px-6 pb-16 pt-10 sm:pt-14">
      <slot />
    </div>
    <SiteFloatActions />
  </div>
</template>
