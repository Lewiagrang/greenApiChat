import { useState } from 'react';
import "./CreateNewChat.css"

const CreateNewChat = (props) => {
    const [phoneNumber, setPhoneNumber] = useState(''); // Состояние для хранения номера телефона

    const handleSubmit = (e) => {
        e.preventDefault(); // Предотвращаем перезагрузку страницы
        if (phoneNumber.trim()) {
            // Здесь вы можете вызвать функцию для создания нового чата
            props.onCreateChat(phoneNumber); // Передаем номер телефона родительскому компоненту

            // Сбрасываем поле ввода
            setPhoneNumber('');
            // Закрываем ввод
            props.toggleInputVisibility();
        }
    };



    
    return (
        <div className='create-new-chat'>
            <button className="create-new-chat-arrow-back" onClick={props.toggleInputVisibility}></button>
            <div className='create-new-chat-title'>Новый чат</div>
            {props.selectedUser  && (
                <div className='selected-user-info'>
                </div>
            )}
            <form className="create-new-chat-form" onSubmit={handleSubmit}>
                <input 
                    className="create-new-chat-input" 
                    type='tel' 
                    placeholder="Введите номер телефона" 
                    value={phoneNumber} // Привязываем значение к состоянию
                    onChange={(e) => setPhoneNumber(e.target.value)} // Обновляем состояние при вводе
                />
                <input className="create-new-chat-submit" type='submit' value="Начать общение" />
            </form>
        </div>
    );
}

export default CreateNewChat;
