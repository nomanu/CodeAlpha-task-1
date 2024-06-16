 let list = document.getElementById('list')
 let inputData = document.getElementById('input-data')

 function add(){
    if(inputData.value === ''){
        alert('Enter Your Data')
    }
    else{
        let data = document.createElement('li')
        data.textContent = inputData.value
        list.appendChild(data)

        let span = document.createElement('span');
        span.textContent = '\u00d7';
        data.appendChild(span)

    }
    inputData.value=''
 }

 list.addEventListener('click', (el)=>{
    if(el.target.tagName == 'li'){
        el.target.classList.toogle('checked')
    }
    else if(el.target.tagName == 'SPAN'){
        el.target.parentElement.remove()

    }
 })