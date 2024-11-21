export const SelectTravelList = [
  {
    id: 1,
    title: "Just Me",
    desc: "A sole traveles  in exploration",
    icon: "✈️",
    people: "1",
  },
  {
    id: 2,
    title: "A Couple",
    desc: "Two traveles in tandem",
    icon: "🥂",
    people: "2",
  },
  {
    id: 3,
    title: "Family",
    desc: "A group of fun loving adv",
    icon: "🏠",
    people: "3 to 5 people",
  },
  {
    id: 4,
    title: "Friends",
    desc: "A bunch of thrill-seekes",
    icon: "⛵",
    people: "5 to 10 people",
  },
];

export const SelectBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "Stay consious of costs",
    icon: "🪙",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Keep cost on the average side",
    icon: "💰",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Don't worry about the cost",
    icon: "💸",
  },
];

export const AI_PROMPT =
  "Provide a complete JSON file, without any comments or instructions, containing placeholder data and Generate Travel Plan for Location: {location}, for {totalDays} Days for {traveler} with a {budget} budget, give me Hotels options list atleast 5 with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with with full day plan with timestamp, placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time travel each of the location for {totalDays} days with each day plan with best time to visit atleast 4 places in JSON format like an api.";
