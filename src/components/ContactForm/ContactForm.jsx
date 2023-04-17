import { useState } from 'react'
import css from './ContactForm.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addContact } from 'redux/contactsSlice'
import { toast } from 'react-toastify'

export const ContactForm = () => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const dispatch = useDispatch()
  const contacts = useSelector((state) => state.contacts.contacts)

  const handleFormSubmit = (e) => {
    e.preventDefault()

    if (contacts.find((contacts) => contacts.name === name)) {
      return toast.warn(`${name} is alredy in contacts.`, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        newestOnTop: false,
        closeOnClick: true,
        rtl: false,
        pauseOnFocusLoss: true,
        draggable: true,
        pauseOnHover: true,
        theme: 'dark',
      })
    }

    dispatch(addContact(name, number))
    setName('')
    setNumber('')
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    switch (name) {
      case 'name':
        setName(value)
        break

      case 'number':
        setNumber(value)
        break

      default:
        return
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label className={css.formLabel}>Name</label>

      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Rosie Simpson"
        value={name}
        onChange={handleChange}
      />
      <label className={css.formLabel}>Number</label>

      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="xxx-xx-xx"
        value={number}
        onChange={handleChange}
      />
      <button
        className={css.formBtn}
        type="submit"
      >
        Add contact
      </button>
    </form>
  )
}
