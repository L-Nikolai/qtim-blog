<template>
  <Header />
  <div>
    <slot />
  </div>
  <Footer/>
</template>

<script lang="ts" setup>
import { Header, Footer } from '~/modules'
</script>
