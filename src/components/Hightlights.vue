<template>
  <div class="text-white">
    <p class="mt-14 text-3xl font-bold">Today’s Hightlights </p>

    <div class="mt-8 grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 gap-5 lg:gap-10 text-center">
          <div class=" bg-blue">
              <p class="mt-4 text-lg">Wind status</p>
              <p class="mt-3 text-3xl"><span class="text-7xl font-bold">{{ Math.round(current.weather.wind_speed) }}</span>mph</p>
              <div class="mt-6 mb-4 mx-8 flex justify-center items-center">
                  <div class="w-8 h-8 flex items-center justify-center bg-grey rounded-full">
                        <span class="material-icons text-lg" :style="compassDirection()">navigation</span>
                  </div>
                  <p class="ml-4">WSW</p>
              </div>
          </div>
          <div class="bg-blue">
              <p class="mt-4 text-lg">Humidity</p>
              <p class="mt-3 text-3xl "><span class="text-7xl font-bold">{{ Math.round(current.weather.humidity) }}</span>%</p>
          </div>

          <div class="bg-blue">
                <p class="mt-4 text-lg">Visibility</p>
                <p class="mt-3 text-3xl"><span class="text-7xl font-bold">{{ Math.round(current.weather.visibility) }}</span>miles</p>
          </div>

          <div class="bg-blue">
                <p class="mt-4 text-lg">Air Pressure</p>
                <p class="mt-3 text-3xl"><span class="text-7xl font-bold">{{ Math.round(current.weather.air_pressure) }}</span>mb</p>
          </div>
    </div>

      <footer class="mt-16 text-center text-footer">
          <p>Cosme Gressier | <a href="">DevChallenges</a> | @ DevChallenges.io</p>
      </footer>

  </div>
</template>

<script>
import { useState } from "@/helpers";

export default {
    name: "Hightlights",
    setup() {

        const { current } = useState(["current"]);

        function compassDirection() {
            const directionDeg = Math.round(current.value.weather.wind_direction);
            return { transform : `rotate(${directionDeg}deg)` };
        }

        return { current, compassDirection }
    }
}
</script>

<style>

</style>