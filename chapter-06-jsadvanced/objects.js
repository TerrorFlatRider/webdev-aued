//AUEB Chapter 06 Advance JS - Lesson 03 Objects

//Object Declaration
let studentAlice = {
    firstname: 'Alice',
    lastname: 'Alice in Wonderland',
    age: 18,
    height:1.65
}

studentAlice.lastname = 'Wonderland';
studentAlice['age'] = 19;


for(let property in studentAlice){
    document.write(`${studentAlice[property]} `);
    document.write('<br>');
}
