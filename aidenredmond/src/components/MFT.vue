<script>
import axios from 'axios';

export default {
  data() {
    return {
      raindrops: [],
      error: null,
    };
  },
  methods: {
    async fetchRaindrops() {
        const API_URL = 'https://api.raindrop.io/rest/v1/raindrops/50543962';
        const API_TOKEN = import.meta.env.VITE_RAINDROP_ACCESS_TOKEN;

        try {
            const response = await axios.get(API_URL, {
            headers: {
                Authorization: `Bearer ${API_TOKEN}`,
            },
            });

            this.raindrops = response.data.items
        } catch (err) {
            console.error(err);
            this.error = 'Failed to fetch raindrops. Please try again.';
        }
    },
    generateDate(date) {
        let month = date.substring(date.indexOf('-') + 1, date.indexOf('-', 5));
        let day =  date.substring(date.indexOf('-', 5) + 1, date.indexOf('T'));
        let year = date.substring(0, date.indexOf('-'));

        return month + '/' + day + '/' + year;
    }

  },
  mounted() {
    this.fetchRaindrops();
  },
};
</script>

<template>
    <div>
      <div v-if="error" class="text-red-500">{{ error }}</div>
      <ul>
        <li
          v-for="raindrop in raindrops"
          :key="raindrop._id"
          class="flex items-end"
        >
          <!-- Left: Title -->
          <a v-bind:href="raindrop.link" target="_blank" class="hover:text-pink truncate">
            {{ raindrop.title }}
          </a>
  
          <!-- Middle: Dots -->
          <span class="flex-grow mx-2 border-b-2 border-dotted border-black border-opacity-50 mb-[6px]"></span>
  
          <!-- Right: Date -->
          <span class="text-black whitespace-nowrap">
            {{ generateDate(raindrop.created) }}
          </span>
        </li>
      </ul>
    </div>
</template>