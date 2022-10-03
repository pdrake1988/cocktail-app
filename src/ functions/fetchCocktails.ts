import axios from "axios";

export default function fetchCocktails(
  urlType: string,
  searchParam: string | HTMLInputElement | null | undefined
) {
  switch (urlType) {
    case "popular":
      return axios.get(
        "https://www.thecocktaildb.com/api/json/v2/9973533/popular.php"
      );
    case "latest":
      return axios.get(
        "https://www.thecocktaildb.com/api/json/v2/9973533/latest.php"
      );
    case "random":
      return axios.get(
        "https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php"
      );
    case "search by name":
      return axios.get(
        "https://www.thecocktaildb.com/api/json/v2/9973533/search.php",
        {
          params: {
            s: searchParam,
          },
        }
      );
    case "search by first letter":
      return axios.get(
        "https://www.thecocktaildb.com/api/json/v2/9973533/search.php",
        {
          params: {
            f: searchParam,
          },
        }
      );
    case "search by ingredient":
      return axios.get(
        "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php",
        {
          params: {
            i: searchParam,
          },
        }
      );
    default:
      return axios.get(
        "https://www.thecocktaildb.com/api/json/v2/9973533/popular.php"
      );
  }
}
