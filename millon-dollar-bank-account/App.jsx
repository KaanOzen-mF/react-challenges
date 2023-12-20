import React from "react";
import Message from "./components/Message";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  const passCode = "1001";

  const [userInput, setUserInput] = React.useState({
    charOne: "",
    charTwo: "",
    charThree: "",
    charFour: "",
  });

  const inputRefs = React.useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  const checkPassCode = () => Object.values(userInput).join("") === passCode;

  const [verified, setVerified] = React.useState(undefined);

  /* Challenge

	The verification code form doesn't yet check the user's input. Your job is to finish setting it up as follows: 
	
		1. When the user types a character in one of the password inputs, the corresponding 
		   property of the userInput state object should be updated, while preserving the other properties. Note that the property names and the names of the
		   inputs match each other (charOne, charTwo, etc.)
		   
		2. When the user clicks the submit button, a submit handling function should prevent the 
		   page from refreshing and check if the combination of the four characters stored in userInput equals the passCode value (declared on line 7 above).
		   
		3. If they match, the verified state value should be set to true. Otherwise, it should 
		   be set to false. 
		   
		4. Your code should be as DRY as possible!
*/
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setUserInput((prevState) => ({ ...prevState, [name]: value }));

    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].current.focus();
    }
  };

  const checkAnswer = (e) => {
    e.preventDefault();
    setVerified(checkPassCode());
    setUserInput({ charOne: "", charTwo: "", charThree: "", charFour: "" });
  };

  return (
    <div className="wrapper">
      <Header />

      <form onSubmit={checkAnswer}>
        <Message status={verified} />

        <div>
          {Object.keys(userInput).map((key, index) => (
            <input
              key={key}
              ref={inputRefs.current[index]}
              required
              type="password"
              name={key}
              maxLength="1"
              value={userInput[key]}
              onChange={(e) => handleChange(e, index)}
            />
          ))}
        </div>

        <button type="submit" disabled={verified}>
          Submit
        </button>
      </form>

      <Footer verify={verified} />
    </div>
  );
}
