import React from "react";

const ShowUsers = (props) => {
    const users = props.users;

    console.log(users);

    return (
        <ul>
            {users.map( user => <li>{user.name}</li>)}
        </ul>
    );
};

export default ShowUsers;