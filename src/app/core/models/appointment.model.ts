export interface Appointment {
  // Citas
  _id?: String,
  firstNameOwner?: String,
  lastNameOwner?: String,
  firstName?: String,
  lastName?: String,
  description?: String,
  date?: Date,
  status?: Number,
  // 1: Realizada(Done) | 2: Pendiente(Earring) | 3: Reciente(Recent) | 4: Cancelada(Cancelled)
  cancellationMotive?: String,
  responsable?: String,
  createdAt?: Date,
};