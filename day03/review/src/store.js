import { create } from "zustand";

const useSetting = create((set) => ({
  darkMode: false,
  font: 0,
  darkToggle: () => set((state) => ({ darkMode: !state.darkMode })),
  nextFont: () => set((state) => ({ font: (state.font + 1) % 3 })),
}));

export default useSetting;
