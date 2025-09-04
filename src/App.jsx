import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './Components/Hello'
import ControlledComponent from './Components/ControlledComponent'
import UncontrolledComponent from './Components/uncontrolledComponent'
import CountIncreDecre from './Components/CountIncreDecre'
import Bike from './Components/Bike'
import Message from './Components/Message'
import Msg from './Components/Msg'
import ProfileDescription from './Components/ProfileDescription'
import ExhibitionBookingForm from './Components/assignment/Formclass/ExhibitionBookingForm'
import ExhibitionBookingForm2 from './Components/assignment/Formfunc/ExhibitionBookingForm2'
import ProductLandPage from './Components/assignment/productlandpage/ProductLandPage'
// import HomePage from './Components/homepage'
import Contact from './Components/Contact'
import About from './Components/About'
import Layout from './Components/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ListArray from './Components/listarray'
import LifecycleComponents from './Components/Counter'

import ComponentDidMount from './Components/LifecycleComponents/ComponentDidMount'
// import RJSass from './Components/assignment/rjsass'
import Parent from './Components/parent'
import AppCounter from './AppCounter'
import LifecycleComponentDidUpdate from './Components/LifecycleComponents/LifecycleComponentDidUpdate'
import NameForm from './Components/NameForm'
// import UserData from './Components/userdata'
import UserData from './Components/assignment/UserData'
import FavColor from './Components/useStateColor'
import Second from './Components/Hooks/Second'

import Counter from './Components/Hooks/Counter'
import CounterHooks from './Components/Hooks/AllHooksComponent'
import Greetings from './Components/ConditionalRendering/Greeting'
import ParentComponent from './Components/ParentComponent'
import StudentData from '../StudentData'
import Todo from '../todo'
import SearchFilter from './Components/SearchFilter'
import Navigation from './Components/navigate/navigation'
import HomePage from './Components/HomePage'
import StudentManager from '../StudentManager'
import HooksUseEffect from './Components/Hooks/HooksUseEffect'
import HooksUseContext from './Components/Hooks/HooksUseContext'
import PropDrilling from './Components/Hooks/PropDrilling'
import HooksUseRef from './Components/Hooks/HooksUseRef'
import HooksUseReducer from './Components/Hooks/HooksUseReducer'
import ModelPopUp from './Components/Model/ModelPopUp'





function App() {
  // const [count, setCount] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div>
        {/* <div className="App">
          <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <button
                  onClick={() => setIsOpen(true)}
                  style={{
                    backgroundColor: "#007BFF",
                    color: "white",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Open Modal
                </button>

              {isOpen ? (
                <ModelPopUp onClose={() => setIsOpen(false)}>
                  <h2>Hello from Modal 👋</h2>
                  <p>This modal is rendered using a ternary operator.</p>
                </ModelPopUp>
              ) : null}
         </div>

      </div>
      */}

      {/* <ProfileDescription name="John Doe" age={30} /> */}
      {/* <Msg  name="abc" age={age} /> */}
      {/* <Msg name="John" age={25}/> */}
      {/* <Message /> */}
      {/* <Bike /> */}
      {/* <CountIncreDecre /> */}
      {/* <Hello name="John" /> */}
      {/* <ControlledComponent /> */}
      {/* <UncontrolledComponent />   */}
      {/* <ExhibitionBookingForm /> */}
      {/* <ExhibitionBookingForm2 /> */}
      {/* <ProductLandPage /> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes> 
      </BrowserRouter> */}
        {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          </Route>
        </Routes> 
      </BrowserRouter> */}
      {/* <ListArray /> */}
      {/* <Counter /> */}
      {/* <ComponentDidMount /> */}
      {/* <ShouldComponentUpdate /> */}
      {/* <RJSass /> */}
      {/* <Parent /> */}
      {/* <AppCounter /> */}
      {/* <LifecycleComponentDidUpdate /> */}
      {/* <NameForm /> */}
      {/* <UserData /> */}
      {/* <UserData /> */}
      {/* <FavColor/> */}
      {/* <Second /> */}
      {/* <Counter/> */}
      {/* <CounterHooks /> */}
      {/* <Greetings isLoggedIn={false}  name="jas"/> */}
      {/* <ParentComponent/> */}
      {/* <StudentData /> */}
      {/* <Todo /> */}
      {/* <SearchFilter /> */}
      {/* <BrowserRouter>
      <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter> */}
      <StudentManager />
      {/* <HooksUseEffect/> */}
      {/* <HooksUseContext /> */}
      {/* <PropDrilling /> */}
      {/* <HooksUseRef /> */}
      {/* <HooksUseReducer /> */}
      

      </div>
  
    </>
  )
}

export default App
