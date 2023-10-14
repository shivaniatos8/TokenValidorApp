import React, { useState } from 'react';
import './App.css';

function App() {
  const [availableDigits, setAvailableDigits] = useState(''); // Store available digits
  const [generatedToken, setGeneratedToken] = useState('');   // Store generated token
  const [validationResult, setValidationResult] = useState(''); // Store validation result

  const handleGenerateToken = () => {
    // Make a request to your backend API to generate a token based on availableDigits

     fetch('/api/generate?availableDigits=' + availableDigits)
    .then(response => response.json())
    .then(data => setGeneratedToken(data.generatedToken));
  };

  const handleValidateToken = () => {
    // Make a request to your backend API to validate the generatedToken
    // Update the validationResult state with the response
     fetch('/api/validate?token=' + generatedToken)
    .then(response => response.json())
    .then(data => setValidationResult(data.isValid ? 'Valid' : 'Invalid'));
  };

  return (
    <div className="App">
      <h1>Token Generator And Validator</h1>
      <div>
        <label>Available Digits:</label>
        <input
          type="text"
          value={availableDigits}
          onChange={(e) => setAvailableDigits(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleGenerateToken}>Generate Token</button>
        <button onClick={handleValidateToken}>Validate Token</button>
      </div>
      <div>
        <p>Generated Token: {generatedToken}</p>
        <p>Validation Result: {validationResult}</p>
      </div>
    </div>
  );
}

export default App;

// function App() {
//     const [availableDigits, setAvailableDigits] = useState('');
//     const [generatedToken, setGeneratedToken] = useState('');
//     const [inputToken, setInputToken] = useState('');
//     const [validationResult, setValidationResult] = useState('');

//     const generateToken = () => {
//         fetch('/api/generateToken', {
//             method: 'POST',
//             body: JSON.stringify(availableDigits),
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         })
//         .then(response => response.json())
//         .then(data => {
//             setGeneratedToken(data);
//         })
//         .catch(error => {
//             console.error(error);
//         });
//     };

//     const validateToken = () => {
//         fetch('/api/validateToken', {
//             method: 'POST',
//             body: JSON.stringify(inputToken),
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         })
//         .then(response => response.json())
//         .then(data => {
//             setValidationResult(data ? 'Valid' : 'Invalid');
//         })
//         .catch(error => {
//             console.error(error);
//         });
//     };

//     return (
//         <div>
//           <div className="App">
//        <h1>Token Generator And Validator</h1>
//       </div>
//             <div>
//                 <input
//                     type="text"
//                     placeholder="Available Digits"
//                     value={availableDigits}
//                     onChange={(e) => setAvailableDigits(e.target.value)}
//                 />
//                 <button onClick={generateToken}>Generate Token</button>
//             </div>
//             <div>
//                 <p>Generated Token: {generatedToken}</p>
//             </div>
//             <div>
//                 <input
//                     type="text"
//                     placeholder="Token to Validate"
//                     value={inputToken}
//                     onChange={(e) => setInputToken(e.target.value)}
//                 />
//                 <button onClick={validateToken}>Validate Token</button>
//             </div>
//             <div>
//                 <p>Validation Result: {validationResult}</p>
//             </div>
//         </div>
//     );
// }

// export default App;
