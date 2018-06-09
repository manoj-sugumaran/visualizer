import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Howl ,Howler } from 'howler';
import { RestApiService } from '../rest.api.service';
import { EmojiService } from 'angular-emojione';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../environments/environment';
declare var $:any;
@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class PlayComponent implements OnInit {
  modalReferenceTeaser: any;
  modalReferenceTrivia: any;

  artworkurl;
  content ;
  constructor(private rest: RestApiService, public emojiService: EmojiService, private modalService: NgbModal) { }
  sound = null;
  madeurl : any;
  trivia ;
  public options: Object = {
    height: 300
  }

  ngOnInit() {
    $.getScript('./assets/js/emojionearea.min.js', function(){});
    this.artworkurl = environment.artworkUrl;
    this.content = this.rest.getContentObject();
    if(this.content.song_trivia!=null)
      this.trivia = this.content.song_trivia;
    this.rest.getMadeUrl(this.content.content_url_rt).subscribe(
  		(data: any) => {
        this.madeurl  = data;
        this.sound =  new Howl({
          src: [this.madeurl]
        });
  		},
  		(error) => console.log(error)
      )
  }	

  play(){
    if(this.sound!=null)
      if(!this.sound.playing()){
        this.sound.play();
      }
  }
  
  pause(){
    if(this.sound!=null)
      if(this.sound.playing())
        this.sound.pause();
  }

  display(){
    if(this.content.song_teaser!=null && this.content.song_teaser!='' )
      return true;
    return false;
  }

  ngOnDestroy(){
    if(this.sound!=null)
    this.sound.unload();
  }

  openTeaser(teaserModal){
    this.modalReferenceTeaser = this.modalService.open(teaserModal, { size: 'lg' });
    let el = $("#emojionearea1").emojioneArea({pickerPosition: "bottom",
        filtersPosition: "bottom",
        tonesStyle: false});
    let s: string = this.content.song_teaser;
    el[0].emojioneArea.setText(s);
  }

  openTrivia(triviaModal){
    this.modalReferenceTrivia = this.modalService.open(triviaModal, { size: 'lg' });
  }

  saveTrivia(){

    this.content.song_trivia = this.trivia;
    let updatedContent = { "contentid" : this.content.contentid ,
        "trivia" : this.content.song_trivia ,
        "teaser" : this.content.song_teaser
      }
    this.rest.updateContent(updatedContent)
              .subscribe(response => console.log(response),
              err => console.log(err));
    this.modalReferenceTrivia.close();

  }

  saveTeaser(){
    
    let el = $("#emojionearea1").emojioneArea({});
    this.content.song_teaser = this.emojiService.unicodeToShortname(el[0].emojioneArea.getText());
    // this.content.song_teaser = el[0].emojioneArea.getText();

    let updatedContent = { "contentid" : this.content.contentid ,
        "trivia" : this.content.song_trivia ,
        "teaser" : this.content.song_teaser
      }
    this.rest.updateContent(updatedContent)
              .subscribe(response => console.log(response),
              err => console.log(err));
    this.modalReferenceTeaser.close();
  }

}