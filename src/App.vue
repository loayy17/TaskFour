<template>
  <div>
    <v-choice
      v-model="choiceModel1"
      name=""
      :options="options"
      :multiple="toggle"
      :label="toggle ? 'CheckBox Group title' : 'Radio Group'"
    />
    <v-choice
      v-model="choiceModel1"
      name=""
      :options="options"
      :multiple="toggle"
      :label="toggle ? 'CheckBox Group title' : 'Radio Group'"
    />
    <v-choice
      v-model="choiceModel2"
      name="group2"
      :options="options"
      :multiple="toggle"
      :label="toggle ? 'CheckBox Group title' : 'Radio Group'"
    />
  </div>

  <div class="m-auto text-center w-40 my-8 rounded-lg bg-gray-500">
    App Page <br />
    {{ choiceModel1.text == undefined ? choiceModel1 : choiceModel1.value }}
  </div>
  <div class="m-auto text-center w-40 my-8">
    <button
      @click="toggleFunction"
      type="button"
      class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
    >
      {{ toggle ? 'radio' : 'CheckBox' }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'
import vChoice from './components/vChoice.vue'
const toggle = ref(false)
const options = [
  { text: 'Option 1', value: 'a' },
  { text: 'Option 2', value: 'b' },
  { text: 'Option 3', value: 'c' }
]


const choiceModel1 = ref([]) as Ref<string[]>
const choiceModel2 = ref([]) as Ref<string[]>
const toggleFunction = () => {
  toggle.value = !toggle.value
  choiceModel1.value = []
}
</script>

<style scoped></style>
