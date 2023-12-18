import { nanoid } from "nanoid";
import colorData from "./data/colorData";
import Header from "./components/Header";
import React from "react";

export default function App() {
  /* Challenge

	Frontend Magazine needs you to show their readers the top 100 colors in front-end development! Your task is to render them as follows: 
	
		1. For each of the 100 hex code colors in the colorData array, there should be a ColorCard 
		   element in the space marked below. The colors are already ranked, so the order of the elements should match the order of the colors in the array. 
		   
		2. The hard-coded information in the colorData component should be replaced with data 
		   passed in via props. 
		   
		3. If you complete these tasks correctly, you should see 100 color cards below the "Top 100 
		   Colors" header. Each color should show the corresponding color's rank number, hex code, and the actual color itself in the background! 
		   
		Note: colorData, ColorCard, and nanoid have already been imported into this file! 
*/

  function ColorCard(props) {
    const [showPopup, setShowPopup] = React.useState(false);
    const copyToClipboard = () => {
      navigator.clipboard
        .writeText(props.color)
        .then(() => {
          setShowPopup(true);
          setTimeout(() => setShowPopup(false), 2000); // Hide popup after 2 seconds
          // You can add any action here that you want to happen after successful copying
          console.log("Color copied to clipboard!");
        })
        .catch((err) => {
          // Handle errors here
          console.error("Failed to copy color:", err);
        });
    };

    return (
      <div className="color-card" style={{ background: `${props.color}` }}>
        <p onClick={copyToClipboard}>
          <span>{props.number}</span> {props.color}
        </p>

        {showPopup && <div className="popup">Color Copied!</div>}
      </div>
    );
  }

  return (
    <div className="wrapper">
      <Header />

      {/*------Your ColorCard elements below!-----------*/}
      {colorData.map((color, index) => {
        return <ColorCard color={color} number={index + 1} />;
      })}

      {/*------Your ColorCard elements above!-----------*/}
    </div>
  );
}
