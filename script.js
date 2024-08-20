window.onload = function(){
    //função ativada após o usuário clicar no botão Calcular
    document.getElementById("calculate-imc").addEventListener("click", function(){
        //armazena o valor do campo Altura
        height = parseFloat(document.getElementById("height-input").value);
        //armazena o valor do campo Peso
        weight = parseFloat(document.getElementById("weight-input").value);

        //retorna o valor do IMC calculado para o campo IMC
        document.getElementById("imc-result").value = calculateIMC(height, weight);
    });
}


function calculateIMC(height, weight) {
    //verifica se os valores são numéricos
    if(isNaN(height) || isNaN(weight)){
        alert("Insira valores válidos.");
        return '';
    } else {
        //cálculo do IMC
        return (weight / (height * height)).toFixed(2);
    };
};