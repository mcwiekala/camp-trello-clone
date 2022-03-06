import mongoose from 'mongoose'
import User from '../models/user'

const { ObjectId } = mongoose.Schema

const user = new User({
  _id: ObjectId('622524b42dbfa0665c71fe8c'),
  username: 'Marek Kowalski',
  passwordHash: 'pass123hash',
  avatarId: 23,
  dashboards: [
    {
      _id: ObjectId('622524b42dbfa0665c71fe9z'),
      imageCoverId: 'photo-1640622842924-fb0017b9d786',
      title: 'New board 1'
    },
    {
      _id: ObjectId('62252cb42dbfa0665c71fe3c'),
      imageCoverId: 'photo-1640622842924-fb0017b9d788',
      title: 'New board 2'
    }
  ],
  users: [
    {
      id: '2',
      avatarId: 44
    }
  ]
})
