import { Coordinates, GeocodeResult } from "../constants/interface";

const GoogleMapKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

export const reverseGecodingDetail = async (coords: Coordinates) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.lat},${coords.lng}&key=${GoogleMapKey}`;

  try {
    const res = await fetch(url);
    const data: GeocodeResult = await res.json();
    if (data.status === "OK") {
      const postalCodeAddress = data.results[0].formatted_address;
      return postalCodeAddress;
    } else {
      throw new Error("No results found for the coordinates");
    }
  } catch (error) {
    console.error("Error fetching postal code address:", error);
    return null;
  }
};
