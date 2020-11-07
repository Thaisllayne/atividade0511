document.querySelector('#btn').addEventListener('click', () => {
    let nome=document.getElementById('nome').value;
    let quantidade=parseInt(document.getElementById('quantidade').value);
    let preco=parseFloat(document.getElementById('preco').value);
    let valort, desconto, total;

valort=quantidade*preco;
document.write('O produto é: '+nome+'<br>')
document.write('O valor é de '+valort+' reais'+'<br>');

if (quantidade<= 5){
    desconto=valort*(2/100);
    document.write('O desconto é de: '+desconto+' reais'+'<br>');
}
else if (quantidade>5 && quantidade<=10){
    desconto=valort*(3/100);
    document.write('O desconto é de: '+desconto+' reais'+'<br>');
}
else{  
        desconto=valort*(5/100);
        document.write('O desconto é de: '+desconto+' reais'+'<br>');
}

total=valort-desconto;
document.write('O valor final é de: '+total+' reais')

})
