<template>
  <div class="layout">
    <div class="layout__header">
      <Header />
    </div>
    <main class="layout__content">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { Header, Footer } from '~/modules'
</script>

<style scoped lang="scss">
.layout {
  @include flex-column();
  min-height: 100vh;
}

.layout__header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #fff;
}

.layout__content {
  flex: 1;
}
</style>