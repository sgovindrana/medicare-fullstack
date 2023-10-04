import { MedicareService } from '../medicare/medicareItem';

export interface Doctor {
    doctorId: number;
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    dateOfBirth: string;
    contact: number;
    altContact: number;
    email: string;
    password: string;
    address1: string;
    address2: string;
    city: string;
    zip: number;
    degree: string;
    speciality: string;
    workhours: number;
    hospitalName: string;
    medicareServiceId: number;

    medicareService: MedicareService;
    status : boolean;
}