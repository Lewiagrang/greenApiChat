const handleSubmit = async (event, idInstance, apiTokenInstance) => {
    localStorage.setItem("idInstance", idInstance); 
    localStorage.setItem("apiTokenInstance", apiTokenInstance);
    const response = await fetch('http://localhost:3000/setCredentials', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idInstance, apiTokenInstance }),
    })
    console.log(2)
};

export default handleSubmit;

