// console.log('index file added');
function loadUsers2(){
    // console.log('btn handler');
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers2(data))
}

function displayUsers2(data){
    // console.log(data);
    const ul = document.getElementById('user-list');
    for(const user of data){
        // console.log(user.username);
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}