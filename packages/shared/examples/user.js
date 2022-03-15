import mongoose from 'mongoose'
import User from '../models/user'

const { ObjectId } = mongoose.Schema

const user = new User({
  _id: ObjectId('622524b42dbfa0665c71fe8c'),
  username: 'Marek Kowalski',
  passwordHash: 'pass123hash1',
  avatarId: 23,
  dashboards: [
    {
      _id: ObjectId('622524b42dbfa0665c71fe12'),
      imageCoverId: 'photo-1640622842924-fb0017b9d786',
      title: 'New board 1',
      role: 'ADMIN',
      users: [
        {
          _id: ObjectId('622524b42dbfa0665c71fe9z'),
          avatarId: 23
        }
      ]
    },
    {
      _id: ObjectId('62252cb42dbfa0665c71fe3c'),
      imageCoverId: 'photo-1640622842924-fb0017b9d788',
      title: 'New board 2'
    }
  ]
})

const user2 = new User({
  _id: ObjectId('622524b42dbfa0665c71fe9z'),
  username: 'Jan Przykładowy',
  passwordHash: 'pass123hash',
  avatarId: 2,
  dashboards: [
    {
      _id: ObjectId('622524b42dbfa0665c71fe9z'),
      imageCoverId: 'photo-1640622842924-fb0017b9d786',
      title: 'New board 1',
      role: 'MEMBER',
      users: [
        {
          _id: ObjectId('622524b42dbfa0665c71fe8c'),
          avatarId: 414
        }
      ]
    }
  ]
})

const user3 = new User({
  _id: ObjectId('622524b42dbfa0665c71feab'),
  username: 'Elżbieta Druga',
  passwordHash: 'pass123hash3',
  avatarId: 233,
  dashboards: [
    {
      _id: ObjectId('622524b42dbfa0665c71feab'),
      imageCoverId: 'photo-1640622842924-fb0017b9d723',
      title: 'New board 4',
      role: 'VIEWER',
      users: [
        {
          _id: ObjectId('622524b42dbfa0665c71fe9z'),
          avatarId: 23
        },
        {
          _id: ObjectId('622524b42dbfa0665c71fe8c'),
          avatarId: 2
        }
      ]
    }
  ]
})
