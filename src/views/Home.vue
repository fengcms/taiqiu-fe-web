<template>
  <div class="home">
    this is home page
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      console.log(this.$api)
      console.log('get data')
    }
  }
}
</script>
