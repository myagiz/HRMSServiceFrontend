import "./App.css";
import Navi from "./layouts/Navi";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import Dashboard from "./layouts/Dashboard";
import Footer from "./layouts/Footer";
import { BrowserRouter as Router, Route} from "react-router-dom";
import JobAdvertisementList from "./pages/JobAdvertisementList";
import AddEmployer from "./pages/AddEmployer";
import StaffMain from "./pages/staff/StaffMain";
import StaffJobSeeker from "./pages/staff/StaffJobSeeker";
import StaffEmployer from "./pages/staff/StaffEmployer";
import StaffJobAdvertisement from "./pages/staff/StaffJobAdvertisement";
import StaffCV from "./pages/staff/StaffCV";
import JobSeekerMain from "./pages/jobSeeker/JobSeekerMain";
import JobSeekerProfile from "./pages/jobSeeker/JobSeekerProfile";
import JobSeekerCV from "./pages/jobSeeker/JobSeekerCV";
import JobSeekerCreateCV from "./pages/jobSeeker/JobSeekerCreateCV";
import JobSeekerRegister from "./pages/jobSeeker/JobSeekerRegister";
import EmployerMain from "./pages/employer/EmployerMain";
import EmployerAdvertisement from "./pages/employer/EmployerAdvertisement";

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
          <Route path='/isveren-kaydi' component='AddEmployer'>
            <AddEmployer></AddEmployer>
          </Route>
          <Route path='/yonetici' component='StaffMain'>
            <StaffMain></StaffMain>
          </Route>
          <Route path='/yonetici/is-arayanlar' component='StaffJobSeeker'>
            <StaffJobSeeker></StaffJobSeeker>
          </Route>
          <Route path='/yonetici/isverenler' component='StaffEmployer'>
            <StaffEmployer></StaffEmployer>
          </Route>
          <Route path='/yonetici/is-ilanlari' component='StaffJobAdvertisement'>
            <StaffJobAdvertisement></StaffJobAdvertisement>
          </Route>
          <Route path='/yonetici/ozgecmisler' component='StaffCV'>
            <StaffCV></StaffCV>
          </Route>
          <Route path='/aday' component='JobSeekerMain'>
            <JobSeekerMain></JobSeekerMain>
          </Route>
          <Route path='/aday/profil' component='JobSeekerProfile'>
           <JobSeekerProfile></JobSeekerProfile>
          </Route>
          <Route  path='/aday/ozgecmisler' component='JobSeekerCV'>
           <JobSeekerCV></JobSeekerCV>
          </Route>
          <Route path='/aday/ozgecmis-olustur' component='JobSeekerCreateCV'>
           <JobSeekerCreateCV></JobSeekerCreateCV>
          </Route>
          <Route path='/is-arayan-kaydi' component={JobSeekerRegister}>
           <JobSeekerRegister></JobSeekerRegister>
          </Route>
          <Route path='/firma' component={EmployerMain}>
           <EmployerMain></EmployerMain>
          </Route>
          <Route path='/firma/is-ilani-yayinla' component={EmployerAdvertisement}>
           <EmployerAdvertisement></EmployerAdvertisement>
          </Route>
        </Container>
        <br />
        <Footer className="footer"></Footer>
      </div>
    </Router>
  );
}

export default App;
