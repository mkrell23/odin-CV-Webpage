import { useState } from 'react'

export default function Contact(){

    const [ contacts, setContacts ] = useState([])

    function logForm(formData){
        const name = formData.get("name");
        const email = formData.get("email");
        const phone = formData.get("telephone");
        const newContact = { name, email, phone }
        setContacts( [ ...contacts, newContact]);
    }

    console.log(contacts);

    return (
        <>
        <form action={logForm}>
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
            </label>{' '}
            <button>Save</button>
        </form>
        <div>
            <table>
                <thead>
                    <tr>    
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key="0">
                        <td>Dikny Wrinklehorn</td>
                        <td>dinkydodger@email.com</td>
                        <td>555-1234</td>
                        <td> <button>Edit</button> </td>
                    </tr>
                </tbody>
            </table>
           
        </div>
        </>
    )
}