import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNoteStore = defineStore('notes', () => {
  const API_URL = 'http://127.0.0.1:8000/api/notes'

  const error = ref(false)
  const loading = ref(false)

  const getNotes = async () => {
    try {
      loading.value = true
      const response = await fetch(API_URL)
      const data = await response.json()
      notes.value = data
      loading.value = false
    } catch (e) {
      loading.value = false;
      error.value = true
    }
  }

  const notes = ref([])

  const createId = () => {
    return Date.now.toString(36) + Math.random().toString(36).slice(2)
  }

  const addNote = async (title) => {
    const newNote = {
      id: createId,
      title,
      marked: false
    }

    try {
      await fetch(API_URL,{
        method:"POST",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
        body: JSON.stringify(newNote)
      })
    } catch (error) {
      error.value = true;
    }
  }

  return {
    notes,
    addNote,
    getNotes,
    loading,
    error,
  }
})
