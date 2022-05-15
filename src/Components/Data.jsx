import React, { useEffect} from 'react'
import axios from 'axios'
import { useQuery} from 'react-query'


const endpoint = 'https://fullstack-engineer-test-n4ouilzfna-uc.a.run.app/graphql'

const pages_query  = `{
  pages [
    {content,
    tokens}
  ]
}` 


const Data= () => {

  useEffect(() => {
  //Some axios code goes here  
  
    
  }, [])
  
  const { data, isLoading,error } = useQuery("pages", async () => {

    try {
      const {data} = await axios.post(endpoint,{query: pages_query})      
      
      return data.data
  
    } catch (error) {
      console.log(error.message);
      
    }
  }).error(error=> console.log(error))

  if (isLoading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  return (
    <div>
      data: {data}

    </div>
  )
}

export default Data