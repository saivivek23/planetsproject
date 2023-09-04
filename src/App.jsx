import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Statastics from "./components/Statastics";

function App() {
  return (
    <>
      <div className="background-container">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Layout id={0} />
              </>
            }
            index
          />
          <Route
            path="/:id"
            element={
              <>
                <Layout />
              </>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
