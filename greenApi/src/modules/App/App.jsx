import { useState, useEffect } from 'react';
import './App.css';
import Chats from '../Chats/Chats';
import CreateNewChat from '../CreateNewChat/CreateNewChat';
import Nav from '../Nav/Nav';
import getData from '../../actions/getData';
import Chat from '../Chat/Chat';

const App = () => {
    const [isInputVisible, setInputVisible] = useState(false);
    const [chatMessages, setChatMessages] = useState([]);
    const [selectedUser , setSelectedUser ] = useState(null)

    const toggleInputVisibility = () => {
        setInputVisible(prev => !prev);
    };

    const handleUser = (user) => {
        setSelectedUser (user);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            setInputVisible(false); // Закрываем форму
            setSelectedUser(null); // Сбрасываем выбранный чат
        }
    };
    const handleCreateChat = (phoneNumber) => {
        const newMessage = {
            avatar: 'https://prgu72.ru/book/uploads/posts/2017-01/1485091211_1480391527_1480355802_avatar-net-foto.png',
            name: phoneNumber,
            time: ["сгенерировано автоматически"],
            text: ["Начните общаться прямо сейчас!"],
            wid: phoneNumber+"@c.us", 
            type: ["first-message"]
        };

        setChatMessages(prevChats => {
            const updatedChats = [...prevChats, newMessage];
            localStorage.setItem('chats', JSON.stringify(updatedChats));
            return updatedChats;
        });

        setInputVisible(false);
    };


    const filteredMessages = selectedUser  
        ? chatMessages.filter(msg => msg.wid === selectedUser.wid) 
        : [];
    
        useEffect(() => {
            // Загружаем сообщения из localStorage при первом рендере
            const savedMessages = localStorage.getItem('chatMessages');
            if (savedMessages) {
                setChatMessages(JSON.parse(savedMessages));
            }
    
            const intervalId = setInterval(() => {
                getData().then(res => {
                    const messageDate = new Date(res.timestamp * 1000);
                    const today = new Date();
    
                    const newMessage = {
                        avatar: 'https://prgu72.ru/book/uploads/posts/2017-01/1485091211_1480391527_1480355802_avatar-net-foto.png',
                        name: res.senderData.chatName,
                        time: messageDate.toDateString() === today.toDateString() 
                            ? messageDate.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }) 
                            : messageDate.toLocaleDateString('ru-RU'),
                        text: res.messageData.textMessageData.textMessage,
                        wid: res.senderData.chatId, 
                        type: 'received'
                    };
    
    
                    setChatMessages(prevMessages => {
                        const existingMessageIndex = prevMessages.findIndex(msg => msg.wid === newMessage.wid);
    
                        let updatedMessages;
                        if (existingMessageIndex !== -1) {
                            // Если сообщение от этого пользователя уже существует, добавляем новое сообщение и время
                            updatedMessages = [...prevMessages];
                            updatedMessages[existingMessageIndex].text.push(newMessage.text);
                            updatedMessages[existingMessageIndex].time.push(newMessage.time); // Сохраняем время
                            updatedMessages[existingMessageIndex].type.push(newMessage.type)
                        } else {
                            // Если сообщений нет, добавляем новое с массивами для текста и времени
                            updatedMessages = [...prevMessages, { 
                                ...newMessage, 
                                text: [newMessage.text], 
                                time: [newMessage.time],
                                type: [newMessage.type]
                            }];
                        }
    
                        // Сохраняем обновленные сообщения в localStorage
                        localStorage.setItem('chatMessages', JSON.stringify(updatedMessages));
    
                        return updatedMessages;
                    });
    
                }).catch(err => console.error(err));
            }, 1000);
    
            window.addEventListener('keydown', handleKeyDown);

            return () => {
                clearInterval(intervalId);
                // Убираем обработчик события при размонтировании компонента
                window.removeEventListener('keydown', handleKeyDown);
            };
        }, []);
    return (
        <>
            <Nav/>

            {isInputVisible ? (
                            <CreateNewChat 
                                toggleInputVisibility={toggleInputVisibility} 
                                onCreateChat={handleCreateChat} // Передаем функцию создания чата
                                selectedUser ={selectedUser } // Передаем выбранного пользователя
                            />
            ) : (
                <Chats handleUser={handleUser} chatMessages={chatMessages} toggleInputVisibility={toggleInputVisibility} />
            )}

            <Chat setChatMessages={setChatMessages} messages={filteredMessages} selectedUser = {selectedUser} />
        </>
    );
}

export default App;

