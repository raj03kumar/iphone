// Get elements from the DOM
const wrapper = document.querySelector('.split-screen');
const topLayer = document.querySelector('.left');

// Add mousemove event
wrapper.addEventListener('mousemove', e=>{
    // Move top layer by setting its left position to the mouse position on the X axis
    topLayer.style.width=e.clientX+'px';
});