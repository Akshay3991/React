import { useEffect,useState } from 'react';

const useFetch = (url) => {
    let [data, setData] = useState([]);

    useEffect(() => {
      async function getData() {
        let fetchdata = await fetch(url);
        let res = await fetchdata.json();
        
        
        setData(res)
        // console.log(data);
        // console.log(res.quotes[0].quote);
        
      }
      getData();
    }, [])
  return (
    [data]
  )
}

export default useFetch