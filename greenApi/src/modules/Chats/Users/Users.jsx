import User from "./User/User.jsx";

const Users = ({ chatMessages, handleUser }) => { 
    
    const userList = chatMessages.map((userProps, index) => {
        return (
            <div key={index} onClick={() => handleUser(userProps)} >
                <User    
                    avatar={userProps.avatar} 
                    name={userProps.name} 
                    time={userProps.time} 
                    text={userProps.text} 
                />
            </div>
        );
    });

    return (
        <div>
            {userList} 
        </div>
    );
}

export default Users;
