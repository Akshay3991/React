import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useReducer, useRef, useState } from "react";
import Header from "./Header";
import windowlogo from "./images/window.jpg";
import { Container, Form, Col, Row, Table } from "react-bootstrap";
import "./App.css"
import 'react-notifications/lib/notifications.css';
import { questions } from "./data/quesans";
import { tabs } from "./data/tabs";
import 'react-toastify/dist/ReactToastify.css';
import { NotificationContainer, NotificationManager } from "react-notifications";
import { ToastContainer, toast } from "react-toastify";
import { UC, LC, NC, SC } from "./data/passChar";
const reducer = (state,action) => {
 if(action.type == "INC"){
  return state + 2;
 }
  else if(action.type == "DEC"){
  return state - 2;
 }
 else if(action.type == "MUL"){
  return state *2;
 }
}
function App() {
// usereducer
 const [state,dispatch] = useReducer(reducer,0);

  // useref
  let [input, setInput] = useState("");
  let inputField = useRef();
  let formHandeler = (e) => {
    setInput(e.target.value)
  }
  let clickHandler = () => {
    // inputField.current.value = "akshay"
    console.log(inputField.current.value);
    inputField.current.style.border = "2px solid red"

  }
  let [showans, setShowAns] = useState(questions[0].id)
  let [count, setCount] = useState(1);
  const counter = useRef(0);
  const prevstate = useRef("")
  useEffect(() => {
    counter.current = counter.current + 1;
    prevstate.current = count;
  }, [count])
  let [hshow, setHshow] = useState(false);
  let [pstatus, setPstatus] = useState(false);
  let [menuStatus, setMenuStatus] = useState(false);
  let [modalstatus, setModalStatus] = useState(false);
  let [activeTabs, setActiveTabs] = useState(0);
  let [activecontent, setActiveContent] = useState(tabs[0])
  let [uppercase, setUppercase] = useState(false);
  let [lowercase, setLowercase] = useState(false);
  let [number, setNumber] = useState(false);
  let [symbols, setSymbols] = useState(false);
  let [passLength, setPassLength] = useState(10);
  let [finalpass, setFinalPass] = useState('')

  let createPassword = () => {
    let finalPass = ''
    let charset = "";
    if (uppercase || lowercase || number || symbols) {
      if (uppercase) charset += UC;
      if (lowercase) charset += LC;
      if (number) charset += NC;
      if (symbols) charset += SC;
      for (let i = 0; i < passLength; i++) {
        finalPass += charset.charAt(Math.floor(Math.random() * charset.length))
      }
      setFinalPass(finalPass);
    }
    else {
      alert("Please select atleast one checkbox!.......")
    }

  }
  let copypass = () => {
    navigator.clipboard.writeText(finalpass)
  }

  let [formData, setFormData] = useState({
    uname: '',
    uemail: '',
    uphone: '',
    umessage: '',
    index: '',
  })
  let [userdata, setUserData] = useState([])
  let getValue = (event) => {
    let oldData = { ...formData }
    let inputName = event.target.name;
    let inputValue = event.target.value;
    oldData[inputName] = inputValue;
    setFormData(oldData);
  }
  let handleSubmit = (event) => {
    event.preventDefault();

    let currentUserFormdata = {
      uname: formData.uname,
      uemail: formData.uemail,
      uphone: formData.uphone,
      umessage: formData.umessage
    }
    if (formData.index === '') {

      let checkFilterUser = userdata.filter((v) => v.uemail == formData.uemail || v.uphone == formData.uphone)
      if (checkFilterUser.length == 1) {
        toast.error("Email or Phone already Exists...")
      }
      else {

        let oldUserData = [...userdata, currentUserFormdata]
        setUserData(oldUserData)
        setFormData({
          uname: '',
          uemail: '',
          uphone: '',
          umessage: '',
          index: '',
        })
      }
    }
    else {
      let editIndex = formData.index;
      let olddata = userdata
      let checkFilterUser = userdata.filter((v, i) => (v.uemail == formData.uemail || v.uphone == formData.uphone) && i != editIndex)
      if (checkFilterUser.length == 0) {

        olddata[editIndex]['uname'] = formData.uname
        olddata[editIndex]['uemail'] = formData.uemail
        olddata[editIndex]['uphone'] = formData.uphone
        olddata[editIndex]['umessage'] = formData.umessage
        setUserData(olddata);
        setFormData({
          uname: '',
          uemail: '',
          uphone: '',
          umessage: '',
          index: '',
        })
      }
      else {
        toast.error("Email or Phone already Exists...")

      }
    }
  }

  let deleteRow = (index) => {
    let filterDataAfterDelete = userdata.filter((v, i) => i != index)
    setUserData(filterDataAfterDelete)
  }
  let editRow = (index) => {
    let editData = userdata.filter((v, i) => i == index)[0]
    editData['index'] = index
    setFormData(editData)
  }

  const changeData = (index) => {
    setActiveTabs(index)
    setActiveContent(tabs[index])

  }
  const displayCounter = () => {
    setCount(count + 1)
  }
  const showNotification = () => {
    // NotificationManager.info("welcome Akshay")
    NotificationManager.warning("welcome Akshay")
    // NotificationManager.success('akki success msg', 'any Title')
    // NotificationManager.error('akki error msg', 'any Title')
  }
  let template = '';
  if (hshow) {
    template = <>
      {/* <button onClick={() => setHshow(!hshow)} className="bg-[wheat] border-[2px] border-[black]  text-[34px] m-[12px] p-[4px]">HIDE</button> */}
      <h1 className='text-[70px] '>HEY AKSHAY</h1>
    </>
  }
  else {
    template = ''
    // template =  <button className="bg-[wheat] border-[2px] border-[black]  text-[34px] m-[12px] p-[4px]" onClick={() => setHshow(!hshow)}>SHOW</button>
  }
  return (
    <>
      <div className="app">
        <NotificationContainer></NotificationContainer>

        <button className="en" onClick={() => { setModalStatus(!modalstatus) }}>Enquire Now</button>
        <div onClick={() => { setModalStatus(!modalstatus) }} className={`modalOverlay ${modalstatus ? 'modalShow' : ''}`}></div>
        <div className={`ModalDiv ${modalstatus ? 'showModalDiv' : ''}`}>
          <button className={`border-[3px] border-[black] bg-[bisque] p-[4px] text-[15px] absolute right-[0px] top-[0px]`} onClick={() => { setModalStatus(!modalstatus) }} ><span>&times;</span></button>

          <Container fluid>
            <ToastContainer></ToastContainer>
            <Container >
              <Row>
                <Col className='text-center py-5'>
                  <h1 className="font-bold text-[24px] underline">Enquiry Now</h1>
                </Col>
              </Row>
              <Row>
                <Col className="font-bold flex" lg={5}>
                  <form action="" onSubmit={handleSubmit}>
                    <div className='w-[100%] mb-[20px]'>
                      <label className=' form-label  text-[19px] text-[whitesmoke] '>Name:</label>
                      <input onChange={getValue} type="text" value={formData.uname} name='uname' className='form-label w-[370px] text-[whitesmoke] bg-[red]  border-[3px] border-[whitesmoke] rounded-md' />
                    </div>
                    <div className=' mb-[20px] '>
                      <label className=' text-[19px] text-[whitesmoke] form-label '>Email:</label>
                      <input onChange={getValue} type="text" value={formData.uemail} name='uemail' className='w-[370px] form-label  text-[whitesmoke] bg-[red]  border-[3px] border-[whitesmoke] rounded-md' />
                    </div>
                    <div className=' mb-[20px] '>
                      <label className=' text-[19px] form-label text-[whitesmoke] '>Phone:</label>
                      <input onChange={getValue} type="text" value={formData.uphone} name='uphone' className='w-[370px] form-label  text-[whitesmoke] bg-[red]  border-[3px] border-[whitesmoke] rounded-md' />
                    </div>
                    <div className=' flex mb-[20px] '>
                      <label className=' text-[19px] form-label text-[whitesmoke] '>Message:</label>
                      <textarea onChange={getValue} value={formData.umessage} className="w-[370px] form-label  text-[whitesmoke] bg-[red]  border-[3px] border-[whitesmoke] rounded-md" name="umessage" id="" rows="3"></textarea>
                    </div>
                    <button className="btn btn-primary">
                      {
                        formData.index !== '' ? 'Update' : 'Save'
                      }
                    </button>
                  </form>
                </Col>
                <Col lg={7}>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Message</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        userdata.length >= 1 ?
                          userdata.map((obj, i) => {
                            return (
                              <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{obj.uname}</td>
                                <td>{obj.uemail}</td>
                                <td>{obj.uphone}</td>
                                <td>{obj.umessage}</td>
                                <td>
                                  <button onClick={() => deleteRow(i)}>Delete</button>
                                  <button onClick={() => editRow(i)}>Edit</button>
                                </td>
                              </tr>
                            )
                          })

                          :
                          <tr>
                            <td colSpan={6}>No Data Found</td>
                          </tr>
                      }
                    </tbody>
                  </Table>

                </Col>
              </Row>
            </Container>

          </Container>
        </div>
        <Header></Header>
        <button className="menu-btn border-[3px] p-[4px] border-[black] " onClick={() => { setMenuStatus(!menuStatus) }}>{menuStatus ? <span>&times;</span> : <span>&#9776;</span>}</button>
        <div className={`menu ${menuStatus ? 'activeMenu' : ''} `}>
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>COURSES</li>
            <li>GALLERY</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <center>
          <button onClick={showNotification}>save</button>
          <br />
          <hr />
          {counter.current}
          <hr />
          {prevstate.current}
          <hr />
          {count}
          <button className="bg-[tomato] text-[34px] m-[12px] p-[4px]" onClick={displayCounter}>Counter</button>
          {template}
          <button className="bg-[wheat] border-[2px] border-[black]  text-[34px] m-[12px] p-[4px]" onClick={() => setHshow(!hshow)}>{(hshow) ? "HIDE" : "SHOW"} </button>
          <br />
          <input className="border-[4px] border-[black] p-[10px] my-[12px]" type={pstatus ? 'text' : 'password'} />
          <button className="bg-[skyblue] border-[2px] border-[black]  text-[34px] m-[12px] p-[4px]" onClick={() => { setPstatus(!pstatus) }}>{pstatus ? 'HIDE' : 'SHOW'}</button>
          <hr />
          <hr />
          <img src={windowlogo} width={700} />

          <hr />
          <br />
          <hr />
          <br />
          <hr />
          <div className="tabsOuter">
            <h1 className="text-left">Law Prep Vision Mission and Values</h1>
            <ul>
              {tabs.map((tabsItem, index) => {
                return (
                  <>

                    <li>
                      <button onClick={() => changeData(index)} className={activeTabs == index ? 'activeButton' : ''}>{tabsItem.title}</button>
                    </li>
                  </>
                )
              })}

            </ul>
            {activecontent !== undefined ? <p>{activecontent.description}</p> : ''}

          </div>
          <div>
            <hr />
            <hr />
            <hr />
            <hr />
            <h1>Frequently Asked Questions (FAQS)</h1>
            <div className="faqOuter">
              {questions.map((faqItems, i) => {
                return (
                  <div className="faqItems">
                    <h1 onClick={() => setShowAns(faqItems.id)}>{faqItems.questions}</h1>
                    <p className={showans == faqItems.id ? 'activeAns' : ''}>{faqItems.answer}</p>
                  </div>
                );
              })}

            </div>
          </div>

        </center>
      </div>

      {/* // /////////////////////////////////////// */}
      {/* // PassWord Generator app */}
      {/* //////////////////////////////////////////////// */}
      <h1 className="text-[#1c1c49] uppercase underline font-bold">Password Generator App</h1>
      <div className="body">
        <div className="passwordBox">
          <h3 className="underline uppercase">Password Generator</h3>
          <div className="passwordBoxin">
            <input type="text" value={finalpass} readOnly /> <button className="border-[4px] border-[white] font-bold" onClick={copypass}>Copy</button>
          </div>
          <div className="passLength mt-[13px] font-bold text-[18px]">
            <label className="basis-[80%]">Password length:</label>
            <input className="w-[70px] basis-[20%] h-[50px]" onChange={(event) => setPassLength(event.target.value)} value={passLength} type="number" max={20} min={8} />
          </div>
          <div className="passLength mt-[3px] font-bold text-[18px]">
            <label className="basis-[80%]">Include uppercase letters:</label>
            <input className="w-[70px] basis-[20%]" type="checkbox" checked={uppercase} onChange={() => setUppercase(!uppercase)} />
          </div>
          <div className="passLength font-bold text-[18px]">
            <label className="basis-[80%]">Include Lowercase letters:</label>
            <input className="w-[70px] basis-[20%]" type="checkbox" checked={lowercase} onChange={() => setLowercase(!lowercase)} />
          </div>
          <div className="passLength font-bold text-[18px]">
            <label className="basis-[80%]">Include Symbols:</label>
            <input className="w-[70px] basis-[20%] " type="checkbox" checked={symbols} onChange={() => setSymbols(!symbols)} />
          </div>
          <div className="passLength mb-[20px] font-bold text-[18px]">
            <label className="basis-[80%]">Include Numbers:</label>
            <input className="w-[70px] basis-[20%] " type="checkbox" checked={number} onChange={() => setNumber(!number)} />
          </div>
          <button onClick={createPassword} className="border-[4px] bg-[white]  w-[100%] p-[10px 0px] border-[#1c1c49] font-bold">Generate Password</button>
        </div>
      </div>

      {/* UseRef Hook */}
      <div className="text-center">
        <h2 className="bg-[blue] h-[60px] w-[100vw] font-700 text-[whitesmoke] text-center">UseRef Hook</h2>
        <input className="bg-[#e21919] shadow-black w-[30%] rounded-lg " type="text" ref={inputField} value={input} onChange={formHandeler} />
        <button className="bg-[#ec6d13] border-[4px] p-[10px] rounded-lg border-[whitesmoke]" onClick={clickHandler}>Click me</button>
        <hr />
        <hr />
        <hr />

      </div>
      {/* UseReducer Hook */}
      <div className="text-center">
      <h2 className="bg-[blue] h-[60px] w-[100vw] font-700 text-[whitesmoke] text-center">UseReducer Hook</h2>
        <h1>{state}</h1>
        <button onClick={()=>dispatch({type: "INC"})}  className="bg-[#ec6d13] border-[4px] p-[10px] rounded-lg border-[whitesmoke]" >Increment</button>
        <button onClick={()=>dispatch({type: "DEC"})} className="bg-[#ec6d13] border-[4px] p-[10px] rounded-lg border-[whitesmoke]" >Decrement</button>
        <button onClick={()=>dispatch({type: "MUL"})} className="bg-[#ec6d13] border-[4px] p-[10px] rounded-lg border-[whitesmoke]">Multiply</button>
        <hr />
        <hr />
        <hr />

      </div>
    </>
  );
}

export default App;
