import React, {useState, useEffect} from 'react';
import Project from './components/Project';
import Nav from './components/Nav';
import axios from 'axios';
import {IProject} from './models';
import './App.css'
import FormWrap from "./components/FormWrap";

function App() {

    const [projects, setProjects] = useState<IProject[]>([]);
    const [isLoading, setLoading] = useState<boolean>(true);

    const fetchProducts = () => {
        return axios.get('https://backend.cyberia.studio/api/v1/projects')
    }

    useEffect(() => {
        setLoading(true)
        fetchProducts()
            .then((response) => {
                setProjects(response.data.items)
            })
            .catch((message) => console.log(message))
            .finally(() => setLoading(false))
    }, [])

    const listProjects = projects.map((project, key) => <Project project={project} key={key} />)

    return (
        <main className="app">
            <Nav/>
            {isLoading
                ? 'loading'
                : <section className="project-wrap">
                    {listProjects}
                </section>
            }
            <section>
                <FormWrap/>
            </section>
        </main>
    )

}

export default App;
