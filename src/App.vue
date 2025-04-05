<script>
let id = 0;
</script>
<script setup>
import { ref, reactive, computed } from "vue";
import TodoItem from "./components/TodoItem.vue";

const makeTodo = (description) => ({ archived: false, description, id: id++ });

const TodoItems = reactive([]);
const showArchived = ref(false);

function handleSubmit(event) {
  const formData = new FormData(event.target);
  const description = formData.get("description");
  TodoItems.push(makeTodo(description));
  event.target.reset();
}

const filteredItems = computed(() =>
  TodoItems.filter((item) => item.archived === showArchived.value),
);
</script>

<template>
  <h1>My Todo List</h1>
  <form @submit.prevent="handleSubmit">
    <label>Add Todo: <input type="text" name="description" /></label>
    <button>Add!</button>
  </form>
  <label><input type="checkbox" v-model="showArchived" /> Show Archived</label>
  <ul>
    <li v-for="todoItem in filteredItems" :key="todoItem.id">
      <todo-item :todo-item="todoItem" @archive="todoItem.archived = true" />
    </li>
  </ul>
</template>

<style scoped></style>
