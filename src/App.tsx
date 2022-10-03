import React, { useEffect, useReducer, useState } from "react";
import "./App.css";
import fetchCocktails from "./ functions/fetchCocktails";
import CocktailDetails from "./interfaces/CocktailDetails";
import ParamValues from "./interfaces/ParamValues";
import Header from "./header/Header";
import titleReducer from "./ functions/titleReducer";

function App() {
  const [title, setTitle] = useReducer(
    titleReducer,
    "Showing Popular Cocktails"
  );
  const [urlParams, setUrlParams] = useState<ParamValues>({
    urlType: "popular",
    searchParam: null,
  });
  const [cocktails, setCocktails] = useState<CocktailDetails>();
  useEffect(() => {
    fetchCocktails(urlParams.urlType, urlParams.searchParam)
      .then((res) => {
        setCocktails(res.data);
      })
      .catch((err) => console.log(err));
  }, [urlParams]);
  return (
    <React.Fragment>
      <Header setUrlParams={setUrlParams} setTitle={setTitle} title={title} />
      <main className={"bg-warning vh-100 vw-100"}>
        <div className={"container"}>
          <div className={"row"}>
            {cocktails?.drinks &&
              cocktails.drinks.map((cocktail) => {
                return (
                  <div className={"col-3 p-3"} key={cocktail.idDrink}>
                    <h3>{cocktail.strDrink}</h3>
                    <button className={"p-0 border border-0"}>
                      <img
                        className={"img-fluid"}
                        src={cocktail.strDrinkThumb + "/preview"}
                        alt={cocktail.strDrink}
                      />
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
export default App;
