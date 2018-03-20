export default interface ApiUser {
  id: string,
  email: string,
  deleted: boolean,
  first_name: string,
  last_name: string,
  photo: { url: string },
  role: string
}
