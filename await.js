async function getdata() {
    let data = await fetch("https://jsonplaceholder.typicode.com/todos");
    data = await data.json();
    console.log(data);
}

getdata();