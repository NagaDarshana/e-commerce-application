import React, {useState,useEffect} from 'react'
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import ProductList from '../components/ProductList';
import Categories from '../components/Categories';
import basicOps from '../utility/basicOps';
import { usePaginationContext } from '../Contexts/PaginationContext';


function Home() {
    const [searchTerm,setSearchTerm] = useState("");
    const [products,setProducts] = useState([]);
    const [sortDir,setSortDir] = useState(0);
    const [categoriesDir,setCategoriesDir] = useState([]);
    const [currCategory,setCurrentCategory] = useState("All Categories");

    const {pageSize, pageNum, setPageNum,} = usePaginationContext();

    useEffect(() => {
        (async function (){
            const resp = await fetch(`https://fakestoreapi.com/products`);
            const productData = await resp.json();
            console.log(productData)
            setProducts(productData)
        })()
    },[])

    useEffect(() => {
        (async function (){
            const resp = await fetch(`https://fakestoreapi.com/products/categories`);
            const categoriesData = await resp.json();
            setCategoriesDir(categoriesData)
        })()
    },[])

    const object = basicOps(products,sortDir,currCategory,searchTerm,pageNum,pageSize)
    const filteredSortedCategoryArr = object.filteredSortedCategoryArr;
    const totalPages = object.totalPages;

  return (
    <>
    <header className = "nav_wrapper">
        <div className = "search_Sort-wrapper">
        <input type = "text" className = "search_input" value = {searchTerm} onChange = {(e) => {setSearchTerm(e.target.value) 
            setPageNum(1)}}></input>
        <div className = "icons-Cont">
            <FaArrowUp onClick = {() => {setSortDir(1),setPageNum(1)}}/>
            <FaArrowDown onClick = {() => {setSortDir(-1),setPageNum(1)}}/>
        </div>
        </div>
        <div className = "categories-wrapper">
            <Categories categories = {categoriesDir} setCurrentCategory = {setCurrentCategory} />
        </div>
    </header>
    <main className = "product_wrapper">
        <ProductList productList = {filteredSortedCategoryArr} />
    </main>
    <div className="pagination">
        <button onClick = {() => {
            if (pageNum == 1)
                return 
            setPageNum((pageNum) => pageNum - 1)
        }} disabled = {pageNum == 1 ? true : false}>
        <FaAngleLeft/></button>
        <div className = "pageNum">{pageNum}</div>
        <button onClick = {() => {
            if (pageNum == totalPages)
                return 
            setPageNum((pageNum) => pageNum + 1)
        }}
        disabled = {pageNum == totalPages ? true : false}>
            <FaAngleRight/></button>
    </div>
    </>
  )
}

export default Home