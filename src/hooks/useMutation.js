import { useState } from "react"
import axios from "axios"


const useMutation = ({url, method="POST"})=>{
    const [state,setState] = useState({
        isLoading :false,
        error : ''

    })

    const fn = async data =>{
        setState(prev =>({
            ...prev,
            isLoading: true
        }));

        let result = await axios.post({url,method,data});
        console.log("19",result)
    }

    return {mutate:fn,...state};
}

export default useMutation;
