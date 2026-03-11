var color = new Array();
color[0] = "#33a040";
color[1] = "#005522";
color[2] = "#70956e";
color[3] = "#65b800";
color[4] = "#385545";
color[5] = "#477700";
color[6] = "#525f25";
color[7] = "#014400";


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
