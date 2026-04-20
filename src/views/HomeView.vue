<script setup>
import TheHeader from '@/components/TheHeader.vue';
</script>

<template>
  <TheHeader />

  <main class="relative overflow-hidden">
    <!-- Fondo decorativo -->
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 -z-10"
    >
      <div class="absolute -top-32 -left-20 size-[28rem] rounded-full bg-brand-300/40 blur-3xl"></div>
      <div class="absolute top-40 -right-24 size-[26rem] rounded-full bg-violet-300/40 blur-3xl"></div>
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.9),transparent_60%)]"></div>
    </div>

    <section class="mx-auto flex max-w-6xl flex-col items-center px-6 py-20 text-center sm:py-28">
      <span
        class="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-3.5 py-1.5 text-xs font-medium text-brand-700 shadow-sm backdrop-blur"
      >
        <span class="size-1.5 rounded-full bg-brand-500"></span>
        Organiza tus ideas sin fricción
      </span>

      <h1 class="max-w-3xl text-balance text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
        Tus notas,
        <span class="bg-gradient-to-r from-brand-600 via-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
          simples y claras.
        </span>
      </h1>

      <p class="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-slate-600">
        Captura pensamientos, listas y pendientes en segundos. Todo se guarda
        automáticamente en tu dispositivo — sin distracciones, sin complicaciones.
      </p>

      <div class="mt-10 flex flex-col items-center gap-3 sm:flex-row">
        <router-link
          to="/notas"
          class="group inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
        >
          Ir a mis notas
          <svg xmlns="http://www.w3.org/2000/svg" class="size-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14"/>
            <path d="m12 5 7 7-7 7"/>
          </svg>
        </router-link>
        <a
          href="#features"
          class="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
        >
          Conocer más
        </a>
      </div>

      <!-- Feature cards -->
      <div
        id="features"
        class="mt-20 grid w-full gap-4 sm:grid-cols-3"
      >
        <div class="rounded-2xl border border-slate-200/70 bg-white/80 p-6 text-left shadow-sm backdrop-blur">
          <div class="mb-4 grid size-10 place-items-center rounded-xl bg-brand-50 text-brand-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M13 2 3 14h9l-1 8 10-12h-9z"/>
            </svg>
          </div>
          <h3 class="text-base font-semibold text-slate-900">Rápido</h3>
          <p class="mt-1.5 text-sm leading-relaxed text-slate-600">
            Creación instantánea. Cero formularios largos, solo escribe y listo.
          </p>
        </div>

        <div class="rounded-2xl border border-slate-200/70 bg-white/80 p-6 text-left shadow-sm backdrop-blur">
          <div class="mb-4 grid size-10 place-items-center rounded-xl bg-violet-50 text-violet-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <h3 class="text-base font-semibold text-slate-900">Persistente</h3>
          <p class="mt-1.5 text-sm leading-relaxed text-slate-600">
            Tus notas se guardan localmente y siguen ahí cuando regreses.
          </p>
        </div>

        <div class="rounded-2xl border border-slate-200/70 bg-white/80 p-6 text-left shadow-sm backdrop-blur">
          <div class="mb-4 grid size-10 place-items-center rounded-xl bg-fuchsia-50 text-fuchsia-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 6 9 17l-5-5"/>
            </svg>
          </div>
          <h3 class="text-base font-semibold text-slate-900">Enfocado</h3>
          <p class="mt-1.5 text-sm leading-relaxed text-slate-600">
            Marca tareas como completadas y mantén la vista despejada.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>
