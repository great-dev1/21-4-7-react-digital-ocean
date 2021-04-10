import React, { createContext, useState } from 'react';
import './App.css';
import TextInformation from '../TextInformation/TextInformation';

export const TextContext = createContext();
TextContext.displayName = 'TextContext';

function App() {
  const [text, setText] = useState('');

  return (
    <TextContext.Provider value={text}>
      <div className="wrapper">
        <label htmlFor="text">
          Add Your Text Here:
          <br />
          <textarea
            id="text"
            name="text"
            rows="10"
            cols="100"
            onChange={e => setText(e.target.value)}
          >
          </textarea>
        </label>
        <TextInformation />
      </div>
    </TextContext.Provider>
  )
}

export default App;