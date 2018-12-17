<template>
  <carousel
    :perPage="1" class="banner"
    autoplay loop
    paginationActiveColor="rgba(255,255,255,1)" paginationColor="rgba(255,255,255,.5)"
    :paginationPadding="5"
    >
    <slide v-for="(i, k) in banner" :key="k">
      <div class="banner_item" :style="`background-color: ${i.color};background-image:url(${i.url})`"></div>
    </slide>
  </carousel>
</template>
<script>
export default {
  data () {
    return {
      banner: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$api.get('banner', null, r => {
        this.banner = r.data.list
      })
    }
  }
}
</script>
