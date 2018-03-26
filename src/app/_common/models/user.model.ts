import ApiUser from '../interfaces/api-user.interface';
import roles from '../enums/roles';

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
      _id,
      email,
      deleted,
      first_name,
      last_name,
      photo,
      role
    } = user;

    this.id = _id;
    this.email = email;
    this.deleted = !!deleted;
    this.firstName = first_name;
    this.lastName = last_name;
    this.photo = photo ? photo.url : null;
    this.role = role;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get roleText() {
    return roles[this.role];
  }

  update(user: ApiUser) {
    this.firstName = user.first_name;
    this.lastName = user.last_name;
    this.email = user.email;
    this.role = user.role;
  }

  static toApiModel(user) {
    return {
      _id: user.id,
      email: user.email,
      deleted: user.deleted,
      first_name: user.firstName,
      last_name: user.lastName,
      role: user.role
    }
  }

  static defaultUser() {
    return new User({
      _id: null,
      email: '',
      first_name: '',
      last_name: '',
      photo: null,
      deleted: false,
      role: 'regular_user'
    });
  }
}
