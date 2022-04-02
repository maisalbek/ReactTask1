import "./App.css";
import ContextProvider from "./contextProvider/ContextProvider";
import MyRoutes from "./MyRoutes";

function App() {
  return (
    <ContextProvider>
      <MyRoutes />
    </ContextProvider>
  );
}

export default App;
