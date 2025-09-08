import { useState } from "react";

export default function Education(){

    const [ school, setSchool ] = useState('')
    const [ recievedDate, setRecievedDate ] = useState('')
    const [ degree, setDegree ] = useState('')
    const [ education, setEducation ] = useState([])

    function onSubmit(e){
        e.preventDefault(); 
        e.stopPropagation(); 
        setSchool('')
        setRecievedDate('')
        setDegree('')
        const newEducation = { school, degree, recievedDate }
        setEducation([ ...education, newEducation])
    }

    //TODO: refactor into own component?
    function displayEducation(){
        return education.map( (entry, i) => {
            return ( 
                <tr key={i} entry={i}>
                    <td>{entry.degree}</td>
                    <td>{entry.school}</td>
                    <td>{entry.recievedDate}</td>
                    <td> <button level={i} onClick={editForm}>Edit</button> </td>  
                </tr>
                    )
        })
    }

    function editForm(e){
        const newEducation = { school, degree, recievedDate }
        const currentEducationNumber = e.target.parentElement.parentElement.attributes.entry.value
        const currentEducation = education[currentEducationNumber]
        const currentEducationRemoved = education.filter( (contact, i) => {
            if (i != currentEducationNumber){
                return contact
            }
        })
        newEducation.degree == "" ? setEducation([...currentEducationRemoved]) : setEducation([...currentEducationRemoved, newEducation])
        setSchool(currentEducation.school)
        setRecievedDate(currentEducation.recievedDate)
        setDegree(currentEducation.degree)
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
                Date Received: {' '}
                <input type="date" name="recievedDate"
                    value={recievedDate}
                    onChange={ e => setRecievedDate(e.target.value)}
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
                        { education.length > 0 && <th scope="col">Date Received</th> }
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

