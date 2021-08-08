import React from 'react';
import { axiosWithAuth } from '../utilities/axiosWithAuth';
import Friends from './Friends';

class FriendsList extends React.Component {
    state = {
        friends: []
    };
    componentDidMount() {
        this.getFriends();
    }

    getFriends = () => {
        axiosWithAuth()
            .get('/friends')
            .then((res) => {
                console.log(res.data);
                this.setState({ friends: res.data });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    render() {
        return (
            <div>
                {this.state.friends.map((friend) => {
                    return <Friends friend ={friend} key={friend.id} />
                })}
            </div>
        );
    }
}

export default FriendsList