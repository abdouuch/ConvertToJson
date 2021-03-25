import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ConverterToJson';

  // name = "Angular " + VERSION.major;
  convertedObj:any = "";



  convert(objArray) {
    console.log(objArray);
    this.convertedObj = JSON.stringify(objArray, null, 2);
  }
  onError(err) {
    this.convertedObj = err
    console.log(err);
  }
}
