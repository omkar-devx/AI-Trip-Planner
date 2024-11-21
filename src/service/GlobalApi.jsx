import axios from "axios";

const BASE_URL = "https://places.googleapis.com/v1/places:searchText";

export const GetPlaceDetails = async (query) => {
  try {
    const response = await axios.post(
      BASE_URL,
      { textQuery: query }, // Request body containing the query text
      {
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": import.meta.env.VITE_GOOGLE_PLACE_API_KEY, // API Key
          "X-Goog-FieldMask": "places.photos,places.displayName,places.id", // Required fields
        },
      }
    );
    return response.data; // Return the API response data
  } catch (error) {
    console.error(
      "Error fetching place details:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const PHOTO_REF_URL =
  `https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=600&maxWidthPx=600&key=` +
  import.meta.env.VITE_GOOGLE_PLACE_API_KEY;
