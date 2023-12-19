const form = document.getElementById('form1')

const resp1 = document.getElementById('outresp')

form.addEventListener('submit', function(e){
    const A = Number(form.campoA.value)
    const B = Number(form.campoB.value)

        if(A>B){
            document.querySelector('.error-message').style.display = 'none';
            document.querySelector('.success-message').style.display = 'block';
        } else{
            document.querySelector('.error-message').style.display = 'block';
            document.querySelector('.success-message').style.display = 'none';
        }

    e.preventDefault();
    
})






