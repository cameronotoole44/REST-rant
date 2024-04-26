const React = require('react');
const Def = require('../default');

function edit_form(data) {
    return (
        <Def>
            <main>
                <h1>EDIT FORM</h1>
                <form action={`/places/${data.place.id}?_method=PUT`} method="POST">
                    <div className="form-group col-sm-6">
                        <label htmlFor="name">Place Name</label>
                        <input className="form-control" id="name" name="name" defaultValue={data.place.name} required />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="pic">Place Picture</label>
                        <input className="form-control" id="pic" name="pic" defaultValue={data.place.pic} />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="city">City</label>
                        <input className="form-control" id="city" name="city" defaultValue={data.place.city} />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="country">Country</label>
                        <input className="form-control" id="country" name="country" defaultValue={data.place.country} />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input className="form-control" id="cuisines" name="cuisines" defaultValue={data.place.cuisines} required />
                    </div>
                    <input className="btn btn-primary" type="submit" defaultValue="Update" />
                </form>

            </main>
        </Def>
    )
};

module.exports = edit_form;

