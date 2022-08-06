import React, {useState, useEffect} from 'react';
import Project from './components/Project';
import axios from 'axios';
import {IProject} from './models';
import  './App.css'

import {projects} from './data/projects';



function App() {

  // const [projects, setProjects] = useState<IProject[]>([]);
  
  // async function fetchProducts() {
  // 	const response = await axios.get<IProject[]>('https://backend.cyberia.studio/api/v1/projects')
  //   setProjects(response.data)
  // }
  // useEffect( () => {
  //    fetchProducts()
  // }, [])


	  return (
    <div className="App" >
       <div className="blo">привет реакт</div>
       <div className="blok">
          <Project project={ projects[7] } /> 
       </div> 
    </div>
    )

}
export default App;
