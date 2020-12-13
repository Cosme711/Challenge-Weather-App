<template>
    <div>
    <div class="w-2/5 h-screen flex flex-col justify-between items-center bg-blue">

      <div class="pt-5 w-full flex justify-between items-center">
        <a class=" ml-4 p-4 bg-darkgrey text-white">Search for places</a>
        <a class="mr-4 p-2 bg-darkgrey flex rounded-full">
          <span class="material-icons text-white">gps_fixed</span>
        </a>
      </div>

      <div>
        <img src="@/assets/images/Shower.png" alt="weather">
      </div>

      <div>
        <p class="text-white text-8xl">{{ currentDay.currentTemp }}°C</p>
        <p class="mt-8 text-center text-darkgrey text-4xl">{{ currentDay.weatherState }}</p>
      </div>

      <div class="w-40 pb-8 text-darkgrey">
        <div class="w-full flex justify-between items-center">
          <a>Today</a>
          <a>•</a>
          <a>{{ currentDay.currentDate }}</a>
        </div>
        <div class="flex justify-center items-center pt-4">
          <span class="material-icons">location_on</span>
          <p class="ml-2">{{ currentDay.cityName }}</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

import { useState } from "@/helpers";

export default {
    name: 'NavBar',
    setup() {

        const { currentDay } = useState(["currentDay"]);

        return {
            currentDay
        }
    }
}
</script>

<style>

</style>