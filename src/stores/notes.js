import { defineStore } from "pinia";
import { ref } from "vue";



export const useNoteStore = defineStore("notes", () =>{

  const notes = ref([
    {
      id:"1",
      title:"ir a comprar la sena",
      marked:false
    },
    {
      id:"1",
      title:"ir a comprar la cena",
      marked:false
    }
  ])


  return {
    notes,
  }
})
