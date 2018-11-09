var array = Array();
var x=0;
function add() {
    array[x] = document.getElementById("txt").value;
    alert("Element: " + array[x] + " Added at index " + x);
    x++;
    document.getElementById("txt ").value = "";
}

function show() {
    var e = "<hr/>";
    for (var i=0; i<array.length;i++){
       e += "Element " + i + " = " + array[i] + "<br/>";
    }
    document.getElementById("div").innerHTML = e;
}