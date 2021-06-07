import "./App.css";
import Navi from "./layouts/Navi";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import Dashboard from "./layouts/Dashboard";
import Footer from "./layouts/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import JobAdvertisementList from "./pages/JobAdvertisementList";
import AddJobSeeker from "./pages/AddJobSeeker";
import AddEmployer from "./pages/AddEmployer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navi></Navi>
        <Container className="main">
          <Route path="/" exact>
            <Dashboard></Dashboard>
          </Route>
          <Route path='/is-ilanlari' component='JobAdvertisementList'>
            <JobAdvertisementList></JobAdvertisementList>
          </Route>
          <Route path='/is-arayan-kaydi' component='AddJobSeeker'>
            <AddJobSeeker></AddJobSeeker>
          </Route>
          <Route path='/isveren-kaydi' component='AAddEmployer>'>
            <AddEmployer></AddEmployer>
          </Route>
        </Container>
        <br />
        <Footer className="footer"></Footer>
      </div>
    </Router>
  );
}

export default App;
