const React = require('react');
const Def = require('../default');

function edit_form(data) {
    return (
        <Def>
            <main>
                <h1>EDIT PLACE: {data.place.name}</h1>
                <form method="POST" action={`/places/${data.place.id}?_method=PUT`} >
                    <div className="form-group col-sm-6">
                        <label htmlFor="name">Place Name</label>
                        <input className="form-control" name="name" id="name" defaultValue={data.place.name} required />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="pic">Place Picture</label>
                        <input className="form-control" name="pic" id="pic" defaultValue={data.place.pic} />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="city">City</label>
                        <input className="form-control" name="city" id="city" defaultValue={data.place.city} />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="country">Country</label>
                        <input className="form-control" name="country" id="country" defaultValue={data.place.country} />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="founded">Founded</label>
                        <input className="form-control" name="founded" id="founded" defaultValue={data.place.founded} />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input className="form-control" name="cuisines" id="cuisines" defaultValue={data.place.cuisines} required />
                    </div>
                    <input className="btn btn-primary" type="submit" defaultValue="Update" />
                </form>

            </main>
        </Def>
    )
};

module.exports = edit_form;

