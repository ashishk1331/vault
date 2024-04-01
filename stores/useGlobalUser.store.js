import { create } from "zustand";

export const useGlobalUserStore = create((set) => ({
	user: null,
	setUser: (user) => set({ user }),
}));