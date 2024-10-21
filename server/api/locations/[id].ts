import db from '../../../db.json'

export default defineEventHandler((event) => {
  setHeader(event, 'Access-Control-Allow-Origin', 'https://mapirelli-angular-real-estate.netlify.app')
  const id = getRouterParam(event, 'id')
  if (id) {
    return db.locations.find(location => location.id === Number(id))
  }
  return null
})
