var color = new Array();
color[0] = "#0037ff";
color[1] = "#ff0000";
color[2] = "#284c2d";
color[3] = "#ff8000";
color[4] = "#00b7ff";
color[5] = "#CCFF99";
color[6] = "#ffe600";
color[7] = "#000000";
color[8] = "#fbacff";
color[9] = "#828282";

function changeColor()
{
    var lastColorIndex = localStorage.getItem('lastColorIndex') || -1;
  var randomColor = -1;
    while(lastColorIndex == randomColor || randomColor === -1) {        
  randomColor = Math.floor(Math.random() * color.length);
        console.log('LastIndex: ' + lastColorIndex + ',RandomColor: ' + randomColor);
    };
    localStorage.setItem('lastColorIndex',randomColor);
    //console.log(randomColor);
  console.log(color[randomColor]);
    document.getElementsByTagName("body")[0].style.backgroundColor=color[randomColor];
};

changeColor();  // do this in window.onload !!  window.onload(changeColor)
