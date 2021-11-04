$('.show-mobile').on('click', (event)=>{
    event.preventDefault();

    let mobileNavDisplayState = document.querySelector('.mobile-navbar');

    // why mobileNavDisplayState = ''   NOT WORKING
    // BC it takes the VALUE, NOT THE OBJ REFERENCE

    console.log(getComputedStyle(mobileNavDisplayState).display);

    getComputedStyle(mobileNavDisplayState).display === 'none' ?
    document.querySelector('.mobile-navbar').style.display = 'block' :
    document.querySelector('.mobile-navbar').style.display = 'none';
});