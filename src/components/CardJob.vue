<template>
  <div class="bg-white shadow-card p-4 rounded flex flex-row space-x-4">
    <div class="w-auto">
      <div class="w-brand h-brand bg-white-smoke-100 flex items-center justify-center">
        <p class="text-gray-50 font-medium text-xs">not found</p>
      </div>
    </div>
    <div class="w-full flex">
      <div class="w-full">
        <p class="text-dark-500 font-bold text-xs">Kasisto</p>
        <p class="text-dark-500 font-normal text-lg"> Frontend Software</p>
        <span class="border border-dark-500 rounded text-xs px-2 py-1 text-dark-500 font-bold border-solid">
          Full time
        </span>
      </div>
      <div class="w-auto flex flex-row space-x-4">
        <span class="whitespace-nowrap inline-flex text-xs items-center text-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-100 fill-current mr-1"><path d="M11 19.95V18Q10.175 18 9.588 17.413Q9 16.825 9 16V15L4.2 10.2Q4.125 10.65 4.062 11.1Q4 11.55 4 12Q4 15.025 5.988 17.3Q7.975 19.575 11 19.95ZM17.9 17.4Q18.925 16.275 19.462 14.887Q20 13.5 20 12Q20 9.55 18.638 7.525Q17.275 5.5 15 4.6V5Q15 5.825 14.413 6.412Q13.825 7 13 7H11V9Q11 9.425 10.713 9.712Q10.425 10 10 10H8V12H14Q14.425 12 14.713 12.287Q15 12.575 15 13V16H16Q16.65 16 17.175 16.387Q17.7 16.775 17.9 17.4ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22Z"/></svg>
          New York
        </span>
        <span class="whitespace-nowrap inline-flex text-xs items-center text-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-100 fill-current mr-1" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
          5 days ago
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardJobComponent',
  props: {
    job: {
      type: Object,
      default: () => {}
    }
  }
}
</script>