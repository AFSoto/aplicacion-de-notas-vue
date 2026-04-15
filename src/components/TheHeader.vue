<script setup>

</script>

<template>
  <header class="bg-slate-900 shadow-lg">
    <nav class="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
      <h1 class="text-2xl font-bold text-white tracking-wide">
        Notes App
      </h1>

      <ul class="flex gap-8 text-white font-medium">
        <li>
          <router-link class="hover:text-sky-400 transition" to="/">
            Inicio
          </router-link>
        </li>

        <li>
          <router-link class="hover:text-sky-400 transition" to="/notas">
            Notas
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>


<style></style>
