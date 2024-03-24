const FilterReducer = (state,action) => {
    switch (action.type) {
        case "FILTER_PRODUCTS":
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
            }
        case "ALL_PRODUCTS":
            return state;
        case "SET_GRIDVIEW":
            return {
                ...state,
                gridView: true,
            }
        case "SET_LISTVIEW":
            return{
                ...state,
                gridView: false,
            }
        case "SET_SORT":
            const sortvalue = document.getElementById("sort");
            const value = sortvalue.options[sortvalue.selectedIndex].value;
            console.log(value);
            return{
                ...state,
                sortingvalue: value
            }
        case "SORTING_PRODUCTS":
            let newsorted;
            let tempsorted = [...action.payload];

            if(state.sortingvalue === "a-z"){
                newsorted = tempsorted.sort((a,b)=>{
                    return a.name.localeCompare(b.name);
                })
            }
            else if(state.sortingvalue === "z-a"){
                newsorted = tempsorted.sort((a,b)=>{
                    return b.name.localeCompare(a.name);
                })
            }
            else if(state.sortingvalue === "Highest"){
                newsorted = tempsorted.sort((a,b)=>{
                    return b.price - a.price
                })
            }
            else if(state.sortingvalue === "Lowest"){
                newsorted = tempsorted.sort((a,b)=>{
                    return a.price - b.price
                })
            }
        return {
                ...state,
                filter_products: newsorted,
            }
        default:
            return state;
    }

}

export default FilterReducer