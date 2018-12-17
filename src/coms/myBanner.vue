<template>
  <carousel :perPage="1" class="banner" autoplay loop>
    <slide v-for="(i, k) in banner" :key="k">
      <div class="banner_item" :style="`background-color: ${i.bgColor};background-image:url(${i.bgImg})`"></div>
    </slide>
  </carousel>
</template>
<script>
export default {
  data () {
    return {
      banner: [
        { bgColor: '#f60', bgImg: null },
        { bgColor: '#f90', bgImg: null },
        { bgColor: '#ff0', bgImg: null },
        { bgColor: '#fc0', bgImg: null },
        { bgColor: '#fa0', bgImg: null }
      ]
    }
  },
  created () {
    // this.getData()
  },
  methods: {
    getData () {
      this.$api.get('catalog', null, r => {
        console.log(r)
      })
      console.log('get data')
    }
  }
}
</script>
