import React  from 'react'
import {IProject} from '../models'

interface ProjectProps {
	project: IProject
}

export default function Project({ project }: ProjectProps) {
	return (
		<div className="card">			
			<img src={project.image} alt={project.title} />
			<p>{project.title}</p>
		</div>
	)
}