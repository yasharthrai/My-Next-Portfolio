'use client'

import { ReactNode } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 fade-in-up"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
        <div className="bg-primary-light border border-border rounded-lg shadow-2xl fade-in-up">
          {/* Header */}
          <div className="sticky top-0 flex justify-between items-center p-6 border-b border-border bg-primary-light">
            <h2 className="text-2xl font-bold text-text-primary">{title}</h2>
            <button
              onClick={onClose}
              className="text-text-secondary hover:text-accent transition-colors text-2xl leading-none font-light"
            >
              ✕
            </button>
          </div>

          {/* Content */}
          <div className="p-6 text-text-secondary">
            {children}
          </div>

          {/* Footer */}
          <div className="flex justify-end p-6 border-t border-border bg-primary">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-accent text-primary font-semibold rounded-md hover:bg-accent-light transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
