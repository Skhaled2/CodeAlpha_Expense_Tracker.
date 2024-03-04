     var productnameinput= document.getElementById('productname');
var productpriceinput= document.getElementById('productprice');
var productcategoryinput= document.getElementById('productcategory');
var productdescinput= document.getElementById('productdesc');
var addbtn=document.getElementById("addbtn");
var inputs=document.getElementsByClassName('form-control');
var products=[];
var currentindex=0;

if(JSON.parse(localStorage.getItem("savevalue")) !=null){
     products=JSON.parse(localStorage.getItem("savevalue"))
     displaydata();
}
displaydata()



addbtn.onclick=function(){
     if(addbtn.innerHTML=='add product'){
          addproduct()
     }
     else{
          updateproduct()

     }
    displaydata();
    reset();
    addbtn.disabled='true';
    addbtn.innerHTML="add product"

}
function addproduct(){
     var product={
          name:productnameinput.value,
          price:productpriceinput.value,
          category:productcategoryinput.value,
          desc:productdescinput.value
     }
    products.push(product)
     localStorage.setItem("savevalue",JSON.stringify(products))
}
function displaydata(){
     var elementintable=''
     for (var i=0; i <products.length;i++){
     elementintable+=`<tr>
     <td>${products[i].name}</td>
     <td>${products[i].price}</td>
     <td>${products[i].category}</td>
     <td>${products[i].desc}</td>
     <td><button onclick='getproductinfo(${i})'class="btn btn-outline-warning">update</button></td>
     <td><button onclick='deleteproduct(${i})' class="btn btn-outline-danger">delete</button></td>
     </tr>`;
     }
     document.getElementById('tablebody').innerHTML=elementintable;
}
function reset(){
     // productnameinput.value=''
     // productpriceinput.value=''
     // productcategoryinput.value=''
     // productdescinput.value=''
     for( var i=0 ; i<inputs.length;i++){
          inputs[i].value=''

     }
}
function getproductinfo(index){
     currentindex=index;
    var currentproduct=products[index];
    productnameinput.value=currentproduct.name;
    productpriceinput.value=currentproduct.price;
    productcategoryinput.value=currentproduct.category;
    productdescinput.value=currentproduct.desc;
    addbtn.innerHTML="update"

}

function deleteproduct(index){
products.splice(index,1);
displaydata()
     // alert("done")
     localStorage.setItem("savevalue",JSON.stringify(products))

}
function updateproduct(){
     // alert(currentindex)
     var product={
          name:productnameinput.value,
          price:productpriceinput.value,
          category:productcategoryinput.value,
          desc:productdescinput.value
     }
     products[currentindex]=product;
     localStorage.setItem("savevalue",JSON.stringify(products))

}

 function search(txt){  
     var elementintable=''
     for (var i=0; i <products.length;i++){
          if(products[i].name.toLowerCase().includes(txt.toLowerCase())){
               elementintable+=`<tr>
               <td>${products[i].name}</td>
               <td>${products[i].price}</td>
               <td>${products[i].category}</td>
               <td>${products[i].desc}</td>
               <td><button onclick='getproductinfo(${i})'class=" btn btn-outline-warning">update</button></td>
               <td><button onclick='deleteproduct(${i})' class=" btn btn-outline-danger">delete</button></td>
               </tr>`;

          }
     
     }
     document.getElementById('tablebody').innerHTML=elementintable;}

document.getElementById('namealert')
document.getElementById('catalert')
document.getElementById('desalert')
document.getElementById('pricealert')

var namerejex=/^[A-Za-z\s]{2,50}$/;   
var catrejex=/^[A-Za-z\s]{2,50}$/;
var descrejex=/^[A-Za-z\s]{2,50}$/; 
var pricerejex = /^\d+(\.\d{1,2})?$/;    



productnameinput.onkeyup=function(){
if(namerejex.test(productnameinput.value))
{
//     addbtn.removeAttribute('disabled')
    productnameinput.classList.add('is-valid')    
    productnameinput.classList.remove('is-invalid')
    namealert.classList.add('d-none')



}
else{
//     addbtn.disabled='true';
    productnameinput.classList.add('is-invalid');
    productnameinput.classList.remove('is-valid');
    namealert.classList.remove('d-none')

}
checkButtonState()
}
productpriceinput.onkeyup=function(){
     if(pricerejex.test(productpriceinput.value))
     {
     //     addbtn.removeAttribute('disabled')
     productpriceinput.classList.add('is-valid')
     productpriceinput.classList.remove('is-invalid')
     pricealert.classList.add('d-none')
     
     
     
     }
     else{
     //     addbtn.disabled='true';
     productpriceinput.classList.add('is-invalid');
     productpriceinput.classList.remove('is-valid');
     pricealert.classList.remove('d-none')
     
     }
     checkButtonState()
     }

productcategoryinput.onkeyup=function(){
 if(catrejex.test(productcategoryinput.value))
 {
     // addbtn.removeAttribute('disabled')
     productcategoryinput.classList.add('is-valid')
     productcategoryinput.classList.remove('is-invalid')
     catalert.classList.add('d-none')
 }
 else{
     // addbtn.disabled='true';
     productcategoryinput.classList.add('is-invalid');
     productcategoryinput.classList.remove('is-valid');
     catalert.classList.remove('d-none')
 
 }
 checkButtonState()
 }
  
 function checkButtonState() {
     if (namerejex.test(productnameinput.value) && catrejex.test(productcategoryinput.value) && pricerejex.test(productpriceinput.value)) {
         addbtn.removeAttribute('disabled');
     } else {
         addbtn.disabled = true;
     }
 }