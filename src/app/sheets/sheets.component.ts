

import { Component, OnInit, NgZone } from '@angular/core';

import * as $ from 'jQuery';


@Component({
  selector: 'app-sheets',
  templateUrl: './sheets.component.html',
  styleUrls: ['./sheets.component.css']
})

export class SheetsComponent implements OnInit {

  constructor(private zone: NgZone) { }

  public ngOnInit() {
    this.zone.runOutsideAngular(() => {

      $(document).ready(function() {
        $('#btn').click(function() {

          window['$']('#getSheet').jexcel({
            csv: 'http://textile-eds.co.uk/WayFair/amazon.csv',
              // Use the first row of your CSV as the headers
              csvHeaders: true,
              // Headers
              colWidths: [70, 200, 300],
          });

          console.log('clicked');
        });
      });
    });

  }




}
