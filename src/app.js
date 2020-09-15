const Pet = ({ navn, dyr, race }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, navn),
    React.createElement("h2", {}, dyr),
    React.createElement("h2", {}, race),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "adopt me!"),
    React.createElement(Pet, {
      navn: "tessie",
      dyr: "hund",
      race: "Jack Russel Terier",
    }),
    React.createElement(Pet, {
      navn: "Wiktoria",
      dyr: "Menneske",
      race: "Kæreste",
    }),
    React.createElement(Pet, {
      navn: "Kevin",
      dyr: "Menneske",
      race: "Ikke Kæreste",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
