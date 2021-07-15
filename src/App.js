import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";
function App() {
  // state value of loading
  const [loading, setLoading] = useState(true);
  // default value be an empty array
  const [tours, setTours] = useState([]);

  //remove tour whose id matches
  // this function has to be called in app>tours>tour
  // In tour.js pass it as prop
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  //fetching data
  const fetchTours = async () => {
    setLoading(true);
    const response = await fetch(url);
    const tours = await response.json();
    setLoading(false);
    setTours(tours);
    // console.log(tours);
  };
  //once app comp renders invoke fetchTours
  // only renders once
  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours</h2>
          <button className="btn" onClick={() => fetchTours()}>
            Refresh
          </button>
        </div>
      </main>
    );
  }
  // removeTour props is equal to removeTour function
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
