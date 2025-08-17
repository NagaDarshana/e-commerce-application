/* eslint-disable react-refresh/only-export-components */
import React from "react";
import {useContext, useState} from "react"

const paginationContext = React.createContext()

export default function PaginationProvider({children}) {
    const [pageSize, setPageSize] = useState(4);
    const [pageNum, setPageNum] = useState(1);
    const  pageProps= { pageNum, pageSize, setPageSize, setPageNum };
    return <paginationContext.Provider value = {pageProps}>
        {children}
        </paginationContext.Provider>
}

export const usePaginationContext = () => {
    return useContext(paginationContext)
}

