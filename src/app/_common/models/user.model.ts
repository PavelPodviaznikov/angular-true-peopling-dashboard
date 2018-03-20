import ApiUser from '../interfaces/api-user.interface';

export default class User {
  id: string;
  email: string;
  deleted: boolean;
  firstName: string;
  lastName: string;
  photo: string;
  role: string;

  constructor(user: ApiUser) {
    const {
      id,
      email,
      deleted,
      first_name,
      last_name,
      photo,
      role
    } = user;

    this.id = id;
    this.email = email;
    this.deleted = deleted;
    this.firstName = first_name;
    this.lastName = last_name;
    this.photo = photo.url;
    this.role = role;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
