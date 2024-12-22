$(document).ready(function(){
    fetchBooksFromXML();
})

function fetchBooksFromXML(){

    let ajaxRequest = new XMLHttpRequest();

    ajaxRequest.open("GET","books.xml",true);

    ajaxRequest.send();

    ajaxRequest.onreadystatechange = function(){
        if(ajaxRequest.readyState == 4){
            if(ajaxRequest.status == 200){
                handleResults(ajaxRequest.responseXML);
            }else{
                alert('ERROR');
            }
        }
    }
}
 
function handleResults(response){
    let booksList = response.getElementsByTagName("book");
    let output = "<tr><th>Title</th><th>Book Author</th></tr>";

    for(let book of booksList){
        output+= "<tr>,<td>"
        + book.getElementsByTagName("title")[0].childNodes[0].nodeValue
        + "</td><td>"
        + book.getElementsByTagName("author")[0].childNodes[0].nodeValue
        + "</td></tr>";
    }

    $('.books-list').html(output);
}    