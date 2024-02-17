import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCoordinates } from "../../redux/Mapactions";

const useGetCurrentLocation = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const currentCoordinates = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          dispatch(setCoordinates(currentCoordinates));
        },
        () => {
          console.error("현재 위치 정보 업데이트 에러");
        },
        { enableHighAccuracy: true }
      );
    }
  }, [dispatch]);
};

export default useGetCurrentLocation;
