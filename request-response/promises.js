let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('messi won the world cup');
        resolve(10 * 10);
    }, 3000);
});

p.finally(() => {
    console.log('finally block executed');
})
.then(
    (result) => console.log(result),
    (err) => console.log(err)
);

console.log('testing testing');