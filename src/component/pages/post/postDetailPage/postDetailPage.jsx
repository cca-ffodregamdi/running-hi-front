import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "../../post/comment/comment";
import "../../../../assets/scss/pages/post/postDetailPage.scss";

const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fakeData = [
      {
        id: 1,
        title: "광화문 30분 코스",
        imageUrl:
          "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201910/27/5297f67b-6fcd-4fcd-8917-d318b81f9f99.jpg",
        tags: ["서울", "쉬운 코스"],
        writer: ["러닝하이"],
        content:
          "광화문 30분 코스는 서울의 역사와 문화를 체험할 수 있는 멋진 산책 코스입니다.  \n 광화문은 대한민국의 중심지로, 서울의 역사와 문화를 대표하는 장소로 알려져 있습니다.  \n  이 코스를 시작하면 광화문에 위치한 경복궁을 먼저 만날 수 있습니다.   \n 광화문 30분 코스는 역사와 문화를 사랑하는 이들에게 특히 추천되는 코스입니다.  \n 한국의 아름다운 역사와 문화를 산책하면서 체험할 수 있는 좋은 기회가 될 것입니다.  \n  광화문 코스를 따라 걸으며 서울의 아름다움과 역사를 느껴보세요.  \n  특별한 경험이 될 것입니다.",
      },
      {
        id: 2,
        title: "한강 20분 코스",
        imageUrl:
          "https://i.namu.wiki/i/t2zvEe7ws93H0jrNgi_6co5wMkXToxQuGkmO7AhHbMrhPBSY9LZwNpthQZRkWYxYBB2ZPj8M08p5vw_yOJAz_g.webp",
        tags: ["서울", "적당한 코스", "6.4km"],
        writer: ["러닝하이"],
        content:
          "한강 자전거 코스는 서울에서 자전거를 타고 한강을 따라 여행하는 도시 속 자연 코스입니다. \n 이 코스는 서울 시내에서도 쉽게 접근할 수 있어 많은 사람들에게 인기가 있습니다.  \n   \n  출발점은 광화문이며, 광화문에서 출발하여 한강을 따라 자전거를 타고 이동합니다. \n 한강을 따라 이동하면서 시원한 바람을 맞으며, 한강의 아름다운 풍경을 감상할 수 있습니다. \n 한강을 따라 자전거를 타면서 도심 속에서도 자연을 느낄 수 있는 특별한 경험을 할 수 있습니다.\n  이 코스는 자전거 여행을 즐기는 사람들에게 특히 추천합니다. \n  \n        자전거를 타면서 몸과 마음을 활기차게 만들어주고, \n  도시 속에서도 자연과의 조화를 느낄 수 있는 좋은 기회가 될 것입니다. \n 또한, 한강을 따라 이동하면서 서울의 다양한 명소들도 경유할 수 있어 더욱 흥미로운 여행이 될 것입니다. \n  \n 한강 자전거 코스는 서울에서 자전거 여행을 계획하고 있는 분들에게 훌륭한 선택이 될 것입니다.  \n \n 즐거운 자전거 여행을 즐기며, 한강의 아름다운 풍경을 만끽하세요!",
      },
    ];

    // 가져온 ID와 일치하는 게시글을 찾음
    const selectedPost = fakeData.find(
      (data) => data.id === parseInt(postId, 10)
    );

    if (selectedPost) {
      setPost(selectedPost);
    } else {
      setPost(null);
    }
  }, [postId]);

  if (post === null) {
    return <div className="loading">로딩 중 . . .</div>;
  }

  if (!post) {
    return <div>게시글이 없습니다.</div>;
  }

  return (
    <div>
      <div className="postDetailContainer">
        <div className="post-detail-wrapper">
          <div className="postDetail">
            <div className="postDetailImageContainer">
              <img
                className="postDetailImage"
                src={post.imageUrl}
                alt={post.title}
              />
              {post.title && <p className="postDetailTitle">{post.title}</p>}
              {post.writer && (
                <a href="/" className="postDetailWriter">
                  {post.writer.join(", ")}
                </a>
              )}
              <div className="tags">
                {post.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="postContents">
              {post.content.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <Comment author="작성자" content="댓글 내용" /> */}
    </div>
  );
};

export default PostDetail;
