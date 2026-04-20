<script setup>
import { useNoteStore } from '@/stores/notes';
import { ref } from 'vue';

const noteStore = useNoteStore();

const handlesubmit = () => {
  noteStore.addNote(title.value);
  title.value = "";
}

const title = ref("")
</script>

<template>
  <div
    class="pointer-events-none fixed inset-x-0 bottom-0 z-30 flex justify-center px-4 pb-6"
  >
    <!-- Fade gradient detrás del form para que no compita con el contenido -->
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-slate-50 via-slate-50/90 to-transparent"
    ></div>

    <form
      @submit.prevent="handlesubmit"
      class="pointer-events-auto flex w-full max-w-2xl items-center gap-2 rounded-2xl border border-slate-200/80 bg-white/90 p-2 shadow-[0_20px_50px_-15px_rgba(79,70,229,0.35)] backdrop-blur-lg ring-1 ring-slate-900/5"
    >
      <div class="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
        <svg xmlns="http://www.w3.org/2000/svg" class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 20h9"/>
          <path d="M16.5 3.5a2.1 2.1 0 1 1 3 3L7 19l-4 1 1-4z"/>
        </svg>
      </div>

      <input
        type="text"
        placeholder="Escribe una nueva nota y pulsa Enter…"
        v-model="title"
        class="min-w-0 flex-1 border-none bg-transparent px-1 text-[0.95rem] text-slate-800 outline-none placeholder:text-slate-400 focus:ring-0"
      />

      <button
        type="submit"
        :disabled="!title.trim()"
        class="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-brand-600 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 5v14"/>
          <path d="M5 12h14"/>
        </svg>
        <span>Añadir</span>
      </button>
    </form>
  </div>
</template>
