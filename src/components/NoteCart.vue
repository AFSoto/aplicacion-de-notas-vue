<script setup>
defineProps({
  note: Object
})
</script>

<template>
  <article
    class="group relative flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-4 pl-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-[0_10px_30px_-10px_rgba(79,70,229,0.25)]"
    :class="note.completed && 'bg-slate-50/80'"
  >
    <!-- Acento lateral -->
    <span
      aria-hidden="true"
      class="absolute inset-y-3 left-0 w-1 rounded-r-full bg-gradient-to-b from-brand-400 to-brand-600 opacity-0 transition-opacity group-hover:opacity-100"
      :class="note.completed && '!from-emerald-400 !to-emerald-600 opacity-100'"
    ></span>

    <!-- Checkbox custom -->
    <label class="relative flex shrink-0 cursor-pointer items-center">
      <input
        type="checkbox"
        v-model="note.completed"
        class="peer sr-only"
      />
      <span
        class="grid size-6 place-items-center rounded-lg border-2 border-slate-300 bg-white transition peer-checked:border-emerald-500 peer-checked:bg-emerald-500 peer-focus-visible:ring-2 peer-focus-visible:ring-brand-400 peer-focus-visible:ring-offset-2 peer-hover:border-brand-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="size-4 text-white opacity-0 transition peer-checked:opacity-100"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M20 6 9 17l-5-5"/>
        </svg>
      </span>
    </label>

    <!-- Título editable -->
    <input
      type="text"
      v-model="note.title"
      class="w-full border-none bg-transparent text-base font-medium text-slate-800 outline-none placeholder:text-slate-400 focus:ring-0"
      :class="note.completed && 'text-slate-400 line-through decoration-slate-400/70'"
    />
  </article>
</template>
