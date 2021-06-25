import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { TransactionDataService } from '../transaction-data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  public selectedParent: any = {};
  public selectedChildArr: Array<any> = [];
  constructor(private $route: ActivatedRoute, private transactionDataService: TransactionDataService) { }

  ngOnInit(): void {
    //get Id from parameter
    this.$route.params.forEach(param =>
      this.transactionDataService.getChildJsonData(param.id).subscribe((data: any) => {
        this.selectedParent = data.result.parent[0];
        this.selectedChildArr = data.result.childArr;
      })
    );
  }

  order(): void {
    this.selectedChildArr.reverse();
  }
}
