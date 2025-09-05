import { useState } from 'react'

export default function Contact(){
    const [ contacts, setContacts ] = useState([])
    const [ currentContact, setCurrentContact ] = useState({name:"", email:"", phone:""})

    function saveForm(formData){
        const name = formData.get("name");
        const email = formData.get("email");
        const phone = formData.get("telephone");
        const newContact = { name, email, phone }
        setContacts( [ ...contacts, newContact]);
    }

    function editForm(e){
        console.log(e.target)
        console.log(e.currentTarget)
        console.log(e)
    }

    function displayContacts(){
        return contacts.map( (contact, i) => {
            return ( 
                <tr key={i}>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                    <td> <button level={i} onClick={editForm}>Edit</button> </td>
                </tr>
                    )
        })
    }

    function saveFormBtn(e){
        e.stopPropagation()
        console.log(currentContact)
    }

    // console.log(contacts);
    const contactsTable = displayContacts()

    return (
        <>
        <form action={saveForm}>
            <h3>Contact Details</h3>
            <label>
                Name: {' '}
                <input type="text" name="name" 
                    value={currentContact.name}
                    onChange={(e) => setCurrentContact( {...currentContact, name: e.target.value})}
                />
            </label> {' '}
            <label>
                Email: {' '}
                <input type="email" name="email" 
                    value={currentContact.email}
                    onChange={(e) => setCurrentContact( {...currentContact, email: e.target.value})}
                />
            </label>{' '}
            <label>
                Phone Number: {' '}
                <input type="tel" name="telephone" 
                    value={currentContact.phone}
                    onChange={(e) => setCurrentContact( {...currentContact, phone: e.target.value})}
                />
            </label>{' '}
            <button onClick={saveFormBtn}>Save</button>
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