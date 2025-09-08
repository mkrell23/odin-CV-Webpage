import { useState } from "react"

export default function Experience(){

    const [ employer, setEmployer ] = useState('')
    const [ startDate, setStartDate ] = useState('')
    const [ endDate, setEndDate ] = useState('')
    const [ duties, setDuties ] = useState('')
    const [ experience, setExperience ] = useState([])

    function onSubmit(e){
        e.preventDefault(); 
        e.stopPropagation(); 
        setEmployer('')
        setStartDate('')
        setEndDate('')
        setDuties('')
        const newExperience = { employer, startDate, endDate, duties }
        setExperience([ ...experience, newExperience])
    }

    //TODO: refactor into own component?
    function displayExperience(){
        return experience.map( (entry, i) => {
            return ( 
                <tr key={i} entry={i}>
                    <td>{entry.employer}</td>
                    <td>{entry.startDate}</td>
                    <td>{entry.endDate}</td>
                    <td>{entry.duties}</td>
                    <td> <button level={i} onClick={editForm}>Edit</button> </td>  
                </tr>
                    )
        })
    }

    function editForm(e){
        const newExperience = { employer, startDate, endDate, duties }
        const currentExperienceNumber = e.target.parentElement.parentElement.attributes.entry.value
        const currentExperience = experience[currentExperienceNumber]
        const currentExperienceRemoved = experience.filter( (contact, i) => {
            if (i != currentExperienceNumber){
                return contact
            }
        })
        newExperience.employer == "" ? setExperience([...currentExperienceRemoved]) : setExperience([...currentExperienceRemoved, newExperience])
        setEmployer(currentExperience.employer)
        setStartDate(currentExperience.startDate)
        setEndDate(currentExperience.endDate)
        setDuties(currentExperience.duties)
    }

    const experienceHistory = displayExperience()

    return(
        <>
        <form  onSubmit={ onSubmit }>
            <h4 className='formTitle'>Experience</h4>
            <label>
                Employer: {' '}
                <input type="text" name="employer" 
                    value={employer}
                    onChange={ e => setEmployer(e.target.value)} 
                />
            </label>{' '}
            <label>
                Duties and Responsibilites: {' '}
                <textarea type="text" name="duties"
                    value={duties}
                    onChange={ e => setDuties(e.target.value)}
                ></textarea>
            </label>{' '}
            <label>
                Date Started: {' '}
                <input type="month" name="startDate"
                    value={startDate}
                    onChange={ e => setStartDate(e.target.value)}
                />
            </label>{' '}
            <label>
                Date Ended: {' '}
                <input type="month" name="endDate"
                    value={endDate}
                    onChange={ e => setEndDate(e.target.value)}
                />
            </label>{' '}
            <button>Save</button>
        </form>
        <div>
            <table>
                <thead>
                    <tr> 
                        { experience.length > 0 && <th scope="col">Employer</th> }
                        { experience.length > 0 && <th scope="col">Start Date</th>  }
                        { experience.length > 0 && <th scope="col">End Date</th> }
                        { experience.length > 0 && <th scope="col">Duties and Responsibilities</th> }
                    </tr>
                </thead>
                <tbody>
                    {experienceHistory}
                </tbody>
            </table>
           
        </div>
        </>
    )
}