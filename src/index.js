import React from "react";
import ReactDOM from "react-dom";

//const el = React.createElement("h1", null, "Hello World, ReactJS");

const AppList = () => {
  const items = ["item 1", "item 2", "item 3", "item 4", "item 5"];
  const firstItems = <li>Item 0</li>;

  const isAuth = false;
  return (
    <ul>
      {isAuth ? firstItems : null}
      {items.map((item) => (
        <li>{item}</li>
      ))}
      <li>{items[0]}</li>
      <li>{items[1]}</li>
    </ul>
  );
};

const AppHeader = () => {
  return <h1>This is my header!</h1>;
};

const AppInput = () => {
  const placeholder = "Type text...";
  return (
    <label>
      <input placeholder={placeholder} />
    </label>
  );
};

const App = () => {
  return (
    <>
      <AppHeader />
      <AppInput />
      <AppList />
      <AppHeader />
      <AppList />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
