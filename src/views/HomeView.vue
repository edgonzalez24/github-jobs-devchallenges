<template>
  <div class="container mx-auto">
    <!-- Banner Search -->
    <div class="banner w-full rounded-lg overflow-hidden flex justify-center items-center">
      <div class="w-2/3">
        <Search
          placeholder="Title, companies, expertise or benefits"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Search from '@/components/Search'
import axios from 'axios'
export default {
  name: 'HomeView',
  components: {
    Search
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      try {
        const { data } = await axios.get(`${process.env.VUE_APP_BASE_URL}?limit=5`)
        console.log(data)
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .banner {
    background-image: url('@/assets/images/backgroundImg.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 138px;
  }
</style>
