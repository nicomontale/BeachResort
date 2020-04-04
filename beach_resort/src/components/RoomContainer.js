/*import React from 'react'
import RoomList from './RoomList'
import RoomFilter from './RoomFilter'
import { withRoomConsumer } from '../context';

import Loading from './Loading';
function RoomContainer({ context }) {
    
    const { Loading, sortedRooms, rooms } = context;
    console.log(rooms);
    return (
        <div>
            hello
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />

        </div>

    )

}

export default withRoomConsumer(RoomContainer); */


import React from 'react'
import RoomList from './RoomList'
import RoomFilter from './RoomFilter'
import { RoomConsumer } from '../context';

import Loading from './Loading';
export default function RoomContainer() {
    return (
        <RoomConsumer>

            {
                value => {
                    const { Loading, sortedRomm, rooms } = value;

                    return (
                        <div>

                            <RoomFilter rooms={rooms} />
                            <RoomList rooms={sortedRomm} />

                        </div>

                    )

                }


            }


        </RoomConsumer>




    )
}

