<template>
  <div class="w-full min-h-screen">
    <div class="max-w-7xl xl:px-0 md:px-10 px-3 mx-auto mb-5">
      <div v-if="isLoading">
        <JobSkeleton />
      </div>
      <div v-else>
        <div v-if="job" class="flex sm:flex-row flex-col sm:space-x-4">
          <div class="sm:w-1/3 w-full">
            <router-link to="/" class="inline-flex text-blue-100 items-center font-poppins transition duration-300 ease-in-out hover:opacity-70 mb-5 sm:text-base text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-5 fill-current" viewBox="0 0 512 512"><path d="M512 256C512 273.7 497.7 288 480 288H160.1l0 72c0 9.547-5.66 18.19-14.42 22c-8.754 3.812-18.95 2.077-25.94-4.407l-112.1-104c-10.24-9.5-10.24-25.69 0-35.19l112.1-104c6.992-6.484 17.18-8.218 25.94-4.406C154.4 133.8 160.1 142.5 160.1 151.1L160.1 224H480C497.7 224 512 238.3 512 256z"/></svg>
              Back to search
            </router-link>
            <h6 class="uppercase text-poppins font-bold text-sm text-gray-100">How to apply</h6>
            <p class="font-poppins text-dark-500 text-sm font-medium sm:w-56 w-full">
              Please email a copy of your resume and online portfolio to
              <a :href="`mailto:wes@${email}.com`" class="text-blue-100 transition duration-300 ease-in-out hover:opacity-70">{{`wes@${email}.com`}} </a>
              & CC
              <a :href="`mailto:eric@${email}.com`" class="text-blue-100 transition duration-300 ease-in-out hover:opacity-70">{{`eric@${email}.com`}} </a>
            </p>
          </div>
          <div class="sm:w-2/3 w-full relative sm:mt-0 mt-5">
            <div class="sm:inline-flex items-center">
              <h1 class="font-bold text-2xl text-dark-500 mr-5">{{ job.title }} </h1>
              <span class="border border-dark-500 rounded text-xs px-2 py-1 text-dark-500 font-bold border-solid capitalize">
                {{ getTypeJob(job) }}
              </span>
            </div>
            <div class="flex text-xs items-center text-gray-100 font-medium my-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-100 fill-current mr-1" height="20" width="20" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
              {{ relativeTime(job) }}
            </div>
            <div class="w-auto flex items-center mb-2">
              <img v-if="job.company_logo" :src="job.company_logo" :alt="job.company_name" class="w-11 h-11 object-contain rounded">
              <div v-else class="w-11 h-11 bg-white-smoke-100 flex items-center justify-center rounded">
                <p class="text-gray-50 font-medium text-xs text-center">not found</p>
              </div>
              <div class="ml-2">
                <p class="text-dark-500 font-bold text-lg">{{ job.company_name }}</p>
                <span
                  class="whitespace-nowrap inline-flex text-xs items-center text-gray-100 font-medium"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-100 fill-current mr-1" height="20" width="20"><path d="M9.188 16.542V14.938Q8.5 14.938 8.021 14.458Q7.542 13.979 7.542 13.292V12.458L3.583 8.5Q3.5 8.875 3.458 9.25Q3.417 9.625 3.417 10Q3.417 12.5 5.062 14.365Q6.708 16.229 9.188 16.542ZM14.854 14.438Q15.708 13.521 16.146 12.385Q16.583 11.25 16.583 10Q16.583 7.979 15.469 6.313Q14.354 4.646 12.479 3.917V4.229Q12.479 4.917 12 5.396Q11.521 5.875 10.833 5.875H9.188V7.521Q9.188 7.875 8.948 8.115Q8.708 8.354 8.354 8.354H6.708V10H11.646Q12 10 12.24 10.229Q12.479 10.458 12.479 10.812V13.292H13.292Q13.833 13.292 14.26 13.604Q14.688 13.917 14.854 14.438ZM10 18.333Q8.271 18.333 6.75 17.677Q5.229 17.021 4.104 15.896Q2.979 14.771 2.323 13.25Q1.667 11.729 1.667 10Q1.667 8.271 2.323 6.75Q2.979 5.229 4.104 4.104Q5.229 2.979 6.75 2.323Q8.271 1.667 10 1.667Q11.729 1.667 13.25 2.323Q14.771 2.979 15.896 4.104Q17.021 5.229 17.677 6.75Q18.333 8.271 18.333 10Q18.333 11.729 17.677 13.25Q17.021 14.771 15.896 15.896Q14.771 17.021 13.25 17.677Q11.729 18.333 10 18.333Z"/></svg>
                    {{ job.candidate_required_location }}
                </span>
              </div>
            </div>
            <div class="text-dark-500 description" v-html="job.description"></div>
          </div>
        </div>
        <div v-else class="h-screen flex justify-center items-center">
          <h2 class="font-poppins md:text-5xl text-3xl font-bold text-center text-dark-500"> Job Not found </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import _ from 'lodash'
import moment from 'moment-timezone'
import JobSkeleton from '@/components/JobSkeleton'
export default {
  name: 'JobView',
  components: { JobSkeleton },
  data() {
    return {
      job: {},
      isLoading: false,
      email: ''
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    getTypeJob(job) {
      return job.job_type ? job.job_type.split('_').join(' ') : 'Unspecified'
    },
    relativeTime(job) {
      const localTime = moment.utc(job.publication_date).toDate()
      return moment(localTime).fromNow()
    },
    async fetchData() {
      this.isLoading = true
      try {
        const { data } = await axios.get(`${process.env.VUE_APP_BASE_URL}`)
        this.job= _.find(data.jobs, { 'id': Number(this.$route.params.id)})
        this.email = this.job.company_name ? this.job.company_name.replace(/\s+/g, '').toLowerCase().replace(/([.,?:])/g, '') : 'gmail'
      } catch (error) {
        this.$toast.error('Oopps! Something went wrong.')
      } finally {
        setTimeout(() => {
          this.isLoading = false
        }, 1000);
      }
    }
  }
}
</script>

<style>

</style>