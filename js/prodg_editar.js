
console.log(location.search)
var id=location.search.substr(4)
console.log(id)
//alert("id=" + id)

const { createApp } = Vue
  createApp({
    data() {
      return {
        id:0,
        code: 0,
        nombre: "",
        categoria: "",
        tipo: "",
        stock: 0,
        precio: 0,
        imagen:"",
        ultmod: "",  
        url:'https://adegarate.pythonanywhere.com/productos/'+id, 
       }
    },
    //
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.id  = data.id
                    this.code = data.code
                    this.nombre = data.nombre
                    this.categoria = data.categoria
                    this.tipo = data.tipo
                    this.precio = data.precio
                    this.stock  = data.stock
                    this.imagen = data.imagen
                    this.ultmod = data.ultmod
                })
                .catch(err => {
                    console.error(err);
                    this.error= true
                })
        },
        //
        modificar() {           
            // alert(this.url);   
            let producto = {
                code: this.code,
                nombre: this.nombre,
                categoria: this.categoria,
                tipo:  this.tipo,
                precio: this.precio,
                stock: this.stock,
                imagen: this.imagen,
                ultmod: this.ultmod
            }
            var options = {
                body: JSON.stringify(producto),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            // alert("=>"+ this.url);
            fetch(this.url, options)
                .then(function () {
                    alert("Registro modificado")
                    window.location.href ="./prodgvue.html"; // navega a productos.html
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
  }).mount('#app')



