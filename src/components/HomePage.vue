<template>
  <div class="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
    <h1 class="text-4xl font-bold mb-6 text-center">歡迎來到我的前端作品集</h1>
    <p class="text-lg mb-4 text-gray-600 text-center">在這裡，您可以看到我在前端開發中使用的各種框架和技術。</p>
    
    <h2 class="text-2xl font-bold mb-4">使用的框架與技術</h2>
    <ul class="list-disc list-inside space-y-2">
      <li><strong>Vue.js 3</strong> - 作為核心的前端框架，提供響應式和組件化的開發模式。</li>
      <li><strong>Vue Router</strong> - 用於頁面導航，實現單頁應用 (SPA) 的路由功能。</li>
      <li><strong>Tailwind CSS</strong> - 實用的 CSS 框架，提供快速的樣式設定，讓開發更加高效。</li>
      <li><strong>LocalStorage</strong> - 用於保存使用者的待辦事項，使數據在頁面重新整理後依然存在。</li>
      <li><strong>Fetch API</strong> - 用於向 OpenWeather API 發送請求並獲取天氣數據。</li>
      <li><strong>JavaScript (ES6+)</strong> - 使用現代 JavaScript 語法來撰寫程式碼，包含箭頭函數、模板字串、解構賦值等特性。</li>
    </ul>

    <h2 class="text-2xl font-bold mt-6 mb-4">作品集內容</h2>
    <ul class="list-disc list-inside space-y-2">
      <li>📋 <strong>Todo List</strong> - 一個簡單的待辦事項清單，能夠新增、刪除和標記完成項目，並且資料能夠在瀏覽器中保存。</li>
      <li>🌦 <strong>天氣查詢</strong> - 通過 OpenWeather API 查詢指定城市的天氣資訊。</li>
      <li>💡 <strong>響應式設計</strong> - 展示了如何使用 Tailwind CSS 構建一個適應不同裝置的頁面。</li>
    </ul>

    <p class="text-gray-500 mt-6">感謝您的瀏覽，請點擊上方導航連結來查看不同的範例！</p>
  </div>
</template>

<script>
export default {
  name: 'HomePage' 
}
</script>

<style scoped>
/* 在此處可以添加其他樣式 */
</style>
