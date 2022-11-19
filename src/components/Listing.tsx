export type ListingData = {
  name: string;
  address: string;
  timeToCostco: number;
  id: number;
};

type ListingProps = {
  listingData: ListingData;
};

const Listing = ({ listingData }: ListingProps) => {
  const formatData = (listingData: ListingData) => {
    return `\
    Name: ${listingData.name}
    Address: ${listingData.address}
    Time To Costco ${listingData.address}
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
