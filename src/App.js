import "./App.css";
import ContextProvider from "./contextProvider/ContextProvider";
import MyRoutes from "./MyRoutes";
import ProductContextProvider from "./contexts/ProductContextProvider";

function App() {
  return (
    <ContextProvider>
      <MyRoutes />
    </ContextProvider>
  );
}

export default App;
