import Dashboard from "./components/Dashboard";
import NavBar from "./components/NavBar";
import View from "./components/View";

function App() {
  return (
    <div className="w-full flex">
      <NavBar />

      <main className="grow">
        <View/>
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
