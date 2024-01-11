
function Calcular(){
let valcont = document.getElementById('iconta').value
let res = document.getElementById('res')
if(valcont === "" || isNaN(valcont) || valcont < 0){
    window.alert('Algum componente esta vazio tente novamente');
}
else{
    let porcentagem = document.getElementById('tipInput').value;
    let gorjeta = (valcont * porcentagem) / 100;
    let valorTotal = parseFloat(valcont) + gorjeta;

    
    document.getElementById('tgorjeta').value = ('$' + gorjeta.toFixed(2));
    document.getElementById('vt').value = ('$' + valorTotal.toFixed(2));
    
    res.hidden = false
    
}
}
function porcem(){
    let rangevalue = document.getElementById('tipInput').value
    document.getElementById('porcentagemDisplay').innerText = rangevalue + '%';
}