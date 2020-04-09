new Vue({
    el: '#app',
    data() {
        return {
            cities: ['London', 'Kyiv', 'Madrid'],
            api: 'https://api.openweathermap.org/data/2.5/weather',
            key: 'c2dcf8ffb5cdc3f8977bfd2ae7ea4738',
            city: 'London',
            weatherData: null,
            isLoading: false,
            error: ''
        }
    },
    mounted() {
        this.getWether(this.city)
    },

    methods: {
        setCity(city) {
            this.city = city
            this.isLoading = true
            this.getWeather(this.city)

        },
        async getWeather(city) {
            try {
                const response = await axios.get(this.api + `?q=${city}&appid=` + this.key)
                this.isLoading = false
                this.weatherData = response.data
            } catch (e) {
                this.error = e.response.data.message
                this.isLoading = false
            }
        }
    }
})