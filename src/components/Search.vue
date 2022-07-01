<template>
  <div class="w-full">
    <div class="relative shadow-search bg-white rounded">
      <div class="w-full relative">
        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-100 fill-current"><path d="M3.417 17.5Q2.688 17.5 2.177 16.99Q1.667 16.479 1.667 15.75V6.792Q1.667 6.062 2.177 5.552Q2.688 5.042 3.417 5.042H6.542V3.417Q6.542 2.688 7.052 2.177Q7.562 1.667 8.292 1.667H11.708Q12.438 1.667 12.948 2.177Q13.458 2.688 13.458 3.417V5.042H16.583Q17.312 5.042 17.823 5.552Q18.333 6.062 18.333 6.792V15.75Q18.333 16.479 17.823 16.99Q17.312 17.5 16.583 17.5ZM8.292 5.042H11.708V3.417Q11.708 3.417 11.708 3.417Q11.708 3.417 11.708 3.417H8.292Q8.292 3.417 8.292 3.417Q8.292 3.417 8.292 3.417ZM3.417 15.75H16.583Q16.583 15.75 16.583 15.75Q16.583 15.75 16.583 15.75V6.792Q16.583 6.792 16.583 6.792Q16.583 6.792 16.583 6.792H3.417Q3.417 6.792 3.417 6.792Q3.417 6.792 3.417 6.792V15.75Q3.417 15.75 3.417 15.75Q3.417 15.75 3.417 15.75ZM3.417 15.75Q3.417 15.75 3.417 15.75Q3.417 15.75 3.417 15.75V6.792Q3.417 6.792 3.417 6.792Q3.417 6.792 3.417 6.792Q3.417 6.792 3.417 6.792Q3.417 6.792 3.417 6.792V15.75Q3.417 15.75 3.417 15.75Q3.417 15.75 3.417 15.75Z"/></svg>
        </span>

        <input
          type="text"
          class="w-full h-14 py-3 pl-10 pr-4 text-gray-100 bg-white border rounded focus:border-blue-500 hover:border-blue-500 focus:outline-none focus:ring hover:ring text-xs font-normal transition duration-500 ease-in-out"
          :placeholder="placeholder"
        >

        <span class="absolute inset-y-0 right-0 pr-1 py-1 w-36">
          <button class="h-full w-full bg-blue-100 text-white font-medium	rounded transition duration-500 ease-in-out hover:opacity-80">
            Search
          </button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchComponent',
  props: {
    icon: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: ''
    },
    hasButton: {
      type: Boolean,
      default: false,
    }
  }
}
</script>
