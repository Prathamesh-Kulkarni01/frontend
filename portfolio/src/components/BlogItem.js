import React from "react";

const BlogItem = () => {
  return (
    <div>
      <div className="blog_container">
        <div className="blog_body">
          <div className="left">
            <img
              heigth="200px"
              width="200px"
              src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
              alt=""
              className="img"
            ></img>
          </div>
          <div className="right">
            <h2 className="header">Blog Title is Awesome </h2>
            <p className="text">
              Lorem ipsum dolor sit amet sit amet consectetur sit amet
              consectetur adipisicing elit.adipisicing elit. consectetur
              adipisicing elit. Numquam ullam, tenetur ad natus asperiores
              harum. Dolor, tenetur consequatur! Sapiente natus .....
              <a>Read More</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
