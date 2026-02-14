import Header from "./components/Header";
import VoiceControl from "./components/VoiceControl";
import ShoppingList from "./components/ShoppingList";
import Footer from './components/Footer'
function App() {
  return (
    <>
      <Header />
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto my-10 px-10">
        <VoiceControl />
        <ShoppingList />
      </main>
      <Footer />
    </>
  );
}

export default App;
