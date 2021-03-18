
const app = Vue.createApp({
    data() {
        return {
            title: "Contador App-Vue",
            count: 0
        }
    },
    methods: {
        modCount(instruc = "add", limit = 1){
            if(instruc == "dis") this.count -= limit;
            else this.count += limit;
        },
    },
})