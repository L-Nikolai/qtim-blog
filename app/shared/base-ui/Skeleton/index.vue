<template>
  <div
    class="skeleton shimmer"
    :style="{
      width,
      height,
      borderRadius,
    }"
  />
</template>

<script setup lang="ts">
interface ComponentProps {
  width?: string
  height?: string
  borderRadius?: string
}

withDefaults(defineProps<ComponentProps>(), {
  width: '100%',
  height: '100%',
  borderRadius: '12px',
})
</script>

<style scoped lang="scss">
.skeleton {
  background: linear-gradient(90deg, #eeeeee 25%, #f5f5f5 50%, #eeeeee 75%);
  background-size: 200% 100%;
  animation: shimmer 1.4s infinite linear;
}

@keyframes shimmer {
  from {
    background-position: 200% 0;
  }
  to {
    background-position: -200% 0;
  }
}
</style>
