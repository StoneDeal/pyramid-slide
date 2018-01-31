
function determineHeightAndThenDrawPyramid() {
    
        console.log("someone invoked the determineHeightAndThenDrawPyramid function!");
        var heightInput = document.getElementById("height");
        
        heightStr = heightInput.value;
    
        height = parseInt(heightStr);
    
        drawPyramid(height)
    
    }
    
    
    var symbol = document.getElementById("symbol");
    
    symbol.addEventListener("onchange", determineHeightAndThenDrawPyramid()); 
    
    var printSymbol = document.getElementById("symbol");
    
    printSymbol.addEventListener("onchange", function() {
        determineHeightAndThenDrawPyramid()
    });
    
    var heightInput = document.getElementById("height");
    heightInput.addEventListener("oninput", determineHeightAndThenDrawPyramid());
    
    var heightChange = document.getElementById("height");
    heightChange.addEventListener("oninput", function() {
        var height = heightChange.value;
        heightText = document.createTextNode(height);
        var sliderValue = document.getElementById("span");
        sliderValue.appendChild(heightText);

        determineHeightAndThenDrawPyramid()
    });
    
     function drawPyramid(height) {

         document.getElementById("pyramid").innerHTML = "";
         var symbolInput = document.getElementById("symbol");
         symbolQ = symbolInput.value;
         var symbol = symbolQ.split('"').join('');
    
         for (var row = 0; row < height; row++) {
    
             var numBricks = row + 2;
             var numSpaces = height - row - 1;
    
             var rowStr = "";
             for (var i = 0; i < numSpaces; i++) {
                 rowStr += ".";
             }
             for (var i = 0; i < numBricks; i++) {
                 rowStr += symbol;
             }
    
            textElem = document.createTextNode(rowStr);
    
            rowElem = document.createElement("p");
            rowElem.appendChild(textElem);
    
            document.getElementById("pyramid").appendChild(rowElem);
        }
    }
    