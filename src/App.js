import React, { useState } from "react";
import "./App.css";
import Post from "./Post";
function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "admin1",
      caption: "wow it works",
      imageUrl: "https://ionicframework.com/img/meta/ionic-react-og.png",
    },
    {
      id: 2,
      username: "admin2",
      caption: "wow it works",
      imageUrl: "https://ionicframework.com/img/meta/ionic-react-og.png",
    },
    {
      id: 3,
      username: "admin3",
      caption: "wow it works",
      imageUrl: "https://ionicframework.com/img/meta/ionic-react-og.png",
    },
  ]);
  return (
    <div className="App">
      <div className="app_header">
        <img
          className="app_headerImage"
          alt=""
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        />
      </div>
      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
          key={post.id}
        />
      ))}
    </div>
  );
}

export default App;
