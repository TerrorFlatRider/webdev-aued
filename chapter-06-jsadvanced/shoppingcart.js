let cart = ['milk','egg'];

function insertHoney (){
    if(cart.indexOf('honey') == -1){
        cart.push('honey');
        alert('Honey inserted');
    }else{
        alert('Honey already exists');
    }
}

function deleteHoney(){

    let deleted = false;
    let output;

    for(let i = cart.length -1; i >= 0; i--)
    {
        if(cart[i] == 'honey'){
            cart.splice(i,1);
            deleted = true;
        }
    }

    output = (deleted) ? 'Honey deleted successfully' : 'Honey not found';
    alert(output);
}

insertHoney();
insertHoney();
deleteHoney();
deleteHoney();