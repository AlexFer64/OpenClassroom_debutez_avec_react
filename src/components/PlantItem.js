import CareScale from "./CareScale.js";
import "../styles/PlantItem.css"


function PlantItem({ plantName, cover, plantLight, plantWater }) {
  return (
      <li className="lmj-plant-item">
        <img className='lmj-plant-item-cover' src={cover} alt={`${plantName} cover`} />
        {plantName}
        <div>
            <CareScale careType="light" scaleValue={plantLight} />
            <CareScale careType="water" scaleValue={plantWater} />
        </div>
        
      </li>
  );
}



export default PlantItem;
