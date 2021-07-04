import React from "react";
//COMPONENTS
import HelloWorld from "../Components/HelloWorld";

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Navbar /> */}
        {/* <div>MakeIt</div> */}
        <header className="App-header">
          <HelloWorld />
        </header>
      </div>
    );
  }
}

export default Home;
