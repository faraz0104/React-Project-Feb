import React from 'react'

function SearchBar({
    value,
    loading,
    handleSubmit,
    onChange
}) {
  return (
    <div>
           < form onSubmit= {handleSubmit}>
               <input 
               className='form-control'
               disabled={loading}
               onChange={onChange}
               value={value}                
               placeholder="Search Recipe"
               />
               <input className='btn' 
               value="Search"
               disabled={loading || !value}
                type="submit"/>
           </form>
    </div>
  )
}

export default SearchBar