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
import StaffMain from "./pages/staff/StaffMain";
import StaffJobSeeker from "./pages/staff/StaffJobSeeker";
import StaffEmployer from "./pages/staff/StaffEmployer";
import StaffJobAdvertisement from "./pages/staff/StaffJobAdvertisement";

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
          <Route path='/isveren-kaydi' component='AddEmployer>'>
            <AddEmployer></AddEmployer>
          </Route>
          <Route path='/yonetici' component='StaffMain>'>
            <StaffMain></StaffMain>
          </Route>
          <Route path='/yonetici/is-arayanlar' component='StaffJobSeeker>'>
            <StaffJobSeeker></StaffJobSeeker>
          </Route>
          <Route path='/yonetici/isverenler' component='StaffEmployer>'>
            <StaffEmployer></StaffEmployer>
          </Route>
          <Route path='/yonetici/is-ilanlari' component='StaffJobAdvertisement>'>
            <StaffJobAdvertisement></StaffJobAdvertisement>
          </Route>
        </Container>
        <br />
        <Footer className="footer"></Footer>
      </div>
    </Router>
  );
}

export default App;
