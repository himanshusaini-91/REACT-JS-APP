import { useCounterStore } from "../store/counterScore";
import { Plus, Minus, RotateCcw, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export default function CounterStore() {
    const { count, increment, decrement, reset } = useCounterStore();

    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 p-6">
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative px-10 py-14 bg-gray-900 ring-1 ring-gray-800 shadow-2xl rounded-2xl sm:px-16 sm:py-20 flex flex-col items-center gap-8">

                    <div className="flex flex-col items-center gap-2">
                        <h2 className="text-gray-400 uppercase tracking-widest text-sm font-semibold">Current Count</h2>
                        <div className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-tr from-white to-gray-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                            {count}
                        </div>
                    </div>

                    <div className="flex items-center gap-6 mt-4">
                        <button
                            onClick={decrement}
                            className="group relative p-4 rounded-xl bg-gray-800 hover:bg-red-500/10 text-gray-400 hover:text-red-400 border border-gray-700 hover:border-red-500/50 transition-all duration-300 active:scale-95"
                            title="Decrement"
                        >
                            <Minus className="size-8" strokeWidth={3} />
                        </button>

                        <button
                            onClick={reset}
                            className="group relative px-8 py-4 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500 transition-all duration-300 active:scale-95 flex items-center gap-2 font-bold tracking-wide"
                        >
                            <RotateCcw className="size-5 group-hover:rotate-180 transition-transform duration-500" />
                            RESET
                        </button>

                        <button
                            onClick={increment}
                            className="group relative p-4 rounded-xl bg-gray-800 hover:bg-indigo-500/10 text-gray-400 hover:text-indigo-400 border border-gray-700 hover:border-indigo-500/50 transition-all duration-300 active:scale-95"
                            title="Increment"
                        >
                            <Plus className="size-8" strokeWidth={3} />
                        </button>
                    </div>

                    <div className="w-full pt-8 border-t border-gray-800/50 flex justify-center">
                        <Link
                            to="/counter-store/posts"
                            className="group flex items-center gap-3 px-6 py-3 rounded-full bg-gray-800/50 hover:bg-indigo-600/10 border border-gray-700 hover:border-indigo-500/50 transition-all duration-300"
                        >
                            <FileText className="size-5 text-gray-400 group-hover:text-indigo-400 transition-colors" />
                            <span className="text-gray-400 font-medium group-hover:text-indigo-300 transition-colors">View Post Store</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
