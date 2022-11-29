import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-entry',
  templateUrl: './patient-entry.component.html',
  styleUrls: ['./patient-entry.component.css']
})
export class PatientEntryComponent {
name=""
patientid=""
address=""
contactNumber=""
dateOfAppointment=""
patientPhoto=""
doctorName=""

readValues=()=>{
  let data:any={
    "name":this.name,
    "patientid":this.patientid,
    "address":this.address,
    "contactNumber":this.contactNumber,
    "dateOfAppointment":this.dateOfAppointment,
    "patientPhoto":this.patientPhoto,
    "doctorName":this.doctorName
  }
  console.log(data)
}
}
