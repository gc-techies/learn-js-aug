const jsonPost = async () => {
    const data = {
        title: 'foo',
        body: 'bar',
        userId: 1,
    };
    const header = new Headers();
    header.append('Content-Type', 'application/json');
    header.append('X-Custom-Header', 'CustomValue');

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'X-Custom-Header': 'CustomValue'
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

const formDataPost = async () => {
    const data = new FormData();
    data.append('title', 'foo');
    data.append('body', 'bar');
    data.append('userId', 1);

    const header = new Headers();
    header.append('Content-Type', 'application/json');
    header.append('X-Custom-Header', 'CustomValue');

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: data,
        headers: {
            'X-Custom-Header': 'CustomValue'
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}