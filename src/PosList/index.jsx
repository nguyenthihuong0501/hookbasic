import React from "react";
import PropTypes from "prop-types";

//danh sach cac post dang mang
PosList.propTypes = {
  posts: PropTypes.array,
};

PosList.defaultProps = {
  posts: [],
};

function PosList(props) {
  const { posts } = props;

  return (
    <ul className="post-list">
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default PosList;
