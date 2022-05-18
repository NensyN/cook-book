import React from 'react';
import HomePage from './pages/HomePage/HomePage.jsx';
import SinglePage from './pages/SinglePage/Singlepage.jsx';
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx';
import Modal from './components/Modal/Modal'
import{ useState, useEffect} from "react"
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Route, Switch } from "react-router-dom";

import "./app.scss";

const App = () => {

    const [data, setData] = useState([]);
    const [selectedRecipeId, setSelectedRecipeId] = useState("")
    const [isModalOpen, setModalToOpen] = useState(false)
    const [shouldUpdate, setUpdate] = useState(false)


    useEffect(()=>{
        fetch('https://626d4fa650a310b8a34ce36c.mockapi.io/recipe')
        .then((res)=>res.json())
        .then((data)=> setData(data))
      }, [shouldUpdate])


      const setShouldUpdate = ()=>{
        setUpdate(!shouldUpdate)
        }
        
        const setSelectedRecipe =(xxx)=>{
          setSelectedRecipeId(xxx)
      }
    
      const setModal = (modalState)=>{
        setModalToOpen(modalState)
      }

      return (
        <div className="appwrap">
          {isModalOpen && <Modal setShouldUpdate={setShouldUpdate} setModal={setModal} />}
          <Header setModalToOpen={setModal} />
          <Switch>
            <Route path={`/singlePage`}>
              <SinglePage setShouldUpdate={setShouldUpdate} recipe={data.find((e) => e.id === selectedRecipeId)} />
            </Route>
            {/* {selectedRecipeId ? <SinglePage recipe={data.find(e=>e.id===selectedRecipeId)}/> : <HomePage recipes={data} setSelectedRecipe={setSelectedRecipe}/>} */}
            <Route path={"/"}>
              <HomePage recipes={data} setShouldUpdate={setShouldUpdate} setModal={setModal} setSelectedRecipe={setSelectedRecipe} />
            </Route>
          </Switch>
          <Footer />
        </div>
      );
};




export default App;