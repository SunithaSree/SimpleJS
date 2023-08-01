let list=document.getElementById("todo");
function addtask(){
    var task=document.getElementById("additem").value;
    var entry=document.createElement("li");
    entry.appendChild(document.createTextNode(task));
    list.appendChild(entry);
}
function removetask(){
var list=document.getElementById("todo");
list.removeChild(list.firstElementChild);
}