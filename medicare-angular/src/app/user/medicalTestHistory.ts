import { Doctor } from './doctor';
import { Patient } from './patient';

export interface MedicalTestHistory {
    id: number;
    patientId: string;
    doctorId: string;
    medicalServiceId : number;
    agentId : string;
    serviceDate : string;
    testResultDate : string;
    diag1Av : string;
    diag1Nr : string;
    diag2Av : string;
    diag2Nr : string;
    diag3Av : string;
    diag3Nr : string;
    doctorComments : string;
    otherInfo : string;
    reqDoctorId : Doctor;
    reqPatientId : Patient;
    status : boolean;
}