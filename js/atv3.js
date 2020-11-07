document.querySelector('#btn').addEventListener('click', ()=> {
    let nome=document.getElementById('nome').value;


    for (let i = 1; i <= 200; i++) {
        document.write(i+' - '+ nome + '<br>')
        
    }
})