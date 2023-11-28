export interface MedicationType {
    medId: number;
    medNome: string;
    medForma: string;
    medQuantidade: number;
    medDataInicio: string;
    medDataFim: string;
    medPerId: number;
    times: TimeType[];
  }
  
  export interface TimeType {
    horId: number;
    horMedId: number;
    horUsuId: number;
    horPerId: number;
    horario: string;
    created_at: string;
    updated_at: string;
  }
  