<template>
  <div class="home">
    <myHeader></myHeader>
    <myBanner></myBanner>
    <subTitle title="程序员的一杆清台" tip="看高手清台学不会？那就学普通人是怎么台球一杆清台的！"></subTitle>
    <div class="home_tab">
      <template v-for="(i, k) in catalog">
        <span v-if="i.type === 'video'" :key="k" :class="`${tabActive === k ? 'active' : ''}`" @click="changeTab(k)">{{i.name}}</span>
      </template>
    </div>
    <div class="home_video">
      <ul v-for="(i, k) in homeVideo" :key="k" v-show="k === tabActive">
        <div v-if="i.children.length === 0" class="home_video_nothing"></div>
        <template v-else>
          <li v-for="(ii, kk) in i.children" :key="k + '' + kk">
            <router-link to="#">
              <div class="home_video_cover">
                <i :style="`background-image: url(${ii.cover});`">
                  <img :src="ii.cover" :alt="ii.title" />
                </i>
              </div>
              <span>{{ii.title}}</span>
            </router-link>
          </li>
        </template>
      </ul>
    </div>
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
      catalog: [],
      tabActive: 0,
      homeVideo: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$api.get('catalog', null, r => {
        this.catalog = r.data.list
      })
      this.$api.get('home-video', null, r => {
        this.homeVideo = r.data.list
        console.log(r)
      })
    },
    changeTab (index) {
      this.tabActive = index
    }
  }
}
</script>
