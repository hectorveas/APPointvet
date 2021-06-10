export interface PetOwner {
  _id?: string;
  firstName?: String,
  lastName?: String,
  phone?: String,
  rut?: String,
  mail?: String,
  address?: String,
  passWord?: String,
  pets?: String[],
  veterinaries?: String[],
  role: String // 'petOwner'
};