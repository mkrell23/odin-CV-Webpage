import { useState } from "react";

export default function Education(){

    const [ school, setSchool ] = useState('')
    const [ startDate, setStartDate ] = useState('')
    const [ endDate, setEndDate ] = useState('')
    const [ degree, setDegree ] = useState('')

    function onSubmit(e){
        e.preventDefault(); 
        e.stopPropagation(); 
        setSchool('')
        setStartDate('')
        setEndDate('')
        setDegree('')
    }

//value="2008-12-21"

// TO-DO: Add variable to hold education history
// TO-DO: Display education history

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
        </>
    )
}