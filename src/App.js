import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import MainHomePage from "./component/pages/main/mainHomePage/mainHomePage";
import LoginPage from "./component/pages/login/loginPage/loginPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Layout />}>
            <Route index element={<MainHomePage />} />
            <Route exact path="/login" element={<LoginPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
