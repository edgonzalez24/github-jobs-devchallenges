<template>
  <div class="max-w-7xl xl:px-0 md:px-10 px-5 mx-auto min-h-screen">
    <!-- Banner Search -->
    <div class="banner w-full rounded-lg overflow-hidden flex justify-center items-center">
      <div class="md:w-search w-2/3">
        <Search
          placeholder="Title, companies, expertise or benefits"
          @search="searchJob"
          @fetchData="fetchData"
        />
      </div>
    </div>
    <div class="flex md:flex-row flex-col md:space-x-4 my-5">
      <!-- Filters -->
      <div class="md:w-1/3 w-full">
        <Filters
          :locations="locations"
          :filters="filters"
          @filter="filterJobs"
        />
      </div>
      <!-- Content List -->
      <div class="md:w-2/3 w-full">
        <div v-show="isLoading">
          <div v-for="(_, index) in new Array(5)" :key="index" class="mb-4" >
            <CardSkeleton />
          </div>
        </div>
        <div v-show="!isLoading">
          <template v-if="jobs.length > 0">
            <div v-for="(job, index) in jobs" :key="job.id">
              <div :ref="`job-${index}`" class="mb-4">
                <CardJob :job="job" />
              </div>
            </div>
          </template>
          <template v-else>
            <h5 class="text-center text-lg font-medium text-dark-500 italic">No results were found similar to: {{ keyword }}</h5>
          </template>
        </div>
        <div v-if="jobs.length > 0" class="flex justify-end">
          <div class="w-auto">
            <paginate
              ref="paginate"
              :pageCount="totalPages"
              :page-range="3"
              :containerClass="'pagination'"
              :clickHandler="clickCallback"
              :prev-text="iconPrev"
              :next-text="iconNext"
            >
            </paginate>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from '@/components/Search'
import CardJob from '@/components/CardJob'
import axios from 'axios'
import { gsap } from 'gsap'
import _ from 'lodash'
import CardSkeleton from '@/components/CardSkeleton'
import Filters from '@/components/Filters'


export default {
  name: 'HomeView',
  components: {
    Search,
    CardJob,
    CardSkeleton,
    Filters,
  },
  data: () => ({
    isLoading: false,
    jobs: [],
    jobsArrInitial: [],
    jobList: [],
    locations: ['Europe', 'UK','USA', 'Worldwide'],
    keyword: '',
    totalPages: 0,
    iconPrev: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"/></svg>',
    iconNext: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"/></svg>',
    limitItems: 5,
    filters: {
      fullTime: false,
      keyword:  null,
      location: ['USA']
    },
  }),
  mounted() {
    this.fetchData()
  },
  methods: {
    clickCallback (pageNum) {
      this.isLoading = true
      this.jobs = this.jobList[pageNum - 1]
      setTimeout(() => {
      this.isLoading = false
      this.animation()
      }, 1500);
    },
    paginate(arr, size) {
      return arr.reduce((acc, val, i) => {
      const idx = Math.floor(i / size)
      let page = acc[idx] || (acc[idx] = [])
      page.push(val)
      return acc
    }, [])

    },
    animation() {
      if(this.jobs && this.jobs.length > 0){
        const tabsTl = gsap.timeline()
        this.jobs.forEach((_, index) => {
          tabsTl.fromTo(
            this.$refs[`job-${index}`],
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.5,
              ease: 'sine.out',
            },
            0.20 * index
          )
        })
      }
    },
    async fetchData() {
      this.isLoading = true
      try {
        const { data } = await axios.get(`${process.env.VUE_APP_BASE_URL}`)
        this.jobsArrInitial = data.jobs
        this.filterJobs(this.filters)
      } catch (error) {
        console.error(error)
      } finally {
        setTimeout(() => {
          this.isLoading = false
          this.animation()
        }, 1500);
      }
    },
    async searchJob(keyword) {
      this.isLoading = true;
      try {
        const { data } = await axios.get(`${process.env.VUE_APP_BASE_URL}?search=${keyword}`)
        this.jobsArrInitial = data.jobs
        this.keyword = keyword
        this.filterJobs(this.filters)
      } catch (error) {
        console.error(error)
      } finally {
        setTimeout(() => {
          this.isLoading = false
          this.animation()
        }, 1500);
      }
    },
    filterJobs(filters) {
      this.isLoading = true
      const filteredJobs = _.filter(this.jobsArrInitial, (job) => {
        // Rule #1
        if(filters.location.length === 0 && (!filters.keyword || (filters.keyword && filters.keyword.length === 0))) {
          return filters.fullTime ? job.job_type.includes('full_time') : job.job_type !== 'full_time'
        }
        // Rule #2
        else if((filters.location.length === 0  && filters.keyword) || (filters.location.length === 0 && !filters.keyword && !this.keyword)) {
          return filters.keyword ? job.candidate_required_location.includes(filters.keyword) : null
        }
        // Rule #3
        else {
          console.log('heree')
          return (filters.fullTime ? job.job_type.includes('full_time') : job.job_type !== 'full_time')
            && (filters.location.length > 0 ? filters.location.find(item => job.candidate_required_location.includes(item)) : job)
            && (filters.keyword ? job.candidate_required_location.includes(filters.keyword) : job)
        }
      });
      this.keyword = filters.keyword
      this.jobList = this.paginate(filteredJobs, this.limitItems)
      this.totalPages = Math.ceil(filteredJobs.length / this.limitItems)
      this.jobs = this.jobList.length ? this.jobList[0] : []
      if(this.$refs.paginate !== undefined) {
        this.$refs.paginate.innerValue = 1
      }
      setTimeout(() => {
        this.isLoading = false
        this.animation()
      }, 1500);
    }
  }
}
</script>

