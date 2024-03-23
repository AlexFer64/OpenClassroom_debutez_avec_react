import { plantList } from "../datas/plantList.js";

function Categories({ selectCategory, setSelectCategorie }){

    const categorie = [];

    plantList.forEach(function (plant) {
      if (!categorie.includes(plant.category)) {
        categorie.push(plant.category);
      }
    });

    function reset(){
        setSelectCategorie(null)
    }

    return(
        <div>
            <select onChange={(e) => {setSelectCategorie(e.target.value)}}>
                <option>Choisissez une catégorie</option>
            {categorie.map(
                (categorie, index) => (
                    <option key={`${categorie}-${index}`} value={categorie}>{ categorie }</option>
                )
            )}
            </select>
            <button onClick={reset}>Réinitialiser</button>
        </div>
    )
}

export default Categories