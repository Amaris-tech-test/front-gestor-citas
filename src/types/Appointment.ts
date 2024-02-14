
export declare interface AppointmentItem {
  id: string;
  appointmentDate: string;
  status?: string;
  doctor: doctorInfo;
  user: userInfo;
  specialty: specialtyInfo;
}

export interface AppointmentContextType {
  listAppointment: AppointmentItem[];
  setListAppointment: React.Dispatch<React.SetStateAction<AppointmentItem[]>>;
  appointmentSelected: AppointmentItem;
  setAppointmentSelected: React.Dispatch<React.SetStateAction<AppointmentItem | undefined>>;
  listSpecialties: Specialty[],
  setListSpecialities:React.Dispatch<React.SetStateAction<Specialty[]>>;
}

export interface doctorInfo {
  name:string;
  lastname:string;
}

export interface userInfo {
  name:string;
  lastname:string;
}
export interface specialtyInfo {
  specialty:string;
}

export interface Specialty {
  id: string;
  specialty:string;
}


export interface FormValues {
  dateAppointment: string;
  timeAppointment: string;
  specialty:string;
  doctor:string
}

export interface SubmitFunction {
  (values: FormValues): Promise<void>;
}
export interface AppointmentForm {
  handleSubmit: SubmitFunction;
}
