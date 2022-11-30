import { useEffect } from "react"


export const useTitle = title => {
    useEffect(() =>{
        document.title = `${title}- Dream_Wedding`;
    },[title])
}

 