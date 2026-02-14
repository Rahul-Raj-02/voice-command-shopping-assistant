import { Trash, Box, Funnel } from "lucide-react";
const ShoppingList = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 7];
  return (
    <>
      <div className="w-full">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          My Shopping List
          <span className="text-sm font-normal text-gray-500">
            ({arr.length} items)
          </span>
        </h2>
        <div className="flex items-center justify-between bg-gray-900/30 p-3 rounded-xl mb-4 border border-gray-800">
          <span className="text-xs font-bold text-gray-400 uppercase flex gap-2 items-center">
            <Funnel size={20} /> Filter by Price:
          </span>
          <select className="bg-transparent text-blue-400 text-sm font-bold focus:outline-none cursor-pointer">
            <option value="all">All Prices</option>
            <option value="50">Under $50</option>
            <option value="100">Under $100</option>
            <option value="500">Under $500</option>
          </select>
        </div>

        <div className="flex flex-col gap-3">
          {arr.map((list, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between bg-gray-900/50 border border-gray-800 p-4 rounded-2xl hover:border-blue-500/50 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400">
                  <Box />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Item {list}</h3>
                  <h4 className="text-gray-500 text-xs uppercase font-bold tracking-wider">
                    Price: $10.00
                  </h4>
                </div>
              </div>

              <button className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors">
                <Trash />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default ShoppingList;
