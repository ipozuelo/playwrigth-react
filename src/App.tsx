import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Search from "./pages/Search";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Header />
      <Register />
      <Login />
      <Search />
      <Footer />
    </>
  );
}

export default App;
