import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import EditFriends from './components/EditFriends';

function App() {

  const logout = () => {
    localStorage.removeItem('token')
    window.location.href = '/login'
  };

  return (
    <Router>
       <div className="App">
        <header className="App-header">
          <div className="friendsLogo">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA6lBMVEUAAAD///+Tk5Pd3d35+fno6Ojz8/P8/PzNzc3Hx8efn5+AgIDv7+/19fXQ0NDh4eE+Pj6tra3X19e5ubkAsPBhYWFGRkZtbW26urplZWVUVFSoqKiZmZnvTTcvLy9NTU0NDQ0fHx+JiYkuLi79Uzz6zTt3d3cmJiZ6enqEhIQaGho4ODjzyDpSUlJBQUEYEwt+LiKfOCoJbIgFvP0JXXQiIA3/3D/lxDtqJx2ZhyrQsjYaHAwIdZgFEQ4pEQ4GERWyly9fVRwIk78HsusGGiI2FxKEdCTauTcIPVCyPy50aCEHo9c3MxMHO0fQ+kqCAAAFl0lEQVR4nO3Ya3uiRhgGYAZERQ2IRiVqEjTGQw52N7ZJ99DNNt122237//9O5wQMAxON2yZ79XruDwmCMKd3Zl60LAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPhWzI9eugb/sRNSf4liV5HTck+fpSifDJ6lHFWvTjh791smJ/sW1ict7czl9puGUae3b4GWZbdE+wolc3PPDRrF04QE8X7F1fWOjAirfNzuT0y3LHxaO3e/4qiqbJ+rt8OjzxyI1gf6TW16sl/2tPVg+HhxE0K0MwFxlx6vhVsevra5/3dxRG+udqfDuHClQiIZvYToMdmj5wrBdWZ32HfPHi1vTDraGaJoFm9YOKyGjcFiS0OMPELGpRfaasmxdnFF9KFYj1xDb1hWRxnugGixslbL0cfXspbsbMk02R0p9Kk05SVGw8uyKA31qElHu2S+hMRLj2mQamHMY7A1OhWBoccpLYh0jBN0F3Qw5B4R96a5mVWXfceCpLCO0XD01M9O2r4w1r97QU+vkw/NwjDRcury+XZhOY/ovdOdG1PKEX3eC1mMReoVGvzsX6c0SGr52Bbj0F2VbqhsGJzkQ7ewYlRILTk80ls4JqTW3q0hJmespk2vxvvfUR82JGRusWmjjRbH5qjaGtZg4waZW0IC4uev0mmYpji2Fi20dpWdm2IQJtFV6WozYMTCqV0pbSCrygE/+I7/nROSpJonA7uRX7mmubWKkG7+UWNlAT3QBrhLh9D1652g1Wo54cWTWiY1ZfPCa3ni1Wz2Why5tGU8+NIa3Ww238tDGroh/ffD3e0da6MnatYe+9mC+Hp2/KN8EPH8ZLFqJyH/5u7tO37gZBMzShaam/c/JdcU+2yII36nr6T6x8fHsw/sYEGnBC9glVy63xwebuQxESvix/Or8zcW6/vRohkdyIp02Ub5YUYfxb7KluKjE/pnxD4N5MLx8+3V+Vv5qCRsG0m4PGwOf+EHHn9g1Q8bjVbZTrJbC6PcBp22UMaWm23rn7IWzmWQyhbS6VKT/RzYcjr+mrSwwasWyo2ARsWSnf3t/Orqs3yU7MNuutGwgn7nR8tpsyeCc1yyZe1gLdfLTBqlPDup5Fa295vNjTjyRJBa7+5uP8dyU2ZfHym99cds9or9D8TIsAFu85aKiLk7v/0iHxWz/xedrC5/ZsGSONGWtl2NzdmCqHJ+H/x0n12U2zavXVcEk5ZxfYiT77J+GhK+LtKpJqf8l7/4v4qYXra6o9w/PPydf1a7Zsq8tnB4v5ZZyWEJyy7SyVRTP7M5clCSUTJHSeeHPN3paEMx5CM8rZqKEpblK/p2F+btpk5aPZ5nVktey6J8bhCrOUHbzze1ka4QbGeNAi1hp+0OeMJ38MgrCVtwDKnlFjYx/p7A6yzeWjqFsrX0sS9yA+a6ro+Fl06vWK5GuRYm2frIXMsmu2/P3z0c4zRsiuRiITakYJW7ONAW7kHysRkoW7sUZPOrLxqjptELccozv3ANg9ye/DQTkqUiGj+ptC372Bllo9ZVFgVGJNPDSHxTey+uKjOol6YDCb4n+aWv0uLRoov3zb1Z7Q2vldk70CR9LUrfiqpaUNEtLZSZLXH17DQXgWc+qeRinsZwy5xZ9ypikV4bv7FFPUkuC6bqUnIqU7F0KmjT0DpN+oAcFDvbJbVH3u4cJWcqmIiH7hmhTNW4BDv5wJisun492/wLQy/TNX9ulXj05ee6Zehjhodw8DW/cNZMHTgpTieVo2eIl17QCf/930D7xp+mdlUx5bK2tqPrVs/1q/xXvvzSNdEQpN7e+8+3Zml4pwyzLfx/Km484ed9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeEH/AGveRJQ+DmEAAAAAAElFTkSuQmCC"
              alt="friends"
            />
          </div>
          <nav>
            <Link className="link" to="/login">
              Login
            </Link>
            {localStorage.token && (
              <Link className="link" to="/friends">
                Friends
              </Link>
            )}
            {localStorage.token && (
              <Link className="link" to="/edit">
                Edit
              </Link>
            )}
            <Link className="link" to="" onClick={logout}>
              Logout
            </Link>
          </nav>
          <div>
            <Switch>
              <Route path="/login" component={Login} />
              <PrivateRoute exact path="/friends" component={FriendsList} />
              <PrivateRoute exact path="/edit" component={EditFriends} />
            </Switch>
          </div>
        </header>
      </div>
    </Router>
   
  );
}

export default App;
