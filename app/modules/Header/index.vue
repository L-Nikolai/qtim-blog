<template>
  <Header>
    <template #links>
      <span class="links">
        <NuxtLink
          v-for="{ link, label } of links"
          :key="label"
          :to="link"
          class="link"
        >
          {{ label }}
        </NuxtLink>
      </span>
    </template>
    <template #actions>
      <Button outlined label="1" type="icon" height="3.25rem" >
        <FlagGb />
      </Button>
      <Button label="Let’s work" height="3.25rem" class="header-button"/>
    </template>
  </Header>
</template>

<script lang="ts" setup>
import { Header, Button } from '~/shared/base-ui'
import { FlagGb } from '~/shared/icons'

type Link = { label: string; link: string }

const links: Link[] = [
  { label: 'Works', link: '/' },
  { label: 'About', link: '/' },
]
</script>

<style lang="scss" scoped>
.links {
  @include flex-row(toRem(58));
}

.link {
  color: $black-primary;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

.header-button{
    font-size: toRem(20);
    line-height: 100%;
    letter-spacing: 0%;
}
</style>
