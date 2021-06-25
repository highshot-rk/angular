import { Component, OnInit, ViewChild } from '@angular/core';
import { TransactionDataService } from '../transaction-data.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class MainComponent implements OnInit {

  public parentList: Array<any> = [];
  public pages: Array<any> = [1,2,3];
  public totalPage: Array<number> = [];
  public currentPage: number = 0;


  constructor(private transactionDataService: TransactionDataService, config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
    this.changePageHandler(1);
  }

  ngOnInit(): void {
    this.parentList.sort((a, b) => (a - b));
  }
  order(): void {
    this.parentList.reverse();
  }
  changePageHandler(page: number):void {
    this.transactionDataService.getJsonData(page).subscribe((data: any) => {
      this.parentList = data.result;
      let totalPage = data.totalPage;
      this.totalPage = [];
      for (let i = 0; i < totalPage; i ++) {
        this.totalPage.push(i + 1);
      }
      this.currentPage = data.currentPage;
    })
  }
  previousPage(): void {
    if (this.currentPage == 1) {
      return
    }
    this.changePageHandler(+this.currentPage - 1);
  }
  nextPage(): void {
    if (this.currentPage == this.totalPage[this.totalPage.length - 1]) {
      return
    }
    this.changePageHandler(+this.currentPage + 1);
  }
}
