<template>
  <div v-if="options.length" class="p-6 bg-gray-300" :name="name?name:`${nameGroup()()}`">
    <!-- CheckBox Select -->
    <div class="bg-white rounded-md" v-if="multiple">
      <div class="p-3">
        <h1 class="p-3 border-b-2">Group (String Array Model)</h1>
        <div class="p-3">{{ label }}</div>
        <form class="flex" formaction="a">
          <div v-for="(option, index) in options" :key="index" class="p-3">
            <input v-model="choiceModel" type="checkbox" :value="option.value" :id="name" :name="name"/>
            <label>{{ option['text'] }}</label>
          </div>
          <span class="flex-grow"></span>
          <span class="p-3">Model: {{ choiceModel }}</span>
        </form>
      </div>
    </div>
    <!-- radio select -->
    <div v-else class="bg-white rounded-md">
      <div class="p-3">
        <h1 class="p-3 border-b-2">Group</h1>
        <div class="p-3">{{ label }}</div>
        <form class="flex" :id="name">
          <div v-for="(option, index) in options" :key="index" class="p-3">
            <input v-model="choiceModel" type="radio" :name="name" :value="option" :id="name"/>
            <label>{{ option['text'] }}</label>
          </div>
          <span class="flex-grow"></span>
          <span class="p-3">Model: [{{ choiceModel['value'] }}]</span>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const choiceModel = defineModel()
const nameGroup = function() {
  let counter = 0
  return function increment(){
    return counter++;
  }
}

defineProps({
  label: String,
  multiple: Boolean,
  name: String,
  options: Array
})
</script>

<style scoped></style>
