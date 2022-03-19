db.createUser({
  user: 'admin',
  pwd: 'pass',
  roles: [
    {
      role: 'dbOwner',
      db: 'trello-clone'
    }
  ]
})
