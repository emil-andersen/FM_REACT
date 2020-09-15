import React from 'react';

export default function Pet ({ navn, dyr, race }){
    return React.createElement("div", {}, [
        React.createElement("h1", {}, navn),
        React.createElement("h2", {}, dyr),
        React.createElement("h2", {}, race)
    ]);
};
