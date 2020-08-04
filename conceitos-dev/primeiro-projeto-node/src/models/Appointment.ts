import { uuid } from 'uuidv4';

class Appointment {
  id: string;

  provider: string;

  date: Date;

  /**
   * Omit informa que iremos receber no parâmetro um objeto do tipo Appointment
   * Com exceção da propriedade id. Que neste caso será gerada automaticamente
   */
  constructor({ provider, date }: Omit<Appointment, 'id'>) {
    this.id = uuid();
    this.provider = provider;
    this.date = date;
  }
}

export default Appointment;
