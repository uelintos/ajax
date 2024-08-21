document.addEventListener('DOMContentLoaded', function(){
    const name = document.querySelector('#name');
    const user = document.getElementById('user');
    const repository = document.getElementById('rep');
    const followers = document.getElementById('followers');
    const following = document.getElementById('following');
    const me = document.querySelector('#me');

    fetch('https://api.github.com/users/uelintos')
        .then(function(res){
            return res.json();
        })
        .then(function(json){
            name.innerText = json.name;
            user.innerText = json.login;
            repository.innerText = json.public_repos;
            followers.innerText = json.followers;
            following.innerText = json.following;
            me.src = json.avatar_url
        })
})