import { create } from "zustand";

export const useTagHoverStore = create<{
  hoveredTag: string;
  setHoveredTag(tag: string): void;
}>((set) => ({
  hoveredTag: "",
  setHoveredTag: (tag: string) => set({ hoveredTag: tag }),
}));
