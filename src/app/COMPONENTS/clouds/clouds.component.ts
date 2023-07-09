import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-clouds',
  templateUrl: './clouds.component.html',
  styleUrls: ['./clouds.component.css']
})
export class CloudsComponent {
  @ViewChild('world') world!:ElementRef
  @ViewChild('viewport') viewport!:ElementRef

  objects:any[] = []
  layers:any[] = [];

  ngAfterViewInit(){
    this.generate()
  }

  generate() {
    this.objects = [];
    this.layers = [];
    if ( this.world.nativeElement.hasChildNodes() ) {
      while ( this.world.nativeElement.childNodes.length >= 1 ) {
        this.world.nativeElement.removeChild( this.world.nativeElement.firstChild );
      }
    }

    for( var j = 0; j < 5; j++ ) {
      this.objects.push( this.createCloud() );
    }
  }


  createCloud() {
    const div = document.createElement( 'div'  );
    div.className = 'cloudBase';
    let random_x = Math.random() * 70
    let random_y = Math.random() * 70
    let random_z = Math.random() * 70
    let random_a = Math.random() * 70
    let random_s = Math.random() * 70
    let t = 'translateX( ' + random_x + 'px ) \
      translateY( ' + random_y + 'px ) \
      translateZ( ' + random_z + 'px )';
    div.style.transform = t;
    this.world.nativeElement.appendChild( div );
    for( var j = 0; j < 5 + Math.round( Math.random() * 10 ); j++ ) {
      let cloud:any = document.createElement( 'div' );
      cloud.className = 'cloudLayer';
      cloud.data = {
        x: random_x,
        y: random_y,
        z: random_z,
        a: random_a,
        s: random_s
      };
      let t = 'translateX( ' + random_x + 'px ) \
        translateY( ' + random_y + 'px ) \
        translateZ( ' + random_z + 'px ) \
        rotateZ( ' + random_a + 'deg ) \
        scale( ' + random_s + ' )';
      cloud.style.transform = t;

      div.appendChild( cloud );
      this.layers.push( cloud );
    }

    return div;
  }

}
