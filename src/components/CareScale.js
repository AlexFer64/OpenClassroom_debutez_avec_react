import sun from '../assets/sun.svg'
import water from '../assets/water.svg'

function tipsPlant(scaleValue, careType){
	switch (scaleValue) {
		case 1:
			alert(`Cette plante requiert peu ${careType === 'light' ? 'de lumière, composant de type light': 'd\'arrosage, composant de type water'}`)
			break;
		
		case 2:
			alert(`Cette plante requiert modérément ${careType === 'light' ? 'de lumière, composant de type light': 'd\'arrosage, composant de type water'}`)
			break;

		case 3:
			alert(`Cette plante requiert beaucoup ${careType === 'light' ? 'de lumière, composant de type light': 'd\'arrosage, composant de type water'}`)
			break;
	
		default:
			break;
	}
}

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType = careType === 'light' ? sun : water

	return (
		<div>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<img key={rangeElem.toString()} src={scaleType} onClick={() => tipsPlant(scaleValue, careType)} alt={scaleType}></img>
				) : null
			)}
		</div>
	)
}

export default CareScale