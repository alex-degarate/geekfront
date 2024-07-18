

const { createApp } = Vue
  createApp({
    data() {
      return {
        sucursales:[],
        //url:' http://localhost:5000/productos ',
        // si el backend esta corriendo local usar localhost 5000(si no lo subieron a
        // pythonanywhere)
        url:'https://adegarate.pythonanywhere.com/sucursales',
        // si ya lo subieron a pythonanywhere
        error:false,
        cargando:true,
        /* atributos para el guardar los valores del formulario */
        id: 0,
        codsuc: 0,
        nombresuc: "",
        distrito: 0,
        calle: "",
        numero: 0,
        codpost: "",
        obser:"",
        ultmod: "",  
      }
    },
    //
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    this.sucursales = data;
                    this.cargando  = false
                })
                .catch(err => {
                    console.error(err);
                    this.error=true
                })
        },
        //
        eliminar(id) {
            const url = this.url+'/' + id;
            var options = {
                method: 'DELETE',
            }
            fetch(url, options)
                .then(res => res.text()) // or res.json()
                .then(res => {
                  alert( 'Registro Eliminado')
                    location.reload(); // recarga el json luego de eliminado el registro
                })
        },
        //
        grabar(){
             // console.log(this.url);
            let sucursal = {
                codsuc:  this.codsuc,
                nombresuc:this.nombresuc,
                distrito:this.distrito,
                calle:   this.calle,
                numero:  this.numero,
                codpost: this.codpost,
                obser:   this.obser,
                ultmod:  this.ultmod  
            }
            var options = {
                body:JSON.stringify(sucursal),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }

            fetch(this.url, options)
                .then(function () {
              //  alert("Registro grabado")
                window.location.href = "./sucgvue.html"; // recarga sucursal.html
            })
            .catch(err => {
                console.error(err);
                alert("Error al Grabar") // puedo mostrar el error tambien
            })
       }
    },
    //
    created() {
        this.fetchData(this.url)
    },
 }).mount('#app')










