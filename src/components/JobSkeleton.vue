<template>
  <div
    class="mx-auto overflow-hidden p-4"
  >
    <div class="animate-pulse sm:flex sm:space-x-4 sm:flex-row">
      <div class="sm:w-1/3 w-full">
        <div class="space-y-2">
          <div class="space-y-2">
            <div class="h-3 bg-gray-50 rounded"></div>
            <div class="h-3 bg-gray-50 rounded w-5/6"></div>
          </div>
          <div class="h-3 bg-gray-50 rounded w-3/4"></div>
          <div class="h-3 bg-gray-50 rounded w-5/6"></div>
          <div class="h-3 bg-gray-50 rounded"></div>
        </div>
      </div>
      <div class="sm:w-2/3 w-full relative sm:mt-0 mt-5">
        <div v-for="(_, index) in new Array(5)" :key="index" class="space-y-2 mt-2">
          <div class="space-y-2">
            <div class="h-3 bg-gray-50 rounded"></div>
            <div class="h-3 bg-gray-50 rounded w-5/6"></div>
          </div>
          <div class="h-3 bg-gray-50 rounded w-full"></div>
          <div class="space-y-2">
            <div class="h-3 bg-gray-50 rounded"></div>
            <div class="h-3 bg-gray-50 rounded w-5/6"></div>
          </div>
          <div class="h-3 bg-gray-50 rounded w-full"></div>
          <div class="h-3 bg-gray-50 rounded w-5/6"></div>
          <div class="h-3 bg-gray-50 rounded w-5/6"></div>
          <div class="h-3 bg-gray-50 rounded w-full"></div>
          <div class="h-3 bg-gray-50 rounded w-full"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JobSkeleton'
};
</script>