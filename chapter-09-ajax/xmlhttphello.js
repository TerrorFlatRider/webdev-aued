function showText(){
    let xhr = new XMLHttpRequest();

    xhr.open("GET","tfr.txt",true);

    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 ){
            if(xhr.status == 200){
                document.querySelector(".text").innerHTML = xhr.responseText;
            }
            else{
                document.querySelector(".text").innerHTML = "FILE NOT FOUND";
            }
        }
    }

    xhr.send();
}