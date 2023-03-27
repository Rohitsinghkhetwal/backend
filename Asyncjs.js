let a = 20; 
let b = 0;

const waitingData = new Promise((resolve, rej) => {
    setTimeout(() => {
        resolve(30);

    }, 2000)
})
waitingData.then((data) => {
    b = data;
    console.log(a + b);

})