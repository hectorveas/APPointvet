export interface Appointment {
  // Citas
  _id?: String,
  pacient?: String,
  createdAt?: Date,
  date?: Date,
  description?: String,
  status?: Number,
  // 1: Realizada(Done) | 2: Pendiente(Earring) | 3: Reciente(Recent) | 4: Cancelada(Cancelled)
  cancellationMotive?: String,
  responsable?: String,
};