<template>
  <router-link :to="`/job/${job.id}`" class="bg-white shadow-card p-4 rounded flex flex-row space-x-4">
    <div class="w-auto">
      <img v-if="job.company_logo" :src="job.company_logo" :alt="job.company_name" class="w-brand h-brand object-contain rounded">
      <div v-else class="w-brand h-brand bg-white-smoke-100 flex items-center justify-center rounded">
        <p class="text-gray-50 font-medium text-xs">not found</p>
      </div>
    </div>
    <div class="w-full flex flex-wrap">
      <div class="w-full">
        <p class="text-dark-500 font-bold text-xs">{{ job.company_name }}</p>
        <p class="text-dark-500 font-normal sm:text-lg text-base sm:mb-0 mb-2"> {{ job.title }}</p>
        <span class="border border-dark-500 rounded text-xs px-2 py-1 text-dark-500 font-bold border-solid capitalize">
          {{ typeJob }}
        </span>
      </div>
      <div class="w-auto flex flex-row space-x-4 items-end mt-5">
        <span
          class="whitespace-nowrap inline-flex text-xs items-center text-gray-100 font-medium"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-100 fill-current mr-1" height="20" width="20"><path d="M9.188 16.542V14.938Q8.5 14.938 8.021 14.458Q7.542 13.979 7.542 13.292V12.458L3.583 8.5Q3.5 8.875 3.458 9.25Q3.417 9.625 3.417 10Q3.417 12.5 5.062 14.365Q6.708 16.229 9.188 16.542ZM14.854 14.438Q15.708 13.521 16.146 12.385Q16.583 11.25 16.583 10Q16.583 7.979 15.469 6.313Q14.354 4.646 12.479 3.917V4.229Q12.479 4.917 12 5.396Q11.521 5.875 10.833 5.875H9.188V7.521Q9.188 7.875 8.948 8.115Q8.708 8.354 8.354 8.354H6.708V10H11.646Q12 10 12.24 10.229Q12.479 10.458 12.479 10.812V13.292H13.292Q13.833 13.292 14.26 13.604Q14.688 13.917 14.854 14.438ZM10 18.333Q8.271 18.333 6.75 17.677Q5.229 17.021 4.104 15.896Q2.979 14.771 2.323 13.25Q1.667 11.729 1.667 10Q1.667 8.271 2.323 6.75Q2.979 5.229 4.104 4.104Q5.229 2.979 6.75 2.323Q8.271 1.667 10 1.667Q11.729 1.667 13.25 2.323Q14.771 2.979 15.896 4.104Q17.021 5.229 17.677 6.75Q18.333 8.271 18.333 10Q18.333 11.729 17.677 13.25Q17.021 14.771 15.896 15.896Q14.771 17.021 13.25 17.677Q11.729 18.333 10 18.333Z"/></svg>
            {{ job.candidate_required_location }}
        </span>
        <span class="whitespace-nowrap inline-flex text-xs items-center text-gray-100 font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-100 fill-current mr-1" height="20" width="20" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
          {{ relativeTime }}
        </span>
      </div>
    </div>
  </router-link>
</template>

<script>
import moment from 'moment-timezone'
export default {
  name: 'CardJobComponent',
  props: {
    job: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    typeJob() {
      return this.job.job_type ? this.job.job_type.split('_').join(' ') : 'Unspecified'
    },
    relativeTime() {
      const localTime = moment.utc(this.job.publication_date).toDate()
      return moment(localTime).fromNow()
    }
  }
}
</script>