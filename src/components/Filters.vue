<template>
  <div>
    <div class="flex items-center">
      <input
        id="checkbox"
        v-model="checkedFullTime"
        type="checkbox"
        class="form-check-input types appearance-none w-4 h-4 text-blue-100 bg-white rounded border checked:bg-blue-100 border-gray-50 checked:border-blue-100 float-left align-top bg-no-repeat bg-center bg-contain transition duration-300 ease-in-out"
      />
      <label
        for="checkbox"
        class="ml-2 text-sm font-medium text-dark-500 font-poppins cursor-pointer"
        >Full time</label
      >
    </div>
    <!-- Locations -->
    <div class="mt-5">
    <!-- Title -->
      <h6 class="uppercase text-poppins font-bold text-sm text-gray-100">Location</h6>
      <!-- Search -->
      <div class="relative shadow-search bg-white rounded my-5">
        <div class="w-full relative">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-100 fill-current mr-1" height="20" width="20"><path d="M9.188 16.542V14.938Q8.5 14.938 8.021 14.458Q7.542 13.979 7.542 13.292V12.458L3.583 8.5Q3.5 8.875 3.458 9.25Q3.417 9.625 3.417 10Q3.417 12.5 5.062 14.365Q6.708 16.229 9.188 16.542ZM14.854 14.438Q15.708 13.521 16.146 12.385Q16.583 11.25 16.583 10Q16.583 7.979 15.469 6.313Q14.354 4.646 12.479 3.917V4.229Q12.479 4.917 12 5.396Q11.521 5.875 10.833 5.875H9.188V7.521Q9.188 7.875 8.948 8.115Q8.708 8.354 8.354 8.354H6.708V10H11.646Q12 10 12.24 10.229Q12.479 10.458 12.479 10.812V13.292H13.292Q13.833 13.292 14.26 13.604Q14.688 13.917 14.854 14.438ZM10 18.333Q8.271 18.333 6.75 17.677Q5.229 17.021 4.104 15.896Q2.979 14.771 2.323 13.25Q1.667 11.729 1.667 10Q1.667 8.271 2.323 6.75Q2.979 5.229 4.104 4.104Q5.229 2.979 6.75 2.323Q8.271 1.667 10 1.667Q11.729 1.667 13.25 2.323Q14.771 2.979 15.896 4.104Q17.021 5.229 17.677 6.75Q18.333 8.271 18.333 10Q18.333 11.729 17.677 13.25Q17.021 14.771 15.896 15.896Q14.771 17.021 13.25 17.677Q11.729 18.333 10 18.333Z"/></svg>
          </span>

          <input
            v-model="search"
            @input="searchInput"
            type="text"
            class="w-full h-12 py-2 pl-10 pr-4 text-gray-100 bg-white border rounded focus:border-blue-500 hover:border-blue-500 focus:outline-none focus:ring hover:ring text-xs font-normal transition duration-500 ease-in-out placeholder:text-gray-100 placeholder:font-normal"
            placeholder="City, state, zip code or country"
          >
        </div>
      </div>
      <!-- Checkboxes -->
      <div v-for="location in locations" :key="location" class="my-2">
        <div class="flex items-center">
          <input
            :id="`checkbox_${location}`"
            v-model="checkedLocations"
            type="checkbox"
            :value="location"
            class="form-check-input locations appearance-none w-4 h-4 bg-white rounded-full border border-gray-50 checked:border-blue-100 float-left align-top transition duration-300 ease-in-out bg-no-repeat bg-center bg-contain"
          />
          <label
            :for="`checkbox_${location}`"
            class="ml-2 text-sm font-medium text-dark-500 font-poppins cursor-pointer"
            >{{ location }}</label
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterComponent",
  props: {
    locations: {
      type: Array,
      default: () => [],
    },
    filters: {
      type: Object,
      default: () => {},
    },
  },
  watch: {
    checkedLocations(newVal) {
      this.$emit('filter', {
        fullTime: this.checkedFullTime,
        keyword: this.search,
        location: newVal
      })
    },
    checkedFullTime(newVal) {
      this.$emit('filter', {
        fullTime: newVal,
        keyword: this.search,
        location: this.checkedLocations
      })
    },
  },
  data() {
    return {
      checkedLocations: this.filters.location,
      checkedFullTime: this.filters.fullTime,
      search: this.filters.search,
    }
  },
  methods: {
    searchInput() {
      this.$emit('filter', {
          fullTime: this.checkedFullTime,
          keyword: this.search,
          location: this.checkedLocations
        })
    }
  }
};
</script>
