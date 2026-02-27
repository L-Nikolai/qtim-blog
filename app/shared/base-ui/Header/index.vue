<template>
  <div class="header">
    <NuxtLink to="/">
      <Logo />
    </NuxtLink>
    <span class="header__content">
      <slot name="links" />
      <span class="header__actions">
        <slot name="actions" />
      </span>
    </span>
  </div>
</template>

<script lang="ts" setup>
import Logo from '~/shared/icons/Logo.vue'
</script>

<style lang="scss">
.header {
  @include flex-between();
  padding: toRem(48) toRem(40);
  font-size: toRem(20);

  &__content {
    @include flex-row(toRem(90));
    align-items: center;
  }

  &__actions {
    @include flex-row(toRem(16));
  }
}
</style>
