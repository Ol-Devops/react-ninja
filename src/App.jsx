import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Ledger from "./practical/Ledger";
import Users from "./practical/Users";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import Create from "./components/Create";
import Edit from "./components/Edit";
import Nav from "./practical/Nav";
import Lhome from "./practical/pages/Lhome";
import Llocation from "./practical/pages/Llocation";
import Lcontact from "./practical/pages/Lcontact";
import Lfooter from "./practical/pages/Lfooter";
import BlogDetails from "./components/BlogDetails";
import Case from "./practical/Case";
import NotFound from "./components/NotFound";

function App() {
  return (
    // <Router>
    //   <Nav />

    //   <div style={{ marginTop: "2rem", marginLeft: "4rem" }}>
    //     <Switch>
    //       <Route exact path="/">
    //         <Lhome />
    //       </Route>

    //       <Route path="/location">
    //         <Llocation />
    //       </Route>

    //       <Route path="/contact">
    //         <Lcontact />
    //       </Route>

    //       <Route path="/case/:id">
    //         <Case />
    //       </Route>
    //     </Switch>
    //   </div>

    //   <Lfooter />
    // </Router>

    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/create">
              <Create />
            </Route>

            <Route path="/edit/:id">
              <Edit />
            </Route>

            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
