import { Section } from '@/app/components/Section'
import React from 'react'

export const ContactDetailsForm = () => {
  const fields = [
    {name:'Name', nameToCode:'name', type:'text'},
    {name:'Suburg/Area', nameToCode:'suburb', type:'text'},
    {name:'Phone', nameToCode:'phone', type:'text'},
    {name:'Email', nameToCode:'email', type:'email'},
  ]
  return (
    <form>
      {fields.map(field => (
        <fieldset key={field.nameToCode}>
          <label htmlFor={field.nameToCode} className='text-lg'>{field.name}: </label>
          <input name={field.nameToCode} id={field.nameToCode} type={field.type} className='underline-offset-1' />
        </fieldset>
      ))}
      <fieldset>
        <label htmlFor={'contactMethod'}>Preferred contact method</label>
        <select name='contactMethod' id='contactMethod' >
          <option value='email' className='text-black hover:text-black'>E-mail</option>
          <option value='phone' className='text-black hover:text-black'>Phone</option>
        </select>
      </fieldset>
    </form>
  )
}
