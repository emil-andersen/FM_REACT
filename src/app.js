import React from 'react'
import { render } from 'react-dom'
import Pet from './Pet';

const App = () => {
    /*return React.createElement(
        "div", {},
        [
            React.createElement("h1", {}, "adopt me!"),
            React.createElement(Pet, {
                navn: "Tessie",
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
    );*/

        return (
            <div>
                <h1>adopt me!</h1>
                <Pet navn="Tessie" dyr="hund" race="Jack Russel Terier" />
                <Pet navn="Wiktora" dyr="Menneske" race="Menneske" />
                <Pet navn="Fillip" dyr="Ikke Kæreste" race="Menneske" />
            </div>

        )

};

render(<App/>,
    document.getElementById("root"));