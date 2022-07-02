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
        class="ml-2 text-sm font-medium text-dark-500 capitalize font-poppins cursor-pointer"
        >Full Time</label
      >
    </div>
    <!-- Locations -->
    <div class="mt-5">
      <h6 class="uppercase text-poppins font-bold text-sm text-gray-100">Location</h6>
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
            :class="['uk', 'usa'].includes(location) ? 'uppercase' : 'capitalize'"
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
        search: null,
        location: newVal
      })
    },
    checkedFullTime(newVal) {
      this.$emit('filter', {
        fullTime: newVal,
        search: null,
        location: this.checkedLocations
      })
    }
  },
  data() {
    return {
      checkedLocations: this.filters.location,
      checkedFullTime: this.filters.fullTime
    }
  },
};
</script>
