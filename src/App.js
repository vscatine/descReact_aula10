import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import AnchorTemporaryDrawer from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <ListarTarefa />
      <AnchorTemporaryDrawer />
    </div>
  );
}

export default App;