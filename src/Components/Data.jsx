import React, { useEffect} from 'react'
import axios from 'axios'
import { useQuery} from 'react-query'
import { useState } from 'react'


const endpoint = 'https://fullstack-engineer-test-n4ouilzfna-uc.a.run.app/graphql'

const pages_query  = `{
  pages [
    {content,
    tokens}
  ]
}` 


const Data= () => {
  const [data, setData] = useState({})

  useEffect(() => {
  //Some axios code goes here
  
  const fetchData = ()=>{
    const {data} = axios.post(endpoint,{query: pages_query})
    .then(response => {
      console.log(response)
      return response
    })
      
    .catch(err => console.log(err.message)) 
    setData(data)
  }
  fetchData()


  }, [])
  
  // const { data, isLoading,error } = useQuery("pages", async () => {

  //   try {
  //     const {data} = await axios.post(endpoint,{query: pages_query}) 
      
  //     console.log(data)
      
  //     return data.data
  
  //   } catch (error) {
  //     console.log(error.message);
      
  //   }
  // })

  // if (isLoading) return "Loading...";
  // if (error) return <pre>{error.message}</pre>;

  return (
    <div>
      {/* data: {data.data} */}

    </div>
  )
}

export default Data