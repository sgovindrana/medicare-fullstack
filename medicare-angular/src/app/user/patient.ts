import { Doctor } from './doctor';

export interface Patient {
    patientId: number;
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
    state: string;
    zip: number;

    valid: boolean;
    doctorList: Doctor;
}