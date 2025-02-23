import './ChatCorrespondence.css'

const ChatCorrespondence = ({ text, time, type }) => {
    return (

        <div className={`chat-message ${type === 'sent' ? 'chat-sent-message' : 'chat-received-message'}`}>
            <div className="chat-correspondence-message-text">{text}</div>
            <div className="chat-correspondence-message-time">{time}</div>
        </div>

    );
}


export default ChatCorrespondence