import db from '../../../db.json'

export default defineEventHandler((event) => {
  setHeader(event, 'Access-Control-Allow-Origin', 'https://mapirelli-angular-real-estate.netlify.app')
  return db.locations
})
