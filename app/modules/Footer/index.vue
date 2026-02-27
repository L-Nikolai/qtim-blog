<template>
  <section class="footer">
    <div>Is there a project?</div>
    <div class="footer__row">
      <div class="title">
        Let’s work
        <br />
        together
      </div>
      <div class="contacts">
        <Adress
          v-for="(adress, index) in adresses"
          :key="index"
          :items="adress.items"
          :show-loacation="adress.showLocation"
        />
      </div>
    </div>
    <div class="footer__links">
      <span class="row">
        <a href="https://facebook.com" target="_blank">Facebook</a>
        <a href="https://instagram.com" target="_blank">Instagram</a>
        <a href="https://telegram.com" target="_blank">Telegram</a>
      </span>
      <div class="go-text">Go</div>
      <span class="row">
        <a href="https://behance.com" target="_blank">Behance</a>
        <a href="https://linkedin.com" target="_blank">LinkedIn</a>
        <a href="" target="_blank">Privacy Policy</a>
      </span>
      <div class="go" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import Adress from './components/Adress.vue'

type Adresses = { items: string[]; showLocation?: boolean }

const adresses: Adresses[] = [
  { items: ['For all questions', '+7 (920) 278—00—68', 'qtim@agency.com'] },
  {
    items: ['Office in Russia', '139 Ruben Station Lake Drew, NM 52678'],
    showLocation: true,
  },
  {
    items: ['Office in Dubai', '139 Ruben Station Lake Drew, NM 52678'],
    showLocation: true,
  },
]
</script>

<style lang="scss" scoped>
.footer {
  @include flex-column(toRem(56));
  padding: toRem(140) toRem(112) toRem(30) toRem(112);
  background-color: $lavender;
  overflow: hidden;

  &__row {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 32px;
    margin-bottom: toRem(143);

    .title {
      @include flex-column(toRem(56));
      font-size: toRem(112);
      line-height: 100%;
      letter-spacing: 0%;
      font-weight: 400;
    }

    .contacts {
      @include flex-column(toRem(36));
    }
  }

  &__links {
    @include flex-between();
    text-decoration: underline;
    position: relative;

    .row {
      @include flex-row(toRem(32));
    }

    a {
      color: $black-primary;
    }

    .go-text {
      color: $white;
      font-size: toRem(32);
      z-index: 10;
      text-decoration: none;
    }

    .go {
      position: absolute;
      top: 150%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 358px;
      height: 358px;
      border-radius: 50%;
      background: $black-primary;

      border: none;
      cursor: pointer;

      transition: all 0.4s ease;

      &:hover {
        transform: translate(-50%, -50%) scale(1.1);
      }
    }
  }
}
</style>
