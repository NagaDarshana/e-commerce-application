import React from 'react'
import { usePaginationContext } from '../Contexts/PaginationContext'

function Categories(props) {
    const {categories, setCurrentCategory} = props
    const {setPageNum} = usePaginationContext();
  return (
    <>
    <button className = "categories-option" onClick = {() => {setCurrentCategory("All Categories"), setPageNum(1)}}>All Categories</button>
            {categories.map((category) => {
                return <button key = {category} className = "categories-option" onClick = {() => {
                    setCurrentCategory(category)
                    setPageNum(1)
                }}>{category}</button>
            })}
    </>
  )
}

export default Categories