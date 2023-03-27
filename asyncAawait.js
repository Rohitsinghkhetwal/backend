function getdata() {
    let HandlePromise = new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve("All set");
    
        }, 1000)
    })
    HandlePromise.then((x) => {
        console.log(x);
    
    })
    
}
console.log(getdata());

