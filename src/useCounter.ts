import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useCounter = defineStore('counter', () => {
  const counter = ref(0)
  function increment() {
    counter.value += 1
  }
  return {
    increment,
    counter
  }
})
