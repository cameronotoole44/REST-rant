import React from 'react';
import Def from '../default';

interface CommentFormProps {
    place: {
        id: string;
    };
}

const CommentForm: React.FC<CommentFormProps> = ({ place }) => {
    return (
        <Def>
            <main>
                <h1>Add a New Comment</h1>
                <form method="POST" action={`/places/${place.id}/comment`}>
                    <div className="form-group mx-auto col-sm-6 col-md-4 col-lg-3">
                        <label htmlFor="author">Author</label>
                        <input className="form-control" id="author" name="author" required />
                    </div>
                    <div className="form-group mx-auto col-sm-6 col-md-4 col-lg-3">
                        <label htmlFor="content">Content</label>
                        <textarea className="form-control" id="content" name="content" rows={3}></textarea>
                    </div>
                    <div className="form-group mx-auto col-sm-6 col-md-4 col-lg-3">
                        <label htmlFor="stars">Stars</label>
                        <input className="form-control" type="number" id="stars" name="stars" defaultValue={5} max="5" min="0" required />
                    </div>
                    <div className="form-group mx-auto col-sm-6 col-md-4 col-lg-3">
                        <label htmlFor="rant">Rant</label>
                        <input type="checkbox" name="rant" id="rant" defaultChecked />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Add Comment" />
                </form>
            </main>
        </Def>
    );
};

export default CommentForm;
