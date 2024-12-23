$(document).ready(function(){
    fetchBooksFromJSON();
})

function fetchBooksFromJSON(){
    let ajaxRequest = new XMLHttpRequest();

    ajaxRequest.open("GET","books.json",true);

    ajaxRequest.send();

    ajaxRequest.onreadystatechange = function (){
        if( ajaxRequest.readyState == 4){
            if(ajaxRequest.status == 200){
                handleResults(JSON.parse(ajaxRequest.responseText));
            }else{
                alert("ERROR");
            }
        }
    }
}

function handleResults(response){
    let booksList = response.library.book;

    let output = "<tr><th>Title</th><th>Book Author</th></tr>";

    for(let bookItem of booksList){
        output += "<tr>,<td>"
        + bookItem.title
        + "</td><td>"
        + bookItem.author
        + "</td></tr>";
    }

    $('.books-list').html(output);
}