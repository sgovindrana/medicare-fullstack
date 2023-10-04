import { Component, OnInit } from '@angular/core';

import { MedicareServices } from 'src/app/services/medicare.service';
import { Doctor } from 'src/app/user/doctor';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchKey: string;
  itemList: Doctor[];
  filteredItemList: Doctor[];
  isAdmin: boolean;

  constructor(private medicareService: MedicareServices) { }

  ngOnInit() {

    this.medicareService.getAllDoctorService().subscribe(data => {
      this.itemList = data;
    });
    this.filteredItemList = this.itemList;
  }

  search() {
    this.filteredItemList = this.itemList.filter(item => item.medicareService.medicareService.toLocaleLowerCase().includes(this.searchKey.toLocaleLowerCase()));
    this.medicareService.getSubject().next(this.filteredItemList);
  }


}
