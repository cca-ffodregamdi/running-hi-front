import React, { useEffect, useState } from "react";
import "../mainHomePage/mainHomePage";
import "../../../../../src/assets/scss/pages/main/kakaoMap.scss";

const { kakao } = window;

function KakaoMap() {
  const [map, setMap] = useState(null);
  const [currentPosition, setCurrentPosition] = useState({});

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.5665, 126.978), // 이건 카카오에서 제공하는 기본 위치값!
      level: 1,
    };
    const map = new kakao.maps.Map(container, options);
    map.setDraggable(false);
    map.setZoomable(false);

    setMap(map);
  }, []);

  useEffect(() => {
    if (map && currentPosition.lat && currentPosition.lng) {
      map.setCenter(
        new kakao.maps.LatLng(currentPosition.lat, currentPosition.lng)
      ); // 현재 위치로 지도의 중심을 이동시킴!
    }
  }, [map, currentPosition]);
  useEffect(() => {
    if (map && currentPosition.lat && currentPosition.lng) {
      map.setCenter(
        new kakao.maps.LatLng(currentPosition.lat, currentPosition.lng)
      ); // 현재 위치로 지도 중심 이동

      // 마커를 생성하고 지도에 표시
      const markerPosition = new kakao.maps.LatLng(
        currentPosition.lat,
        currentPosition.lng
      );
      const marker = new kakao.maps.Marker({
        position: markerPosition,
      });
      marker.setMap(map);
    }
  }, [map, currentPosition]);

  return (
    <>
      <div
        className="location"
        id="map"
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          width: "80%",
          height: "80%",
          borderRadius: "30px",
          // zIndex: 1,
        }}
      ></div>
    </>
  );
}

export default KakaoMap;
