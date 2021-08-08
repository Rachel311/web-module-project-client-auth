import React from 'react';

import { axiosWithAuth } from '../utilities/axiosWithAuth';

class EditFriends extends React.Component {
    state = {
        name: '',
        age: '',
        email: ''
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    };

    addFriend = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post('/friends', this.state)
            .then((res) => {
                this.props.history.push('/friends');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    render() {
        return (
            <div>
        <form className="editFriend" onSubmit={this.addFriend}>
          <label>
            Full name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Age:
            <input
              type="text"
              name="age"
              value={this.state.age}
              onChange={this.handleChange}
            />
          </label>
          <label>
            E-mail:
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <button>Add Friend</button>
        </form>
      </div>
        );
    }
}

export default EditFriends;