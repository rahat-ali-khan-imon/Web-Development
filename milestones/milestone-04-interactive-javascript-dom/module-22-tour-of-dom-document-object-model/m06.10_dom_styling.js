const sections = document.querySelectorAll('section');
console.log(sections);

for(const section of sections) {
    console.log(section);
    section.style.backgroundColor = 'lightblue';
    section.style.border = '3px solid green';
    section.style.marginBottom = '10px';
    section.style.borderRadius = '15px';
}