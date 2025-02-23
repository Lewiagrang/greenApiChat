import "./User.css";

const User = (props) => {
    return (
        <div className="chats-user">
            <div 
                className="chats-user-avatar" 
                style={{ backgroundImage: `url(${props.avatar})` }} 
            ></div>
            <div className="chats-user-data">
                <div className="chats-user-name">{props.name}</div> 
                <div className="chats-user-time">{props.time.at(-1)}</div> 
                <div className="chats-user-text">{props.text.at(-1)}</div> 
            </div>
        </div>
    );
}

export default User;
