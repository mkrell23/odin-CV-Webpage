export default function Contact(){


    return (
        <>
        <h3>Contact Details</h3>
        <label>
            Name: {' '}
            <input type="text" name="name" />
        </label> {' '}
        <label>
            Email: {' '}
            <input type="email" name="email" />
        </label>{' '}
        <label>
            Phone Number: {' '}
            <input type="tel" name="telephone" />
        </label>
        </>
    )
}