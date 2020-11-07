document.querySelector('#btn').addEventListener('click', ()=>{
    let num=parseInt(document.getElementById('num').value);

    for (let i = 0; i <= 10; i++) {
        tab=num * i;
        document.write(num +' X '+i+'= '+tab + '<br>')
    }
})