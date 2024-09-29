<template>
  <div id="app" class="min-h-screen bg-gray-100 flex flex-col">
    <!-- 導航欄 -->
    <nav class="bg-white shadow-md p-4">
      <div class="container mx-auto flex justify-center space-x-8">
        <router-link 
          to="/" 
          class="text-gray-600 hover:text-blue-500 transition duration-300"
          active-class="font-bold text-blue-600"
        >首頁</router-link>
        <router-link 
          to="/todolist" 
          class="text-gray-600 hover:text-blue-500 transition duration-300"
          active-class="font-bold text-blue-600"
        >Todo List</router-link>
        <router-link 
          to="/weather" 
          class="text-gray-600 hover:text-blue-500 transition duration-300"
          active-class="font-bold text-blue-600"
        >天氣查詢</router-link>
        <router-link 
          to="/responsive" 
          class="text-gray-600 hover:text-blue-500 transition duration-300"
          active-class="font-bold text-blue-600"
        >響應式設計</router-link>
      </div>
    </nav>

    <!-- 主內容 -->
    <main class="flex-grow container mx-auto mt-6 p-4">
      <router-view />
    </main>

    <!-- 頁腳 -->
    <footer class="bg-gray-200 text-center p-4 mt-6">
      <p class="text-gray-700">製作人：Frank</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
/* 自定義樣式可放置於此 */
</style>
