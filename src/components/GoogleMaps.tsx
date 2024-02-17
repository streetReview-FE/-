import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Coordinates, Review, StoreState } from "../constants/interface";
import useGetCurrentLocation from "../hooks/googleMappigHooks/useGetCurrentLocation";
import addMarker from "./AddMarker/AddMarker";
import { getReviews } from "./Posts/reviews";

const GoogleMaps = () => {
  useGetCurrentLocation();
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const { coordinates } = useSelector((state: StoreState) => state.map);
  const [selectedReviews, setSelectedReviews] = useState<Review[]>([]);
  const [selectedCoords, setSelectedCoords] = useState<Coordinates | null>(null);

  useEffect(() => {
    if (!window.google) {
      console.error("구글 API가 안됩니다.");
      return;
    }
    const mapElement = document.getElementById("map");
    if (mapElement && !map) {
      const initializedMap = new window.google.maps.Map(mapElement, {
        center: coordinates,
        zoom: 17,
      });
      new window.google.maps.Marker({
        position: coordinates,
        map: initializedMap, // 수정된 부분: map 대신 initializedMap 사용
        title: "현재 위치"
      });
      setMap(initializedMap);
    }
  }, [coordinates, map]);

  useEffect(() => {
    if (map) {
      const accessToken = localStorage.getItem("token");
      if (!accessToken) {
        console.error("AccessToken not found");
        return;
      }
      axios
        .post(
          `${process.env.REACT_APP_BASE_URL}/street/all/view`,
          {},
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then((res) => {
          const streetData: Review[] = res.data.data;
          streetData.forEach((street) => {
            addMarker(
              map,
              street,
              getReviews,
              setSelectedReviews,
              setSelectedCoords
            );
          });
        })
        .catch((error) => {
          console.log("Street data error : ", error);
        });
    }
  }, [map]);

  return (
    <GoogleMapsContainer>
      <div id="map" style={{ height: "100vh", width: "100%" }}></div>
    </GoogleMapsContainer>
  );
};

const GoogleMapsContainer = styled.div`
  position: relative;
  z-index: 0;
  bottom: 0;
  width: 100%;
  overflow: hidden;
`;

export default GoogleMaps;
