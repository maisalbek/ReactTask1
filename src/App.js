import "./App.css";
import MyRoutes from "./MyRoutes";
import ProductContextProvider from "./contexts/ProductContextProvider";
import Toastify from "./components/toastify/Toastify";

function App() {
  return (
    <ProductContextProvider>
      <Toastify />
      <MyRoutes />
    </ProductContextProvider>
  );
}

export default App;
