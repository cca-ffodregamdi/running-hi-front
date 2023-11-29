import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PostItem from "../../molecules/postItem/postItem";
import "../../../../assets/scss/ui/organisms/postList.scss";
// import PostDetail from "../../../pages/post/postDetailPage";

const CustomPrevArrow = ({ onClick }) => (
  <button className="custom-prev-arrow" onClick={onClick}>
    이전
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button className="custom-next-arrow" onClick={onClick}>
    다음
  </button>
);

const PostList = ({ posts }) => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="custom-slider-container">
      <Slider ref={sliderRef} {...settings}>
        {posts.map((post) => (
          <Link key={post.id} to={`/post/${post.id}`} className="post-link">
            <div className="post-card">
              <PostItem
                title={post.title}
                imageUrl={post.imageUrl}
                tags={post.tags}
              />
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default PostList;
