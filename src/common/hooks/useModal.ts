import { useState } from 'react'

export function useModal () {
  const [showModal, updateModal] = useState(false)

  const toggleModal = () => updateModal(prevState => !prevState)

  return {
    showModal,
    toggleModal
  }
}