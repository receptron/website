<template>
  <ul>
    <li v-for="article in data.articles" :key="article.url" class="post-item">
      <p>
        <a :href="article.url" class="post-link">{{ article.title }}</a>
      </p>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { data } from "./userArticles.data.mts";
</script>
