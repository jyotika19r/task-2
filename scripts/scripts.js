var det=document.getElementsByClassName('card');
var popup=document.getElementById("container");
document.getElementById("open").onclick=function() {pop()};
document.getElementById("close").onclick=function() {add()};
function pop() {
    popup.style.display= "block";
}
for(let i=0;i<det.length;i++){
    det[i].onclick=function() {print(i)};
}
var input_val=document.getElementsByTagName('input');
function print(i) {
    popup.style.display= "block";
    input_val[1].value=det[i].getElementsByTagName("p")[0].innerHTML.split(" ")[0];
    input_val[2].value=det[i].getElementsByTagName("p")[0].innerHTML.split(" ")[1];
    input_val[3].value=det[i].getElementsByTagName("p")[1].innerHTML;
    input_val[4].value=det[i].getElementsByTagName("p")[2].innerHTML;
    input_val[5].value=det[i].getElementsByTagName("p")[3].innerHTML;
}
var card_values=[];
function add() {
    popup.style.display= "none";
    card_values[0]=input_val[1].value+" " + input_val[2].value;
    // for(let j=1;j<3;j++){
    //     card_values[j]=input_val[j+2];
    // }
    console.log(card_values);
}