<template>
    <div class="h-screen flex justify-center items-center flex-col text-red pb-48">
        <h1 class="text-3xl sm:text-5xl mx-8 font-bold text-center flex flex-col sm:flex-row"><span class="mb-3 sm:mt-0 sm:pr-4 text-5xl">Oops !</span> Error Occured</h1>
        <p class=" lg:w-1/2 sm:w-3/4 w-11/12  mt-8 pt-4 border-t border-opacity-75 border-grey text-white font-bold text-2xl tracking-wide">Possible reason :</p>
        <ul class="lg:w-1/2 sm:w-3/4 w-11/12 mt-6 list-disc list-inside text-white">
            <li>Your internet connection.</li>
            <li class="py-2"><a href="">MetaWeather's</a> API could be down.</li>
            <li>Your browser is not updated</li>
        </ul>
        <div class="mt-6 lg:w-1/2 sm:w-3/4 w-11/12 flex">
            <a class="bg-blue flex p-2 rounded cursor-pointer" @click="reload"><span class="material-icons">refresh</span></a>
        </div>

        <footer class="mt-16 flex flex-col sm:flex-row justify-center text-center text-footer">
          <div><a href="https://github.com/Cosme711">Cosme Gressier</a></div>
          <div class="mx-2"><p>| <a href="https://devchallenges.io/">DevChallenges</a> |</p></div>
          <div><a href="https://twitter.com/GressierCosme1">@GressierCosme1</a></div>
        </footer>
    </div>
</template>

<script>
import { useStore } from "vuex";

export default {
    name: "Error",
    setup() {

        const store = useStore();

        function reload() {
            store.commit("CHANGE_ERROR", false);
            window.location.reload();
        }

        return { reload }

    }
}
</script>