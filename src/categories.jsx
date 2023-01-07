import React from 'react'

const Categories = ({Categories,filterItems}) => {
  return <div className="btn-container">
    {
      Categories.map((Category,index) =>{
        return <button tyoe='button' className='filter-btn' key={index} onClick={() => filterItems(Category)}>{Category}</button>
      })
    }

  </div>
}

export default Categories