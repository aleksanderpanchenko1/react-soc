import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png"></img>
      {props.message}
      <div className={s.like}>
        <span>Likes</span>
        {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
