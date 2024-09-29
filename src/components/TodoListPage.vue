<template>
  <div class="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
    <h1 class="text-2xl font-bold mb-4">待辦清單</h1>
    <form @submit.prevent="addTodo" class="mb-4 flex gap-2 items-center">
      <input 
        v-model="newTodo" 
        type="text" 
        placeholder="請輸入待辦事項" 
        class="border p-2 flex-grow rounded"
      />
      <input 
        v-model="newTodoDate" 
        type="date" 
        placeholder="選擇日期" 
        class="border p-2 rounded"
      />
      <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">新增</button>
    </form>

    <!-- 未完成的待辦事項區塊 -->
    <div v-if="incompleteTodos.length" class="mb-6">
      <h2 class="text-xl font-semibold mb-2">未完成的待辦事項</h2>
      <ul>
        <li 
          v-for="todo in incompleteTodos" 
          :key="todo.id" 
          class="flex justify-between items-center mb-2 p-3 rounded border bg-red-100 relative"
        >
          <div class="flex-grow">
            <span v-if="editIndex !== todo.id" class="text-black block">{{ todo.text }}</span>
            <input 
              v-else 
              v-model="editText" 
              @blur="updateTodo(todo.id)" 
              @keyup.enter="updateTodo(todo.id)" 
              class="border p-2 rounded flex-grow"
              type="text"
            />
            <!-- 日期顯示，置於待辦事項文字下方 -->
            <div class="text-gray-500 text-xs mt-1">{{ formatDate(todo.date) }}</div>
          </div>
          <div class="flex gap-2">
            <button 
              v-if="editIndex !== todo.id"
              @click="enableEditing(todo.id, todo.text)" 
              class="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded"
            >
              編輯
            </button>
            <button 
              v-if="editIndex === todo.id"
              @click="updateTodo(todo.id)" 
              class="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded"
            >
              保存
            </button>
            <button 
              v-if="editIndex !== todo.id"
              @click="toggleComplete(todo.id)" 
              class="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded"
            >
              完成
            </button>
            <button 
              @click="deleteTodo(todo.id, false)" 
              class="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
            >
              刪除
            </button>
          </div>
        </li>
      </ul>
    </div>

    <!-- 已完成的待辦事項區塊 -->
    <div v-if="completedTodos.length">
      <h2 class="text-xl font-semibold mb-2">已完成的待辦事項</h2>
      <ul>
        <li 
          v-for="todo in completedTodos" 
          :key="todo.id" 
          class="flex justify-between items-center mb-2 p-3 rounded border bg-green-100 relative"
        >
          <div class="flex-grow">
            <span v-if="editIndex !== todo.id" class="line-through text-gray-400 block">{{ todo.text }}</span>
            <input 
              v-else 
              v-model="editText" 
              @blur="updateTodo(todo.id, true)" 
              @keyup.enter="updateTodo(todo.id, true)" 
              class="border p-2 rounded flex-grow"
              type="text"
            />
            <!-- 日期顯示，置於待辦事項文字下方 -->
            <div class="text-gray-500 text-xs mt-1">{{ formatDate(todo.date) }}</div>
          </div>
          <div class="flex gap-2">
            <button 
              v-if="editIndex !== todo.id"
              @click="enableEditing(todo.id, todo.text)" 
              class="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded"
            >
              編輯
            </button>
            <button 
              v-if="editIndex === todo.id"
              @click="updateTodo(todo.id, true)" 
              class="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded"
            >
              保存
            </button>
            <button 
              v-if="editIndex !== todo.id"
              @click="toggleComplete(todo.id)" 
              class="bg-gray-400 hover:bg-gray-500 text-white px-2 py-1 rounded"
            >
              未完成
            </button>
            <button 
              @click="deleteTodo(todo.id, true)" 
              class="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
            >
              刪除
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: '',
      newTodoDate: '', 
      todos: JSON.parse(localStorage.getItem('todos')) || [], 
      editIndex: null, 
      editText: '', 
    };
  },
  computed: {
    incompleteTodos() {
      return this.todos.filter(todo => !todo.completed);
    },
    completedTodos() {
      return this.todos.filter(todo => todo.completed);
    }
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim()) {
        const newId = Date.now(); 
        this.todos.push({ id: newId, text: this.newTodo, date: this.newTodoDate, completed: false }); 
        this.newTodo = '';
        this.newTodoDate = ''; 
        this.saveTodos();
      }
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
      this.saveTodos();
    },
    toggleComplete(id) {
      const todo = this.todos.find(todo => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
        this.saveTodos();
      }
    },
    enableEditing(id, text) {
      this.editIndex = id;
      this.editText = text;
    },
    updateTodo(id) {
      if (this.editText.trim() === '') {
        alert("待辦事項不能為空白");
        return;
      }
      const todo = this.todos.find(todo => todo.id === id);
      if (todo) {
        todo.text = this.editText;
        this.editIndex = null;
        this.editText = '';
        this.saveTodos();
      }
    },
    saveTodos() {
      localStorage.setItem('todos', JSON.stringify(this.todos)); 
    },
    formatDate(date) {
      if (!date) return '';
      const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
      return new Date(date).toLocaleDateString('zh-TW', options);
    }
  }
};
</script>

<style scoped>
/* 加入一些樣式讓日期顯示更加美觀 */
</style>
