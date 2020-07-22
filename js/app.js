/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navigation = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const navCreator = ()=>{
    let navContainer = '';
    sections.forEach(section => {
        const sectionID = section.id;
        const sectionDataNav = section.dataset.nav;

        navContainer+= `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`
    })
    navigation.innerHTML= navContainer;
}

navCreator();

// Add class 'active' to section when near top of viewport

const offset = (section) =>{
    return Math.floor(section.getBoundingClientRect().top);
}

const removeActiveClass = (section) =>{
    section.classList.remove('your-active-class');
}

const addActiveClass = (conditional , section) =>{
    if (conditional){
        section.classList.add('your-active-class');
    }
}

const sectionActivation = () =>{
    sections.forEach(section => {
        const elementOffside = offset(section);

        inviewport = () => elementOffside < 150 && elementOffside >= -150 ;
        removeActiveClass(section);
        addActiveClass( inviewport(), section);
    })
}

window.addEventListener( 'scroll', sectionActivation);
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


