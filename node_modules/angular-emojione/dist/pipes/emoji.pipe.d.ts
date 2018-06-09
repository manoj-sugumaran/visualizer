import { PipeTransform } from '@angular/core';
import { EmojiService } from '../services/emoji.service';
export declare class EmojiPipe implements PipeTransform {
    emojiService: EmojiService;
    constructor(emojiService: EmojiService);
    transform(text: string): string;
}
