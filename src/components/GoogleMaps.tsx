import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { State } from "../constants/interface";
import { setCoordinates } from "../redux/actions";

declare var google: any;

const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

const GoogleMaps = () => {
  const dispatch = useDispatch();
  const { address, coordinates } = useSelector((state: State) => state);

  const searchAddressHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredAddress = address;

    type GoogleGeocodingResponse = {
      results: { geometry: { location: { lat: number; lng: number } } }[];
      status: "OK" | "ZERO_RESULTS";
    };

    axios
      .get<GoogleGeocodingResponse>(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          enteredAddress
        )}&key=${GOOGLE_API_KEY}`
      )
      .then((res) => {
        if (res.data.status !== "OK") {
          throw new Error("지역을 찾을 수 없습니다.");
        }
        const newCoordinates = res.data.results[0].geometry.location;
        console.log(coordinates);
        const map = new google.maps.Map(document.getElementById("map")!, {
          center: newCoordinates,
          zoom: 16,
        });
        new google.maps.Marker({ position: newCoordinates, map: map });
        dispatch(setCoordinates(newCoordinates));
      })
      .catch((err) => {
        alert(err.message);
        console.log(err);
      });
  };

  useEffect(() => {
    const mapElement = document.getElementById("map");
    if (mapElement) {
      const map = new google.maps.Map(mapElement as HTMLElement, {
        center: coordinates,
        zoom: 16,
      });
      new google.maps.Marker({
        position: coordinates,
        map: map,
      });
    }
  }, [coordinates]);

  return (
    <GoogleMapsContainer>
      {/* <form onSubmit={searchAddressHandler}>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => dispatch(setAddress(e.target.value))}
        />
        <button type="submit">주소 검색</button>
      </form> */}
      <div id="map" style={{ height: "100vh", width: "100%" }}>
        {" "}
      </div>
      {/* 전체화면을 위해서 100vh로 설정 */}
    </GoogleMapsContainer>
  );
};
const GoogleMapsContainer = styled.div`
  position:relative;
  z-index: 0;
  bottom: 0;
  width: 100%;
  overflow: hidden;
`;
export default GoogleMaps;
