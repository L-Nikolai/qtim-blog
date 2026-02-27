<template>
  <button
    class="button"
    :class="[
      {
        outlined,
      },
      color,
      type !== 'button' ? type : null,
    ]"
    :style="{ '--block-height': height }"
    :disabled="disabled"
    @click="onClick"
  >
    <div class="button-content">
      <slot>
        <span>
          {{ label }}
        </span>
      </slot>
    </div>
  </button>
</template>

<script setup lang="ts">
type AvailableButtonColors = 'primary'
type AvailableButtonTypes = 'button' | 'icon'

interface ComponentProps {
  color?: AvailableButtonColors
  type?: AvailableButtonTypes
  label?: string
  disabled?: boolean
  outlined?: boolean
  height?: string
}

interface ComponentEmits {
  (e: 'click', event: MouseEvent): MouseEvent
}

const props = withDefaults(defineProps<ComponentProps>(), {
  disabled: false,
  outlined: false,
  color: 'primary',
  type: 'button',
  label: undefined,
  height: '2.75rem',
})

const emit = defineEmits<ComponentEmits>()

const onClick = (e: MouseEvent) => {
  if (props.disabled) {
    return
  }

  emit('click', e)
}
</script>

<style scoped lang="scss">
.button {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  outline: 0;
  position: relative;
  text-decoration: none;
  white-space: nowrap;
  border-radius: toRem(100);
  font-weight: 500;
  padding: toRem(16) toRem(32);
  height: var(--block-height);
  border: none;
  overflow: hidden;
  transition: all 0.2s;
  cursor: pointer;
  gap: toRem(8);
  background-color: $black-primary;

  &-content {
    display: flex;
    color: white;
  }

  &:hover,
  &:focus {
    filter: brightness(1.1);
  }

  &.icon {
    padding: toRem(14);
  }

  &.outlined {
    border: 1px solid $grey-primary;
    background-color: unset;
    color: currentColor;
    color:  $black-primary;
  }

  &[disabled] {
    color: rgba(0, 0, 0, 0.26) !important;
    cursor: not-allowed;
    opacity: 0.7;

    &:hover,
    &:focus {
      filter: unset;
    }
  }
}
</style>
