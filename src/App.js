import "./App.css";
import Navi from "./layouts/Navi";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import Dashboard from "./layouts/Dashboard";
import Footer from "./layouts/Footer";

function App() {
  return (
    <div className="App">
      <Navi></Navi>
      <Container className="main">
        <Dashboard></Dashboard>
      </Container>
      <br/>
      <Footer className="footer"></Footer>
    </div>
  );
}

export default App;
