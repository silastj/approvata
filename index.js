const qInput = document.getElementById('square');

// Obtém valor do storage
var storageValue = localStorage.getItem('name'); 

// Verifica se já tem algum valor no storage
if(storageValue == null) {
	storageValue = 'Front end';
	localStorage.setItem("name", storageValue); 
}

// Atribue valor ao Input-div
qInput.innerHTML = storageValue;

//keydown
qInput.addEventListener('keydown', function(){
    const res = document.querySelector('.res');    
    res.classList.add('active');
});

//keyup
qInput.addEventListener('keyup', function(){
    const res = document.querySelector('.res');
    res.classList.remove('active');
});

//click
const button = document.getElementById('limpar');
button.addEventListener('click', function(){
    qInput.innerHTML = '';
});

//click  e localstorage
const gravar = document.getElementById('gravar');
gravar.addEventListener('click', function (){  
    localStorage.setItem("name", qInput.innerHTML);       
});


