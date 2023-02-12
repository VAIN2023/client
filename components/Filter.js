import { useEffect, useState } from "react"
import axios from "axios"

const Filter = ({handleAppliedFilters, handleResetFilters}) => {

	const [subjects, setSubjects] = useState([])
	const [types, setTypes] = useState([])
	const [subjectsChecked, setSubjectsChecked] = useState([])
	const [typesChecked, setTypesChecked] = useState([])

	const api_uri = process.env.NEXT_PUBLIC_API_LOCAL || "http://localhost:8080"

	useEffect( () => {
		axios.get(`${api_uri}/subjects`)
      .then( res => {
        setSubjects(res.data)
      })
      axios.get(`${api_uri}/types`)
        .then( res => {
          setTypes(res.data)
        })
	}, [])

	const handleSubjectChange = (e) => {
		let subjectdescription = e.target.value
		if (e.target.checked){
			setSubjectsChecked([...subjectsChecked, subjectdescription])
		}
		else{
			setSubjectsChecked(subjectsChecked.filter( item => item !== subjectdescription))
		}
	}

	const handleTypeChange = (e) => {
		let typedescription = e.target.value
		if (e.target.checked){
			setTypesChecked([...typesChecked, typedescription])
		}
		else{
			setTypesChecked(typesChecked.filter( item => item !== typedescription))
		}
	}

	const resetFilters = (e) => {
		setSubjectsChecked([])
		setTypesChecked([])
		handleResetFilters()
	}

	const applyFilters = () => {
		let filters = [...subjectsChecked, ...typesChecked]
		handleAppliedFilters(filters)
	}

    return (
        <div className="w-3/12">
            <button className="w-full h-16 bg-white border border-slate-300 rounded-md text-gray-700 font-semibold drop-shadow-md hover:bg-slate-100 transition duration-200 ease-in-out" onClick={resetFilters}>Reset Filter</button>
			<div className="w-full bg-white border-slate-300 border rounded-md drop-shadow-md p-5 mt-5">
				<h1 className="font-bold text-xl text-neutral-800 mb-2">Subjects</h1>
				{
					subjects.map((subject, index) => (<p key={index}><input type="checkbox" className="text-neutral-800" onChange={handleSubjectChange} checked={subjectsChecked.includes(subject.subjectdescription)} value={subject.subjectdescription} className="mr-2"/>{subject.subjectdescription}</p>))
				}
				<h1 className="font-bold text-xl mt-5 text-neutral-800 mb-2">Types</h1>
				{
					types.map((type, index) => (<p key={index}><input type="checkbox" className="text-neutral-800" onChange={handleTypeChange} checked={typesChecked.includes(type.typedescription)} value={type.typedescription} className="mr-2"/>{type.typedescription}</p>))
				}
				<button className="w-full h-16 bg-white border border-slate-300 rounded-md text-gray-700 font-semibold drop-shadow-md mt-5 hover:bg-slate-100 transition duration-200 ease-in-out" onClick={applyFilters}>Apply Filters</button>
			</div>
		</div>
    )
}

export default Filter