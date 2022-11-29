import "./App.css";
import { ThemeProvider, Button } from "@mui/material";
import theme from "./themes/main";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={"/logo.svg"} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Button variant="contained">Click</Button>
      </header>
    </div>
  );
}

export default App;
