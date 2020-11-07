document.querySelector('#btnconfirmar').addEventListener('click', () => {
    let n1=parseInt(document.getElementById('n1').value);
    let n2=parseInt(document.getElementById('n2').value);
    let n3=parseInt(document.getElementById('n3').value);
    let n4=parseInt(document.getElementById('n4').value);

q1=n1*n1;
q2=n2*n2;
q3=n3*n3;
q4=n4*n4;

if (q3>=1000){
    alert('O quadrado do 3ª número é: '+ q3);
} 
else{
    alert('Quadrado do 1ª número: '+ q1 + '\n' +
        'Quadrado do 2ª número: '+ q2 + '\n' +
        'Quadrado do 3ª número: '+ q3 + '\n' +
        'Quadrado do 4ª número: '+ q4 + '\n')
}

})