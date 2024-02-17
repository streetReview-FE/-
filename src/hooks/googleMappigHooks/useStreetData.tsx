// useStreetData.js
import axios from "axios";
import { useEffect } from "react";
import customIcon from "../../assets/Icons/custom-marker.svg";

const useStreetData = (map:any, onSelectStreet:any) => {
  const accessToken = localStorage.getItem("token");
  useEffect(() => {
    if (!map) return;

    const fetchStreetData = async () => {
      try {
        const res = await axios.post(
          "street/all/view",
          {},
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );
        res.data.data.forEach((street:any) => {
          const streetLocation = { lat: street.x, lng: street.y };
          const marker = new window.google.maps.Marker({
            position: streetLocation,
            map: map,
            icon: customIcon,
            title: street.streetName,
          });

          marker.addListener("click", () => onSelectStreet(street));
        });
      } catch (error) {
        console.log("Street data error:", error);
      }
    };

    fetchStreetData();
  }, [map, accessToken, onSelectStreet]);
};
export default useStreetData;
