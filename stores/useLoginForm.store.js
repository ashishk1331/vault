import { create } from "zustand";

export const useLoginFormStore = create((set) => ({
  page: 0,
  setPage: (page) => set({ page }),
}));
