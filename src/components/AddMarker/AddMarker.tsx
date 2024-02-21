import ReactDOM from "react-dom";
import customIcon from "../../assets/Icons/custom-marker.svg";
import { Review } from "../../constants/interface";
import AddMarkerItem from "./AddMarkerItem";

const HOME_BASE_URL = process.env.REACT_APP_HOME_URL;
const addMarker = (
  map: google.maps.Map,
  street: Review,
) => {
  const markersData = new Map<google.maps.Marker, Review>();
  const streetLocation = {
    lat: street.x,
    lng: street.y,
  };

  const marker = new google.maps.Marker({
    position: streetLocation,
    map: map,
    icon: customIcon,
    title: street.streetName,
  });

  markersData.set(marker, street);
  console.log("실행중!!!!!!!!!!!!!");
  const contentString = '<div id="infoWindowContent"></div>';
  const infoWindow = new google.maps.InfoWindow({
    content: contentString,
  });
  infoWindow.addListener('domready', () => {
    // 아래에 온클릭 이벤트 넣어서 넘어가게 하기
    ReactDOM.render(
      <AddMarkerItem
        streetName={street.streetName}
        streetAddress={street.streetAddress}
        reviewCount={street.reviewCount}
        likey={street.likey}
      />,
      document.getElementById('infoWindowContent')
    );
  });

  marker.addListener("click", async () => {
    infoWindow.open(map, marker);
    window.location.href=`${HOME_BASE_URL}/review/${street.x}/${street.y}`;
  });
};

export default addMarker;
