import { UserProps } from 'context/UserContext';
import { database } from './firebase';

export type RoomProps = {
  id?: string;
  name: string;
  users: Array<UserProps>;
};

export const exitsRoom = async (boardId: string) => {
  try {
    const snapshot = await database.ref().child('room').child(boardId).get();

    if (snapshot.exists()) {
      return snapshot.val();
    }
    return snapshot.exists();
  } catch (error) {
    console.error(error);
  }
  return false;
};

export const updateRoom = async (currentRoom: RoomProps, room: RoomProps) => {
  Object.keys(room).map((key: string) => {
    if (typeof room[key] === 'object') {
    
  });

  database.ref(`room/${currentRoom.id}/name`).set(room.name);
  database.ref(`room/${currentRoom.id}/users`).set(room.users);
};

export const createRoom = async (room: RoomProps, roomId?: string) => {
  let newRoomId = roomId;
  newRoomId = database.ref('room').push().key || '';

  if (roomId) {
    const existingRoom = await exitsRoom(roomId);
    updateRoom(existingRoom, room);
    return;
  }
  newRoomId = database.ref('room').push().key || '';

  // try {
  //   const snapshot = await database.ref().child('room').child(newRoomId).get();

  //   if (snapshot.exists()) {
  //     console.log('snapshot.val()', snapshot.val());
  //   }
  // } catch (error) {
  //   console.error(error);
  // }

  try {
    database.ref(`room/${newRoomId}/name`).set(room.name);
    database.ref(`room/${newRoomId}/users`).set(room.users);
  } catch (error) {
    console.error(error);
  }
};
