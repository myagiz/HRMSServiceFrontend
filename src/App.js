import "./App.css";
import Navi from "./layouts/Navi";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import Dashboard from "./layouts/Dashboard";
import Footer from "./layouts/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import JobAdvertisementList from "./pages/JobAdvertisementList";

function App() {
  return (
    <Router>
      <div className="App">
        <Navi></Navi>
        <Container className="main">
          <Route path="/" exact>
            <Dashboard></Dashboard>
          </Route>
          <Route path='/isilanlari' component='JobAdvertisementList'>
            <JobAdvertisementList></JobAdvertisementList>
          </Route>
        </Container>
        <br />
        <Footer className="footer"></Footer>
      </div>
    </Router>
  );
}

export default App;
