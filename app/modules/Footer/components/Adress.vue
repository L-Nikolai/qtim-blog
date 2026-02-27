<template>
  <ul class="adress">
    <li v-for="item in items" :key="item">
      {{ item }}
    </li>
    <Location v-if="showLoacation" class="location" />
  </ul>
</template>

<script lang="ts" setup>
import Location from '~/shared/icons/Location.vue'

interface ComponentProps {
  items: string[]
  showLoacation?: boolean
}

defineProps<ComponentProps>()
</script>

<style lang="scss" scoped>
.adress {
  @include flex-column(toRem(8));
  list-style-type: none;
  padding: 0;
  margin: 0;
  line-height: 120%;
  letter-spacing: 1%;
  box-sizing: border-box;

  li {
    max-width: toRem(152);

    &:first-child {
      margin-bottom: toRem(12);
    }
  }

  .location {
    cursor: pointer;
  }
}
</style>
