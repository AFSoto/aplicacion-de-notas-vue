<script setup>
import CreateNote from '@/components/CreateNote.vue';
import NoteCart from '@/components/NoteCart.vue';
import TheHeader from '@/components/TheHeader.vue';
import { useNoteStore } from '@/stores/notes'

const noteStore = useNoteStore()
</script>

<template>
  <TheHeader/>
  <section class="min-h-screen bg-slate-100 py-12 px-6">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-4xl font-bold text-slate-800 mb-8 text-center">
        Mis Notas
      </h2>

      <div class="space-y-5">
        <NoteCart
          v-for="note in noteStore.notes"
          :key="note.id"
          :note="note"
        />
      </div>
    </div>
    <CreateNote/>
  </section>

</template>

<style>
#notes-page{
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title{
  margin-bottom: 50px;
  text-align: center;
}

.note-list{
  border: 10px;
  width: 70%;
  min-width: 450px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
</style>
