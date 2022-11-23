export type ListingData = {
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
};

type ListingProps = {
  listingData: ListingData;
};

const Listing = ({ listingData }: ListingProps) => {
  const formatData = (listingData: ListingData) => {
    return `\
    Name: ${listingData.name}
    Address: ${listingData.address}
    Min Price: ${listingData.min_price}
    Max Price: ${listingData.max_price}
    Monthly Fees: ${listingData.monthly_fees}
    One Time Fees: ${listingData.one_time_fees}
    Square Feet: ${listingData.sq_ft}
    Covered Parking: ${listingData.covered_parking}
    Laundry: ${listingData.laundry}
    Time To Union Station: ${listingData.tt_unionStation}
    Time To Costco: ${listingData.tt_costco}
    Time To Grocery: ${listingData.tt_grocery}
    Time To Park: ${listingData.tt_park}
    Time To Dog Park: ${listingData.tt_dogPark}
    Time To Line: ${listingData.tt_line}
    Time To Airport: ${listingData.tt_airport}
    Link: ${listingData.link}
    Notes: ${listingData.notes}
    `;
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
      }}
    >
      <img
        style={{ flex: 1, width: "40%", borderRadius: 16 }}
        src="https://kansascitymag.com/wp-content/uploads/2021/09/WEB_Apartment-Condo-Guide-Intro-the-Grand-Sept-21-1024x669.jpg"
      ></img>
      <p style={{ flex: 1 }} key={listingData.id}>
        {formatData(listingData)}
      </p>
      ;
    </div>
  );
};

// const styles = new StyleSheet({wid})

export default Listing;
