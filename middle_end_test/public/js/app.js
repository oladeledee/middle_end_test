//declaring dropdown variable
var mySidebar = document.getElementById("mySidebar");
var select = document.getElementById("dropdown");


//on open option
function openNav() {
  document.getElementById("mySidebar").style.width = "200px";
  document.getElementById("main").style.marginLeft = "200px";
  document.getElementById("overlay").style.display = "block";
 
}
// on close option
function closeNav() {
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("mySidebar").style.width = "0";
}
//automatic close option
 window.onclick = function (event) {
   if (!event.target.matches(".sidebar")) {
     if (!event.target.matches(".openbtn")) {
       if (!event.target.matches(".select-box__input-text")) {
         if (!event.target.matches("#dropdown")) {
           document.getElementById("main").style.marginLeft = "0";
           document.getElementById("mySidebar").style.width = "0";

         }
      }
     }
   }
};

//function for cloning div
$(document).ready(function () {
  let dropdown_value;
  let quantity;
  $("#dropdown").change(function () {
    // if (this.value != "")
    dropdown_value = this.value;
    // alert(dropdown_value);
    $("#QUANTITY").keyup(function () {
      quantity = this.value;
      console.log(dropdown_value);
      if (quantity != "" && dropdown_value != "") {
        alert(quantity);

        for (i = 1; i < parseInt(quantity) + 1; i++) {
         let totalnum=$("ol").append(`<li class="lii" id="list-${i}">
                            <div div class="dot">
                              <div class="position">${dropdown_value}${i}</div>
                            </div>
                            ${dropdown_value}${i}
         
                            </li>`);
            
        } }
      }
    )
    }
  )
}
)
//function for required quantiy and red color
function highlight(){
  var Quantity = document.getElementById("QUANTITY").value;
  if(Quantity == null || Quantity == ""){
      document.getElementById("fill").style.color="red";
     
      
  }
}
  








      
  


