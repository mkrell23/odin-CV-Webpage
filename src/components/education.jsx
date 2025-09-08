import { useState } from "react";

export default function Education(){

    const [ school, setSchool ] = useState('')
    const [ startDate, setStartDate ] = useState('')
    const [ endDate, setEndDate ] = useState('')
    const [ degree, setDegree ] = useState('')
    const [ education, setEducation ] = useState([])

    function onSubmit(e){
        e.preventDefault(); 
        e.stopPropagation(); 
        setSchool('')
        setStartDate('')
        setEndDate('')
        setDegree('')
        const newEducation = { school, degree, startDate, endDate }
        setEducation([ ...education, newEducation])
    }


    //TODO: refactor into own component?
    function displayEducation(){
        return education.map( (entry, i) => {
            return ( 
                <tr key={i} entry={i}>
                    <td>{entry.degree}</td>
                    <td>{entry.school}</td>
                    <td>{entry.startDate}</td>
                    <td>{entry.endDate}</td>
                    <td> <button level={i} >Edit</button> </td>
                    {/* onClick={editForm} */}
                </tr>
                    )
        })
    }

    const educationHistory = displayEducation()

    return(
        <>
        <form  onSubmit={ onSubmit }>
            <h3>Education</h3>
            <label>
                School Attended: {' '}
                <input type="text" name="school" 
                    value={school}
                    onChange={ e => setSchool(e.target.value)} 
                />
            </label>{' '}
            <label>
                Date Started: {' '}
                <input type="date" name="startDate"
                    value={startDate}
                    onChange={ e => setStartDate(e.target.value)}
                />
            </label>{' '}
            <label>
                Date Ended: {' '}
                <input type="date" name="endDate" 
                    value={endDate}
                    onChange={ e => setEndDate(e.target.value)}
                />
            </label>{' '}
            <label>
                Degree or Certificate Attained: {' '}
                <input type="text" name="degree"
                    value={degree}
                    onChange={ e => setDegree(e.target.value)}
                />
            </label>{' '}
            <button>Save</button>
        </form>
        <div>
            <table>
                <thead>
                    <tr> 
                        { education.length > 0 && <th scope="col">Degree or Certificate</th> }
                        { education.length > 0 && <th scope="col">School or Body</th>  }
                        { education.length > 0 && <th scope="col">Start Date</th> } 
                        { education.length > 0 && <th scope="col">End Date</th> } 
                    </tr>
                </thead>
                <tbody>
                    {educationHistory}
                </tbody>
            </table>
           
        </div>
        </>
    )
}

