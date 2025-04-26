import PreEventHomepage from "./pages/PreEventHomepage";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<PreEventHomepage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </main>
  );
}

export default App;
