let header = document.querySelector('.header');
let main = document.querySelector('.main');

header.innerHTML = getGRDate();

function getGRDate(){

    let daysGR = ['Κυριακή','Δευτέρα','Τρίτη','Τετάρτη','Πέμπτη','Παρασκευή','Σάββατο'];
    let monthsGR = ['Ιανουαρίου','Φεβρουαρίου','Μαρτίου','Απριλίου','Μαΐου','Ιουνίου','Ιουλίου','Αυγούστου','Σεπτεμβρίου','Οκτωβρίου','Νοεμβρίου','Δεκεμβρίου']

    let curDate = new Date();

    let day = daysGR[curDate.getDay()];
    let date = curDate.getDate();
    let month = monthsGR[curDate.getMonth()];
    let year = curDate.getFullYear();
    let hours = curDate.getHours();
    let minutes = curDate.getMinutes();
    let seconds = curDate.getSeconds();

    return  day + ', ' + date + ' ' + month + ' ' + year + '<br>' +
     (((hours < 10) ?  '0' : '' ) + hours) + ':' +
     (((minutes < 10) ?  '0' : '' ) + minutes) + ':' + 
     (((seconds < 10) ?  '0' : '' ) + seconds);
}

let idnum = 1;

function insertItem(){
    let noteName = document.getElementById('note-name');
    let noteNameText = noteName.value;

    if (noteNameText === ''){
        return;
    }

    let newCheckbox = document.createElement('input');
    newCheckbox.setAttribute('type','checkbox');
    newCheckbox.setAttribute('id', 'item' + idnum);
    newCheckbox.setAttribute('onclick','strikeThrough(this)');

    let newLabel = document.createElement('label');
    newLabel.setAttribute('for', 'item' + idnum); 
    newLabel.innerHTML = noteNameText;

    let newDiv = document.createElement('div');
    newDiv.setAttribute('class','item');
    newDiv.appendChild(newCheckbox);
    newDiv.appendChild(newLabel);

    let newBtn = document.createElement('button');
    newBtn.setAttribute('type','button');
    newBtn.setAttribute('onclick', 'deleteItem(this.parentElement)');
    newBtn.textContent = 'X';
  
    let newLi = document.createElement('li');
    newLi.appendChild(newDiv);
    newLi.appendChild(newBtn);

    let ul = document.querySelector('.main > ul');

    ul.appendChild(newLi);

    noteName.value = '';

    idnum++;
}

document.getElementById('note-name').addEventListener('keyup', function(event){
    if((event.key === 'Enter') && (document.getElementById('note-name').value != '')){
        insertItem();
    }
})

function deleteItem(item){
    item.remove();
}

function strikeThrough(item){
    if( item.checked){
        item.nextElementSibling.style.textDecoration = 'line-through';
        item.nextElementSibling.style.color = 'grey';
    }else{
        item.nextElementSibling.style.textDecoration = 'none';
        item.nextElementSibling.style.color = 'black';
    }
}