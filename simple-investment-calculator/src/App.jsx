import Header from './components/Header';
import UserInput from './components/UserInput';
import Results from './components/Results';
import { useState } from 'react';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 3.5,
    duration: 4,
  });

 const inputIsValid = userInput.duration >= 1; 

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
        return {
            /// make sure to use a copy of the array
            ...prevUserInput,
            /* adding the + turns the value inputted into a number
            but it creates a problem where the default value doesn't leave
            so you have to add a ternary operator
             to make it aesthetically pleasing
            */
            [inputIdentifier]: newValue === '' ? '' : +newValue
        };
    });
}

  
return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && <p className='center'>Please enter duration greater than 0.</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  )
}

export default App
