import { create } from "zustand";

type Store = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useFeiraoPopup = create<Store>()((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
