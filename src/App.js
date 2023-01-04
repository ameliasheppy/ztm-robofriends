import React, { Component } from "react";
import "./App.css";
import { robots } from "./Hello";
import CardList from "./CardList";
import Scroll from "./Scroll";
import SearchBox from "./SearchBox";
import "tachyons";

//Don npm run build!!!!! When ready to launch the project

//react reads the props it recieves and renders. Make functions pure
//rec input, returns = pure, deterministic function!
//they don't need to know about others, until they do.
//we need to give the components a memory of each other.
//STATE-the description of your app.
//A state is an obj that describes the current way your app looks
//the state is currently a robot and a search bar.
//we need to change one based on the other.
//props are simply a thing that comes out of state.
//a parent feeds state to a child component and then state comes out of the child component
//the child can never change the prop.
//the child gets a robot and uses it. Can't edit it, just use it.
//SMART components have state in them. They hold info about something we need
//smart components need class syntax
//react comes with lifecycle methods in components that we can use:
//when we run one of these, it triggers something to happen:
//these are all under mounting
//constructor()
//componentWillMount()
//render()
//componentDidMount()
//the lifecycles are mounting, updating, and unmounting:
//when you click refresh, the app comp gets mounted to the root doc
//mount a component replaces the index.js with the app.js
//read lifecycle hooks to see how it runs through the above 3 cycles, in order
//every time we type with the list, we get a func with new info
//now we can do updates in the middle cycle.
//then when we change to a new page in our site, the app page gets unmounted
//they auto get triggered with no code from us
//want to see if your component is mounted? do the below CL
//want to see what order things are going in? Add a CL to each step
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchField: "",
    };
    console.log("1", "constructor");
  }
  //as long as the component is verified to be mounting, we can go ahead and
  //attach some JS to it
  //fetch is on the window, just a way to get stuff
  componentDidMount() {
    // console.log('check');
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
    // this.setState({ robots: users });
    console.log("2", "componentDidMount");
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    if (robots.length === 0) {
      return <h1>Loading</h1>;
    } else {
      console.log("3", "render");
      return (
        <div className="tc" id="robbies">
          <h1 className="f1">Robo Friends</h1>

          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

// function App() {
//   return (
//     <div className="App tc">
//       <SearchBox />
//       <CardList robots={robots} />
//       {/* <Card
//             id={robots[0].id}
//             name={robots[0].name}
//             email={robots[0].email}
//           /> */}
//       {/* we can render them all like this: Or do the list like we are above:
//            <Card
//             id={robots[1].id}
//             name={robots[1].name}
//             email={robots[1].email}
//           />
//           <Card
//             id={robots[2].id}
//             name={robots[2].name}
//             email={robots[2].email}
//           />
//           <Card
//             id={robots[3].id}
//             name={robots[3].name}
//             email={robots[3].email}
//           />
//           <Card
//             id={robots[4].id}
//             name={robots[4].name}
//             email={robots[4].email}
//           />
//           <Card
//             id={robots[5].id}
//             name={robots[5].name}
//             email={robots[5].email}
//           /> */}
//     </div>
//   );
// }

export default App;
