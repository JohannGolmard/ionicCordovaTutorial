import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-gps',
  templateUrl: './gps.component.html',
  styleUrls: ['./gps.component.scss'],
})
export class GpsComponent implements OnInit {

  private latitude: any;
  private longitude: any;

  constructor(private geolocation: Geolocation, private platform: Platform) {
    this.platform.ready().then(() => {
      this.refresh();
    });
  }

  ngOnInit() {}
  refresh(){
    var option = { enableHighAccuracy: true};
    this.geolocation.getCurrentPosition(option).then(data=>{
      this.longitude = data.coords.longitude;
      this.latitude = data.coords.latitude;
    }).catch((error) => {
      console.log("Error location : ",error);
    });
  }
}
