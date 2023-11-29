import React, { useEffect, useState } from "react";
import "../mainHomePage/mainHomePage";
import "../../../../../src/assets/scss/pages/main/kakaoMap.scss";

const { kakao } = window;

function KakaoMap() {
  const [map, setMap] = useState(null);
  const [currentPosition, setCurrentPosition] = useState({});
  const [showMap, setShowMap] = useState(true);

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
    if (showMap) {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(37.5665, 126.978),
        level: 1,
      };
      const newMap = new kakao.maps.Map(container, options);
      setMap(newMap);

      return () => {
        newMap && newMap.relayout();
      };
    }
  }, [showMap]);

  useEffect(() => {
    if (map && currentPosition.lat && currentPosition.lng) {
      map.setCenter(
        new kakao.maps.LatLng(currentPosition.lat, currentPosition.lng)
      );

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

  const handleMapClick = () => {
    setShowMap(false);
  };

  return (
    <>
      {showMap && (
        <div
          className="location"
          id="map"
          onClick={handleMapClick}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            width: "80%",
            height: "50%",
            borderRadius: "30px",
            border: "1.5px solid black",
            zIndex: 1,
            marginTop: "-13%",
            marginBottom: "1%",
          }}
        ></div>
      )}
    </>
  );
}

export default KakaoMap;
