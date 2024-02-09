const sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.border= '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius ='10px';
    section.style.paddingLeft = '20px';
    section.style.backgroundColor='gray';
}
// const palcesContainer = document.getElementById('places-container');
// palcesContainer.style.backgroundColor= 'yellow';
const palcesContainer = document.getElementById('places-container');
palcesContainer.classList.add('text-center');
palcesContainer.classList.remove('large-text');