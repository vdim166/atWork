import { create } from "zustand";

interface PopupState {
  isOpen: boolean;
  content: React.ReactNode | null;
}

interface PopupActions {
  openPopup: (content: React.ReactNode) => void;
  closePopup: () => void;
  setContent: (content: React.ReactNode) => void;
}

type PopupStore = PopupState & PopupActions;

export const usePopupStore = create<PopupStore>((set) => ({
  isOpen: false,
  content: null,
  title: undefined,
  onClose: undefined,

  openPopup: (content) => {
    set({
      isOpen: true,
      content,
    });
  },

  closePopup: () => {
    set({
      isOpen: false,
      content: null,
    });
  },

  setContent: (content) => {
    set({ content });
  },
}));
