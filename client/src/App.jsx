import React from "react";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>

        <Route path="/" element={<UserLayout />}>
       
        </Route>

      </Routes>
    </div>
  );
};

export default App;
