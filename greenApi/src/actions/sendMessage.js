const sendMessage = async (chatId, idInstance, apiTokenInstance, message) => {
    const apiUrl = `https://${idInstance.slice(0, 4)}.api.green-api.com`;
    
    const url = `${apiUrl}/waInstance${idInstance}/sendMessage/${apiTokenInstance}`;

    const payload = {
        "chatId": chatId,
        "message": message
    };

    const headers = {
        'Content-Type': 'application/json'
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Message sent successfully:', data);
        console.log(url)
        console.log(payload)

        return data;
    } catch (error) {
        console.error('Error sending message:', error);
        throw error; 
    }
};

export default sendMessage;
