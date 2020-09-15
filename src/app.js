import React from 'react'
import { render } from 'react-dom'
import Pet from './Pet';

const App = () => {
    return React.createElement(
        "div", {},
        [
            React.createElement("h1", {}, "adopt me!"),
            React.createElement(Pet, {
                navn: "tessie",
                dyr: "hund",
                race: "Jack Russel Terier"
            }),
            React.createElement(Pet, {
                navn: "Wiktoria",
                dyr: "Menneske",
                race: "Kæreste"
            }),
            React.createElement(Pet, {
                navn: "Kevin",
                dyr: "Menneske",
                race: "Ikke Kæreste"
            })
        ]
    );
};

render(React.createElement(App),
    document.getElementById("root"));