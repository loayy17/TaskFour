<template>
  <div
    v-if="options.length"
    :class="{ ' p-6 bg-gray-300': true }"
    :name="name? name : `groupNameGenerated_${uniqueName}_`"
  >
    <!-- CheckBox Select -->
    <div class="bg-white rounded-md" v-if="multiple">
      <div class="p-3">
        <h1 class="p-3 border-b-2">Group (String Array Model)</h1>
        <div class="p-3">{{ label }}</div>
        <form :class="{'flex':true,'flex-col':isHorizantal}" formaction="a">
          <div v-for="(option, index) in options" :key="index" class="p-3">
            <input
              v-model="choiceModel"
              type="checkbox"
              :value="option.value"
              :id="name"
              :name="name"
              class="mr-2"
            />
            <label>{{ option['text'] }}</label>
          </div>
          <span class="flex-grow"></span>
          <span class="p-3 text-end">Model: {{ choiceModel }}</span>
        </form>
      </div>
    </div>
    <!-- radio select -->
    <div v-else class="bg-white rounded-md">
      <div class="p-3">
        <h1 class="p-3 border-b-2">Group</h1>
        <div class="p-3">{{ label }}</div>
        <form :class="{'flex':true,'flex-col':isHorizantal}" :id="name">
          <div v-for="(option, index) in options" :key="index" class="p-3">
            <input v-model="choiceModel" type="radio" :name="name" :value="option" :id="name" class="mr-2"/>
            <label>{{ option['text'] }}</label>
          </div>
          <span class="flex-grow"></span>
          <span class="p-3 text-end">Model: [{{ choiceModel.value }}]</span>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
// const store = useCounter()
// const counter = store.counter
// store.increment()
// import { useCounter } from '@/useCounter'
const uniqueName = ref(uuidv4())
const choiceModel = defineModel()
console.log(uniqueName.value)
defineProps({
  label: String,
  multiple: Boolean,
  name: String,
  options: Array,
  isHorizantal: Boolean
})
</script>

<style scoped></style>
