// Logo.vue
<template>
    <NuxtLink to="/" class="flex items-center">
        <img :src="logo" alt="ВеронаМед" class="h-8 w-auto sm:h-10" />
        <span class="ml-2 text-xl font-semibold text-green-600 hidden sm:block">
            ВеронаМед
        </span>
    </NuxtLink>
</template>
<script setup lang="ts">
import logo from '~/public/img/logo512.png'
</script>