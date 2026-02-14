import Header from "./components/Header";
import VoiceControl from "./components/VoiceControl";
import ShoppingList from "./components/ShoppingList";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("shopping-list");
    return saved ? JSON.parse(saved) : [];
  });
  const priceMap = {
    bread: 40,
    milk: 60,
    eggs: 120,
    coffee: 250,
    default: 100,
  };
  const [isListening, setIsListening] = useState(false);
  const [status, setStatus] = useState("Click To Speak");
  const [maxPrice, setMaxPrice] = useState(1000);

  const processCommand = (command) => {
    const input = command.toLowerCase().replace(/\./g, "").trim();
    if (input.includes("add") || input.includes("daalo")) {
      const item = input.replace("add", "").replace("daalo", "").trim();
      if (item) {
        const formattedName = item.charAt(0).toUpperCase() + item.slice(1)
        const itemKey = item.toLowerCase();
        const basePrice = priceMap[itemKey] || priceMap.default;
        const newItem = {
          id: Date.now(),
          name: formattedName,
          price: basePrice,
        };
        setItems((prev) => [newItem, ...prev]);
       setStatus(`Added ${formattedName} to list!`);
      }
    } else if (
      input.includes("delete") ||
      input.includes("remove") ||
      input.includes("hatao")
    ) {
      const item = input
        .replace("delete", "")
        .replace("remove", "")
        .replace("hatao", "");
        const formattedName = item.charAt(0).toUpperCase() + item.slice(1);
      setItems((prev) =>
        prev.filter((i) => i.name.toLowerCase() !== item.toLowerCase()),
      );
      setStatus(`Removed ${formattedName} from list`);
    } else if (input.includes("price") || input.includes("under")) {
      const match = input.match(/\d+/);
      if (match) {
        const priceLimit = parseInt(match[0]);
        setMaxPrice(priceLimit);
        setStatus(`Showing items under $${priceLimit}`);
      }
    }
  };

  const startVoiceAssistant = () => {
    const SpeechRecognitionClass =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognitionClass) {
      alert("Browser not supported!");
      return;
    }
    const recognition = new SpeechRecognitionClass();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-IN";
    recognition.onstart = () => {
      console.log("Mic is now ON");
      setIsListening(true);
      setStatus("Speak, I am Listening...");
    };
    recognition.onerror = (event) => {
      console.error("Mic Error:", event.error);
      setStatus("Error: " + event.error);
      setIsListening(false);
    };
    recognition.onresult = (event) => {
      const speechToText = event.results[0][0].transcript;
      processCommand(speechToText.toLowerCase());
    };
    recognition.onend = () => {
      setIsListening(false);
      setStatus("click to speak");
    };
    recognition.start();
  };

  const removeItem = (id) => {
    const itemToRemove = items.find(item => item.id === id);
    setItems((prev) => prev.filter((item) => item.id !== id));
    if (itemToRemove) {
    setStatus(`${itemToRemove.name} removed from list`);
  }
  };

  useEffect(() => {
    localStorage.setItem("shopping-list", JSON.stringify(items));
  }, [items]);

  const clearAllItems = () => {
    if (window.confirm("Are you sure you want to clear the shopping list ?")) {
      setItems([]);
      setStatus("List cleared!");
    }
  };
  return (
    <>
      <div className="min-h-screen flex flex-col bg-slate-950 text-white">
        <Header />
        <main className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto my-10 px-10">
          <VoiceControl
            startVoice={startVoiceAssistant}
            isListening={isListening}
            status={status}
            processCommand={processCommand}
          />
          <ShoppingList
            items={items.filter((item) => item.price <= maxPrice)}
            removeItem={removeItem}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            clearAll={clearAllItems}
          />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
