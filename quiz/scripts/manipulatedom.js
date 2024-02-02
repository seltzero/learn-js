window.onload = function() {
  document.getElementById('addTableBtn').addEventListener('click', addTable);
}

function createTRNode(colNodes) {
  let trNode = document.createElement("tr");
  colNodes.forEach(function(colNode) {
    trNode.appendChild(colNode);
  })
  return trNode;
}

function createTDNode(childNode) {
  let tdNode = document.createElement("td");
  tdNode.appendChild(childNode);
  return tdNode;
}

function createTxtNode(txt) {
  let txtNode = document.createTextNode(txt);
  return txtNode;
}

// function to create a button object node based on given input text and return it
function createButtonNode(txt) {
  let buttonNode = document.createElement("button");
  buttonNode.appendChild(createTxtNode(txt));
  buttonNode.addEventListener('click', editText);
  return buttonNode;
}

// function that when an edit text button is clicked, will replace the text in the cell with a text input box
function editText() {
  let tdNode = this.parentElement;
  let prevTdNode = tdNode.previousElementSibling;
  let txtNode = prevTdNode.childNodes[0];
  let inputNode = document.createElement("input");
  inputNode.value = txtNode.nodeValue;
  prevTdNode.replaceChild(inputNode, txtNode);
}


function addTable() {
  const tableNode = document.createElement("table");
  for(let i = 0; i < 3; i++) {
    let col1 = createTDNode(createTxtNode("Cell (" + i + ", 0)"));
    let col2 = createTDNode(createButtonNode("Edit Text"));
    tableNode.appendChild(createTRNode([col1, col2]));
  }
  document.getElementById("root").appendChild(tableNode);
}
