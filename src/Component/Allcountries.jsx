import React from 'react'
import Individual from './Individual'
const Allcountries = (props) => {
    //console.log("in the allcountries path",props.data[0]);
    if(props.data.length===0) {
        return <h1 className='md:text-5xl text-center font-semibold text-lighttext dark:text-darktext'>No country found..!</h1>
    }
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10'>
        {
            props.data.map(element=>(
                <Individual key={element.name.common} country={element}/>   
            )) 
        }
    </div>
  )
}

export default Allcountries