import React, { useState } from 'react';
import './App.css'


interface BloodPressureMeasurement {
  systolic: number;
  diastolic: number;
  pulse: number;
}

const BloodPressureTracker: React.FC = () => {
  const [measurements, setMeasurements] = useState<BloodPressureMeasurement[]>([]);
  const [currentMeasurement, setCurrentMeasurement] = useState<BloodPressureMeasurement>({
    systolic: 0,
    diastolic: 0,
    pulse: 0,
  });
  const [formErrors, setFormErrors] = useState<Partial<BloodPressureMeasurement>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCurrentMeasurement({
      ...currentMeasurement,
      [name]: Number(value),
    });
    // Clear the error for the input field when the user starts typing
    setFormErrors({
      ...formErrors,
      [name]: undefined,
    });
  };

  const validateForm = () => {
    const errors: Partial<BloodPressureMeasurement> = {};
    if (currentMeasurement.systolic === 0) {
      errors.systolic = 'Systolic pressure is required';
    }
    if (currentMeasurement.diastolic === 0) {
      errors.diastolic = 'Diastolic pressure is required';
    }
    if (currentMeasurement.pulse === 0) {
      errors.pulse = 'Pulse is required';
    }
    return errors;
  };

  const handleSaveMeasurement = () => {
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setMeasurements([...measurements, currentMeasurement]);
      setCurrentMeasurement({
        systolic: 0,
        diastolic: 0,
        pulse: 0,
      });
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div>
      <h2>Blood Pressure Tracker</h2>
      <form>
        <div>
          <label>Systolic Pressure (mmHg):</label>
          <input
            type="number"
            name="systolic"
            value={currentMeasurement.systolic}
            onChange={handleInputChange}
          />
          {formErrors.systolic && <div className="error">{formErrors.systolic}</div>}
        </div>
        <div>
          <label>Diastolic Pressure (mmHg):</label>
          <input
            type="number"
            name="diastolic"
            value={currentMeasurement.diastolic}
            onChange={handleInputChange}
          />
          {formErrors.diastolic && <div className="error">{formErrors.diastolic}</div>}
        </div>
        <div>
          <label>Pulse (bpm):</label>
          <input
            type="number"
            name="pulse"
            value={currentMeasurement.pulse}
            onChange={handleInputChange}
          />
          {formErrors.pulse && <div className="error">{formErrors.pulse}</div>}
        </div>
        <button type="button" onClick={handleSaveMeasurement}>
          Save Measurement
        </button>
      </form>
      <div>
        <h3>Measurements:</h3>
        <ul>
          {measurements.map((measurement, index) => (
            <li key={index}>
              Systolic: {measurement.systolic}, Diastolic: {measurement.diastolic}, Pulse: {measurement.pulse}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BloodPressureTracker;




/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/