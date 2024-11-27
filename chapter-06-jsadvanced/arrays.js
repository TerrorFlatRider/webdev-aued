//CRUD Create Read Update Delete

//Populate
let products = ['milk','egg'];
products[products.length]='honey';

//Add new value to array end
products.push('honey');

//Add new value to array start
products.unshift('honey');

//Add new value to array index
products.splice(1,0,'orange');

//Show results
alert(products.join()); //honey,orange,milk,egg,honey,honey


//Delete

//Remove & return value from array end
let product = products.pop();

//Remove & return value from array start
let shiftedProduct = products.shift();

//Remove & return value from array index
let deletedProduct = products.splice(1,1);

//Show results
alert(products.join()); //orange,egg,honey

//Search
let orangePosition = products.IndexOf('orange');
alert(orangePosition);

//Update
products[0] = 'oranges';
alert(products.join());

//Traverse

for(let i =0; i<products.length; i++){
    document.write(products[i] + ' ');
}

//or

for(let product of products){
    document.write(product + '--');
}