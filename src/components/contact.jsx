import { useState } from 'react'
import '../styles/contact.css'

export default function Contact(){
    const blankContact = {name:"", email:"", phone:""}
    const [ contacts, setContacts ] = useState([])
    const [ currentContact, setCurrentContact ] = useState(blankContact)
    // TO-DO: We probably only want one main contact for this page. Refactor to only have one instead of array.
    // Idea: transform input field to table and vice/versa on save/edit

    function editForm(e){
        const newCurrentContact = e.target.parentElement.parentElement.attributes.contact.value
        setContacts(contacts.filter( (contact, i) => {
            if (i != newCurrentContact){
                return contact
            }
        }))
        setCurrentContact(contacts[newCurrentContact])
    }

    function displayContacts(){
        return contacts.map( (contact, i) => {
            return ( 
                <tr key={i} contact={i}>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                    <td> <button level={i} onClick={editForm}>Edit</button> </td>
                </tr>
                    )
        })
    }

    function onSubmit(e){
        e.preventDefault(); 
        e.stopPropagation(); 
        setContacts( [ ...contacts, currentContact]);
        setCurrentContact(blankContact);
    }

    const contactsTable = displayContacts()



    return (
        <>
        <form onSubmit={ onSubmit }>
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