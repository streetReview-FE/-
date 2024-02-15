import { Coordinates, GeocodeResult } from "../constants/interface";

const GoogleMapKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

export const reverseGeocode = async (coords: Coordinates) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.lat},${coords.lng}&key=${GoogleMapKey}`;

  try {
    const res = await fetch(url);
    const data: GeocodeResult = await res.json();
    if (data.status === "OK") {
      const addressComponents = data.results[0].address_components;
      const cityComponent = addressComponents.find((component) =>
      component.types.includes("locality")
    );
      const sublocalityLevel1 = addressComponents.find((component) =>
        component.types.includes("sublocality_level_1")
      );
      const sublocalityLevel2 = addressComponents.find((component) =>
        component.types.includes("sublocality_level_2")
      );

      // 시, 구와 동 정보를 반환합니다. 정보가 없는 경우 빈 문자열을 반환합니다.
      const city = cityComponent ? cityComponent.long_name : "";
      const district = sublocalityLevel1 ? sublocalityLevel1.long_name : "";
      const neighborhood = sublocalityLevel2 ? sublocalityLevel2.long_name : "";
      return `${city} ${district} ${neighborhood}`.trim();
    } else {
      throw new Error(data.status);
    }
  } catch (error) {
    console.log("error : ", error);
  }
};
