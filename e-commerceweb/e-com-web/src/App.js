import axios from 'axios';
import './App.css';
import Category from './components/Category';
import { useEffect, useState } from 'react';

//to use api's npm i axios
function App() {
  let [catName, setCatName] = useState('')
  let [showInfo, setShowInfo] = useState(false);
  let [showInfoname, setShowInfoName] = useState([]);
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
  let Pitems = ({ finalProduct, setShowInfoName, showInfoname }) => {

    return (
      <>
        {finalProduct.map((data, i) =>
          showInfo ? (<ProductInfo pdata={data} key={i} />) :
            (<ProductItems pdata={data} key={i} setShowInfoName={setShowInfoName} showInfoname={showInfoname} />)
        )
        }
      </>
    )
  }
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
                  <Pitems finalProduct={finalProduct} setShowInfoName={setShowInfoName} showInfoname={showInfoname} /> :
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

function ProductItems({ pdata, setShowInfoName, showInfoname }) {
  console.log(showInfoname)
  return (
    <div className="shadow-lg p-4" onClick={(e) => setShowInfoName(e.target.currentSrc.split()[0].split('/')[6].split("%"))} >
      <img src={pdata.thumbnail} className='p-2 w-[100%] bg-[white] h-[220px]' alt="" />
      <hr />
      <h4 className='p-2 font-black font-serif'>{pdata.title}</h4>
      <span className='p-2 font-sans text-[red]' >${pdata.price}</span>
      <button className='p-[4px_4px] bg-[red] font-black text-[whitesmoke]'>
        More...
      </button>
    </div>
  )
}

function ProductInfo({ pdata }) {

  return
  // (

  // <div className='w-[100vw] h-[100vh] bg-[whitesmoke]'>
  //   <img src={pdata.images[0]} className='p-2 w-[100%] bg-[white] h-[220px]' alt="" />
  //   <img src={pdata.images[1]} className='p-2 w-[100%] bg-[white] h-[220px]' alt="" />
  //   <hr />
  //   <h4 className='p-2 font-black font-serif'>{pdata.title}</h4>
  //   <h4 className='p-2 font-black font-serif'>{pdata.brand}</h4>
  //   <h4 className='p-2 font-black font-serif'>{pdata.Category}</h4>
  //   <h4 className='p-2 font-black font-serif'>{pdata.price}</h4>
  //   <h4 className='p-2 font-black font-serif'>{pdata.discountPercentage}</h4>
  //   <h4 className='p-2 font-black font-serif'>{pdata.rating}</h4>
  //   <h4 className='p-2 font-black font-serif'>{pdata.availabilityStatus}</h4>
  //   <h4 className='p-2 font-black font-serif'>{pdata.stock}</h4>
  //   <h4 className='p-2 font-black font-serif'>{pdata.warrantyInformation}</h4>
  //   <h4 className='p-2 font-black font-serif'>{pdata.returnPolicy}</h4>
  //   <h4 className='p-2 font-black font-serif'>{pdata.shippingInformation}</h4>
  //   <h4 className='p-2 font-black font-serif'>{pdata.description}</h4>
  //   <h2>{pdata.tags}</h2>
  // </div>
  // )
}
