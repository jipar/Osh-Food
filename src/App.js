import './App.css';
import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {API_HOME} from './config'
import {  BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Home from './Components/Home';
import MyNav from './Components/MyNav/MyNav';
import Category from './Components/Category/Category';
import About from './Components/About/About';
import { Bas } from './Components/Bas/Bas';
import MyBas from './Components/MyBas/MyBas';
import Drop from './Components/Drop/Drop'
import Search from './Components/Search/Search';

export default function App() {


  const[data, setData] = useState([])
  const [basket, setBasket] = useState(JSON.parse(localStorage.getItem('basket')) || [])
  const Bass = useContext(Bas)

  useEffect(() => {
    axios.get(API_HOME)
    .then((res) => {
      setData(res.data.categories)
    })
   
  }, [])


  const Add = (a) => setBasket([...basket, a])
  const Del = (d) => setBasket(basket.filter((f) => d !== f))
  const Toggle = (t) => basket.includes(t) ? Del(t) : Add(t)

  useEffect(() => {
    localStorage.setItem( 'basket' ,JSON.stringify(basket))
  }, [basket])

  return (
    <Bas.Provider value={{
      basket,
      setBasket,
      Toggle
    }}>
      <div >
        <Router>
          <MyNav />
          <div className={'container'}>
          <Routes>
            <Route path={'/Search/:text'} element={<Search />} />
            <Route path={'/Drop/:town'} element={<Drop />} />
            <Route path={'/Basket/'} element={<MyBas />} />
            <Route path={'/Categories/:id'} element={<Category />} />
            <Route path={'/About/:name'} element={<About />} />
            <Route path={'/'} element={<Home data={data} />} />
          </Routes>
          </div>
        </Router>   
      </div>
    </Bas.Provider>
  )
}
