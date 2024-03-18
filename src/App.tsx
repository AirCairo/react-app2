import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "./Message";
import Message from "./Message";
import ListGroup from "./components/ListGroup";
import { Alert } from "./components/Alert";
import ButtonAction from "./components/ButtonAction";
import { BsFillCalendarFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import Like from "./components/Like";
import produce from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";

function App() {
  ///
  // Exc. Update Item Quantity
  ///
  const [cart, setItemCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const handleClickItemCart = () => {
    setItemCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
    // produce((draft) => {
    //   const cart = draft.find((cart) => cart.id === 2);
    //   if(cart) cart.quantity = 2;
    // })
    //)
  };

  ///
  // Exc. Add Pizza Topping
  ///
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const handleClickPizza = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
  };

  ///
  // Exc. Change Player Name
  ///
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
      rank: "ELITE",
    },
  });

  const handleClickPlayer = () => {
    setGame({
      ...game,
      player: { ...game.player, name: "Bob" },
    });
  };

  ///
  // Shopping Cart
  ///
  const [cartItems, setCartItems] = useState([
    "Product1",
    "Product2",
    "Product3",
  ]);

  ///
  // Modify Object Arrays
  ///
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleClickBugObjs = () => {
    //setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));

    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  ///
  // Modify String Arrays
  ///
  const [tags, setTags] = useState(["happy", "cheerful"]);

  const handleClickTags = () => {
    // Add
    setTags([...tags, "exciting"]);

    //Remove
    setTags(tags.filter((tag) => tag !== "happy"));

    //Update
    //setTags();
    setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
  };

  ///
  // Modify Object's object's content
  ///
  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "San Francisco",
      zipCode: 94111,
    },
  });

  const handleClickCustomer = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 27511 },
    });
  };

  ///
  // Modify Object's content
  ///
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleClickDrink = () => {
    //const newDrink = {
    //title: drink.title,
    //...drink,
    //price: 6,
    //};
    setDrink({ ...drink, price: 6 });
  };

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
      <ExpandableText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum non
        impedit reprehenderit, cumque minus nostrum velit ratione id culpa
        veritatis quo, tenetur eveniet, error doloribus! Modi sed reprehenderit
        commodi rerum, in sint quas eum eveniet corporis fugiat soluta
        consectetur vel. Eum, cum. Maiores voluptas, aliquam nesciunt itaque
        nisi qui molestiae ea reiciendis repellat veniam, placeat consequatur?
        Neque, cupiditate! Aliquam placeat, dolores reprehenderit commodi animi
        saepe. Velit voluptatem recusandae unde, commodi animi officiis dolorum
        exercitationem nam quibusdam reprehenderit odio nisi architecto odit
        repudiandae pariatur nobis placeat temporibus neque earum hic fugit
        voluptates? Vel eaque error similique neque ratione provident animi
        pariatur!
      </ExpandableText>

      <div>
        {JSON.stringify(cart)}
        <br />
        <button onClick={handleClickItemCart}>Update Cart</button>
      </div>

      <br />

      <div>
        {JSON.stringify(pizza)}
        <br />
        <button onClick={handleClickPizza}>Update Pizza</button>
      </div>

      <br />

      <div>
        {JSON.stringify(game)}
        <br />
        <button onClick={handleClickPlayer}>Update Player</button>
      </div>

      <br />

      <div>
        <NavBar cartItemsCount={cartItems.length} />
        <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
      </div>
      <div>
        {JSON.stringify(bugs)}
        <br />
        <button onClick={handleClickBugObjs}>Update Bug Objs</button>
      </div>

      <br />

      <div>
        {tags}
        <br />
        <button onClick={handleClickTags}>Update Tags</button>
      </div>
      <div>
        {customer.name} - {customer.address.zipCode}
        <br />
        <button onClick={handleClickCustomer}>Update Customer</button>
      </div>
      <div>
        {drink.price}
        <br />
        <button onClick={handleClickDrink}>Get Drink</button>
      </div>

      <br />

      <div>
        <BsFillCalendarFill color="red" size="40" />
        <Like onClick={() => console.log("click")} />
      </div>
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
