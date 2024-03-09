import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "./Message";
import Message from "./Message";
import ListGroup from "./components/ListGroup";
import { Alert } from "./components/Alert";
import ButtonAction from "./components/ButtonAction";

function App() {
  const [alertVisible, setAlertVisiblility] = useState(false);

  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  let names = ["Jack", "Susan", "Bob", "Terri", "Paul"];

  const [count, setCount] = useState(0);
  const name = "Brad";

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <div>
        {alertVisible && (
          <Alert onClose={() => setAlertVisiblility(false)}>My Alert</Alert>
        )}

        <ButtonAction
          color="warning"
          onButtonClick={() => setAlertVisiblility(!alertVisible)}
        >
          Show Alert
        </ButtonAction>

        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
      <div className="App">
        <div>
          <ListGroup
            items={items}
            heading="Cities"
            onSelectItem={handleSelectItem}
          />
          <ListGroup
            items={names}
            heading="Names"
            onSelectItem={handleSelectItem}
          />
        </div>

        <br />

        <div>
          <ButtonAction
            onButtonClick={() => console.log("clicked")}
            //color="success"
          >
            Submit333
          </ButtonAction>
        </div>

        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count} {name} <Message></Message>
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  );
}

export default App;
