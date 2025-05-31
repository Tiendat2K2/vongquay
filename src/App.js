import React, { useState } from 'react';
import { Wheel } from 'react-custom-roulette';
import './App.css';
import GoogleAd728x90 from './AdSense'; // GỌI COMPONENT ADS

const App = () => {
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [result, setResult] = useState('');

  const data = options.map(opt => ({ option: opt }));

  const handleAddOption = () => {
    if (inputValue.trim() !== '') {
      setOptions([...options, inputValue]);
      setInputValue('');
    }
  };

  const handleSpin = () => {
    const randomIndex = Math.floor(Math.random() * options.length);
    setPrizeNumber(randomIndex);
    setMustSpin(true);
  };

  return (
    <div className="app-container">
      <h1 className="title">🎯 Vòng Quay May Mắn</h1>

      {/* Ads banner trên cùng */}
      <GoogleAd728x90 />

      <div className="input-group">
        <input
          type="text"
          className="option-input"
          placeholder="Nhập lựa chọn..."
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <button className="add-btn" onClick={handleAddOption}>Thêm</button>
      </div>

      <div className="wheel-section">
        {options.length > 0 && (
          <>
            <div className="wheel-card">
              <Wheel
                mustStartSpinning={mustSpin}
                prizeNumber={prizeNumber}
                data={data}
                onStopSpinning={() => {
                  setMustSpin(false);
                  setResult(`Bạn trúng: ${options[prizeNumber]} 🎉`);
                }}
                backgroundColors={['#FFB703', '#8ECAE6']}
                textColors={['#000']}
              />
            </div>

            {/* Ads sau vòng quay */}
            <GoogleAd728x90 />

            <button className="spin-btn" onClick={handleSpin}>
              Quay Ngay
            </button>
          </>
        )}
      </div>

      {result && <h2 className="result-text">{result}</h2>}

      {/* Ads cuối trang */}
      <GoogleAd728x90 />
    </div>
  );
};

export default App;
