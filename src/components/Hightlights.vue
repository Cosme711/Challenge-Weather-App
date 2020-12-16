<template>
  <div class="text-white">
      <p class="mt-14 text-3xl font-bold">Today’s Hightlights </p>

      <div class="mt-8 flex text-center">
          <div class="mr-6 w-full bg-blue">
              <p class="mt-6 mb-2 text-lg">Wind status</p>
              <p class="text-3xl"><span class="font-bold text-7xl">7</span>mph</p>
              <div class="m-8 flex justify-center items-center">
                  <div class="w-8 h-8 bg-grey rounded-full flex items-center justify-center">
                        <span class="material-icons text-lg">navigation</span>
                  </div>
                  <p class="ml-4">WSW</p>
              </div>
          </div>
          <div class="ml-6 w-full bg-blue">
              <p class="mt-6 mb-4 text-lg">Humidity</p>
              <p class="text-3xl "><span class="font-bold text-7xl">84</span>%</p>
          </div>
      </div>

      <div class="mt-16 flex text-center">
          <div class="mr-6 w-full bg-blue">
                <p class="mt-6 mb-2 text-lg">Visibility</p>
                <p class="mb-10 text-3xl"><span class="font-bold text-7xl">6,4</span>miles</p>
          </div>

          <div class="ml-6 w-full bg-blue">
                <p class="mt-6 mb-2 text-lg">Air Pressure</p>
                <p class=" mb-10 text-3xl"><span class="font-bold text-7xl">998</span>mb</p>
          </div>
      </div>

  </div>
</template>

<script>
export default {
    name: "Hightlights"
}
</script>

<style>

</style>