
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
  isEditing: boolean,
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  initialValues: FormValues;
  setiInitialValues:React.Dispatch<React.SetStateAction<FormValues>>;
  idEditAppointment: string,
  setIdEditAppointment: React.Dispatch<React.SetStateAction<string>>;
}

export interface doctorInfo {
  name:string;
  lastname:string;
  id?:string;
}

export interface userInfo {
  name:string;
  lastname:string;
}
export interface specialtyInfo {
  specialty:string;
  id?:string;
}

export interface Specialty {
  id: string;
  specialty:string;
}


export interface FormValues {
  dateAppointment: string;
  timeAppointment: string;
  specialty:string | undefined;
  doctor:string | undefined;
}

export interface SubmitFunction {
  (values: FormValues): Promise<void>;
}
export interface AppointmentForm {
  handleSubmit: SubmitFunction;
}
