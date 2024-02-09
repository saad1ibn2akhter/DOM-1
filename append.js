const mainContainer = document.getElementById('main-container');

// method 1 

const newSection = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = "iam new";
newSection.appendChild(h1);

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText ="new1";
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText ="new2";
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText ="new3";
ul.appendChild(li3);

newSection.appendChild(ul);

mainContainer.appendChild(newSection);

// method 2
 const section2 = document.createElement('section');
 section2.innerHTML = `

<h1>MY-DRESS</h1>
<ul>
<li>dress1</li>
<li>dress2</li>
<li>dress3</li>
</ul>

 `;

 mainContainer.appendChild(section2);