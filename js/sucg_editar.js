
console.log(location.search)
var id=location.search.substr(4)
console.log(id)


const { createApp } = Vue
  createApp({
    data() {
      return {
          id: 0,
          codsuc: 0,
          nombresuc: "",
          distrito: 0,
          calle: "",
          numero: 0,
          codpost: "",
          obser:"",
          ultmod: "", // formatDate( new Date() ),
          url:'https://adegarate.pythonanywhere.com/sucursales/'+id, 
       }
    },
    //
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    this.id  = data.id
                    this.codsuc = data.codsuc
                    this.nombresuc = data.nombresuc
                    this.distrito = data.distrito
                    this.calle  = data.calle
                    this.numero = data.numero
                    this.codpost= data.codpost
                    this.obser  = data.obser
                    this.ultmod = data.ultmod 
                })
                .catch(err => {
                    console.error(err);
                    this.error=true
                })
        },
        //
        modificar() {
            console.log("id=> " +id);
            
            let sucursal = { 
              codsuc: this.codsuc,
              nombresuc: this.nombresuc,
              distrito: this.distrito,
              calle:  this.calle,
              numero: this.numero,
              codpost: this.codpost,
              obser: this.obser,
              ultmod: this.ultmod  
            }

            var options = {
                body: JSON.stringify(sucursal),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }

            alert("url =>"+ this.url);
            fetch(this.url, options)
                .then(function () {               
                   // alert("Registro modificado");
                    window.location.href = "./sucgvue.html";  
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Modificar")
                })      
        }
    },
    //
    created() {
        this.fetchData(this.url)
    },
  }).mount('#apps')










