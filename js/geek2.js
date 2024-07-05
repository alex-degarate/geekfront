
// BACK-END styles
//--------------------------------------------------------
// header construction N-U-E-V-O
//<a href="./index.html" class="topnav orange"><i class="fa fa-home fa-home-hover px18"></i>Home </a>
var zx = " ";

var sNav = ``; 
sNav = sNav + `
<div class="w3-top" style="line-height: 22px;">
   <div class="w3-bar w3-theme-d2 w3-left-align" >
  
   <a class="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-hover-white w3-theme-d2"    
      href="javascript:void(0);" onclick="openNav()"><i class="fa fa-bars"></i></a>

     <a href="./index.html"" class="w3-bar-item w3-button" style="background-color: #ff711a;">
      <i class="fa fa-home" style="font-size: 18px"></i></a>
     <a href="./company.html"  class="w3-bar-item w3-button w3-hide-small w3-hover-white">Empresa</a>
     <a href="./contact.html"  class="w3-bar-item w3-button w3-hide-small w3-hover-white">Contacto</a>
     <a href="./carousel.html" class="w3-bar-item w3-button w3-hide-small w3-hover-white">Carousel</a>
     <a href="./registro.html" class="w3-bar-item w3-button w3-hide-small w3-hover-white">Registro</a>
     <a href="./login.html"    class="w3-bar-item w3-button w3-hide-small w3-hover-white">Login</a>

     <div class="w3-dropdown-hover w3-hide-small">
        <button class="w3-button" title="Notifications" id="crud" 
        style="visibility: hidden; display: none">Administ 
        <i class="fa fa-caret-down"></i>
        </button>     

        <div class="w3-dropdown-content w3-card-4 w3-bar-block">
          <a href="./prodgvue.html" id="crud1" class="w3-bar-item w3-button"
            >Productos</a>
          <a href="" id="logout" onclick="logout()" class="w3-bar-item w3-button">Logout</a> 
         
          <a href="usergvue.html" id="crud2" class="w3-bar-item w3-button"
            style="visibility: hidden;">Usuarios </a>
        </div>
     </div>

     <!-- a href="./shop.html" class="right orange shop"> 
        <img class="" src="./img/cart2.svg" alt="shop cart"></a -->

       <div class="w3-right">
        <a href="" id="guser" class="w3-button w3-hide-small"
          style="display: inline-block; font-size: 10px;">Ale | 998</a>

       <a href="./shop.html" class="w3-bar-item w3-button w3-hide-small w3-right" 
       style="background-color: #ff711a;" title="Shop"><i class="fa fa-shopping-cart" 
       style="font-size: 18px; color:white"></i></a>
     </div>
</div> `

 
//document.querySelector("header").innerHTML = sNav;
document.getElementById("header").innerHTML = sNav;


function clearUser() {
  if (sessionStorage.getItem("adm")!="1") {
      document.getElementById("guser").innerHTML = " ";
  }
}

// get user & level and show in the bar
function showUser() {
  if (sessionStorage.getItem("adm") !="1") 
  {
     let guser = sessionStorage.getItem("usr");
     let glev  = sessionStorage.getItem("lev");
     // alert("->" + guser + " / " +glev );
     document.getElementById("guser").innerHTML = guser + " / "+ glev;
  }
  else
     document.getElementById("guser").innerHTML = " ";
}

 showUser();


//--------------------------------------------------------
// footer construction
var sFooter = ``;
sFooter = sFooter + ``;
// document.querySelector("footer").innerHTML = sFooter;


/*
 let formatDate = (date) => {
    const sDOW = ""+ DOW( date.getDay() );
    const year = ""+ date.getFullYear();
    const month = String( date.getMonth() + 1).padStart(2, '0');
    const day   = String( date.getDate()).padStart(2, '0');
    const hour  = String( date.getHours()).padStart(2, '0');
    const mins  = String( date.getMinutes()).padStart(2, '0');
    let localDate = `${sDOW} ${day}/${month}/${year} - ${hour}:${mins}`;
//    let myDate = sDOW + "  " + day +"/"+ month +"/"+ year +" - "+ hour +":"+ mins ;
  return myDate
 };
*/

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

function formatDate( date) {
// let formatDate = (date) => {
    const year = date.getFullYear();
    const month = String( date.getMonth() + 1).padStart(2, '0');
    const day   = String( date.getDate()).padStart(2, '0');
    let localDate = `${year}-${month}-${day}`;
  return localDate;
 };

/*
//document.querySelector("#ultmod").innerHTML = formatDate( new Date() );
 var entrada = document.querySelector('#ultmod');
 if( entrada == null) {
     aa = 1; 
 } else {
     entrada.value = formatDate( new Date());
 }
*/


// coloca footer en los html con formularios
var goback = `<div><nav id="footbar"> 
<span><input type="button" value=" Volver " onclick="history.go(-1)" class="volver"></span>
<span class="g20-ribbon" style="width: 90vw">&copy; 2024 Grupo-20</span>
</nav></div>`

if( document.getElementById("volver") != null) {
    document.getElementById("volver").innerHTML = goback;
}


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

document.getElementsByClassName("myfooter").innerHTML = navf;

//** old *** querySelector(".myfooter").innerHTML = navf;





function logout() 
{
  alert("Ud. ha realizado un LOGOUT del sitio");
  sessionStorage.removeItem("usr");
  sessionStorage.removeItem("lev");
  sessionStorage.removeItem("adm");
  document.getElementById("crud2").style.visibility = 'hidden';
  document.getElementById("crud").style.visibility = 'hidden';
  document.getElementById("crud").style.display = 'none';
  clearUser() 
  window.open("./index.html");
}

// check

if (sessionStorage.getItem("adm")!="1"){
   // not login 
 //  document.getElementById("crud").style.display = 'none';
}else{
   // login inside 
   let nivel = parseInt( sessionStorage.getItem("lev") );
   // alert("nivel" + nivel);
   if( nivel > 900) {
       document.getElementById("crud").style.display = 'block';
       document.getElementById("crud").style.visibility = 'visible';
       document.getElementById("crud2").style.visibility = 'visible';
   }
   else
      if( nivel > 100 && nivel < 900) {
         document.getElementById("crud").style.display = 'block';
         document.getElementById("crud").style.visibility = 'visible';
      }
 }

function Today() {
   return formatDate( new Date());
}

 








