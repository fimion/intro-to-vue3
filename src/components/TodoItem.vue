<script setup>
import { defineEmits, defineProps } from "vue";

const emit = defineEmits(["archive"]);

defineProps({
  todoItem: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <p>
    <button v-if="!todoItem.archived" type="button" @click="emit('archive')">
      done!
    </button>
    {{ todoItem.description }}
  </p>
</template>

<style scoped></style>
