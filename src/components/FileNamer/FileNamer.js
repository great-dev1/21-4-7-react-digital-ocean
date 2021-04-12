import React, { useEffect, useState } from 'react';
import './FileNamer.css';

export default function FileNamer() {
  const [name, setName] = useState('');
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const handleWindowClick = () => setAlert(false)
    if (alert) {
      window.addEventListener('click', handleWindowClick);
    } else {
      window.removeEventListener('click', handleWindowClick)
    }
    return () => window.removeEventListener('click', handleWindowClick);
  }, [alert, setAlert]);

  const validate = event => {
    if (/\*/.test(name)) {
      event.preventDefault();
      setAlert(true);
      return;
    }
    setAlert(false);
  };

  return (
    <div className="wrapper">
      <div className="preview">
        <h2>Preview: {name}.js</h2>
      </div>
      <form>
        <label>
          <p>Name:</p>
          <input
            autocomplete="off"
            name="name"
            onChange={event => setName(event.target.value)}
          />
        </label>
        <div className="information-wrapper">
          <button
            className="information"
            onClick={() => setAlert(true)}
            type="button"
          >
            more information
          </button>
          {alert &&
            <div className="popup">
              <span role="img" aria-label="allowed">✅</span> Alphanumeric Characters
             <br />
              <span role="img" aria-label="not allowed">⛔️</span> *
           </div>
          }
        </div>
        <div>
          <button onClick={validate}>Save</button>
        </div>
      </form>
    </div>
  )
}