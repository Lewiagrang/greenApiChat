import React, { useState } from 'react';
import "./Chat.css";
import ChatCorrespondence from "./ChatCorrespondence/ChatCorrespondence";
import sendMessage from '../../actions/sendMessage';

const Chat = ({ messages = [], selectedUser, setChatMessages }) => { 
    const [inputValue, setInputValue] = useState(''); 

    const messageList = messages.flatMap((message, index) => {
        return message.text.map((text, textIndex) => (
            <ChatCorrespondence 
                key={`${index}-${textIndex}`} 
                text={text} 
                time={message.time[textIndex]} 
                type={message.type[textIndex]} 
            />
        ));
    });
    

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (inputValue.trim() && selectedUser ) {
            const newMessage = {
                avatar: 'https://prgu72.ru/book/uploads/posts/2017-01/1485091211_1480391527_1480355802_avatar-net-foto.png', 
                name: selectedUser.name,
                time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
                text: inputValue,
                wid: selectedUser.wid,
                type: 'sent'
            };
    
            setChatMessages(prevMessages => {
                const existingMessageIndex = prevMessages.findIndex(msg => msg.wid === newMessage.wid);

                let updatedMessages;
                if (existingMessageIndex !== -1) {
                    updatedMessages = [...prevMessages];
                    updatedMessages[existingMessageIndex].text.push(newMessage.text);
                    updatedMessages[existingMessageIndex].time.push(newMessage.time); 
                    updatedMessages[existingMessageIndex].type.push(newMessage.type)
                } else {
                    updatedMessages = [...prevMessages, { 
                        ...newMessage, 
                        text: [newMessage.text], 
                        time: [newMessage.time],
                        type: [newMessage.type]
                    }];
                }

                localStorage.setItem('chatMessages', JSON.stringify(updatedMessages));

                return updatedMessages;
            });
    
            await sendMessage(selectedUser.wid, localStorage.getItem("idInstance"), localStorage.getItem("apiTokenInstance"), inputValue);
            setInputValue('');
        }
    };
    

    return (
        <div className='chat'>
            <div className="chat-header">
                <div className="chat-header-avatar" style={{ backgroundImage: `url(${selectedUser  ? selectedUser .avatar : ''})` }}></div>
                <div className="chat-header-name">{selectedUser  ? selectedUser .name : ""}</div>
            </div>

            {messageList.length > 0 ? (
                <div className="chat-correspondence">
                    {messageList}
                </div>
            ) : (
                <div className="no-messages"></div>
            )}

            <div className="chat-footer">
                <form className="chat-input" onSubmit={handleSendMessage}>
                    {selectedUser  ? (
                        <>
                            <input 
                                className="chat-input-string" 
                                type="text" 
                                placeholder="Введите сообщение..." 
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)} 
                            />
                            <input 
                                className="chat-input-button" 
                                type="submit" 
                                value="" 
                            />
                        </>
                    ) : null}
                </form>
            </div>
        </div>
    );
}

export default Chat;
