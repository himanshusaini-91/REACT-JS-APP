import { useEffect } from "react";
import { usePostStore } from "../store/postStore";
import { Loader2, AlertCircle, FileText } from "lucide-react";

function Post() {
    const { posts, loading, error, setPosts } = usePostStore();

    useEffect(() => {
        setPosts();
    }, [setPosts]);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
                <Loader2 className="size-10 text-indigo-500 animate-spin" />
                <p className="text-gray-400 font-medium animate-pulse">Loading posts...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4 text-red-400">
                <AlertCircle className="size-12" />
                <p className="font-semibold text-lg">Failed to load posts</p>
                <p className="text-sm opacity-80">{error.message || "Unknown error occurred"}</p>
            </div>
        );
    }

    return (
        <div className="w-full max-w-7xl mx-auto p-6 space-y-8">
            <div className="flex items-center gap-3 mb-8 border-b border-gray-800 pb-6">
                <FileText className="size-8 text-indigo-400" />
                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    Post Store
                </h1>
                <div className="ml-auto text-sm text-gray-500 font-mono">
                    Total Posts: {posts.length}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                    <div
                        key={post.id}
                        className="group relative bg-gray-900/50 backdrop-blur-sm border border-white/5 rounded-xl p-6 hover:border-indigo-500/30 hover:bg-gray-800/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10"
                    >
                        <div className="absolute top-4 right-4 text-xs font-bold text-gray-600 group-hover:text-indigo-400 transition-colors">
                            #{post.id}
                        </div>
                        <h2 className="text-lg font-semibold text-gray-200 mb-3 line-clamp-2 group-hover:text-indigo-300 transition-colors capitalize">
                            {post.title}
                        </h2>
                        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                            {post.body}
                        </p>
                        <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-500">
                            <span>User ID: {post.userId}</span>
                            <span className="group-hover:text-indigo-400 transition-colors">Read more →</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Post;