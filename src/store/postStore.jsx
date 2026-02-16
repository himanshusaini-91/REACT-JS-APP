import { create } from "zustand";
export const usePostStore = create((set) => ({
    posts: [],
    loading: false,
    error: null,
    setPosts: async (posts) => {
        set({ loading: true })
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            set({ posts: data });
        } catch (error) {
            set({ error });
        } finally {
            set({ loading: false })
        }
    },
    setLoading: (loading) => set({ loading }),
    setError: (error) => set({ error }),
}))