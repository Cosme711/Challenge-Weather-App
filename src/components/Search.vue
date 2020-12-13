<template>  
    <div class="absolute top-0 bg-blue w-2/5 h-screen animate-openModal">

        <div class="mt-4 pr-7 w-full flex items-center justify-end cursor-pointer" @click="closeModal">
            <span class="material-icons text-4xl text-white">close</span>
        </div>

    </div>
</template>

<script>
import { useStore } from "vuex";

export default {
    name: 'Search',
    setup() {

        const store = useStore();

        function closeModal() {
            store.commit("SEARCH_MODAL", false);
        }

        return { closeModal }

    }
}
</script>

<style>

</style>