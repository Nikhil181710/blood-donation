
export enum Page {
  Home,
  Find,
  Register,
  Eligibility
}

export interface Donor {
  id: string;
  bloodType: string;
  location: string;
  availability: string;
}

export const bloodTypes: string[] = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
