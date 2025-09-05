

export default function Education(){


    function onSubmit(e){
        e.preventDefault(); 
        e.stopPropagation(); 
    }

    return(
        <>
        <form onSubmit={ onSubmit }>
            <h3>Education</h3>
            <label>
                School Attended: {' '}
                <input type="text" name="school"/>
            </label>{' '}
            <label>
                Date Started: {' '}
                <input type="date" name="startDate"/>
            </label>{' '}
            <label>
                Date Ended: {' '}
                <input type="date" name="endDate"/>
            </label>{' '}
            <label>
                Degree or Certificate Attained: {' '}
                <input type="text" name="degree"/>
            </label>{' '}
            <button>Save</button>
        </form>
        </>
    )
}