// handle menu
// click menu 
const bntMenu=document.getElementById('#icon-menu')
const catelory=document.getElementsByClassName("form-category")[0]
const respon=document.getElementsByClassName("custom-dis-pro")[0]
const filterProduct=document.getElementsByClassName("form-filter-product")[0]
const btnFilter=document.getElementsByClassName("show-filter")[0]

// hide&show menu for mobile
const btnMenuMobi=document.getElementsByClassName("btn-menu-mobi")[0];
const menuMobi=document.getElementsByClassName("menu-mobile")[0];
const btnCloseMenuMobi=document.getElementById("close-menu-mobi")

// log out

const userIcon=document.getElementsById("#user-icon");

// hide&show
function handleHideFilter(){
    catelory.style.display = "none";
    respon.classList.remove("col-10");
    respon.classList.add('col-12');
    btnFilter.style.display='block';
}
function handleShowFilter(){
    catelory.style.display = "block";
    respon.classList.remove("col-12");
    respon.classList.add('col-10');
    btnFilter.style.display='none';
}
// hide&show menu for mobile
function handleShowMenuMobi(){
    menuMobi.style.display="block";
}
function handleHideMenuMobi(){
    menuMobi.style.display="none";
}


function logOut(){
    userIcon.style.display="none";
}