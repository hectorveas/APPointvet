export interface Specialist {
  _id?: string
  veterinary?: String,
  firstName?: String,
  lastName?: String,
  specialties?: String[],
  rut?: String,
  phone?: String,
  mail?: String,
  password?: String,
  role: String // 'specialist'
};