<!-- src/components/WeatherPage.vue -->
<template>
  <div class="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
    <h1 class="text-3xl font-bold mb-6 text-center">天氣查詢</h1>
    <form @submit.prevent="fetchWeather" class="mb-4">
      <label for="city" class="block text-lg font-medium mb-2">選擇城市：</label>
      <select id="city" v-model="city" class="border rounded-lg p-2 w-full mb-4">
        <option value="">請選擇城市</option>
        <option value="taipei">台北</option>
        <option value="taichung">台中</option>
        <option value="kaohsiung">高雄</option>
        <option value="tainan">台南</option>
        <option value="hualien">花蓮</option>
        <option value="taoyuan">桃園</option>
      </select>
      <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition duration-300">查詢天氣</button>
    </form>

    <div v-if="weatherData" class="mt-6 bg-blue-100 p-4 rounded-lg shadow-inner">
      <h2 class="text-xl font-bold mb-2">{{ weatherData.name }} 的天氣</h2>
      <p class="mb-1">🌡 溫度：{{ weatherData.main.temp }}°C</p>
      <p>🌤 天氣描述：{{ weatherData.weather[0].description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: '', // 初始城市
      weatherData: null
    };
  },
  methods: {
    async fetchWeather() {
      if (!this.city) {
        alert("請選擇一個城市！");
        return;
      }
      const apiKey = process.env.VUE_APP_WEATHER_API_KEY;
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apiKey}&units=metric&lang=zh_tw`;

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('無效的城市名稱');
        this.weatherData = await response.json();
      } catch (error) {
        alert(error.message);
      }
    }
  }
};
</script>

<style scoped>
</style>
