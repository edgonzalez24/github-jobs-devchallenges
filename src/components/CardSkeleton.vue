<template>
  <div
    class="border border-gray-100 shadow-card rounded mx-auto overflow-hidden p-4"
  >
    <div class="animate-pulse flex space-x-4 flex-row">
      <div class="rounded bg-gray-50 h-brand w-brand pl-5"></div>
      <div class="flex-1 space-y-4">
        <div class="h-3 bg-gray-50 rounded w-3/4"></div>
        <div class="space-y-2">
          <div class="h-3 bg-gray-50 rounded"></div>
          <div class="h-3 bg-gray-50 rounded w-5/6"></div>
        </div>
        <div class="h-3 bg-gray-50 rounded w-3/4"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardSkeleton'
};
</script>

<style>
</style>