
var allProducts=document.querySelectorAll("a")
var content  = document.querySelector("#content")
var btn = document.querySelector("#add")



var totalPrice =0;


allProducts.forEach(function (item){
    item.onclick = function(){
        totalPrice += parseInt(item.getAttribute("price"))
        content.innerHTML += item.textContent + "<br> ";

        if (content.innerHTML != "") {
            addToCard.style.display = "block";
        }
    };

});

addToCard.onclick = function (){
    document.getElementById("totalPrice").style.display="block";
  document.getElementById("totalPrice").innerHTML=totalPrice
}