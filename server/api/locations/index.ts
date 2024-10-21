import db from '../../../db.json'

export default defineEventHandler((event) => {
  return db.locations
})
