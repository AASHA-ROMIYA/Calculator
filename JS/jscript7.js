const body=document.querySelector(".body")
const input=document.querySelector(".input");
const theme=document.querySelector(".theme");
const head=document.querySelector(".head")
const calculator=document.querySelector(".calculator");
theme.addEventListener("click",()=>{
calculator.style.display="flex";
calculator.classList.add("hover");
theme.style.display="none";
head.style.display="none";
});

function display(val){
    input.value += val;
}
function Clear(){
    input.value = '';
}
function del()
{
input.value=input.value.toString().slice(0,-1);
}
function calculate(){
    try{
        input.value=eval(input.value);
    }
    catch{
        alert("you enter wrongly");
    }

}

