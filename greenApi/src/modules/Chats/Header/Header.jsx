import "./Header.css";

const Header = ({ toggleInputVisibility }) => {
    return (
        <div className='chats-header'>
            <div className='chats-title'>Чаты</div>
            <div className='chats-menu'></div>
            <div onClick={toggleInputVisibility} className='chats-create-new-chat'></div>
        </div>
    );
}

export default Header;
