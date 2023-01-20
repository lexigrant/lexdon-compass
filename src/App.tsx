import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Listing, { ListingData } from "./components/Listing";
import Map from "./components/Map";
import SearchBar from "./components/SearchBar";

const API_URL = process.env.REACT_APP_API_URL

const App = () => {

  const [listings, setListings] = useState<ListingData[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [filteredListings, setFilteredListings] = useState<ListingData[]>([])

  const refetch = async () => {
    axios.get(`${API_URL}/api/core`)
      .then((response) => {
        setListings(response.data)
        if (!isSearching) {
          setFilteredListings(response.data);
        }
      })
  }
  const post = () => {
    axios.post(`${API_URL}/api/core`)
      .then(() => {
        refetch()
      })
  }
  const handleUpdate = (editListing: ListingData) => {
    axios.put(`${API_URL}/api/core/${editListing.id}`)
      .then(() => {
        refetch()
      })
  }

  // function for search bar
  const searchChange = (searchInput: string) => {
    const searchInputLower = searchInput.toLowerCase()
    if (searchInput.length > 0) {
      setIsSearching(true)
      const result = listings.filter((listing) => {
        return listing.name.toLowerCase().match(searchInputLower)
      })
      setFilteredListings(result)
    } else {
      setIsSearching(false)
      setFilteredListings(listings)
    }
  }

  const NoSearchResults = () => {
    return (
      <div style={{ display: "flex", height: "100%", alignItems: "center", width: "100%", justifyContent: "center" }}>
        <p className="noListings">
          No Listings to Display
        </p>
      </div>
    )
  }


  useEffect(() => {
    refetch();
  }, [])




  return (
    <div className="App">
      <div style={{ height: 100 }}>
        <div style={{ flex: 1, alignSelf: "center" }}>
          <h1>Lexdon's Compass 🧭</h1>
          < SearchBar searchChange={searchChange} />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          height: 600,
          padding: 16,
          backgroundColor: "lightblue",
        }}
      >
        <div style={{ flex: 1, width: "100%", height: "100%", alignSelf: "center" }}>
          <Map apartmentListings={filteredListings} />
        </div>
        <div style={{ flex: 1, overflow: "scroll", }}>{filteredListings.length > 0 ?
          filteredListings.map((listingData) => (
            <Listing listingData={listingData}></Listing>
          )) : <NoSearchResults />}
        </div>
      </div>
    </div>
  );
};

export default App;
