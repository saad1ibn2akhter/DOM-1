console.log("hello programmers iam dom");
const licollections = document.getElementsByTagName('li');
for(let i =0;i<licollections.length;i++){
    console.log(licollections[i].innerText);
}
const heading = document.getElementsByTagName('h1');
for(let i =0;i<heading.length;i++){
    console.log(heading[i].innerText);
}

const loc = document.getElementsByClassName('important-places');
for(let i=0;i<loc.length;i++){
    console.log(loc[i].innerText);
}

const fruits_title  = document.getElementById('fruits-title');
fruits_title.innerText = "Fruit containers title is changed by JS";

const someli = document.querySelectorAll(".fruits-container li");
for(const li of someli){
    console.log(li.innerText);
}

document.getElementById('fruits-title').style.backgroundColor='violet';
document.getElementById('fruits-title').style.textAlign='center';
