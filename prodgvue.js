

const { createApp } = Vue
  createApp({
    data() {
      return {
        productos:[],
        //url:' http://localhost:5000/productos ',
        // si el backend esta corriendo local usar localhost 5000(si no lo subieron a
        // pythonanywhere)
        url:'https://adegarate.pythonanywhere.com/productos',
        // si ya lo subieron a pythonanywhere
        error:false,
        cargando:true,
        /* atributos para el guardar los valores del formulario */
        id: 0,
        code: 0,
        nombre: "",
        categoria: "",
        tipo: "",
        stock: 0,
        precio: 0,
        ultmod: "", // formatDate( new Date() ),
        imagen:""
      }
    },
    //
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    this.productos = data;
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
                alert(typeof(this.stock))
            let producto = {
                code:  this.code,
                nombre: this.nombre,
                categoria: this.categoria,
                tipo:  this.tipo,
                stock: this.stock,
                precio: this.precio,
                imagen: this.imagen,
                ultmod: Today() //this.ultmod
            }
            var options = {
                body:JSON.stringify(producto),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                alert("Registro grabado")
                window.location.href = "./prodgvue.html"; // recarga productos.html
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










