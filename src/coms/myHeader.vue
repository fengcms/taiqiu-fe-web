<template>
  <header class="header web_">
    <div class="web">
      <h1 id="logo" class="logo">
        <img src="@/assets/logo.svg" alt="">
        <a href="/">程序员的每日清台</a>
      </h1>
      <nav class="nav">
        <ul>
          <li v-for="(i,k) in nav" :key="k">
            <router-link :to="`/catalog/${i.id}`">{{i.name}}</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  data () {
    return {
      nav: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$api.get('catalog', null, r => {
        this.nav = r.data.list
      })
    }
  }
}
</script>
