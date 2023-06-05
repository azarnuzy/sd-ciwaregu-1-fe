import React from 'react'

function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePrevious = () => {
    onPageChange(currentPage - 1)
  }

  const handleNext = () => {
    onPageChange(currentPage + 1)
  }

  return (
    <div className='flex justify-between mt-4'>
      <button
        className={`px-4 py-2 rounded ${
          currentPage === 1
            ? 'bg-gray-300 cursor-not-allowed'
            : 'bg-blue-500 hover:bg-blue-600'
        }`}
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <button
        className={`px-4 py-2 rounded ${
          currentPage === totalPages
            ? 'bg-gray-300 cursor-not-allowed'
            : 'bg-blue-500 hover:bg-blue-600'
        }`}
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
