
interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  relative_time_description: string;
}

interface GooglePlacesResponse {
  result: {
    reviews: GoogleReview[];
    rating: number;
    user_ratings_total: number;
  };
  status: string;
}

export const fetchGoogleReviews = async (placeId: string, apiKey: string): Promise<GooglePlacesResponse> => {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`,
    {
      method: 'GET',
    }
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch Google reviews');
  }
  
  return response.json();
};
