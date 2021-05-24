import { useEffect, useState } from "react";

// Hook
export const useAsync = (asyncFunction,initialValue = null, immediate) => {

  const [data, setData] = useState(initialValue)
  const [loading, setLoading] = useState(false)

 

  const execute =() => {
    setLoading(true)
    asyncFunction().then(_data => {
      setLoading(false);
      setData(_data);
    })
  }

  useEffect(() =>{
    if(immediate === true){
      execute()
    }
  }, [])

  return {execute, data, loading}
  
};

