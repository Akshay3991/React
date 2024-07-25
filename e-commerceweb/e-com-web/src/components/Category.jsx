function Category({finalCategory,setCatName}) {
  let categ = finalCategory.map((v,i)=>{

return(
  <li onClick={()=>setCatName(v.slug)} key={i} className="bg-[#ccc] p-[7px]  font-[500] font-mono text-[18px] cursor-pointer mb-2">
    {v.slug}
  </li>

)
  })
  return (
    <div>
        <h3 className='text-[20px] font-black p-[10px]'>Product Category</h3>
        <ul className="overflow-scroll h-[100vh]">
          {categ}
        </ul>
    </div>
  )
}
export default Category;
