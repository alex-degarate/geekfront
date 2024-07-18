
console.log(location.search)
var id=location.search.substr(4)
console.log(id)
//alert("id=" + id)

const { createApp } = Vue
  createApp({
    data() {
      return {
            id: 0,
            username: "",
            clave: "",
            rol: 0,
            url:'https://adegarate.pythonanywhere.com/usuarios/'+id, 
         }
    },
    //
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                  //  console.log(data)
                    this.id  = data.id
                    this.username = data.username
                    this.clave = data.clave
                    this.rol = data.rol
                })
                .catch(err => {
                    console.error(err);
                    this.error= true
                })
        },
        //
        modificar() {           
                
            let producto = {
                username: this.username,
                clave: this.clave,
                rol:  this.rol
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
                 //   alert("Registro modificado")
                    window.location.href ="./usergvue.html"; // navega a usuarios 
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
  }).mount('#appu')



