const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");


function addtask(){
    if(inputBox.value === ''){
        alert("You must write somethimg !!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    savedata();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagname === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagname === "SPAN"){
        e.target.parentElement.remover();
        savedata();
    }
},false);
function savedata(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showtask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showtask();
