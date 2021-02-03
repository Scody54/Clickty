const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods:{
    incr(n) {
      this.counter = this.counter + n;
    },
    dscr() {
      this.counter = this.counter - n;
    }
  }
});

app.mount('#events');
