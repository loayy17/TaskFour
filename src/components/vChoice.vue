<template>
  <div class="p-6 bg-gray-300">
    <div class="bg-white rounded-md" v-if="multiple">
      <div class="p-3">
        <h1 class="p-3 border-b-2">Group</h1>
        <div class="p-3">{{ label }}</div>
        <form class="flex">
          <div v-for="(option, index) in options" :key="index" class="p-3">
            <input type="checkbox" :value="option.value" :id="index" />
            <label>{{ option['text'] }}</label>
          </div>
          <span class="flex-grow"></span>
          <span class="p-3">Model: {{ choiceModel }}</span>
        </form>
      </div>
    </div>
    <div v-else class="bg-white rounded-md">
      <div class="p-3">
        <h1 class="p-3 border-b-2">Group (String Array Model)</h1>
        <div class="p-3">{{ label }}</div>
        <form class="flex">
          <div v-for="(option, index) in options" :key="index" class="p-3">
            <input type="radio" name="Options" :value="option" />
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
const choiceModel = defineModel()

defineProps({
  label: String,
  multiple: Boolean,
  name: String,
  options: Array
})
</script>

<style scoped></style>
