<template>
  <div class="pagination" v-if="totalPages > 1">
    <button
      class="nav-btn"
      :disabled="modelValue === 1"
      @click="$emit('update:modelValue', modelValue - 1)"
    >
      ‹
    </button>

    <button
      v-for="item in pages"
      :key="item.key"
      :disabled="item.type === 'dots'"
      :class="[
        'page-btn',
        { active: item.page === modelValue },
        { dots: item.type === 'dots' },
      ]"
      @click="item.page && $emit('update:modelValue', item.page)"
    >
      {{ item.label }}
    </button>

    <button
      class="nav-btn"
      :disabled="modelValue === totalPages"
      @click="$emit('update:modelValue', modelValue + 1)"
    >
      ›
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface ComponentProps {
  modelValue: number
  totalPages: number
}

interface ComponentEmits {
  (e: 'update:modelValue', value: number): void
}

const props = defineProps<ComponentProps>()
defineEmits<ComponentEmits>()

const pages = computed(() => {
  const current = props.modelValue
  const total = props.totalPages

  const range: number[] = []
  const delta = 1

  for (let i = current - delta; i <= current + delta; i++) {
    if (i > 1 && i < total) {
      range.push(i)
    }
  }

  const result: any[] = []

  result.push({
    key: 'first',
    type: 'page',
    page: 1,
    label: 1,
  })

  if (current - delta > 2) {
    result.push({
      key: 'dots-left',
      type: 'dots',
      label: '...',
    })
  }

  range.forEach((page) => {
    result.push({
      key: page,
      type: 'page',
      page,
      label: page,
    })
  })

  if (current + delta < total - 1) {
    result.push({
      key: 'dots-right',
      type: 'dots',
      label: '...',
    })
  }

  if (total > 1) {
    result.push({
      key: 'last',
      type: 'page',
      page: total,
      label: total,
    })
  }

  return result
})
</script>

<style scoped lang="scss">
.pagination {
  display: flex;
  gap: toRem(8);
  align-items: center;
}

.page-btn,
.nav-btn {
  min-width: toRem(40);
  height: toRem(40);
  border-radius: toRem(10);
  border: none;
  background: #e9e9e9;
  cursor: pointer;
  transition: 0.2s;
}

.page-btn:hover,
.nav-btn:hover {
  background: #dcdcdc;
}

.page-btn.active {
  background: #000;
  color: #fff;
}

.page-btn.dots {
  cursor: default;
  background: transparent;
}
</style>
