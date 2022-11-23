import React from "react";
import GoogleMapReact from "google-map-react";
import { ListingData } from "./Listing";

type MapProps = {
    apartmentListings: ListingData[];
}

type LocationPinProps = {
    lat: Number;
    lng: Number;
}


const DENVER = {lat: 39.7392 , lng: -104.9903 }

const LocationPin = (props: LocationPinProps) => {

    return (
        <div>
           <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="nonzero"
                    clipRule="evenodd"
                    d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z"
                    fill="red"
                />
                <path
                    fillRule="nonzero"
                    clipRule="evenodd"
                    d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z"
                    fill="white"
                />
            </svg>
        </div>
    )
}

const Map = (props: MapProps) => {

    const location = {
        center: {lat: (DENVER.lat), lng: (DENVER.lng)},
        zoom: 10
    }

    const key = process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    // Return Guard
    if(key === undefined) {
        return <></>
    }

    return (
        // <div style={{width: 100}}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: key,
                    language: 'en'
                }}
                defaultCenter={location.center}
                center={location.center}
                defaultZoom={location.zoom}>
                    {props.apartmentListings.map(apartmentListing => {
                        return(
                            <LocationPin lat={apartmentListing.latitude} lng={apartmentListing.longitude} />
                        )
                    })}
                    
                </GoogleMapReact>
        // </div>
    )
}

export default Map;