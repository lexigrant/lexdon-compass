export type ListingData = {
  image_url: string;
  id: number;
  name: string;
  address: string;
  min_price: number;
  max_price: number;
  monthly_fees: number;
  one_time_fees: number;
  sq_ft: number;
  covered_parking: boolean;
  laundry: string;
  tt_unionStation: number;
  tt_costco: number;
  tt_grocery: number;
  tt_park: number;
  tt_dogPark: number;
  tt_line: number;
  tt_airport: number;
  link: string;
  notes: string;
  latitude: number;
  longitude: number;
};

type ListingProps = {
  listingData: ListingData;
};

const Listing = ({ listingData }: ListingProps) => {
  const formatData = (listingData: ListingData) => {
    return <>
      <div className="noBullet">
        <li>{`Address: ${listingData.address}`}</li>
        <details>
          <summary>Cost Breakdown</summary>
          <li>{`Min Price: ${listingData.min_price}`}</li>
          <li>{`Max Price: ${listingData.max_price}`}</li>
          <li>{`Monthly Fees: ${listingData.monthly_fees}`}</li>
          <li>{`One Time Fees: ${listingData.one_time_fees}`}</li>
        </details>
        <li>{`Square Feet: ${listingData.sq_ft}`}</li>
        <li>{`Covered Parking: ${listingData.covered_parking}`}</li>
        <li>{`Laundry: ${listingData.laundry}`}</li>
        <details>
          <summary>Time to various places</summary>
          <li>{`Time To Union Station: ${listingData.tt_unionStation}`}</li>
          <li>{`Time To Costco: ${listingData.tt_costco}`}</li>
          <li>{`Time To Grocery: ${listingData.tt_grocery}`}</li>
          <li>{`Time To Park: ${listingData.tt_park}`}</li>
          <li>{`Time To Dog Park: ${listingData.tt_dogPark}`}</li>
          <li>{`Time To Line: ${listingData.tt_line}`}</li>
          <li>{`Time To Airport: ${listingData.tt_airport}`}</li>
        </details>
        <li><a href={listingData.link} target="blank">Link</a></li>
        <li>{`Notes: ${listingData.notes}`}</li>
      </div>
    </>

  };
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "white",
        padding: 8,
        margin: 8,
        borderRadius: 16,
        alignItems: "center",
        flexDirection: "row"
      }}
    >

      <img
        style={{ flex: 1, width: "40%", borderRadius: 16 }}
        src={listingData.image_url}
      ></img>
      <div style={{ flexDirection: "column" }}>
        <h1>{listingData.name}</h1>
        <ul style={{ flex: 1 }} key={listingData.id}>
          {formatData(listingData)}
        </ul>
      </div>
    </div>
  );
};

// const styles = new StyleSheet({wid})

export default Listing;
