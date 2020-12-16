<template>
  <div class="w-2/3 bg-darkblue">

    <div class="pt-16 w-10/12 h-full m-auto">
        <div class="flex h-auto justify-between">
            <CardDay />
            <CardDay />
            <CardDay />
            <CardDay />
            <CardDay />
        </div>

        <Hightlights />
    </div>



  </div>
</template>

<script>
import CardDay from "@/components/CardDay";
import Hightlights from "@/components/Hightlights";

export default {
    name: 'Content',
    components: { CardDay, Hightlights }

}
</script>

<style>

</style>