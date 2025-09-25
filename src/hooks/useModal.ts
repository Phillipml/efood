import { useState } from 'react'

export const useModal = () => {
  const [showModal, setShowModal] = useState(false)
  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)
  const toggleModal = () => setShowModal(!showModal)
  return [openModal, closeModal, toggleModal]
}
