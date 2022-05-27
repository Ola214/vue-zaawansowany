export default {
    data() {
        return {
            isLoading: true,
            results: null
        }
    },
    mounted() {
        // Symulujemy ładowanie
        setTimeout(() => {
            this.isLoading = false;
            this.results = [
                "Tomasz",
                "Filip",
                "Jarosław",
                "Izajasz",
                "Kacper"
            ];
        }, 1000);
    },
    render(h) {
        if (this.isLoading) {
            return h('p', 'Trwa ładowanie...');
        } else {
            if (this.results != null && this.results.length) {
                return h('ul', this.results.map((result, index) => {
                    return h('li', {
                        key: index
                    }, result);
                }))
            } else {
                return h('p', 'Nie znaleziono żadnych imion...');
            }
        }
    }
};