var element = document.getElementById("div1");
var intialState = 4;
var call = new XMLHttpRequest();
var button = document.getElementById("button");
var i = 0;
var columnOne = document.getElementById("column1");
var columnTwo = document.getElementById("column2");
var data = {};

function printDOM () {

  for (i; i <= intialState; i++) {

    var tile = document.createElement("div");
    tile.setAttribute("class", "tile");

    if(columnOne.offsetHeight < columnTwo.offsetHeight){
        columnOne.appendChild(tile);
    }
    else {
        columnTwo.appendChild(tile);
    }

    if (data.tiles[i].image) {
      var img = document.createElement("IMG");
      img.setAttribute("src", data.tiles[i].image);
      tile.appendChild(img);
    } else {
      var bar = document.createElement("div");
      bar.setAttribute("class", "bar");
      tile.appendChild(bar);
    }

    var h2 = document.createElement("h2");
    var node = document.createTextNode(data.tiles[i].heading);
    h2.appendChild(node);
  	tile.appendChild(h2);

    var p = document.createElement("p");
    node = document.createTextNode(data.tiles[i].content);
    p.appendChild(node);
  	tile.appendChild(p);

    var h4 = document.createElement("h4");
    node = document.createTextNode(data.tiles[i].meta);
    h4.appendChild(node);
  	tile.appendChild(h4);
  }
}

function load() {
  intialState = data.tiles.length - 1;
  i = 5;
  button.setAttribute("style", "display: none");
  printDOM();
}

call.open("GET", "../masonry-data.json");
call.onload = function() {
	if (call.status >=200 && call.status < 400) {
		data = JSON.parse(call.responseText);
		printDOM();
	}
};
call.send();
