window.onload = function(){
    document.getElementById("calculate-imc").addEventListener("click", function(){
        height = parseFloat(document.getElementById("height-input").value);
        weight = parseFloat(document.getElementById("weight-input").value);

        if(isNaN(height) || isNaN(weight)){
            alert("Insira valores válidos.");
            return;
        }

        document.getElementById("imc-result").value = (weight / (height * height)).toFixed(2);
    });
}