let app = Vue.createApp({
    data: function() {
        return {
            hello: 'Hello There :D',
            blueCard: false,
            redCard: false,
        }
    },
    methods: {
        changeCardColorToRed() {
            this.redCard = !this.redCard
        }
    }
})
app.mount('#app')