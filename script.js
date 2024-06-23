var typed= new typed(".text",{
    strings:["Frontend Developer", "Wordpress Developer","Web Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

const openmenu = document.querySelector(".openmenu")
const closemenu = document.querySelector(".closemenu")
const navbar = document.querySelector(".navbar")

openmenu.addEventListener('click',show);
closemenu.addEventListener('click',close);

function show(){
  navbar.style.display = 'flex';
  navbar.style.top = '0';

}
function close(){
  navbar.style.top = '-100%';
}