import { useEffect, useState } from "react";

export const useFetch = (url) => {
 
    const [state,setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    })

    const getFetch = async() => {

        setState({
            ...state,
            isLoading: true,
        })
       const resp = await fetch(url);
       const data = await resp.json();
       setState({
        data:data,
        isLoading: false,
        hasError: null
       })
    }


    useEffect(() => {
        getFetch()
    }, [url])
    // La dependencia que utilizamos es el url, si el url es el mismo no cambia, pero si es difirente si.

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    };
}
