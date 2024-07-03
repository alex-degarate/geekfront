/* GEEK */
 
const { createApp } = Vue
createApp({
  data() {
    return {
      url: "https://crisysadmin.github.io/Geek/js/shirts.json",
      datos: [],
      error: false,
    }
  },
  methods: {


    fetchData(url) {
      fetch(url)

        .then(response => response.json())
        .then(
          data => {
            // console.log(data);
            this.datos = data;
          }
        )
        .catch(error => {
          console.log("Error:" + error)
          this.error = true
        });
    }
  },
  created() {  // created() se ejecuta cada vez que se crea el objeto VUE
  this.fetchData(this.url)
}


}).mount('#app')
 
// https://github.com/Crisysadmin/Geek/tree/main/js/shirts.json
