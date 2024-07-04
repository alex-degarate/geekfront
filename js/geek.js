var datos;

// header construction
/*
var sNav = ``;
sNav = sNav + `
<div class="topnav">
  <a href="./index.html" class="topnav orange"><i class="fa fa-home fa-home-hover px18"></i> </a>

  <a href="./gallery.html"  class="topnav">Galería</a>
  <a href="./company.html"  class="topnav">Empresa</a>
  <a href="./contact.html"  class="topnav">Contacto</a>
  <a href="./carousel.html" class="topnav">Carousel</a>
  <a href="./shop.html" class="right orange shop"> 
        <img class="" src="./img/cart2.svg" alt="shop cart"></a>
</div> `
document.querySelector("header").innerHTML = sNav;


// footer construction
var sFooter = ``;
sFooter = sFooter + ``;
// document.querySelector("footer").innerHTML = sFooter;
*/

var sNav = `
<div class="w3-top" style="font-family: sans-serif; font-size: 15px; line-height: 22px;">
   <div class="w3-bar w3-theme-d2 w3-left-align" >
  
   <a class="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-hover-white w3-theme-d2"    
      href="javascript:void(0);" onclick="openNav()"><i class="fa fa-bars"></i></a>

     <a href="./index.html"" class="w3-bar-item w3-button orange">
      <i class="fa fa-home" style="font-size: 18px"></i></a>
     <a href="./company.html"  class="w3-bar-item w3-button w3-hide-small w3-hover-white">Empresa</a>
     <a href="./contact.html"  class="w3-bar-item w3-button w3-hide-small w3-hover-white">Contacto</a>
     <a href="./carousel.html" class="w3-bar-item w3-button w3-hide-small w3-hover-white">Carousel</a>
     <a href="./registro.html" class="w3-bar-item w3-button w3-hide-small w3-hover-white">Registro</a>
     <a href="./login.html"    class="w3-bar-item w3-button w3-hide-small w3-hover-white">Login</a>

     <div class="w3-dropdown-hover w3-hide-small">
        <button class="w3-button" title="Notifications" id="crud" style="display: none;">Administ 
        <i class="fa fa-caret-down"></i>
        </button>     

        <div class="w3-dropdown-content w3-card-4 w3-bar-block">
          <a href="./prodgvue.html" id="crud1" class="w3-bar-item w3-button"
            >Productos</a>
          <a href="" id="logout" onclick="logout()" class="w3-bar-item w3-button">Logout</a> 
         
          <a href="usergvue.html" id="crud2" class="w3-bar-item w3-button"
            style="display: none;">Usuarios </a>
        </div>
     </div>

     <!-- a href="./shop.html" class="right orange shop"> 
        <img class="" src="./img/cart2.svg" alt="shop cart"></a -->
     <a href="./shop.html" class="w3-bar-item w3-button w3-hide-small w3-right" 
       style="background-color: #ff711a;" title="Shop"><i class="fa fa-shopping-cart" 
       style="font-size: 18px; color:white"></i></a>
</div> `

document.getElementById("header").innerHTML = sNav;



 function formatFecha( date) 
 {
    const sDOW = ""+ DOW( date.getDay() );
    const year = ""+ date.getFullYear();
    const month = String( date.getMonth() + 1).padStart(2, '0');
    const day   = String( date.getDate()).padStart(2, '0');
    const hour  = String( date.getHours()).padStart(2, '0');
    const mins  = String( date.getMinutes()).padStart(2, '0');
 //   let myDate = `${sDOW} ${day}/${month}/${year} - ${hour}:${mins}`;
    let myDate = sDOW + "  " + day +"/"+ month +"/"+ year +" - "+ hour +":"+ mins ;
  return myDate;
 }

//-----------------------------
 function DOW( nDay, base =0 ) {
  let sResult= "";
 const aDay=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];

  if( base == 1)
      nDay++;

  if( nDay >= 0  || nDay < 7)
      sResult = aDay[ nDay];
  return sResult;
 }

//document.querySelector("#version").innerHTML = formatFecha( dToday);

/*
//---- arma las cards 
 cad = ``;

function drawCards()
{
  for( let item of datos) {

    ini = `<div class="tarjeta">
     <img src=${item.imagen} alt=${item.nombre}>
     <div class="cuerpo">
        <h4>${item.nombre}</h4> `;
 
     med = (item.stock < 1) ? `<h5 class='red'>${item.estado}</h5> ` :`<h5>${item.estado}</h5>` +  
     `<h5 style="text-align:left;"> #${(item.id)+1500}</h5> ` ;
    end = `</div> </div> `;
    cad = cad + ini + med + end;
  }
 return cad;
}

drawCards();
*/

// debido a inexplicable "error" puse la linea inferior en carousel.html
//document.querySelector(".contenedor").innerHTML = cad;



// Coloca Redes sociales y barra final
navf = `
     <div class="social">
      <span style="width: 75vw">
       <a href="./index.html"> <i class="fa fa-home fa-home-hover"></i></a>
       <a href="https://facebook.com/geek/" > <i class="fa fa-facebook"></i></a>
       <a href="https://instagram.com/geek/"> <i class="fa fa-instagram"></i></a> 
       <a href="https://whatsapp.com/geek/" > <i class="fa fa-whatsapp"></i></a>
       <a href="https://telegram.com/geek/" > <i class="fa fa-telegram"></i></a>
       <a href="https://linkedin.com/geek/" > <i class="fa fa-linkedin"></i></a>
       <a href="https://github.io/geek/">     <i class="fa fa-github"  ></i></a>
       <a href="https://twitter.com/geek/"  > <i class="fa fa-twitterx" ></i></a>
       <a href="https://tiktok.com/geek/">    <i class="fa fa-tiktok"></i></a>
      </span>
      <span class="g20-ribbon" style="width: 25vw">&copy; 2024 Grupo-20</span>
     </div> `

document.querySelector(".myfooter").innerHTML = navf;

// iba despues de github
//       <a href="https://pinterest.com/geek/"> <i class="fa fa-pinterest"></i></a>

/*
// document.getElementById("fotos") = cad;
// document.querySelector("#fotos").innerHTML = cad;

//---- arma las cards 
 cad = `<div class="code">`;
 end = `</div`
function drawTable()
{
  for( let item of data) {

    cad = cad +
   ` ${item.id}, 
     "${item.nombre}", 
     "${item.categoria}",
     "${item.estado}",
     "${item.tipo}",
     ${item.talles},
     ${item.stock},
     "${item.colores}",
     "${item.imagen}",
     "${item.creado}"  <br>`
  }
  cad = cad + end;
//  cad.replaceAll('"','');
  document.getElementById("demo").innerHTML = cad;
 return "";
}

*/









