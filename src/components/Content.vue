<template>
  <div class="w-2/3 bg-darkblue">

    <div class="w-10/12 m-auto pt-16 pb-10">
        <div class="mb-7 w-full flex justify-end text-white text-lg font-bold">
          <a class="bg-white text-blue py-3 px-4 rounded-full cursor-pointer" @click="store.commit('IS_CELCIUS', true)">°C</a>
          <a class="ml-4 bg-blue text-white py-3 px-4 rounded-full cursor-pointer" @click="store.commit('IS_CELCIUS', false)">°F</a>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-5 gap-6">
            <CardDay v-for="day in forecast" :key="day.id" :day="day" class="m-auto h-full w-full" />
        </div>
        <Hightlights />
    </div>

  </div>
</template>

<script>
import CardDay from "@/components/CardDay";
import Hightlights from "@/components/Hightlights";
import { useState } from "@/helpers";
import { useStore } from "vuex";

export default {
    name: 'Content',
    components: { CardDay, Hightlights },
    setup() {

      const store = useStore();

      const { forecast } = useState(["forecast"]);

      return { forecast, store }
      
    }

}
</script>

<style>

</style>