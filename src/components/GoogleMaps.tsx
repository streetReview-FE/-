import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Coordinates, StoreState } from "../constants/interface";
import { setCoordinates } from "../redux/Mapactions";
import customIcon from "../assets/Icons/custom-marker.svg";
import { serialize } from "v8";

declare var google: any;

const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

const GoogleMaps = () => {
  const dispatch = useDispatch();
  const [mapLoaded, setMapLoaded] = useState(false);
  const { address, coordinates } = useSelector(
    (state: StoreState) => state.map
  );

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
        StreetData(map);
      })
      .catch((err) => {
        alert(err.message);
        console.log(err);
      });
  };

  useEffect(() => {
    const googleMapsScriptId = "map";
    if (!document.getElementById(googleMapsScriptId)) {
      const script = document.createElement("script");
      script.onload = () => {
        setMapLoaded(true);
        getCurrentLocation();
      };
    } else {
      setMapLoaded(true);
      getCurrentLocation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (mapLoaded) {
      loadMap();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coordinates, mapLoaded]);

  const loadMap = () => {
    if (!window.google) {
      console.error("구글 API가 안됩니다.");
      return;
    }
    const mapElement = document.getElementById("map");
    if (mapElement) {
      const map = new window.google.maps.Map(mapElement, {
        center: coordinates,
        zoom: 17,
      });
      new window.google.maps.Marker({
        position: coordinates,
        map: map,
      });
      StreetData(map);
    }
  };

  const StreetData = (map: google.maps.Map) => {
    const accessToken = localStorage.getItem("token");
    axios.post("street/all/view",{}, {
      headers : {
        "Authorization" : `Bearer ${accessToken}`
      }
    }).then((res) => {
      const streetData = res.data.data;
      streetData.forEach((street:any) => {
        const streetLocation = {
          lat : street.x,
          lng : street.y,
        };
        
        const marker = new window.google.maps.Marker({
          position: streetLocation,
          map : map,
          icon : customIcon,
          title : street.streetName,
        });

        const infoWindow = new window.google.maps.InfoWindow({
          content : `<div><strong>${street.streetName}</strong></div>
            <div>주소 : ${street.streetAddress}</div>
            <div>리뷰수 : ${street.reviewCount}</div>
            <div>좋아요 수 : ${street.likey}</div>
          `
        });

        marker.addListener("click", () => {
          infoWindow.open(map, marker);
        });
      })
    }).catch((error) => {
      console.log("Street data error : ",error);
    })
  }

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const currentCoordinates = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          dispatch(setCoordinates(currentCoordinates));          
          loadMap();
        },
        () => {
          console.error("현재 위치 정보 업데이트 에러");
        }
      );
    }
  };
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
  position: relative;
  z-index: 0;
  bottom: 0;
  width: 100%;
  overflow: hidden;
`;
export default GoogleMaps;
