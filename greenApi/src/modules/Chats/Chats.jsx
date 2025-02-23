import "./Chats.css";
import Header from "./Header/Header";
import SearchString from "./SearchString/SearchString";
import Filters from "./Filters/Filters";
import Users from "./Users/Users";

const Chats = ({ toggleInputVisibility, chatMessages, handleUser }) => {
    // const chatMessages = [{
    //     avatar: 'https://i.pinimg.com/736x/d3/5d/c6/d35dc674a1c4886f35f9feb12c7ab465.jpg',
    //     name: 'Alice',
    //     time: '2023-10-01',
    //     text: 'Привет, как дела?'
    //     },
    //     {
    //     avatar: 'https://ybis.ru/wp-content/uploads/2023/09/solntse-kartinka-1.webp',
    //     name: 'Bob',
    //     time: '10:16',
    //     text: 'Привет, все хорошо! А у тебя?'
    //     },
    //     {
    //     avatar: 'https://images.thevoicemag.ru/upload/img_cache/d5c/d5c56358d4628dacf49934de76befbca_cropped_666x444.jpg',
    //     name: 'Charlie',
    //     time: '2023-10-01',
    //     text: 'Привет, ребята! Что нового?'
    //     },
    //     {
    //     avatar: 'https://99px.ru/sstorage/53/2017/11/tmb_212689_488084.jpg',
    //     name: 'Diana',
    //     time: '2023-10-01',
    //     text: 'Привет всем! Я только что вернулась с прогулки.'
    //     }]; 

    return (
        <div className='chats'>
            <Header toggleInputVisibility={toggleInputVisibility} />
            <SearchString />
            <Filters />
            <Users handleUser={handleUser} chatMessages={chatMessages} />
        </div>
    );
}

export default Chats;
