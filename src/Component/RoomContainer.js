import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import {withRoomsConsumer} from'../Context'
import Loading from './Loading'

const RoomContainer = (context) => {
    
    const {loading,sortedRooms,rooms} = context.context
    if(loading){
         return <Loading/>
               }
        return(
           <>
            <RoomsFilter rooms={rooms}/>
            <RoomsList rooms={sortedRooms}/>
        </>
                )
                }





export default withRoomsConsumer(RoomContainer)


// import React from 'react'
// import RoomsFilter from './RoomsFilter'
// import RoomsList from './RoomsList'
// import {RoomConsumer} from'../Context'
// import Loading from './Loading'

// const RoomContainer = () => {
//     return (
//         <RoomConsumer>
//             {value=>{
//                 const {loading,sortedRooms,rooms} = value
//                 if(loading){
//                     return <Loading/>
//                 }
//                 return(
//                 <div>
//                      hello from room container
//                      <RoomsFilter rooms={rooms}/>
//                      <RoomsList rooms={sortedRooms}/>
//                 </div>
//                 )
//             }}
//         </RoomConsumer>
        
//     )
// }

// export default RoomContainer
