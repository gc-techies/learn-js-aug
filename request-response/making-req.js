let row = document.getElementById('row');

let one = {
    name: 'one',
    age: 1
}
let four = JSON.stringify(one);

let two = '{"name": "two", "age": 209}';
let three = JSON.parse(two);

fetch('https://picsum.photos/v2/list?limit=100')
    .then((res) => res.json())
    .then((data) => {
        for (let i = 0; i < data.length; i++) {
            const div = document.createElement('div');
            div.classList.add('col-3', 'mx-2', 'rounded', 'card');
            const img = document.createElement('img');
            img.src = data[i].download_url;
            img.alt = data[i].id;
            img.classList.add('card-img-top', 'rounded');
            const h3 = document.createElement('h3');
            h3.textContent = "Author";
            h3.classList.add('card-title');
            const p = document.createElement('p');
            p.textContent = data[i].author;
            p.classList.add('card-text');
            row.appendChild(div);
            div.appendChild(img);
            div.appendChild(h3);
            div.appendChild(h3);
            div.appendChild(p);
        }
        console.log(data);
    });