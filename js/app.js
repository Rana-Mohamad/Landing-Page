const startTime = performance.now();

//define global variables
const navBar = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
const fragment = document.createDocumentFragment();

//build the nav. bar
//loop in sections and set a Li and link to every section
for( const section of sections) {
  const newLi = document.createElement('li');
  const link = document.createElement('a');
  link.textContent = section.getAttribute('data-nav');
  link.setAttribute('class','menu__link');

//add scroll in to view
  link.addEventListener("click", () => {
    section.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  });

  newLi.appendChild(link);
  fragment.appendChild(newLi);
};
navBar.appendChild(fragment);

//function to get the active section
function getActiveSection(){
  activeSectionIndex = -3;
  sections.forEach((section, index) => {
    let rect = section.getBoundingClientRect();
    if(rect.top>=0 && (rect.top<=150 || rect.bottom <= window.innerHeight)){
      activeSectionIndex = index;
    }
  });
  return activeSectionIndex;
}
//to set active link and add style to it
function activeSection(){
  activeSectionIndex = getActiveSection();
  if(activeSectionIndex != -3){
    let links = document.querySelectorAll('.menu__link');
    for( i = 0; i < sections.length; i++){
      if ( i == activeSectionIndex ){
        sections[i].classList.add('your-active-class');
        links[i].classList.add('your-active-class');
        links[i].setAttribute('style', 'background-color: #e1eaea ');
      }
      else {
        sections[i].classList.remove('your-active-class');
        links[i].classList.remove('your-active-class');
        links[i].removeAttribute('style');
      };
    };
  };
};
document.addEventListener('scroll', activeSection);

//to set top bottom
//Get the button
topBut = document.getElementById("Top");

// When the user scrolls down show the button
window.onscroll = function() { scroll(); };

function scroll() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topBut.style.display = "block";
    } else {
        topBut.style.display = "none";
    }
}
//to scroll to the top of page when the user click the bottom
function goTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
goTop();


const endTime = performance.now();
