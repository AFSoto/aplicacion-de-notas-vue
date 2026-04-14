<script setup>
import { useNoteStore } from '@/stores/notes';


const noteStore = useNoteStore()
</script>

<template>
  <section id="note-list">

    <h1>NOTES</h1>

    <ul v-for="note in noteStore.notes" :key="note.id">
      <li>{{ note.title }}</li>
    </ul>
  </section>

</template>


<style></style>
