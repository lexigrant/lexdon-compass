import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Listing, { ListingData } from "./components/Listing";

const API_URL = process.env.REACT_APP_API_URL

const App = () => {

const [listings, setListings] = useState<ListingData[]>([])

const refetch = () => {
  axios.get(`${API_URL}/api/core`)
  .then((response) => {
    setListings(response.data)
  })
}
const post = () => {
  axios.post(`${API_URL}/api/core`)
  .then(()=> {
    refetch()
  })
}
const handleUpdate = (editListing: ListingData) => {
axios.put(`${API_URL}/api/core/${editListing.id}`)
.then(()=> {
  refetch()
})
}


useEffect(() => {
  refetch()
}, [])



  return (
    <div className="App">
      <div style={{ height: 100 }}>
        <div style={{ flex: 1, alignSelf: "center" }}>
          <h1>Lexdon's Compass 🧭</h1>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          height: 500,
          padding: 16,
          backgroundColor: "lightblue",
        }}
      >
        <div style={{ flex: 1, alignSelf: "center" }}>
          <p>TODO: map 🌎</p>
        </div>
        <div style={{ flex: 1, overflowY: "scroll" }}>
          {listings.map((listingData) => (
            <Listing listingData={listingData}></Listing>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
