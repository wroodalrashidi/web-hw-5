function addItem() {
    console.log("Inside addItem");
    var item = document.getElementById("input").value;
    console.log(item);
    
    
    var ul = document.getElementById("toDoList");
    
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("- " + item));   
    ul.appendChild(li);  
    
    document.getElementById("input").value = "";  
    
    li.onclick = removeItem;  
}

document.body.onkeyup = function(i) {
  if (i.keyCode == 13) {
    console.log("enter clicked!");
    addItem();
  }
};

function removeItem(i) {
  i.target.remove()
}
