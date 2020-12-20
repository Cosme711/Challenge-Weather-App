<template>
  <div class="w-2/3 bg-darkblue">

    <div class="w-10/12 m-auto pt-16 pb-10">
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

export default {
    name: 'Content',
    components: { CardDay, Hightlights },
    setup() {

      const { forecast } = useState(["forecast"]);

      return { forecast }
      
    }

}
</script>

<style>

</style>