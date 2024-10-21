import db from '../../../db.json'

export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id')
  if (id) {
    return db.locations.find(location => location.id === Number(id))
  }
  return null
})
