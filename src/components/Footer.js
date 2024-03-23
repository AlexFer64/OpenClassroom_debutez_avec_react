import { useState } from "react";
import "../styles/Footer.css";

function invalidMail(value){
	if(!value.includes('@')){
		alert('Attention, il n\'y a pas d\'@, ceci n\'est pas une adresse email valide. ')
	}
}

function Footer() {
  const [inputValue, setInputValue] = useState("");

  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-elem">
        Pour les passionné·e·s de plantes 🌿🌱🌵
      </div>
      <div className="lmj-footer-elem">
        <span>Laissez nous votre Email : </span>
		<input onChange={(e) => {setInputValue(e.target.value)}} onBlur={() => invalidMail(inputValue)}></input>
      </div>
    </footer>
  );
}

export default Footer;
