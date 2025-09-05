import { useState } from 'react'

export default function Contact(){

    const [ contacts, setContacts ] = useState([])

    function saveForm(formData){
        const name = formData.get("name");
        const email = formData.get("email");
        const phone = formData.get("telephone");
        const newContact = { name, email, phone }
        setContacts( [ ...contacts, newContact]);
    }

    function displayContacts(){
        return contacts.map( (contact, i) => {
            return ( <tr key={i}>
                        <td>{contact.name}</td>
                        <td>{contact.email}</td>
                        <td>{contact.phone}</td>
                        <td> <button>Edit</button> </td>
            </tr>)
        })
    }

    // console.log(contacts);
    const contactsTable = displayContacts()

    return (
        <>
        <form action={saveForm}>
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
                        { contacts.length > 0 && <th scope="col">Name</th>  }
                        { contacts.length > 0 && <th scope="col">Email</th> }
                        { contacts.length > 0 && <th scope="col">Phone</th> } 
                    </tr>
                </thead>
                <tbody>
                    {contactsTable}
                </tbody>
            </table>
           
        </div>
        </>
    )
}