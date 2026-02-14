import Header from "./components/Header";
import VoiceControl from "./components/VoiceControl";
import ShoppingList from "./components/ShoppingList";
function App() {
  return (
    <>
      <Header />
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto mt-10 px-10">
        <VoiceControl />
        <ShoppingList />
      </main>
    </>
  );
}

export default App;
