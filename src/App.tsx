import React from 'react';
import './App.css';

import RegisterForm from './containers/RegisterForm'

function App() {
  const handleRegistration = async (data: any) => {
    console.log('Calling Custom Callback')

    // Fake API call
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('success')
      }, 2000)
    })

    console.log(data)
  }

  return (
    <div className="App">
      <RegisterForm onSubmit={handleRegistration} />
    </div>
  );
}

export default App;
