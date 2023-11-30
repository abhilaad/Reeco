import jsonData from "../cartData.json"

export const getCartDataApi = ()=>{
    return new Promise((resolve, reject)=>{        
        const data = (jsonData)    
        setTimeout(()=>{resolve(data)}, 500)       
    })
}