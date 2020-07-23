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


const getActiveSection = () =>{
    activeSection = sections[0];
    let minVal = 150;
    sections.forEach(section =>{
        let bounding = section.getBoundingClientRect();
        if (bounding.top > -150 && bounding.top < minVal) {
            minVal = bounding.top;
            activeSection = section;
        };
    });
    return activeSection;
};
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
        navContainer+= `<li><a class="menu__link"  href="#${sectionID}" data-link="${section.dataset.nav}">${sectionDataNav}</a></li>`
        
    })
    navigation.innerHTML= navContainer;
}


// Add class 'active' to section when near top of viewport



const sectionActivation = () => {
    window.addEventListener('scroll',  (event) => {
        let section = getActiveSection();
        section.classList.add('your-active-class');
        // set other sections as inactive

        sections.forEach( item =>{
            if (item.id != section.id && item.classList.contains('your-active-class')) {
                item.classList.remove('your-active-class');
            }
        });
        
        // add active class to menu item
            const navLink = document.querySelector(`[data-link="${section.dataset.nav}"]`);
            navLink.classList.add('active__link');
            //console.log(navLink)

        // remove active class
        const menuLinks = document.querySelectorAll('.menu__link');
        menuLinks.forEach( link =>{
            if (link != navLink && link.classList.contains('active__link')) {
                link.classList.remove('active__link');
            }
        });
        
        
    });   
       
        
}



// Scroll to anchor ID using scrollTO event


const scrollToClick = () => {    
    const links = document.querySelectorAll('.navbar__menu a');
    links.forEach (link =>{
        link.addEventListener('click', () => {
            link.scrollIntoView();
        });
    });
    

};
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

navCreator();

// Scroll to section on link click
scrollToClick()

// Set sections as active

sectionActivation();