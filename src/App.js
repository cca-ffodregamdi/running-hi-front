import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import LoginPage from "./component/pages/Log/loginPage/LoginPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Layout />}>
            <Route index element={<LoginPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
