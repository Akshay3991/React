import { RiDeleteBin3Fill } from "react-icons/ri";
function TodoItem({todoname,tododate,onDeleteClick}) {
   
    return(
  <div className="container text-center">
        <div className="row">
            <div className="col-6">
                {todoname}
            </div>
            <div className="col-4">
                {tododate}
            </div>
            <div className="col-2"> <button className="btn btn-danger" onClick={()=>onDeleteClick(todoname)}><RiDeleteBin3Fill /></button>
             
            </div>
        </div>
    </div>
    );

}
export default TodoItem;