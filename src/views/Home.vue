<template>
  <div class="home">
    <myHeader></myHeader>
    <myBanner></myBanner>
  </div>
</template>

<script>
import myHeader from '@/coms/myHeader.vue'
import myBanner from '@/coms/myBanner.vue'
export default {
  components: { myHeader, myBanner },
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
