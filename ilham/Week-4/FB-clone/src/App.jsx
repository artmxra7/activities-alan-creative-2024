import React from 'react';
import { Card } from 'react-bootstrap';
import './App.css';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          alt=""
          className="header__logo"
        />
        <div className="header__input">
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div className="header__center">
        <div className="header__option header__option--active">
          <i className="fas fa-home"></i>
        </div>
        <div className="header__option">
          <i className="fas fa-users"></i>
        </div>
        {/* Add more header options */}
      </div>
      <div className="header__right">
        <div className="header__info">
          <img
            src="https://avatars.githubusercontent.com/u/34622587?s=200&v=4"
            alt=""
            className="header__avatar"
          />
          <h4>John Doe</h4>
        </div>
        {/* Add more header icons */}
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Sidebar</h2>
      <ul>
        <li>Menu 1</li>
        <li>Menu 2</li>
        {/* Add more sidebar menus */}
      </ul>
    </div>
  );
}

function Feed() {
  return (
    <div className="feed">
      <h2>Feed</h2>
      {/* Add feed content */}
    </div>
  );
}

function Widgets() {
  return (
    <div className="widgets">
      <h2>Widgets</h2>
      {/* Add widgets content */}
    </div>
  );
}

function Stories() {
  return (
    <div className="stories">
      <div className="carousel">
        <Card className="carousel__item">
          <Card.Img variant="top" src="https://placeimg.com/100/100/any" />
          <Card.Body>
            <Card.Title>User 1</Card.Title>
          </Card.Body>
        </Card>
        <Card className="carousel__item">
          <Card.Img variant="top" src="https://placeimg.com/100/100/any" />
          <Card.Body>
            <Card.Title>User 2</Card.Title>
          </Card.Body>
        </Card>
        {/* Add more story items */}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Stories />
        <Feed />
        <Widgets />
      </div>
    </div>
  );
}

export default App;
