//AUEB Chapter 06 Advance JS - Lesson 04 Array Objects

let mobileContacts = [{name:'Athanasios Goulas',phone:'6987555461'}]

function insertContact (contactName, phoneNumber){
    let contact = {name: contactName, phone: phoneNumber};
    mobileContacts.push(contact);
    alert('Contact inserted');
}

function deleteContact (phoneNumber){
    let deleted = false;
    let output;

    for(let i = mobileContacts.length-1; i>= 0; i--){
        if(mobileContacts[i]['phone'] == phoneNumber){
            mobileContacts.splice(i,1);
            deleted = true;
        }
    }

    output = (deleted) ? "Deleted successfully" : "Contact not found";

    alert(output);
}

function printContacts( contacts ){

    for(let contact of contacts){
        for(let property in contact){
            document.write(contact[property] + ' ');
        }
        document.write('<br>');
    }

}

insertContact('Fenia Kaliviari','6987985461');
insertContact('Antonis Kaliviari','6989655461');
deleteContact('6989655461');
insertContact('Avia Toriga','6995885461');

printContacts(mobileContacts);
