const block1 = document.createElement('div');
block1.classList.add('wrap', 'collapse', 'beta', 'alpha');
block1.textContent = "Original";
document.body.appendChild(block1);

const clone1 = block1.cloneNode(true);
clone1.textContent = 'Clone';
document.body.appendChild(clone1);

document.addEventListener("DOMContentLoaded", function () {
    const ourLi = ['Main', 'Products', 'About us', 'Contacts'];
    const ourUl = document.createElement('ul');

    for (let i = 0; i < ourLi.length; i++) {
        const li = document.createElement('li');
        li.textContent = ourLi[i];
        ourUl.appendChild(li); // Додаємо li у ul
    }

    document.body.appendChild(ourUl); // Додаємо ul у body
});

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (let i = 0; i < coursesAndDurationArray.length; i++) {
    const block = document.createElement('div');
    block.textContent = `${coursesAndDurationArray[i].title} (${coursesAndDurationArray[i].monthDuration} months)`;
    document.body.appendChild(block);  
}

let coursesAndDurationArray1 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (let i = 0; i < coursesAndDurationArray1.length; i++) {
    const el = document.createElement('div');
    el.classList.add('item');
    
    const elH1 = document.createElement('h1');
    elH1.classList.add('heading');
    elH1.textContent = coursesAndDurationArray1[i].title;
    el.appendChild(elH1);

    const elP = document.createElement('p');
    elP.classList.add('description');
    elP.textContent = coursesAndDurationArray1[i].monthDuration;
    el.appendChild(elP);

    document.body.appendChild(el);
}