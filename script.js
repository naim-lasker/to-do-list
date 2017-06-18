function newElement(){
  var inputValue = document.getElementById('myInput').value;
  var textValue = document.createTextNode(inputValue);
  var li = document.createElement('li');
  li.appendChild(textValue);
  if(inputValue===''){
    alert('Write Something.');
  } else {
    document.getElementById('myUL').appendChild(li);
  }
  document.getElementById('myInput').value= '';
 
  var removeButton = document.createElement("button");
  var buttonValue = document.createTextNode("Remove");
  removeButton.appendChild(buttonValue); 
  li.appendChild(removeButton);
  removeButton.className = "closeButton";
  
  var remove = document.getElementsByClassName("closeButton");  
  for (i = 0; i < remove.length; i++) {
    remove[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
