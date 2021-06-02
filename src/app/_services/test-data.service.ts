import { Injectable } from '@angular/core';
import { ShiftSchedule, ShiftScheduleEmp } from '../erp/human-resource/models';

@Injectable({
  providedIn: 'root'
})
export class TestDataService {
  constructor() { }
  public ShiftSchedules() : Array<ShiftSchedule>
  {
    let _data:Array<ShiftSchedule> = new Array<ShiftSchedule>();
    let schedule1 : ShiftSchedule = new ShiftSchedule();
    schedule1.FromDate=new Date(2018,12,24);
    schedule1.ToDate = new Date(2018,12,29);
    schedule1.FullName = "Mr. Aaaron. Pereira";
    schedule1.Department="IT";
    schedule1.Section = "Developement";
    schedule1.Employees = new Array<ShiftScheduleEmp>();
    let rec1:ShiftScheduleEmp = new ShiftScheduleEmp();
    rec1.Date = "24-Dec-2018";
    rec1.FromTimeString="7:00 AM";
    rec1.ToTimeString="3:30 PM";
    rec1.ID = 1;
    rec1.Shift = 1;
    schedule1.Employees.push(rec1);

    let rec2:ShiftScheduleEmp = new ShiftScheduleEmp();
    rec2.Date = "25-Dec-2018";
    rec2.FromTimeString="7:00 AM";
    rec2.ToTimeString="3:30 PM";
    rec2.ID = 2;
    rec2.Shift = 1;
    schedule1.Employees.push(rec2);

    let rec3:ShiftScheduleEmp = new ShiftScheduleEmp();
    rec3.Date = "26-Dec-2018";
    rec3.FromTimeString="7:00 AM";
    rec3.ToTimeString="3:30 PM";
    rec3.ID = 3;
    rec3.Shift = 1;
    schedule1.Employees.push(rec3);

    let rec4:ShiftScheduleEmp = new ShiftScheduleEmp();
    rec4.Date = "27-Dec-2018";
    rec4.FromTimeString="7:00 AM";
    rec4.ToTimeString="3:30 PM";
    rec4.ID = 4;
    rec4.Shift = 1;
    schedule1.Employees.push(rec4);

    let rec5:ShiftScheduleEmp = new ShiftScheduleEmp();
    rec5.Date = "28-Dec-2018";
    rec5.FromTimeString="7:00 AM";
    rec5.ToTimeString="3:30 PM";
    rec5.ID = 5;
    rec5.Shift = 1;
    schedule1.Employees.push(rec5);

    let rec6:ShiftScheduleEmp = new ShiftScheduleEmp();
    rec6.Date = "29-Dec-2018";
    rec6.FromTimeString="7:00 AM";
    rec6.ToTimeString="3:30 PM";
    rec6.ID = 6;
    rec6.Shift = 1;
    schedule1.Employees.push(rec6);

    _data.push(schedule1);

    return _data;
  }
}
