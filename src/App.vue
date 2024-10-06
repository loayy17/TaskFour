<template>
  <div>
    <v-choice
      v-model="choiceModel1"
      name="group1"
      :options="options"
      :multiple="false"
      :label="toggle ? 'CheckBox Group title' : 'Radio Group'"
      :is-horizantal="false"
    />
    <v-choice
      v-model="choiceModel2"
      name=""
      :options="Gender"
      :multiple="false"
      :label="toggle ? 'CheckBox Group title' : 'Radio Group'"
      :is-horizantal="true"
    />
    <v-choice
      v-model="choiceModel3"
      name=""
      :options="martialStatus"
      :multiple="true"
      :label="toggle ? 'CheckBox Group title' : 'Radio Group'"
      :is-horizantal="true"
    />
    <v-choice
      v-model="choiceModel4"
      name=""
      :options="Someone"
      :multiple="true"
      :label="toggle ? 'CheckBox Group title' : 'Radio Group'"
      :is-horizantal="false"
    />
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
const Gender = [
  { text: 'Male', value: 'a' },
  { text: 'Female', value: 'b' }
]
const martialStatus = [
  { text: 'Single', value: 'a' },
  { text: 'Married', value: 'b' },
  { text: 'Other', value: 'c' }
]
const Someone = [
  { text: 'Child', value: 'a' },
  { text: 'Teenager', value: 'b' },
  { text: 'Man', value: 'c' }
]

const choiceModel1 = ref([]) as Ref<string[]>
const choiceModel2 = ref([]) as Ref<string[]>
const choiceModel3 = ref([]) as Ref<string[]>
const choiceModel4 = ref([]) as Ref<string[]>
</script>

<style scoped></style>
