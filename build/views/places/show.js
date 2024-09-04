"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require('react');
const Def = require('../default');
function show({ places }) {
    let comments = React.createElement("h3", { className: "inactive" }, "No comments yet!");
    let rating = React.createElement("h3", { className: "inactive" }, "Not yet rated");
    if (places.comments.length) {
        let sumRatings = places.comments.reduce((tot, c) => tot + c.stars, 0);
        let averageRating = Math.round(sumRatings / places.comments.length);
        let stars = '⭐'.repeat(averageRating);
        rating = React.createElement("h3", null,
            stars,
            " stars");
        comments = places.comments.map((c) => {
            return (React.createElement("div", { className: "border", key: c.id },
                React.createElement("h2", { className: "rant" }, c.rant ? 'Rant! 😡' : 'Rave! 😻'),
                React.createElement("h4", null, c.content),
                React.createElement("h3", null,
                    React.createElement("strong", null,
                        "- ",
                        c.author)),
                React.createElement("h4", null,
                    "Rating: ",
                    c.stars),
                React.createElement("form", { method: "POST", action: `/places/${places.id}/comment/${c.id}?_method=DELETE` },
                    React.createElement("button", { type: "submit", className: "btn btn-danger" }, "Delete Comment"))));
        });
    }
    return (React.createElement(Def, null,
        React.createElement("main", null,
            React.createElement("h1", null, places.name),
            React.createElement("img", { src: places.pic, alt: places.name }),
            React.createElement("h3", null,
                "Located in ",
                places.city,
                ", ",
                places.country),
            React.createElement("h2", null, "Rating"),
            rating,
            React.createElement("h2", null, "Description"),
            React.createElement("h3", null, places.showEstablished()),
            React.createElement("h4", null,
                "Serving ",
                places.cuisines),
            React.createElement("a", { href: `/places/${places.id}/edit`, className: "btn btn-warning" }, "Edit"),
            React.createElement("form", { method: "POST", action: `/placess/${places.id}?_method=DELETE` },
                React.createElement("button", { type: "submit", className: "btn btn-danger" }, "Delete")),
            React.createElement("h2", null, "Comments"),
            comments,
            React.createElement("a", { href: `/places/${places.id}/comment`, className: "btn btn-secondary" }, "Add New Comment"))));
}
module.exports = show;
