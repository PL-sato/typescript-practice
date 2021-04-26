<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        {{title}}
      </h1>
      <h2 class="subtitle">
        {{subtitle}}
      </h2>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Context} from '@nuxt/types';
// import {Context} from '@nuxt/vue-app';
// import AppArticle from '../components/AppArticle.vue';
interface Data {
  title: string;
}
interface AsyncData {
  article: {
    created_at: string;
    title: string;
    author: string;
    body: string;
  }
}

export default Vue.extend({
  components: {
    // AppArticle
  },
  data(): Data {
    return {
      title: 'Nuxt x Typescript'
    }
  },
  async asyncData({query, $axios}: Context): Promise<AsyncData> {
    const {data} = await $axios.get<ArticleData>(
      `/api/article/${query.page} || 0`
    )
    return {article: data.article}
  }
  // computed: {
  //   subtitle(): string {
  //     return `${this.title} is My astonishing Nuxt.js project`;
  //   }
  // }
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
