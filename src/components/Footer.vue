<template>
  <div class="w-full pt-2 pb-5 flex justify-center">
    <div class="font-montserrat text-gray-100 w-auto m-auto text-sm">
      created by&nbsp;
      <a class="underline font-bold focus:outline-none transition duration-500 ease-in-out hover:text-gray-500" :href="url" target="_blanck">edgonzalez24</a>
      &nbsp;- devChallenges.io
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent',
  data() {
    return {
      url: process.env.VUE_APP_USER_GITHUB
    }
  }
}
</script>