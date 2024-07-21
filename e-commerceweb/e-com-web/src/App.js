import axios from 'axios';
import './App.css';
import Category from './Category';
import { useEffect, useState } from 'react';

//to use api's npm i axios
function App() {
  let [catName, setCatName] = useState('')
  let [finalCategory, setFinalCategory] = useState([])
  let [finalProduct, setFinalProduct] = useState([])
  let getCategory = () => {
    axios.get('https://dummyjson.com/products/categories')
      .then((res) => res.data)
      .then((finalres) => {
        setFinalCategory(finalres);

      })

  }
  let getProduct = () => {
    axios.get('https://dummyjson.com/products')
      .then((pres) => pres.data)
      .then((finalpres) => {
        setFinalProduct(finalpres.products)

      })
  }
  useEffect(() => {
    getCategory();
    getProduct();
  }, [])
  useEffect(() => {
    if (catName !== "") {

      axios.get(`https://dummyjson.com/products/category/${catName}`)
      .then((pres) => pres.data)
      .then((finalpres) => {
        setFinalProduct(finalpres.products)

        })
    }
  }, [catName])

  let Pitems = finalProduct.map((products, index) => {
    return (
      <ProductItems key={index} pdata={products} />
    )
  })
  return (
    <>
      <div className='py-[40px]'>
        <div className='w-[90vw] mx-auto bg-[whitesmoke]'>
          <h1 className='text-center text-[40px] font-black mb-[30px]'>Our Products</h1>
          <div className='grid grid-cols-[30%_auto]'>
            <div className='bg-[grey] p-[10px]'>
              <Category finalCategory={finalCategory} setCatName={setCatName}></Category>
            </div>
            <div>
              <div className="grid grid-cols-3 overflow-scroll h-[100vh] gap-5">
                {finalProduct.length >= 1 ?
                  Pitems :
                  "Sorry! No Product Found "
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

function ProductItems({ pdata }) {
  return (
    <div className="shadow-lg p-4">
      <img src={pdata.thumbnail} className='p-2 w-[100%] h-[220px]' alt="" />
      <h4 className='p-2'>{pdata.title}</h4>
      <span className='p-2'>Rs. {pdata.price}</span>
      <p className='text-[red] p-2 font-serif font-black'>{pdata.description}</p>
    </div>
  )
}
