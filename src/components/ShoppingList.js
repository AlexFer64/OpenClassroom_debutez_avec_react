import { plantList } from "../datas/plantList.js";
import "../styles/ShoppingList.css";
import PlantItem from "./PlantItem.js";

const categorie = [];

plantList.forEach(function (plant) {
  if (!categorie.includes(plant.category)) {
    categorie.push(plant.category);
  }
});



function ShoppingList({ cart, updateCart, selectCategory }) {

  function addToCart(name, price) {
    const currentPlantAdded = cart.find((plant) => plant.name === name);
    if (currentPlantAdded) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      );
      updateCart([
        ...cartFilteredCurrentPlant,
        { name, price, amount: currentPlantAdded.amount + 1 },
      ]);
    } else {
      updateCart([...cart, { name, price, amount: 1 }]);
    }
  }

  return (
    <div className="lmj-categories">
      {categorie.map((categorie, index) => (
        <>
        {(selectCategory === categorie || selectCategory === null)  && (
          <>
          <h2 key={`${categorie}-${index}`}> {categorie} </h2>
          <ul key={`list-${categorie}`} className="lmj-plant-list">
            {plantList.map((plant) => {
              return (
                plant.category === categorie && (
                  <div key={plant.id}>
                    <PlantItem
                      plantName={plant.name}
                      cover={plant.cover}
                      plantLight={plant.light}
                      plantWater={plant.water}
                    />
                    <button onClick={() => addToCart(plant.name, plant.price)}>
                      Ajouter
                    </button>
                  </div>
                )
              );
            })}
          </ul>
          </>
        )}
        </>
      ))}
    </div>
  );
}

export default ShoppingList;
