import React from 'react'
import {useContext} from "react"
import {RoomContext} from '../Context'
import Title from '../Component/Title'
import classes from '../App.module.css'

//get all unique values
const getUnique=(item,value)=>{
    return [...new Set(item.map(item => item[value]))]
}
const RoomsFilter = ({rooms}) => {
    const context = useContext(RoomContext)
    const{handleChange,type,capacity,price,minPrice,maxPrice,minSize,
    maxSize,breakfast,pets,}=context

    //get Unique
    let types= getUnique(rooms,"type");
    // add all
     types =["all",...types];
     //map that jsx
     types= types.map((item,index)=>{
         
         return <option value={item} key={index}>{item}</option>
     })

     let people= getUnique(rooms,"capacity")
     people= people.map((item,index)=>{
         return <option value={item} key={index}>{item}</option>
     })

    return (
      <section className={classes.filtercontainer}>
          <Title title="Search rooms"/>
          <form className={classes.filterform}>
              {/* select type */}
              <div className={classes.formgroup}>
                  <label htmlFor="type">room type</label>
                  <select name="type" id="type" value={type} className={classes.formcontrol}
                  onChange={handleChange}>
                      {types}
                  </select>
              </div>

              {/* end select type */}
               {/*guests */}
               <div className={classes.formgroup}>
                  <label htmlFor="capacity">Guests</label>
                  <select name="capacity" id="capacity" value={capacity} className={classes.formcontrol}
                  onChange={handleChange}>
                      {people}
                  </select>
              </div>

              {/* end select type */}
              {/* room price */}
               <div className={classes.formgroup}>
               <label htmlFor="price">room price Rs{price}</label>
               <input type="range" name="price" min={minPrice} max={maxPrice}
               id="price" value={price} onChange={handleChange} 
               className={classes.formcontrol}/>
               </div>

              {/* end of room price */}
              {/* size of room */}
              <div className={classes.formgroup}>
             <label htmlFor="size">room size</label>
             <div className={classes.sizeinputs}>
                 <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange}
                 className={classes.sizeinput}/> 
                  <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange}
                 className={classes.sizeinput}/> 
             </div>
             </div>
             
              {/* end of size room */}
              {/* extras */}
              <div className={classes.formgroup}>
                  <div className={classes.singleextra}>
                      <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast}
                      onChange={handleChange} className={classes.sizeinput}/>
                      <label htmlFor="breakfast">breakfast</label>
                      <input type="checkbox" name="pets" id="pets" checked={pets}
                      onChange={handleChange} className={classes.sizeinput}/>
                      <label htmlFor="pets">pets</label>
                  </div>
              </div>
              {/* end of extras */}
          </form>
      </section>
    )
}

export default RoomsFilter
