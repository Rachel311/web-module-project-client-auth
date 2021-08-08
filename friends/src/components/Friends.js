import React from 'react';

const Friends = (props) => {
    return (
        <div>
            <p>Name: {props.friend.name}</p>
            <p>Age: {props.friend.age}</p>
            <p>Email: {props.friend.email}</p>
        </div>
    );
};

export default Friends;