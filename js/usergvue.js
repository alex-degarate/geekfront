

const { createApp } = Vue

createApp({
    data() {
        return {
            usuarios: [],
            // esto es para el boton modificar +(location.search.substr(4)===""?'':"/")    
            // +location.search.substr(4)
            url: 'https://adegarate.pythonanywhere.com/usuarios',
            error: false,
            cargando: true,
            /*alta*/
            id: 0,
            username: "",
            clave: "",
            rol: 0 
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.usuarios = data;
                    this.cargando = false                 
                    //console.log(this.usuarios)
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })
        },
        
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
        grabar() {
            let usuario = {
                username: this.username,
                clave: this.clave,
                rol:0
            }
            var options = {
                body: JSON.stringify(usuario),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                  //  alert("Registro grabado")
                    window.location.href = "./usergvue.html";
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Grabar")
                })
        },
        /*  modificar() {
              let usuario = {
                  usuario:this.usuario,
                  clave: this.clave,
                  
              }
              var options = {
                  body: JSON.stringify(usuario),
                  method: 'PUT',
                  headers: { 'Content-Type': 'application/json' },
                  redirect: 'follow'
              }
              fetch(this.url, options)
                  .then(function () {               
                      alert("Registro modificado")
                      window.location.href = "./usuarios.html";  
                  })
                  .catch(err => {
                      console.error(err);
                      alert("Error al Modificar")
                  })      
          },*/

        login() {
            username = this.username
 //           sessionStorage.setItem("adm",0)
            var i= 0
            var bFound = false; 
//            while( i < this.usuarios.length && (this.usuarios[i].username != this.username)  ){
            while( i < this.usuarios.length ){
            
              if( this.usuarios[i].username == this.username ) {
                  bFound = true;
//alert("encontrado\n"+ this.usuarios[i].id+" "+this.usuarios[i].username +" "+ this.usuarios[i].clave);

                  if( this.usuarios[i].clave == this.clave ){
                       
                      if( this.usuarios[i].rol > 100){
                          sessionStorage.setItem("usr", this.usuarios[i].username );     
                          sessionStorage.setItem("lev", this.usuarios[i].rol);
                          sessionStorage.setItem("adm", "1");
                      }
                      window.location.href = "./login.html";
                      break;
                  }else{
                      alert('Clave errónea')   
                      break;
                  }
              }

              i++
            }// endwhile

            if( ! bFound)  
                alert('Usuario erróneo') 
   
        }// end login()
    },
    //
    created() {
        this.fetchData(this.url)
    },
}).mount('#app')



