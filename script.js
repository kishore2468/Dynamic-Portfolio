var typedff= new Typed(".text", {
    strings:["frontend Developer", "Java Developer","Software Engineer", " a Fresher"],
    typeSpeed:100,
    backSpeed:80,
    backDelay:2000,
    loop:true
    
});

var sidenav=document.querySelector(".side-navbar")


function showNavbar()
{
    sidenav.style.left = "0"
}
function closeNavbar()
{
     sidenav.style.left="-60%"
}