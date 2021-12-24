import React from 'react';
// import RoomsFilter from '../components/RoomsFilter';
// import RoomsList from '../components/RoomsList';
import { withRoomConsumer } from '../../store/context';
import CustomLoading from '../../components/CustomLoading';
import { RoomsObject } from '../../Types/Types';


// Use Context in functional component with HOC
const RoomsContainer = ({context}:IPropsRoomsContainer) => {

    const {loading, rooms, sortedRooms} = context;
    console.log("context", context);

    if (loading) {
        return <CustomLoading />
    }
    return (
        <React.Fragment>
            {/* <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms}/>  */}
        </React.Fragment>
    );
}

export default withRoomConsumer(RoomsContainer);


// // Use Context in functional component without HOC (Normal)

// import { RoomConsumer } from '../store/context';

// const RoomsContainer: React.FC = () => {


// return (
// <RoomConsumer>
//     {(value: IRoomContext | null) => {
//     if (value) {
//         const {loading, rooms, sortedRooms} = value;

//         if (loading) {
//             return <Loading />
//         }
//         return (
//             <div>
//                 Hello from rooms cont
//                 <RoomsFilter rooms={rooms} />
//                 <RoomsList rooms={sortedRooms}/> 
//             </div>
//         );
//     } else {
//         return <Loading />
//     }
// }}
// </RoomConsumer>
// )
// }

// export default RoomsContainer;
