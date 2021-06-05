import axios from 'axios';
import React, { Component } from 'react';



class Friends extends Component {

    state = {
        friends: []
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        const token = localStorage.getItem('token');
        axios.get('http://localhost:5000/api/friends', {
            headers: {
                authorization: token
            }
        }).then(res => {
            console.log(res);
            this.setState({
                friends: res.data
            });
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
            <div>
                <h2>Friend List</h2>
                {
                    this.state.friends.map(friend => {
                        return (
                            <div key={friend.id} className='friend'>
                                <p id='name'>{friend.name}</p>
                                <p id='age'>{friend.age}</p>
                                <p id='email'>{friend.email}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

};

export default Friends
