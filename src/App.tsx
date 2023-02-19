import "./App.css";
import HomePage from "./components/Home";
import { CustomThemeProvider } from "./context/CustomThemeProvider";

function App() {
  return (
    <CustomThemeProvider>
      <HomePage />
    </CustomThemeProvider>
  );
}

export default App;
