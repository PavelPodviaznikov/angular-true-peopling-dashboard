export default interface ApiUser {
  _id: string,
  email: string,
  deleted: boolean,
  first_name: string,
  last_name: string,
  photo: { url: string },
  role: string
}
