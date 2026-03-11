import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Cart from "./Components/Cart";
import Orders from "./Components/Orders";

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Login/>
      <Register/>
      <Cart/>
      <Orders/>
      <Footer />
    </div>
  );
}
export default App;