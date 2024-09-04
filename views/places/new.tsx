import React from 'react';
import Def from '../default';

interface DataProps {
    message?: string;
}

const NewForm: React.FC<DataProps> = ({ message }) => {
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
                {message && <h4 className="alert-danger">{message}</h4>}
                <form method="POST" action="/places">
                    <div className="form-group">
                        <label htmlFor="name">Place Name</label>
                        <input className="form-control" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pic">Place Picture</label>
                        <input className="form-control" id="pic" name="pic" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input className="form-control" id="city" name="city" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="country">Country</label>
                        <input className="form-control" id="country" name="country" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input className="form-control" id="cuisines" name="cuisines" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="founded">Founded Year</label>
                        <input
                            type="number"
                            className="form-control"
                            id="founded"
                            name="founded"
                            defaultValue={new Date().getFullYear()}
                        />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Add Place" />
                </form>
            </main>
        </Def>
    );
};

export default NewForm;