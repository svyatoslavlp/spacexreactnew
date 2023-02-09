import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
// import Calendar from "./components/Calendar/Calendar";
// import Details from "./components/Details/Details";
import FetchData from "./service/FethData";
import "./style.css";

class App extends React.Component {
  fetchData = new FetchData();
  state = {
    rocket: "Falcon 1",
  };
  componentDidMount() {
    this.fetchData.getLaunches().then((data) => console.log(data));
  }
  render() {
    return (
      <>
        <Header />
        <Main rocket={this.state.rocket} />
        <Features />
        <Footer />
        {/* <Calendar /> */}
        {/* <Details /> */}
      </>
    );
  }
}

export default App;
