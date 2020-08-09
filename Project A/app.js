var mySidebar = document.getElementById("mySidebar");
var select = document.getElementById("dropdown")
function openNav(){
    document.getElementById("mySidebar").style.width="200px";
    document.getElementById("main").style.marginLeft="200px";
    document.getElementById("overlay").style.display="block";
    // document.getElementById("openBtn").style.borderRadius="0px -10px -10px 0px";
}

function closeNav(){
    document.getElementById("main").style.marginLeft="0";
    document.getElementById("mySidebar").style.width="0";
}
window.onclick = function(event){
    if (!event.target.matches(".sidebar") ) {
        if(!event.target.matches(".openbtn")){
            if(!event.target.matches(".select-box__input-text")){
                if(!event.target.matches(".select-box__option")){
                
        document.getElementById("main").style.marginLeft="0";
    document.getElementById("mySidebar").style.width="0";
        var i;
//        for (i = 0; i < dropdowns.length; i++) {
  //        var openDropdown = dropdowns[i];
    //      if (openDropdown.classList.contains('show')) {
      //      openDropdown.classList.remove('show');
        //  }
//        }
    }
}
}
    }

}
/*function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
*/


function go(){
  console.log("12131");

  dropdown= document.getElementById("dropdown").value;
if ( dropdown = "1" ){
console.log('press something');
      var total = document.getElementById("QUANTITY").value;
      var t1=Number(total);
    
var divclone;
console.log('press something');
for(let i=0; i <total; i++){
  var mydiv =document.getElementById("A3");
  console.log('press something again'); 
 divclone=mydiv.cloneNode(true);
  document.body.appendChild(divclone)

 //document.querySelector(main).insertAdjacentHTML("beforeend",mydiv)
}



   }
   
  } 