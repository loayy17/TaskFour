<template>
  <div>
    <v-choice v-model="choiceModel" name="group1" :options="options" :multiple="false" label="Radio Group"/>
  </div>
  <div> {{ choiceModel }}</div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
import vChoice from './components/vChoice.vue';
const options = [
  { text: "Option 1",  value: "a" },
  { text: "Option 2",  value: "b" },
  { text: "Option 3",  value: "c" },
]
 
const choiceModel = ref([]) as Ref<string[]>
</script>

<style scoped>

</style>