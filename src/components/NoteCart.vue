<script setup>
defineProps({
  note:Object
})
</script>


<template>
  <article
    class="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex justify-between items-center"
  >
    <input
      type="text"
      v-model="note.title"
      class="w-full text-lg outline-none border-none font-medium text-slate-700"
    />

    <input
      type="checkbox"
      v-model="note.completed"
      class="w-5 h-5 accent-sky-500"
    />
  </article>
</template>


<style></style>
