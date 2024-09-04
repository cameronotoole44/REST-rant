import React from 'react';
import Def from '../default';

interface PlaceData {
    place: {
        id: string;
        name: string;
        pic: string;
        city: string;
        country: string;
        founded: number;
        cuisines: string;
    };
}

const EditForm: React.FC<PlaceData> = ({ place }) => {
    return (
        <Def>
            <main>
                <h1>EDIT PLACE: {place.name}</h1>
                <form method="POST" action={`/places/${place.id}?_method=PUT`}>
                    <div className="form-group col-sm-6">
                        <label htmlFor="name">Place Name</label>
                        <input className="form-control" name="name" id="name" defaultValue={place.name} required />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="pic">Place Picture</label>
                        <input className="form-control" name="pic" id="pic" defaultValue={place.pic} />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="city">City</label>
                        <input className="form-control" name="city" id="city" defaultValue={place.city} />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="country">Country</label>
                        <input className="form-control" name="country" id="country" defaultValue={place.country} />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="founded">Founded</label>
                        <input className="form-control" name="founded" id="founded" defaultValue={place.founded} />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input className="form-control" name="cuisines" id="cuisines" defaultValue={place.cuisines} required />
                    </div>
                    <input className="btn btn-primary" type="submit" defaultValue="Update" />
                </form>
            </main>
        </Def>
    );
};

export default EditForm;

