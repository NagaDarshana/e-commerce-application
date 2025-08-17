export default function basicOps(products,sortDir,currCategory,searchTerm,pageNum,pageSize){
    let filteredArray = products;
    if (searchTerm != ""){
        filteredArray = filteredArray.filter((product) => {
            let lowerSearchTerm = searchTerm.toLowerCase()
            let lowerTitle = product.title.toLowerCase()
            return lowerTitle.includes(lowerSearchTerm)
        })
    }

    let filteredSortedArr = filteredArray
    if (sortDir != 0){
        if (sortDir == 1) {
            filteredSortedArr = filteredSortedArr.sort(uparrow)
        }
        else{
            filteredSortedArr = filteredSortedArr.sort(downarrow)
        }
    }

    let filteredSortedCategoryArr = filteredSortedArr;
    if (currCategory != "All Categories"){
        filteredSortedCategoryArr = filteredSortedCategoryArr.filter((product) => {
           return product.category == currCategory
        })
    }

    let totalPages = Math.ceil(filteredSortedCategoryArr.length / pageSize)

    let startIndex = (pageNum - 1 ) * pageSize;
    let endIndex = startIndex + pageSize;
    filteredSortedCategoryArr = filteredSortedCategoryArr.slice(startIndex,endIndex)

    return { filteredSortedCategoryArr, totalPages }
}

function uparrow(prod1,prod2){
    if (prod1.price > prod2.price){
        return 1
    }
    else{
        return -1
    }
}

function downarrow(prod1,prod2){
    if (prod1.price < prod2.price){
        return 1
    }
    else{
        return -1
    }
}