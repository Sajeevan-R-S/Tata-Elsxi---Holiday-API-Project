import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [scotlandDetails, setScotlandDetails] = useState({});
  const [englandDetails, setenglandDetails] = useState({});
  const [irelandDetails, setirelandDetails] = useState({});
  const [showScotlandDetails, setShowScotlandDetails] = useState(false);
  const [showEnglandDetails, setShowEnglandDetails] = useState(false);
  const [showirelandDetails, setShowirelandDetails] = useState(false);
  const fetchDataEngland = async () => {
    const { data } = await Axios.get("https://www.gov.uk/bank-holidays.json");
    const englandDetails = data["england-and-wales"].events;
    console.log("England: ", englandDetails);
    setenglandDetails(englandDetails);
  };

  useEffect(() => {
    fetchDataEngland();
  }, []);

  const fetchDataScotland = async () => {
    const { data } = await Axios.get("https://www.gov.uk/bank-holidays.json");
    const scotlandDetails = data.scotland.events;
    console.log("Scotland: ", scotlandDetails);
    setScotlandDetails(scotlandDetails);
  };

  useEffect(() => {
    fetchDataScotland();
  }, []);

  const fetchDataIreland = async () => {
    const { data } = await Axios.get("https://www.gov.uk/bank-holidays.json");
    const irelandDetails = data["northern-ireland"].events;
    console.log("Ireland: ", irelandDetails);
    setirelandDetails(irelandDetails);
  };

  useEffect(() => {
    fetchDataIreland();
  }, []);

  const handleClickScotland = (event) => {
    setShowScotlandDetails(current => !current);
  };
  const handleClickEngland = (event) => {
    setShowEnglandDetails(current => !current);
  };
  const handleClickIreland = (event) => {
    setShowirelandDetails(current => !current);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div class="flex-container">
          <button className="buttons" onClick={handleClickEngland}>
            England and Wales
          </button>
          <button className="buttons" onClick={handleClickScotland}>
            Scotland
          </button>
          <button className="buttons" onClick={handleClickIreland}>
            Northern Ireland
          </button>
        </div>
        {showScotlandDetails && (
          <div class="details-container">
            <div class="details">
              <div class="title">Title</div>
              {scotlandDetails.map(function (d, idx) {
                return <li key={idx}>{d.title}</li>;
              })}
            </div>
            <div class="details">
              <div class="title">Date</div>
              {scotlandDetails.map(function (d, idx) {
                return <li key={idx}>{d.date}</li>;
              })}
            </div>
            <div class="details">
              <div class="title">Notes</div>
              {scotlandDetails.map(function (d, idx) {
                return <li key={idx}>{d.notes}</li>;
              })}
            </div>
          </div>
        )}
        {showEnglandDetails && (
          <div class="details-container">
            <div class="details">
              <div class="title">Title</div>
              {englandDetails.map(function (d, idx) {
                return <li key={idx}>{d.title}</li>;
              })}
            </div>
            <div class="details">
              <div class="title">Date</div>
              {englandDetails.map(function (d, idx) {
                return <li key={idx}>{d.date}</li>;
              })}
            </div>
            <div class="details">
              <div class="title">Notes</div>
              {englandDetails.map(function (d, idx) {
                return <li key={idx}>{d.notes}</li>;
              })}
            </div>
          </div>
        )}
        {showirelandDetails && (
          <div class="details-container">
            <div class="details">
              <div class="title">Title</div>
              {irelandDetails.map(function (d, idx) {
                return <li key={idx}>{d.title}</li>;
              })}
            </div>
            <div class="details">
              <div class="title">Date</div>
              {irelandDetails.map(function (d, idx) {
                return <li key={idx}>{d.date}</li>;
              })}
            </div>
            <div class="details">
              <div class="title">Notes</div>
              {irelandDetails.map(function (d, idx) {
                return <li key={idx}>{d.notes}</li>;
              })}
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
