import "./App.css";
import Listing, { ListingData } from "./components/Listing";

const App = () => {
  // TODO: delete when api gets hooked up
  function getTestData(repeat = 5): ListingData[] {
    const testData = {
      name: "test",
      address: "123 Blueberry Lane",
      timeToCostco: 12,
    };

    let testDataArr: ListingData[] = [];
    for (let i = 0; i < repeat; i++) {
      testDataArr.push({ ...testData, id: 1 });
    }
    return testDataArr;
  }

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
          {getTestData().map((listingData) => (
            <Listing listingData={listingData}></Listing>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
