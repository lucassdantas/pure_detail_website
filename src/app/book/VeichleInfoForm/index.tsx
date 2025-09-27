import React from 'react'

export const VehicleInfoForm = () => {

  const fields = [
    {
      showNestedOptions:false, name:'Interior Detail', nameToCode:'interiorDetail', placeholder:'', type:'checkbox', options:[], 
      nestedOptions:[
        {name:'Ae there any big/serious stains that need removing?', options:['Yes', 'No'], type:'select'},
        {name:'Does your vehicle have pet hair?', options:['Yes', 'No'], type:'select'}
      ]
    },
    {
      showNestedOptions:false, name:'Exterior Detail', nameToCode:'exteriorDetail', placeholder:'', type:'checkbox', options:[], 
      nestedOptions:[
        {name:'Condition', options:["Light dirty", 'Average', 'Heavy Dirt'], type:'select'}
      ]
    },
    {
      showNestedOptions:false, name:'Full Detail', nameToCode:'fullDetail', placeholder:'', type:'checkbox', options:[], 
      nestedOptions:[
        {name:'Condition', options:["Light dirty", 'Average', 'Heavy Dirt'], type:'select'},
        {name:'Are there any big/serious stains that need removing?', options:["Yes", 'No'], type:'select'},
        {name:'Does your vehicle have pet hair', options:["Yes", 'No'], type:'select'},
      ]
    },
    {
      showNestedOptions:false, name:'Headlight Restoration', nameToCode:'headlightRestoration', placeholder:'', type:'checkbox', options:[], 
      nestedOptions:[
        {name:'Are there any cracks in your headlights', options:["Yes", 'No'], type:'select'},
      ]
    },
    {
      showNestedOptions:false, name:'Plastic Restoration', nameToCode:'plasticRestoration', placeholder:'', type:'checkbox', options:[], nestedOptions:[]
    },
    {
      showNestedOptions:false, name:'Car Polish', nameToCode:'carPolish', placeholder:'', type:'checkbox', options:[], 
      nestedOptions:[
        {name:'Condition of paint', options:["Light Scratches", 'Medium scratches', 'Heavy scratches'], type:'select'},
      ]
    },
    {
      showNestedOptions:false, name:'Glass Polish', nameToCode:'glassPolish', placeholder:'', type:'checkbox', options:[], 
      nestedOptions:[
        {name:'Are there any crack in the glass?', options:["Yes", "No"], type:'select'},
      ]
    },
    {
      showNestedOptions:false, name:'Rims Renovation', nameToCode:'rimsRenovation', placeholder:'', type:'checkbox', options:[], 
      nestedOptions:[
        {name:'Condition of rims', options:["Lightly Scratched", 'Medium scratches', 'Heavily scratched/damaged'], type:'select'},
      ]
    },
    {
      showNestedOptions:false, name:'Engine Bay Clean', nameToCode:'rimsRenovation', placeholder:'', type:'checkbox', options:[], 
      nestedOptions:[]
    },
    {
      showNestedOptions:false, name:'Ceramic Coating', nameToCode:'ceramicCoating', placeholder:'', type:'checkbox', options:[], 
      nestedOptions:[]
    },
    {
      showNestedOptions:false, name:'Vinyl Wrap', nameToCode:'vinylWrap', placeholder:'', type:'checkbox', options:[], 
      nestedOptions:[
        {name:'What are you looking for?', type:'text', placeholder:'e.g. full car wrap, roof wrap, bonnet wrap', options:[]}
      ]
    },

    

  ]
  return (
    <form>
      <fieldset >
        <label htmlFor={'Vehicle'} className='text-lg'>Vehicle: </label>
        <input  placeholder="Make, Model "/>
      </fieldset>
      <h3>Services Selection</h3>
      {fields.map(field => (
        <fieldset key={field.nameToCode}>
          <input name={field.nameToCode} id={field.nameToCode} type={field.type} placeholder={field.name} className='underline-offset-1' />
          <label htmlFor={field.nameToCode} className='text-lg'>{field.name} </label>
          {field.showNestedOptions && ''}
        </fieldset>
      ))}
      <fieldset>
        <label htmlFor={'optionalUpload'}>Upload photos (optional)</label>
        <input name='optionalUpload' id='optionalUpload' />
      </fieldset>
    </form>
  )
}
