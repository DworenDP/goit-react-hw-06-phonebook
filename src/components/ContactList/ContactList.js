import { useDispatch, useSelector } from 'react-redux'
import css from './ContactList.module.css'
import { deleteContact } from 'redux/contactsSlice'
import { nanoid } from '@reduxjs/toolkit'

export const ContactList = () => {
  const dispatch = useDispatch()

  const contacts = useSelector((state) => state.contacts.contacts)
  const filter = useSelector((state) => state.filter.filter)

  const handleDelete = (id) => {
    dispatch(deleteContact(id))
  }

  const normalizeFilter = filter.toLocaleLowerCase()

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLocaleLowerCase().includes(normalizeFilter)
  })

  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) => {
        return (
          <li
            key={nanoid()}
            className={css.listItem}
          >
            {contact.name}: {contact.number}
            <button
              type="button"
              className={css.listBtn}
              onClick={() => handleDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        )
      })}
    </ul>
  )
}
