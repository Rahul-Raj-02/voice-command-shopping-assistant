import { Mic } from "lucide-react";
const VoiceControl = () => {
  return (
    <div className="border-1 border-gray-500 rounded-3xl p-12 flex flex-col items-center justify-center space-y-8 shadow-2xl  max-h-150">
      <div className="relative">
        <div className="absolute -inset-4 bg-blue-100 rounded-full animate-pulse opacity-20"></div>
        <button className="relative bg-blue-600 p-8 rounded-full shadow-lg shadow-blue-200">
          <Mic size={60} color="white" />
        </button>
      </div>

      <div className="text-center">
        <p className="text-slate-400 font-medium">Ready to help...</p>
        <p className="text-slate-300 italic text-sm mt-1">
          "Listening... Add Bread"
        </p>
      </div>

      <div className="pt-6 border-t border-slate-100 w-full text-center">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
          Smart Suggestions
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {["+ Bread", "+ Eggs", "+ Coffee"].map((tag) => (
            <span
              key={tag}
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
