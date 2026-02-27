<template>
  <NuxtLink :to="`/articles/${post.id}`" class="card">
    <div class="image-wrapper">
      <Sceleton v-if="!imageLoaded" height="240px" border-radius="16px" />
      <img
        :src="post.image"
        :alt="post.title"
        :class="{ loaded: imageLoaded }"
        @load="onLoad"
      />
    </div>

    <div class="content">
      <span class="preview">
        {{ post.preview }}
      </span>

      <span class="read-more"> Read more </span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { BlogPost } from '~/shared/api/modules/blog/types'
import { Sceleton } from '~/shared/base-ui'

interface Props {
  post: BlogPost
}

defineProps<Props>()

const imageLoaded = ref(false)

function onLoad() {
  imageLoaded.value = true
}
</script>

<style scoped lang="scss">
.card {
  @include flex-column(toRem(12));
  width: toRem(280);
  height: toRem(414);
  transition: transform 0.3s ease;
  text-decoration: none;

  &:hover {
    transform: translateY(-10px);

    img {
      transform: scale(1.05);
    }

    .read-more {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

.image-wrapper {
  position: relative;
  height: toRem(240);
  overflow: hidden;
}

.image-skeleton {
  position: absolute;
  inset: 0;
  border-radius: inherit;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;

  opacity: 0;
  transition:
    opacity 0.4s ease,
    transform 0.4s ease;

  &.loaded {
    opacity: 1;
  }
}

.shimmer {
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

.content {
  @include flex-column(toRem(12));
}

.preview {
  color: #666;
}

.read-more {
  font-size: toRem(14);
  color: $lavender;

  opacity: 0;
  transform: translateY(6px);
  transition: all 0.3s ease;
}
</style>
