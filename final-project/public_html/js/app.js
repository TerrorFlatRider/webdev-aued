//Author: Athanasios Goulas
//Project: Final Assignment
//Course: AUEB Web Developer

//OMDB Api Key
const omdbAPIKey = "36562f82"; 

//Constructor function of menu object
function Menu(idName,className,menuType){
    this.id = idName;
    this.class = className;

    if(menuType === null){
        this.type = 'div';
    }else{
        this.type = menuType;
    }
    
    this.menuItems = [];
    this.getMenuHTMLElement = function(){

        let mainMenu = document.createElement(this.type);
        mainMenu.setAttribute('class', this.class);

        let ulMainMenu = document.createElement('ul');

        if(this.menuItems.length >= 1){
            for(let i =0; i < this.menuItems.length;i++){
                ulMainMenu.appendChild(this.menuItems[i].getMenuItemHTMLElement());
            }
        }

        mainMenu.appendChild(ulMainMenu);

        return mainMenu;
    }
}

//Constructor function of menu item object
function MenuItem (id,title,url) {
    this.id = id;
    this.title = title;
    this.url = url;
    this.subMenu = null;
    this.getMenuItemHTMLElement = function (){

        let liMainMenuItem = document.createElement('li');
        let aMainMenuItem = document.createElement('a');
        aMainMenuItem.setAttribute('href',this.url);
        aMainMenuItem.innerHTML= this.title;
        liMainMenuItem.appendChild(aMainMenuItem);

        if(this.subMenu != null){
            liMainMenuItem.appendChild(this.subMenu.getMenuHTMLElement());
        }

        return liMainMenuItem;
    }
}

$(document).ready( function(){

    loadHeader();
    loadFooter();
    loadPosters();

    document.querySelector("#btn-menu-toggle").addEventListener('click', toggleMobileMenu);
    document.querySelector("#btn-search").addEventListener('click', function(){
    alert("Search button clicked");
    });

});

function toggleMobileMenu(){
    let mobileMenu = document.querySelector('.menu-mobile');
    let main = document.querySelector('.main');
    let footer = document.querySelector('.footer');
    let mobileMenuDisplayStatus = window.getComputedStyle(mobileMenu).getPropertyValue('display');
    
    if(mobileMenuDisplayStatus == "none"){
        mobileMenu.style.display = "block";
        main.style.display="none";
        footer.style.display = "none";
    }else{
        mobileMenu.style.display = "none";
        main.style.display="block";
        footer.style.display = "block";
    }
}

function loadHeader(){

    let container = document.getElementById('container');
    let header = document.getElementById('header');

    header.appendChild(loadLogo());
    header.appendChild(loadMenu('main-menu','sub-menu'));
    header.appendChild(loadMenuIcons());
    container.appendChild(loadMenu('menu-mobile','sub-menu-mobile'));
}

function loadLogo(){
    let logo = document.createElement('div');
    logo.setAttribute('class','logo');

    let imgLogo = document.createElement('img');
    imgLogo.setAttribute('src','images/logo/terrorflatrider-logo-white.svg');
    imgLogo.setAttribute('alt','TerrorFlatRider White Logo');

    logo.appendChild(imgLogo);

    return logo;

    /*<div  class="logo">
        <img src="images/logo/terrorflatrider-logo-white.svg" alt="TerrorFlatRider White Logo">
    </div>*/
}

function loadMenu(menuClass,subMenuClass){

    const mainMenu = new Menu(menuClass,menuClass);
    const menuLink1 = new MenuItem('home','Home','index.html');
    const menuLink2 = new MenuItem('about','About','about.html');
    const menuLink3 = new MenuItem('projects','Projects','projects.html');
    const menuLink4 = new MenuItem('portfolio','Portfolio','portfolio.html');
    const menuLink5 = new MenuItem('downloads','Downloads','downloads.html');
    const menuLink6 = new MenuItem('contact','Contact','contact.html');

    const subMenu1 = new Menu(subMenuClass,subMenuClass,'ul');
    const subMenuLink1 = new MenuItem('mixplorer','MiXplorer','');
    const subMenuLink2 = new MenuItem('musicbee','Musicbee','');
    const subMenuLink3 = new MenuItem('icons','Icons','');
    subMenu1.menuItems.push(subMenuLink1,subMenuLink2,subMenuLink3);
    menuLink5.subMenu = subMenu1;


    mainMenu.menuItems.push(menuLink1,menuLink2,menuLink3,menuLink4,menuLink5,menuLink6);

    console.log(mainMenu);
    console.log(mainMenu.getMenuHTMLElement());

    return mainMenu.getMenuHTMLElement();
}

/*function loadMenu(menuClass){

    /*let mainMenu = document.createElement('div');
    mainMenu.setAttribute('class', menuClass);

    let ulMainMenu = document.createElement('ul');

    ulMainMenu.appendChild(newMenuListItem('index.html','Home'));
    ulMainMenu.appendChild(newMenuListItem('about.html','About'));
    ulMainMenu.appendChild(newMenuListItem('projects.html','Projects'));
    ulMainMenu.appendChild(newMenuListItem('portfolio.html','Portfolio'));
    ulMainMenu.appendChild(newMenuListItem('downloads.html','Downloads'));
    ulMainMenu.appendChild(newMenuListItem('contact.html','Contact'));

    mainMenu.appendChild(ulMainMenu);

    return mainMenu;
}*/

function loadMenuIcons(){

    let menuIcons = document.createElement('div');
    menuIcons.setAttribute('class','menu-icons');

    let menuIconsBtnSearch = document.createElement('button');
    let menuIconsBtnSearchI = document.createElement('i');
    menuIconsBtnSearchI.setAttribute('class','fa-solid fa-magnifying-glass btn-search');
    menuIconsBtnSearchI.setAttribute('id','btn-search');

    //CSS menuIconsBtnSearch
    menuIconsBtnSearch.style.backgroundColor='black';
    menuIconsBtnSearch.style.border='0px';
    menuIconsBtnSearch.style.padding='10px';
    menuIconsBtnSearch.style.display='block';
    menuIconsBtnSearch.style.color='white';
    menuIconsBtnSearch.style.float='right';

    //CSS menuIconsBtnSearchI
    menuIconsBtnSearchI.style.color = 'white';
    menuIconsBtnSearchI.style.fontSize ='1rem';

    menuIconsBtnSearchI.onmouseover = function(){
        menuIconsBtnSearchI.style.color = '#FF0000';
    }
    menuIconsBtnSearchI.onmouseleave = function(){
        menuIconsBtnSearchI.style.color = 'white';
    }
   
    menuIconsBtnSearch.appendChild(menuIconsBtnSearchI);
    

    let menuIconsBtnToggle = document.createElement('button');
    let menuIconsBtnToggleI = document.createElement('i');
    menuIconsBtnToggleI.setAttribute('class','fa-solid fa-bars btn-menu-toggle');
    menuIconsBtnToggleI.setAttribute('id','btn-menu-toggle');

    //CSS menuIconsBtnToggle
    menuIconsBtnToggle.style.backgroundColor='black';
    menuIconsBtnToggle.style.border='0px';
    menuIconsBtnToggle.style.padding='10px';
    menuIconsBtnToggle.style.display='block';
    menuIconsBtnToggle.style.color='white';
    menuIconsBtnToggle.style.float='right';

    //CSS menuIconsBtnToggleI
    menuIconsBtnToggleI.style.color = 'white';
    menuIconsBtnToggleI.style.fontSize ='1rem';

    menuIconsBtnToggleI.onmouseover = function(){
        menuIconsBtnToggleI.style.color = '#FF0000';
    }
    menuIconsBtnToggleI.onmouseleave = function(){
        menuIconsBtnToggleI.style.color = 'white';
    }

    menuIconsBtnToggle.appendChild(menuIconsBtnToggleI);

    menuIcons.appendChild(menuIconsBtnSearch);
    menuIcons.appendChild(menuIconsBtnToggle);

    return menuIcons;

    /*
    <div class="menu-icons">
        <button id="btn-search" onclick=""><i class="fa-solid fa-magnifying-glass"></i></button>
        <button id="btn-menu-toggle" onclick=""><i class="fa-solid fa-bars"></i></button>
    </div>
    */
}

function loadFooter(){

    let footer = document.getElementById('footer');


    let follow = document.createElement('div');
    follow.setAttribute('class','follow');
    follow.innerHTML = '<p>Follow Me</p>';

    footer.appendChild(follow);

    let social = document.createElement('div');
    social.setAttribute('class','social');

    let innerSocialDiv = document.createElement('div');
    innerSocialDiv.appendChild(createSocialIcon('fa-brands fa-square-facebook','https://www.facebook.com'));
    innerSocialDiv.appendChild(createSocialIcon('fa-brands fa-instagram','https://www.instagram.com'));
    innerSocialDiv.appendChild(createSocialIcon('fa-brands fa-linkedin','#'));
    innerSocialDiv.appendChild(createSocialIcon('fa-brands fa-github','#'));
    innerSocialDiv.appendChild(createSocialIcon('fa-brands fa-youtube','#'));
    innerSocialDiv.appendChild(createSocialIcon('fa-brands fa-twitter','#'));
    innerSocialDiv.appendChild(createSocialIcon('fa-brands fa-stack-overflow','#'));
    innerSocialDiv.appendChild(createSocialIcon('fa-brands fa-vimeo','#'));
    innerSocialDiv.appendChild(createSocialIcon('fa-brands fa-google-play','#'));
    innerSocialDiv.appendChild(createSocialIcon('fa-solid fa-code','#'));
    innerSocialDiv.appendChild(createSocialIcon('fa-brands fa-500px','#'));
    innerSocialDiv.appendChild(createSocialIcon('fa-brands fa-flickr','#'));
    innerSocialDiv.appendChild(createSocialIcon('fa-brands fa-square-tumblr','#'));
    innerSocialDiv.appendChild(createSocialIcon('fa-brands fa-soundcloud','#'));
    innerSocialDiv.appendChild(createSocialIcon('fa-brands fa-deviantart','#'));
    innerSocialDiv.appendChild(createSocialIcon('fa-brands fa-pinterest','#'));
    innerSocialDiv.appendChild(createSocialIcon('fa-brands fa-vk','#'));

    social.appendChild(innerSocialDiv);

    footer.appendChild(social);

    let copyright = document.createElement('div');
    copyright.setAttribute('class','copyright');

    let curDate = new Date();
    let curYear = curDate.getFullYear();
    
    copyright.innerHTML = `<p>Copyright © 2017 - ${curYear} TerrorFlatRider All Rights Reserved.</p>`;

    footer.appendChild(copyright);

    /*
    <div class="follow">
           <p>Follow Me</p>
       </div>
       <div class="social">
           <div>                
               <i class="fa-brands fa-square-facebook"></i>
               <i class="fa-brands fa-instagram"></i>
               <i class="fa-brands fa-linkedin"></i>
               <i class="fa-brands fa-github"></i>
               <i class="fa-brands fa-youtube"></i>
               <i class="fa-brands fa-twitter"></i>
               <i class="fa-brands fa-stack-overflow"></i>
               <i class="fa-brands fa-vimeo"></i>
               <i class="fa-brands fa-google-play"></i>
               <i class="fa-solid fa-code"></i>
               <i class="fa-brands fa-500px"></i>
               <i class="fa-brands fa-flickr"></i>
               <i class="fa-brands fa-square-tumblr"></i>
               <i class="fa-brands fa-soundcloud"></i>
               <i class="fa-brands fa-deviantart"></i>
               <i class="fa-brands fa-pinterest"></i>
               <i class="fa-brands fa-vk"></i>
           </div>
       </div>
    <div class="copyright">
           <p>Copyright © 2017 - 2025 TerrorFlatRider All Rights Reserved.</p>
    </div>*/
}

function createSocialIcon(className,url){

    let socialAnchor = document.createElement('a');
    socialAnchor.setAttribute('href',url);
    socialAnchor.setAttribute('target','_blank');

    let socialIcon = document.createElement('i');
    socialIcon.setAttribute('class',className );

    socialAnchor.appendChild(socialIcon);

    return socialAnchor;

}

function createElementWContent(elementType, elementText){
    let element = document.createElement(elementType);
    element.textContent = elementText;
    return element;
}

function createElementImg(imgLink){
    let img = document.createElement('img');
    img.setAttribute('src', imgLink);
    return img;
}

function newMenuListItem (link,text){

    let liMainMenuItem = document.createElement('li');
    let aMainMenuItem = document.createElement('a');
    aMainMenuItem.setAttribute('href',link);
    aMainMenuItem.innerHTML= text;

    liMainMenuItem.appendChild(aMainMenuItem);

    return liMainMenuItem;
};

function loadPosters(){

    try{

        let postersSection = document.getElementById('posters-section');

        postersSection.appendChild(createElementWContent('h2',"Creative Graphic Designing of Posters"));
        postersSection.appendChild(createElementWContent('p',"Fictional posters of my favorite movies to demonstrate XHRs with OMDB Api"));

        let postersDiv = document.createElement('div');
        postersDiv.setAttribute('id','posters-sub-section')
        postersDiv.setAttribute('class','posters-sub-section')

        postersSection.appendChild(postersDiv);

        fetchFromOmdbApi("saving private ryan");
        fetchFromOmdbApi("a star is born");
        fetchFromOmdbApi("black hawk down");
        fetchFromOmdbApi("la la land");
        fetchFromOmdbApi("dune: part one");

    }catch (e){
        console.log(e);
    }
}

function fetchFromOmdbApi(movieTitle){

    const ajaxRequest  = new XMLHttpRequest();
        
    ajaxRequest.timeout = 5000;

    ajaxRequest.open("GET",`http://www.omdbapi.com/?t=${movieTitle}&apikey=${omdbAPIKey}`);
    ajaxRequest.send();

    //ajaxRequest.ontimeout = (e) => onApiError();

    ajaxRequest.onload = function(){

        console.log("LOADED");

        if(this.readyState == 4){
            if(this.status === 200)
            {
                console.log(JSON.parse(this.responseText));
                loadMoviePoster(JSON.parse(this.responseText));
            }
            else{
                
            }
        }
    }

    ajaxRequest.onerror = function(){
        console.warn("Error!");
        console.log(this);
    };
}

function loadMoviePoster(response){

    let postersDiv = document.getElementById('posters-sub-section');
    let imgDiv = document.createElement('div');
    imgDiv.setAttribute('class','movie-poster');
 
    imgDiv.appendChild(createElementWContent('h3',response.Title));
    imgDiv.appendChild(createElementWContent('span',response.Year));
    imgDiv.appendChild(createElementImg(response.Poster));
    
    postersDiv.appendChild(imgDiv);

}