const getData = async () => {
    const res = await fetch('http://localhost:3000/notifications');
    const data = await res.json();
    console.log(data)
    return(data)
}

export default getData