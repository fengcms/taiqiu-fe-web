<template>
  <div class="home">
    <myHeader></myHeader>
  </div>
</template>

<script>
import myHeader from '@/coms/myHeader.vue'
export default {
  components: { myHeader },
  data () {
    return {
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
