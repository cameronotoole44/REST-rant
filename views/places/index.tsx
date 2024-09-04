import React from 'react';
import Def from '../default';

interface Place {
    id: string;
    name: string;
    pic: string;
    city: string;
    country: string;
    cuisines: string;
}

interface DataProps {
    places: Place[];
}

const Index: React.FC<DataProps> = ({ places }) => {
    const placesFormatted = places.map((place, index) => {
        return (
            <div key={index} className="col-sm-6">
                <h2>
                    <a href={`/places/${place.id}`}>{place.name}</a>
                </h2>
                <p className="text-center">{place.cuisines}</p>
                <img src={place.pic} alt={place.name} />
                <p className="text-center">
                    Located in {place.city}, {place.country}
                </p>
            </div>
        );
    });

    return (
        <Def>
            <main>
                <h1>Rant or Rave</h1>
                <div className="row">{placesFormatted}</div>
            </main>
        </Def>
    );
};

export default Index;