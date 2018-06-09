import { OnInit } from '@angular/core';
import { EmojiService } from '../services/emoji.service';
export declare class EmojiComponent implements OnInit {
    emojiService: EmojiService;
    shortname: string;
    image: string;
    constructor(emojiService: EmojiService);
    ngOnInit(): void;
}
