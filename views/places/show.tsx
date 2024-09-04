import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

const React = require('react');
const Def = require('../default');

function show({ places}: any) {
    let comments = <h3 className="inactive">No comments yet!</h3>;

    let rating = <h3 className="inactive">Not yet rated</h3>;

    if (places.comments.length) {
        let sumRatings = places.comments.reduce((tot: any, c: { stars: any; }) => tot + c.stars, 0);
        let averageRating = Math.round(sumRatings / places.comments.length);
        let stars = '⭐'.repeat(averageRating);

        rating = <h3>{stars} stars</h3>;

        comments = places.comments.map((c: { id: Key | null | undefined; rant: any; content: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; author: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; stars: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => {
            return (
                <div className="border" key={c.id}>
                    <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                    <form method="POST" action={`/places/${places.id}/comment/${c.id}?_method=DELETE`}>
                        <button type="submit" className="btn btn-danger">Delete Comment</button>
                    </form>
                </div>
            );
        });
    }

    return (
        <Def>
            <main>
                <h1>{places.name}</h1>
                <img src={places.pic} alt={places.name} />
                <h3>Located in {places.city}, {places.country}</h3>
                <h2>Rating</h2>
                {rating}
                <h2>Description</h2>
                <h3>{places.showEstablished()}</h3>
                <h4>Serving {places.cuisines}</h4>
                <a href={`/places/${places.id}/edit`} className="btn btn-warning">Edit</a>
                <form method="POST" action={`/placess/${places.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">Delete</button>
                </form>
                <h2>Comments</h2>
                {comments}
                <a href={`/places/${places.id}/comment`} className="btn btn-secondary">Add New Comment</a>
            </main>
        </Def>
    );
}

module.exports = show;

