import React, { Component } from "react";
import PostImage from "../../../UI/atoms/postImage";
import PostImages from "../../../UI/organisms/postImages";

const imageList = [
  {
    id: 1,
    url: "https://image.bugsm.co.kr/album/images/200/40856/4085673.jpg?version=20230421064519.0"
  },
  {
    id: 2,
    url: "https://image.bugsm.co.kr/album/images/200/201547/20154722.jpg?version=20230601001519.0"
  },
  {
    id: 3,
    url: "https://image.bugsm.co.kr/album/images/200/40876/4087602.jpg?version=20230612063347.0"
  },
  {
    id: 4,
    url: "https://image.bugsm.co.kr/album/images/200/40734/4073469.jpg?version=20230110005119.0"
  },
  {
    id: 5,
    url: "https://image.bugsm.co.kr/album/images/200/40863/4086381.jpg?version=20230518002725.0"
  },
  {
    id: 6,
    url: "https://image.bugsm.co.kr/album/images/200/2428/242813.jpg?version=20220722014457.0"
  },
  {
    id: 7,
    url: "https://image.bugsm.co.kr/album/images/200/40850/4085086.jpg?version=20230403063926.0"
  },
  {
    id: 8,
    url: "https://image.bugsm.co.kr/album/images/200/40873/4087317.jpg?version=20230606012344.0"
  },
  {
    id: 9,
    url: "https://image.bugsm.co.kr/album/images/200/90006/9000635.jpg?version=20211216021442.0"
  }
]

export default class postListPage extends Component {
  render() {
    return (
      <div>
        <PostImages imageList={imageList} />
      </div>);
  }
}
