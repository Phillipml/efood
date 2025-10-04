export const useOverlay = () => ({
  currentOverlay: null,
  showModal: jest.fn(),
  showSideMenu: jest.fn(),
  hideOverlay: jest.fn(),
  isModalOpen: false,
  isSideMenuOpen: false
})
