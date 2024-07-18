// BACK-END 
// get user & level and show in the bar
if (sessionStorage.getItem("adm") != "1") {
    document.getElementById("guser").innerHTML = " ";
  }
else { 
   let guser = sessionStorage.getItem("usr");
   let glev  = sessionStorage.getItem("lev");
   if(document.getElementById("guser") != null)
      document.getElementById("guser").innerHTML = guser + " / "+ glev;
}


/*
//document.querySelector("#ultmod").innerHTML = formatDate( new Date() );
 var entrada = document.querySelector('#ultmod');
 if( entrada == null) {
     aa = 1; 
 } else {
     entrada.value = formatDate( new Date());
 }
*/

function logout() 
{
  alert("Ud. ha realizado un LOGOUT del sitio");
  sessionStorage.removeItem("usr");
  sessionStorage.removeItem("lev");
  sessionStorage.removeItem("adm");
  document.getElementById("crud3").style.display = 'none';
  document.getElementById("crud2").style.display = 'none';
  document.getElementById("crud").style.display = 'none';
  window.location.replace("./index.html");
  window.open("./index.html");
}


// check login
if (sessionStorage.getItem("adm")!="1"){
   // not login 
}else{
   // login inside 
   let nivel = parseInt( sessionStorage.getItem("lev") );
   // alert("nivel" + nivel);
   if( nivel > 900) {
       document.getElementById("crud").style.display = 'block';
       document.getElementById("crud2").style.display = 'block';
       document.getElementById("crud3").style.display = 'block';
   }
   else
      if( nivel > 300 && nivel < 600) {
         document.getElementById("crud").style.display = 'block';
         document.getElementById("crud2").style.display = 'block';
      }
      else { // nivel < 100
         document.getElementById("crud").style.display = 'block';
      }
      
} //endif



function between(x, nInf, nSup) {
  return x >= nInf && x < nSup;
}
 
function isEmpty(value){
    return value === null || typeof(value) === 'undefined' || value === ''
}


/*
// check login
if (sessionStorage.getItem("adm")!="1"){
   // not login 
}else{
   // login inside 
   let nivel = parseInt( sessionStorage.getItem("lev") );
   // alert("nivel" + nivel);
   if( nivel > 900) {
       document.getElementById("crud").style.display = 'block';
       document.getElementById("crud2").style.display = 'block';
       document.getElementById("crud3").style.display = 'block';
   }
   else
      if( nivel > 100 && nivel < 300) {
         document.getElementById("crud").style.display = 'block';
      }
 }

*/ 

