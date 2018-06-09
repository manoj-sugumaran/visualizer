import { Directive,OnInit,ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[decode]'
})
export class HtmlDirective {

    @Input('str') str: string ;
    constructor(private eRef : ElementRef) { 
    }


  ngOnInit(){

    console.log('"'+this.str+'"');
    this.eRef.nativeElement.innerHTML = decodeURIComponent(('"'+this.str+'"'));
  }

}
