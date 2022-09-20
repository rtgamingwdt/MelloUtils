module.exports = class TextFormat {
    /**
     * Represents black text
     */
    static BLACK = "\x1B[38;5;0m";
    /**
     * Represents dark blue text
     */
    static DARK_BLUE = "\x1B[38;5;19m";
    /**
     * Represents dark green text
     */
    static DARK_GREEN = "\x1B[38;5;34m";
    /**
     * Represents dark aqua text
     */
    static DARK_AQUA = "\x1B[38;5;37m";
    /**
     * Represents dark red text
     */
    static DARK_RED = "\x1B[38;5;124m";
    /**
     * Represents dark purple text
     */
    static DARK_PURPLE = "\x1B[38;127m";
    /**
     * Represents gold text
     */
    static GOLD = "\x1B[38;5;214m";
    /**
     * Represents gray text
     */
    static GRAY = "\x1B[38;5;145m";
    /**
     * Represents dark gray text
     */
    static DARK_GRAY = "\x1B[38;5;240m";
    /**
     * Represents blue text
     */
    static BLUE = "\x1B[38;5;63m";
    /**
     * Represents green text
     */
    static GREEN = "\x1B[38;5;83m";
    /**
     * Represents aqua text
     */
    static AQUA = "\x1B[38;5;80m";
    /**
     * Represents red text
     */
    static RED = "\x1B[38;5;203m";
    /**
     * Represents light purple text
     */
    static LIGHT_PURPLE = "\x1B[38;5;207m";
    /**
     * Represents yellow text
     */
    static YELLOW = "\x1B[38;5;227m";
    /**
     * Represents white text
     */
    static WHITE = "\x1B[38;5;15m";
    /**
     * Represents random characters that are generated randomly
     */
    static RANDOM = TextFormat.getRandomText(null);
    /**
     * Represents bold text.
     */
    static BOLD = "\x1B[1m";
    /**
     * Represents text with a line through it.
     */
    static STRIKETHROUGH = "\x1B[9m";
    /**
     * Represents undelined text.
     */
    static UNDERLINE = "\x1B[4m";
    /**
     * Represents italic text.
     */
    static ITALIC = "\x1B[3m";
    /**
     * Reset the text formatting.
     */
    static RESET = "\x1B[0m";
    /**
     * Immediately followed by 0-9, A-F, a-f, K-O, k-o, R or r.
     * @param altColorChar The alternate color code character to replace. Ex: &
     * @param textToTranslate Text containing the alternate color code character.
     * @returns Text that has been color converted for the terminal.
     */
    static translateAlternateColorCodes = (altColorChar, textToTranslate) => {
      return textToTranslate
        .replaceAll(`${altColorChar}0`, TextFormat.BLACK)
        .replaceAll(`${altColorChar}1`, TextFormat.DARK_BLUE)
        .replaceAll(`${altColorChar}2`, TextFormat.DARK_GREEN)
        .replaceAll(`${altColorChar}3`, TextFormat.DARK_AQUA)
        .replaceAll(`${altColorChar}4`, TextFormat.DARK_RED)
        .replaceAll(`${altColorChar}5`, TextFormat.DARK_PURPLE)
        .replaceAll(`${altColorChar}6`, TextFormat.GOLD)
        .replaceAll(`${altColorChar}7`, TextFormat.GRAY)
        .replaceAll(`${altColorChar}8`, TextFormat.DARK_GRAY)
        .replaceAll(`${altColorChar}9`, TextFormat.BLUE)
        .replaceAll(`${altColorChar}a`, TextFormat.GREEN)
        .replaceAll(`${altColorChar}b`, TextFormat.AQUA)
        .replaceAll(`${altColorChar}c`, TextFormat.RED)
        .replaceAll(`${altColorChar}d`, TextFormat.LIGHT_PURPLE)
        .replaceAll(`${altColorChar}e`, TextFormat.YELLOW)
        .replaceAll(`${altColorChar}f`, TextFormat.WHITE)
        .replaceAll(`${altColorChar}k`, TextFormat.RANDOM)
        .replaceAll(`${altColorChar}l`, TextFormat.BOLD)
        .replaceAll(`${altColorChar}m`, TextFormat.STRIKETHROUGH)
        .replaceAll(`${altColorChar}n`, TextFormat.UNDERLINE)
        .replaceAll(`${altColorChar}o`, TextFormat.ITALIC)
        .replaceAll(`${altColorChar}r`, TextFormat.RESET)
        .concat(TextFormat.RESET);
    };
    /**
     *
     * @param length
     * @returns random text
     */
    static getRandomText(length) {
      if (length == null) length = Math.floor(Math.random() * 30) + 1;
      let result = "";
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }
  }
  