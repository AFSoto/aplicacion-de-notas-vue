<script setup>
</script>

<template>
  <header
    class="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-lg supports-[backdrop-filter]:bg-white/60"
  >
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <!-- Brand -->
      <router-link
        to="/"
        class="group flex items-center gap-2.5 text-slate-900"
      >
        <span
          class="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-[0_6px_20px_-6px_var(--color-brand-500)] transition-transform group-hover:scale-105"
          aria-hidden="true"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
            <path d="M14 3v6h6"/>
            <path d="M9 13h6"/>
            <path d="M9 17h4"/>
          </svg>
        </span>
        <span class="text-lg font-semibold tracking-tight">Notes App</span>
      </router-link>

      <!-- Nav links -->
      <ul class="flex items-center gap-1 text-sm font-medium">
        <li>
          <router-link
            to="/"
            class="inline-flex items-center rounded-lg px-3.5 py-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            active-class="!bg-brand-50 !text-brand-700"
          >
            Inicio
          </router-link>
        </li>
        <li>
          <router-link
            to="/notas"
            class="inline-flex items-center rounded-lg px-3.5 py-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            active-class="!bg-brand-50 !text-brand-700"
          >
            Notas
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
