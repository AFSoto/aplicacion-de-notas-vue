<script setup>
import { useNoteStore } from '@/stores/notes';
import { ref } from 'vue';

const noteStore = useNoteStore();

const handlesubmit = () =>{

  noteStore.addNote(title.value);
  title.value= "";
}



const title = ref("")
</script>

<template>
  <form @submit.prevent="handlesubmit">
    <input type="text"
    placeholder="nueva nota"
    v-model="title">

    <button >+</button>
  </form>
</template>


<style></style>
