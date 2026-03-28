import { Route, Routes } from "react-router";
import { UserPage } from "./pages/UserPage";
import { Navbar } from "./components/Navbar";
import "./styles/globals.scss";
import { DashboardPage } from "./pages/DashboardPage";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.main}>
      <Navbar />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/user/:id" element={<UserPage />} />

        <Route path="*" element={<h2>Страница не найдена (404)</h2>} />
      </Routes>
    </div>
  );
}

export default App;
