import { Mic } from "lucide-react";
const VoiceControl = ({ startVoice, isListening, status, processCommand }) => {
  return (
    <div className="border-1 border-gray-500 rounded-3xl p-12 flex flex-col items-center justify-center space-y-8 shadow-2xl  max-h-150">
      <div className="relative">
        <div className="absolute -inset-4 bg-blue-100 rounded-full animate-pulse opacity-20"></div>
        <button
          onClick={startVoice}
          className={`relative p-8 rounded-full shadow-lg transition-all duration-300 ${
            isListening
              ? "bg-red-500 shadow-red-200 scale-110"
              : "bg-blue-600 shadow-blue-200 hover:scale-105"
          }`}
        >
          <Mic size={60} color="white" />
        </button>
      </div>

      <div className="text-center">
        <p
          className={`font-bold ${isListening ? "text-red-400" : "text-slate-400"}`}
        >
          {status}
        </p>
        {isListening && (
          <span className="text-xs italic text-blue-400">
            Listening... Try saying "Add Eggs"
          </span>
        )}
      </div>

      <div className="pt-6 border-t border-slate-100 w-full text-center">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
          Smart Suggestions
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {["+ Bread", "+ Eggs", "+ Coffee"].map((tag) => (
            <span
              key={tag}
              onClick={() =>
                processCommand(`add ${tag.replace("+", "").trim()}`)
              }
              className="px-4 py-1.5 rounded-full border border-slate-200 text-slate-500 text-sm hover:bg-blue-50 cursor-pointer transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
export default VoiceControl;
