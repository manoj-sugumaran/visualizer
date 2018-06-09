export declare class EmojiService {
    constructor();
    /**
     * Convert a shortname, like :thumbsup:, to an EmojiOne image.
     *
     * @param {string} shortname
     * @returns {string} <img> tag
     *
     * @memberOf EmojiService
     */
    shortnameToImage(shortname: string): string;
    /**
     * Convert a native unicode emoji to a shortname
     *
     * @param {string} unicode
     * @returns {string} <img> tag
     *
     * @memberOf EmojiService
     */
    unicodeToShortname(unicode: string): string;
    /**
     * Convert a native unicode emoji to an EmojiOne image
     *
     * @param {string} unicode
     * @returns {string} <img> tag
     *
     * @memberOf EmojiService
     */
    unicodeToImage(unicode: string): string;
    /**
     * Replace shortcodes and/or native emoji in a blob of text to EmojiOne images
     *
     * @param {string} text
     * @returns {string} text with EmojiOne images
     *
     * @memberOf EmojiService
     */
    convertText(text: string): string;
}
