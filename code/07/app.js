const container = document.getElementById('container');
/*
for(let i = 0; i < titles.length; i++) {
    const heading = document.createElement('h3');
heading.innerText = titles[i];
container.appendChild(heading);
}
*/

for(let i = 0; i < posts.length; i++) { 
    const post = document.createElement('div');
    post.style.backgroundColor = 'lightPink';
    // TITLE
const heading = document.createElement('h3');
heading.innerText = 'Pealkiri: ' + posts[i].title;
heading.style.color = 'Purple';

post.appendChild(heading);
// CONTENT
const content = document.createElement('p');
content.innerText = 'Sisu:' + posts[i].content;
heading.style.color = 'Purple';
post.appendChild(content);
// AUTOR
const author = document.createElement('p');
author.innerText = 'Autor:' + posts[i].author;
post.appendChild(author);
heading.style.color = 'Purple';
author.style.frontStyle = 'italic';
container.appendChild(post);
 }


 




