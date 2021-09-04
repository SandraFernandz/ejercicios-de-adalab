'use strict';

const searchUsername = document.querySelector('.js-btn');
const result = document.querySelector('.js-name');
const input = document.querySelector('.js-username');
const photo = document.querySelector('.js-img');
const repos = document.querySelector('.js-repo');

function handleGetUser() {
    fetch(`https://api.github.com/users/${input.value}`)
    .then(response => response.json())
    .then(data => { 
        photo.src = data.avatar_url;
        repos.innerHTML += data.public_repos;
    });
}

searchUsername.addEventListener('click', handleGetUser);