<script setup>
import CreateNote from '@/components/CreateNote.vue';
import NoteCart from '@/components/NoteCart.vue';
import TheHeader from '@/components/TheHeader.vue';
import { useNoteStore } from '@/stores/notes'
import { onMounted } from 'vue';

const noteStore = useNoteStore()

onMounted(async () => {
  await noteStore.getNotes();
})
</script>

<template>
  <TheHeader />

  <section class="relative min-h-screen bg-slate-50 pb-40 pt-12">
    <!-- Fondo decorativo suave -->
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 top-0 -z-0 h-72 bg-gradient-to-b from-brand-50 to-transparent"
    ></div>

    <div class="relative mx-auto max-w-3xl px-6">
      <!-- Header de la sección -->
      <div class="mb-10 flex flex-col items-start gap-2">
        <span class="text-xs font-medium uppercase tracking-[0.18em] text-brand-600">
          Tu espacio personal
        </span>
        <h2 class="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Mis Notas
        </h2>
        <p class="text-sm text-slate-500">
          {{ noteStore.notes.length }}
          {{ noteStore.notes.length === 1 ? 'nota guardada' : 'notas guardadas' }}
        </p>
      </div>

      <!-- Estado de error -->
      <div
        v-if="noteStore.error"
        class="flex items-start gap-4 rounded-2xl border border-rose-200 bg-rose-50/70 p-5 text-rose-900 shadow-sm"
        role="alert"
      >
        <div class="grid size-10 shrink-0 place-items-center rounded-xl bg-rose-100 text-rose-600">
          <svg xmlns="http://www.w3.org/2000/svg" class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 8v4"/>
            <path d="M12 16h.01"/>
          </svg>
        </div>
        <div>
          <p class="font-semibold">No se pudieron cargar las notas</p>
          <p class="mt-1 text-sm text-rose-800/80">
            Hubo un problema al contactar con la API. Revisa tu conexión e inténtalo de nuevo.
          </p>
        </div>
      </div>

      <!-- Estado de carga -->
      <div
        v-else-if="noteStore.loading"
        class="space-y-3"
        aria-busy="true"
      >
        <div
          v-for="n in 3"
          :key="n"
          class="h-16 animate-pulse rounded-2xl border border-slate-200 bg-white/60"
        ></div>
      </div>

      <!-- Lista de notas -->
      <div v-else-if="noteStore.notes.length" class="space-y-3">
        <NoteCart
          v-for="note in noteStore.notes"
          :key="note.id"
          :note="note"
        />
      </div>

      <!-- Estado vacío -->
      <div
        v-else
        class="flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-slate-200 bg-white/50 px-6 py-16 text-center"
      >
        <div class="mb-4 grid size-14 place-items-center rounded-2xl bg-brand-50 text-brand-600">
          <svg xmlns="http://www.w3.org/2000/svg" class="size-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
            <path d="M14 3v6h6"/>
            <path d="M12 13v4"/>
            <path d="M10 15h4"/>
          </svg>
        </div>
        <h3 class="text-lg font-semibold text-slate-900">Aún no tienes notas</h3>
        <p class="mt-1.5 max-w-sm text-sm text-slate-500">
          Empieza escribiendo tu primera idea en la barra inferior. Se guardará automáticamente.
        </p>
      </div>
    </div>

    <CreateNote />
  </section>
</template>
