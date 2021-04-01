const result = document.getElementById('result');
const filter = document.getElementById('filter');
const listItems = []

const URL = 'https://randomuser.me/api?';


getData();

filter.addEventListener('input', (e) => filterData(e.target.value))

async function getData() {
    const res = await fetch(URL + 'results=50'); 

    const {results} = await res.json(); 
    
    //Clear results 
    result.innerHTML = '';

    results.forEach((user) => {
        const li = document.createElement('li');

        listItems.push(li);

        li.innerHTML = `
            <img src=${user.picture.large} alt=${user.name.first}>
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.state}, ${user.location.country}</p>
            </div>
    `
        result.appendChild(li);
    })
}

function filterData (searchTerm) {
    listItems.forEach((item => {
        console.log(item);
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide');
        }
    }))
}



