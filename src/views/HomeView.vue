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
    <div class="flex flex-row space-x-4 my-5">
      <!-- Filters -->
      <div class="w-1/3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolor ratione, recusandae distinctio repudiandae similique quis quos, ducimus animi totam quisquam molestiae alias autem corrupti et. Tenetur accusamus fugiat odio.
      </div>
      <!-- Content List -->
      <div class="w-2/3">
        <div v-for="item in new Array(2)" :key="item">
          <CardJob class="mb-4" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from '@/components/Search'
import CardJob from '@/components/CardJob'
import axios from 'axios'
export default {
  name: 'HomeView',
  components: {
    Search,
    CardJob
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
