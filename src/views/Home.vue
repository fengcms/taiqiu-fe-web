<template>
  <div class="home">
    <myHeader></myHeader>
    <myBanner></myBanner>
    <subTitle title="程序员的一杆清台" tip="看高手清台学不会？那就学普通人是怎么台球一杆清台的！"></subTitle>
  </div>
</template>

<script>
import myHeader from '@/coms/myHeader.vue'
import myBanner from '@/coms/myBanner.vue'
import subTitle from '@/coms/common/subTitle.vue'
export default {
  components: { myHeader, myBanner, subTitle },
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
