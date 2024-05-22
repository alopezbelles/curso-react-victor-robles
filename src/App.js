import logo from "./logo.svg";
import "./App.css";
import MiComponente from "./MiComponente";
import SegundoComponente from "./SegundoComponente";
import TercerComponente from "./TercerComponente";
import CuartoComponente from "./CuartoComponente";
import EventoClick from "./EventoClick";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <MiComponente></MiComponente>
        <SegundoComponente></SegundoComponente>
        <TercerComponente  apellido="Lopez" edad={40}></TercerComponente>
        <CuartoComponente nombre="Alejandro" apellido="Lopez" edad={33}></CuartoComponente>
        <EventoClick></EventoClick>
      </header>
    </div>
  );
}

export default App;
