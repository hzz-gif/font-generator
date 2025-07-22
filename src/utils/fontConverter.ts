// 基础字体转换工具
// 只包含最常用的几种字体样式

interface FontStyle {
  name: string;
  category: string;
  convert: (text: string) => string;
}

// 基础字符映射 - 只包含英文字母和数字
const basicMappings = {
  // Bold 粗体
  bold: {
    'a': '𝐚', 'b': '𝐛', 'c': '𝐜', 'd': '𝐝', 'e': '𝐞', 'f': '𝐟', 'g': '𝐠', 'h': '𝐡', 'i': '𝐢', 'j': '𝐣',
    'k': '𝐤', 'l': '𝐥', 'm': '𝐦', 'n': '𝐧', 'o': '𝐨', 'p': '𝐩', 'q': '𝐪', 'r': '𝐫', 's': '𝐬', 't': '𝐭',
    'u': '𝐮', 'v': '𝐯', 'w': '𝐰', 'x': '𝐱', 'y': '𝐲', 'z': '𝐳',
    'A': '𝐀', 'B': '𝐁', 'C': '𝐂', 'D': '𝐃', 'E': '𝐄', 'F': '𝐅', 'G': '𝐆', 'H': '𝐇', 'I': '𝐈', 'J': '𝐉',
    'K': '𝐊', 'L': '𝐋', 'M': '𝐌', 'N': '𝐍', 'O': '𝐎', 'P': '𝐏', 'Q': '𝐐', 'R': '𝐑', 'S': '𝐒', 'T': '𝐓',
    'U': '𝐔', 'V': '𝐕', 'W': '𝐖', 'X': '𝐗', 'Y': '𝐘', 'Z': '𝐙',
    '0': '𝟎', '1': '𝟏', '2': '𝟐', '3': '𝟑', '4': '𝟒', '5': '𝟓', '6': '𝟔', '7': '𝟕', '8': '𝟖', '9': '𝟗'
  },
  
  // Italic 斜体
  italic: {
    'a': '𝑎', 'b': '𝑏', 'c': '𝑐', 'd': '𝑑', 'e': '𝑒', 'f': '𝑓', 'g': '𝑔', 'h': 'ℎ', 'i': '𝑖', 'j': '𝑗',
    'k': '𝑘', 'l': '𝑙', 'm': '𝑚', 'n': '𝑛', 'o': '𝑜', 'p': '𝑝', 'q': '𝑞', 'r': '𝑟', 's': '𝑠', 't': '𝑡',
    'u': '𝑢', 'v': '𝑣', 'w': '𝑤', 'x': '𝑥', 'y': '𝑦', 'z': '𝑧',
    'A': '𝐴', 'B': '𝐵', 'C': '𝐶', 'D': '𝐷', 'E': '𝐸', 'F': '𝐹', 'G': '𝐺', 'H': '𝐻', 'I': '𝐼', 'J': '𝐽',
    'K': '𝐾', 'L': '𝐿', 'M': '𝑀', 'N': '𝑁', 'O': '𝑂', 'P': '𝑃', 'Q': '𝑄', 'R': '𝑅', 'S': '𝑆', 'T': '𝑇',
    'U': '𝑈', 'V': '𝑉', 'W': '𝑊', 'X': '𝑋', 'Y': '𝑌', 'Z': '𝑍'
  }
};

// 转换函数
function convertWithMapping(text: string, mapping: Record<string, string>): string {
  return text.split('').map(char => mapping[char] || char).join('');
}

// 确定性伪随机函数 - 基于字符位置和字符码，避免SSR不匹配
function deterministicRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// 获取确定性随机索引
function getDeterministicIndex(charIndex: number, arrayLength: number, offset: number = 0): number {
  return Math.floor(deterministicRandom(charIndex + offset + 12345) * arrayLength);
}

// 确定性布尔值
function getDeterministicBoolean(charIndex: number, threshold: number = 0.5, offset: number = 0): boolean {
  return deterministicRandom(charIndex + offset + 54321) > threshold;
}

// 字体样式定义 - 流行的花哨字体排在前面
export const fontStyles: FontStyle[] = [
  // 最受欢迎的花哨字体
  {
    name: 'Circled',
    category: 'Cool',
    convert: (text: string) => text.split('').map(char => {
      const circled: Record<string, string> = {
        'A': 'Ⓐ', 'B': 'Ⓑ', 'C': 'Ⓒ', 'D': 'Ⓓ', 'E': 'Ⓔ', 'F': 'Ⓕ', 'G': 'Ⓖ', 'H': 'Ⓗ', 'I': 'Ⓘ', 'J': 'Ⓙ',
        'K': 'Ⓚ', 'L': 'Ⓛ', 'M': 'Ⓜ', 'N': 'Ⓝ', 'O': 'Ⓞ', 'P': 'Ⓟ', 'Q': 'Ⓠ', 'R': 'Ⓡ', 'S': 'Ⓢ', 'T': 'Ⓣ',
        'U': 'Ⓤ', 'V': 'Ⓥ', 'W': 'Ⓦ', 'X': 'Ⓧ', 'Y': 'Ⓨ', 'Z': 'Ⓩ',
        'a': 'ⓐ', 'b': 'ⓑ', 'c': 'ⓒ', 'd': 'ⓓ', 'e': 'ⓔ', 'f': 'ⓕ', 'g': 'ⓖ', 'h': 'ⓗ', 'i': 'ⓘ', 'j': 'ⓙ',
        'k': 'ⓚ', 'l': 'ⓛ', 'm': 'ⓜ', 'n': 'ⓝ', 'o': 'ⓞ', 'p': 'ⓟ', 'q': 'ⓠ', 'r': 'ⓡ', 's': 'ⓢ', 't': 'ⓣ',
        'u': 'ⓤ', 'v': 'ⓥ', 'w': 'ⓦ', 'x': 'ⓧ', 'y': 'ⓨ', 'z': 'ⓩ',
        '0': '⓪', '1': '①', '2': '②', '3': '③', '4': '④', '5': '⑤', '6': '⑥', '7': '⑦', '8': '⑧', '9': '⑨'
      };
      return circled[char] || char;
    }).join('')
  },
  {
    name: 'Squared',
    category: 'Cool',
    convert: (text: string) => text.split('').map(char => {
      const squared: Record<string, string> = {
        'A': '🅰', 'B': '🅱', 'C': '🅲', 'D': '🅳', 'E': '🅴', 'F': '🅵', 'G': '🅶', 'H': '🅷', 'I': '🅸', 'J': '🅹',
        'K': '🅺', 'L': '🅻', 'M': '🅼', 'N': '🅽', 'O': '🅾', 'P': '🅿', 'Q': '🆀', 'R': '🆁', 'S': '🆂', 'T': '🆃',
        'U': '🆄', 'V': '🆅', 'W': '🆆', 'X': '🆇', 'Y': '🆈', 'Z': '🆉'
      };
      return squared[char.toUpperCase()] || char;
    }).join('')
  },
  {
    name: 'Wide Text',
    category: 'Cool',
    convert: (text: string) => text.split('').map(char => {
      const wide: Record<string, string> = {
        'A': 'Ａ', 'B': 'Ｂ', 'C': 'Ｃ', 'D': 'Ｄ', 'E': 'Ｅ', 'F': 'Ｆ', 'G': 'Ｇ', 'H': 'Ｈ', 'I': 'Ｉ', 'J': 'Ｊ',
        'K': 'Ｋ', 'L': 'Ｌ', 'M': 'Ｍ', 'N': 'Ｎ', 'O': 'Ｏ', 'P': 'Ｐ', 'Q': 'Ｑ', 'R': 'Ｒ', 'S': 'Ｓ', 'T': 'Ｔ',
        'U': 'Ｕ', 'V': 'Ｖ', 'W': 'Ｗ', 'X': 'Ｘ', 'Y': 'Ｙ', 'Z': 'Ｚ',
        'a': 'ａ', 'b': 'ｂ', 'c': 'ｃ', 'd': 'ｄ', 'e': 'ｅ', 'f': 'ｆ', 'g': 'ｇ', 'h': 'ｈ', 'i': 'ｉ', 'j': 'ｊ',
        'k': 'ｋ', 'l': 'ｌ', 'm': 'ｍ', 'n': 'ｎ', 'o': 'ｏ', 'p': 'ｐ', 'q': 'ｑ', 'r': 'ｒ', 's': 'ｓ', 't': 'ｔ',
        'u': 'ｕ', 'v': 'ｖ', 'w': 'ｗ', 'x': 'ｘ', 'y': 'ｙ', 'z': 'ｚ',
        '0': '０', '1': '１', '2': '２', '3': '３', '4': '４', '5': '５', '6': '６', '7': '７', '8': '８', '9': '９'
      };
      return wide[char] || char;
    }).join('')
  },
  {
    name: 'Bold',
    category: 'Bold',
    convert: (text: string) => convertWithMapping(text, basicMappings.bold)
  },
  {
    name: 'Italic',
    category: 'Fancy',
    convert: (text: string) => convertWithMapping(text, basicMappings.italic)
  },
  {
    name: 'Monospace',
    category: 'Cool',
    convert: (text: string) => text.split('').map(char => {
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) return String.fromCharCode(code + 65248); // A-Z
      if (code >= 97 && code <= 122) return String.fromCharCode(code + 65248); // a-z
      if (code >= 48 && code <= 57) return String.fromCharCode(code + 65248); // 0-9
      return char;
    }).join('')
  },
  {
    name: 'Small Caps',
    category: 'Small',
    convert: (text: string) => text.toUpperCase().split('').map(char => {
      const smallCaps: Record<string, string> = {
        'A': 'ᴀ', 'B': 'ʙ', 'C': 'ᴄ', 'D': 'ᴅ', 'E': 'ᴇ', 'F': 'ꜰ', 'G': 'ɢ', 'H': 'ʜ', 'I': 'ɪ', 'J': 'ᴊ',
        'K': 'ᴋ', 'L': 'ʟ', 'M': 'ᴍ', 'N': 'ɴ', 'O': 'ᴏ', 'P': 'ᴘ', 'Q': 'Q', 'R': 'ʀ', 'S': 'ꜱ', 'T': 'ᴛ',
        'U': 'ᴜ', 'V': 'ᴠ', 'W': 'ᴡ', 'X': 'x', 'Y': 'ʏ', 'Z': 'ᴢ'
      };
      return smallCaps[char] || char;
    }).join('')
  },

  {
    name: 'Cursive Script',
    category: 'Cursive',
    convert: (text: string) => text.split('').map(char => {
      const script: Record<string, string> = {
        'A': '𝒜', 'B': '𝐵', 'C': '𝒞', 'D': '𝒟', 'E': '𝐸', 'F': '𝐹', 'G': '𝒢', 'H': '𝐻', 'I': '𝐼', 'J': '𝒥',
        'K': '𝒦', 'L': '𝐿', 'M': '𝑀', 'N': '𝒩', 'O': '𝒪', 'P': '𝒫', 'Q': '𝒬', 'R': '𝑅', 'S': '𝒮', 'T': '𝒯',
        'U': '𝒰', 'V': '𝒱', 'W': '𝒲', 'X': '𝒳', 'Y': '𝒴', 'Z': '𝒵',
        'a': '𝒶', 'b': '𝒷', 'c': '𝒸', 'd': '𝒹', 'e': '𝑒', 'f': '𝒻', 'g': '𝑔', 'h': '𝒽', 'i': '𝒾', 'j': '𝒿',
        'k': '𝓀', 'l': '𝓁', 'm': '𝓂', 'n': '𝓃', 'o': '𝑜', 'p': '𝓅', 'q': '𝓆', 'r': '𝓇', 's': '𝓈', 't': '𝓉',
        'u': '𝓊', 'v': '𝓋', 'w': '𝓌', 'x': '𝓍', 'y': '𝓎', 'z': '𝓏'
      };
      return script[char] || char;
    }).join('')
  },
  {
    name: 'Double Struck',
    category: 'Fancy',
    convert: (text: string) => text.split('').map(char => {
      const doubleStruck: Record<string, string> = {
        'A': '𝔸', 'B': '𝔹', 'C': 'ℂ', 'D': '𝔻', 'E': '𝔼', 'F': '𝔽', 'G': '𝔾', 'H': 'ℍ', 'I': '𝕀', 'J': '𝕁',
        'K': '𝕂', 'L': '𝕃', 'M': '𝕄', 'N': 'ℕ', 'O': '𝕆', 'P': 'ℙ', 'Q': 'ℚ', 'R': 'ℝ', 'S': '𝕊', 'T': '𝕋',
        'U': '𝕌', 'V': '𝕍', 'W': '𝕎', 'X': '𝕏', 'Y': '𝕐', 'Z': 'ℤ',
        'a': '𝕒', 'b': '𝕓', 'c': '𝕔', 'd': '𝕕', 'e': '𝕖', 'f': '𝕗', 'g': '𝕘', 'h': '𝕙', 'i': '𝕚', 'j': '𝕛',
        'k': '𝕜', 'l': '𝕝', 'm': '𝕞', 'n': '𝕟', 'o': '𝕠', 'p': '𝕡', 'q': '𝕢', 'r': '𝕣', 's': '𝕤', 't': '𝕥',
        'u': '𝕦', 'v': '𝕧', 'w': '𝕨', 'x': '𝕩', 'y': '𝕪', 'z': '𝕫',
        '0': '𝟘', '1': '𝟙', '2': '𝟚', '3': '𝟛', '4': '𝟜', '5': '𝟝', '6': '𝟞', '7': '𝟟', '8': '𝟠', '9': '𝟡'
      };
      return doubleStruck[char] || char;
    }).join('')
  },
  {
    name: 'Superscript',
    category: 'Small',
    convert: (text: string) => text.split('').map(char => {
      const superscript: Record<string, string> = {
        'a': 'ᵃ', 'b': 'ᵇ', 'c': 'ᶜ', 'd': 'ᵈ', 'e': 'ᵉ', 'f': 'ᶠ', 'g': 'ᵍ', 'h': 'ʰ', 'i': 'ⁱ', 'j': 'ʲ',
        'k': 'ᵏ', 'l': 'ˡ', 'm': 'ᵐ', 'n': 'ⁿ', 'o': 'ᵒ', 'p': 'ᵖ', 'q': 'ᵠ', 'r': 'ʳ', 's': 'ˢ', 't': 'ᵗ',
        'u': 'ᵘ', 'v': 'ᵛ', 'w': 'ʷ', 'x': 'ˣ', 'y': 'ʸ', 'z': 'ᶻ',
        'A': 'ᴬ', 'B': 'ᴮ', 'C': 'ᶜ', 'D': 'ᴰ', 'E': 'ᴱ', 'F': 'ᶠ', 'G': 'ᴳ', 'H': 'ᴴ', 'I': 'ᴵ', 'J': 'ᴶ',
        'K': 'ᴷ', 'L': 'ᴸ', 'M': 'ᴹ', 'N': 'ᴺ', 'O': 'ᴼ', 'P': 'ᴾ', 'Q': 'Q', 'R': 'ᴿ', 'S': 'ˢ', 'T': 'ᵀ',
        'U': 'ᵁ', 'V': 'ⱽ', 'W': 'ᵂ', 'X': 'ˣ', 'Y': 'ʸ', 'Z': 'ᶻ',
        '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹'
      };
      return superscript[char] || char;
    }).join('')
  },
  {
    name: 'Subscript',
    category: 'Small',
    convert: (text: string) => text.split('').map(char => {
      const subscript: Record<string, string> = {
        'a': 'ₐ', 'e': 'ₑ', 'h': 'ₕ', 'i': 'ᵢ', 'j': 'ⱼ', 'k': 'ₖ', 'l': 'ₗ', 'm': 'ₘ', 'n': 'ₙ', 'o': 'ₒ',
        'p': 'ₚ', 'r': 'ᵣ', 's': 'ₛ', 't': 'ₜ', 'u': 'ᵤ', 'v': 'ᵥ', 'x': 'ₓ',
        '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉'
      };
      return subscript[char] || char;
    }).join('')
  },
  {
    name: 'Glitch Text',
    category: 'Glitch',
    convert: (text: string) => {
      const glitchChars = ['̸', '̵', '̶', '̷', '̴', '̲', '̳'];
      return text.split('').map((char, index) => {
        if (char === ' ') return char;
        const glitchIndex = getDeterministicIndex(index, glitchChars.length);
        return char + glitchChars[glitchIndex];
      }).join('');
    }
  },
  {
    name: 'Zalgo Text',
    category: 'Glitch',
    convert: (text: string) => {
      const zalgoUp = ['̍', '̎', '̄', '̅', '̿', '̑', '̆', '̐', '͒', '͗', '͑', '̇', '̈', '̊', '͂', '̓', '̈', '͊', '͋', '͌', '̃', '̂', '̌', '͐', '̀', '́', '̋', '̏', '̒', '̓', '̔', '̽', '̉', 'ͣ', 'ͤ', 'ͥ', 'ͦ', 'ͧ', 'ͨ', 'ͩ', 'ͪ', 'ͫ', 'ͬ', 'ͭ', 'ͮ', 'ͯ', '̾', '͛', '͆', '̚'];
      const zalgoDown = ['̖', '̗', '̘', '̙', '̜', '̝', '̞', '̟', '̠', '̤', '̥', '̦', '̩', '̪', '̫', '̬', '̭', '̮', '̯', '̰', '̱', '̲', '̳', '̹', '̺', '̻', '̼', 'ͅ', '͇', '͈', '͉', '͍', '͎', '͓', '͔', '͕', '͖', '͙', '͚', '̣'];

      return text.split('').map((char, index) => {
        if (char === ' ') return char;
        let result = char;
        // Add deterministic zalgo characters
        const numChars = getDeterministicIndex(index, 3, 100) + 1;
        for (let i = 0; i < numChars; i++) {
          if (getDeterministicBoolean(index + i, 0.5, 200)) {
            const upIndex = getDeterministicIndex(index + i, zalgoUp.length, 300);
            result += zalgoUp[upIndex];
          } else {
            const downIndex = getDeterministicIndex(index + i, zalgoDown.length, 400);
            result += zalgoDown[downIndex];
          }
        }
        return result;
      }).join('');
    }
  },
  {
    name: 'Fraktur Bold',
    category: 'Fancy',
    convert: (text: string) => text.split('').map(char => {
      const frakturBold: Record<string, string> = {
        'A': '𝖠', 'B': '𝖡', 'C': '𝖢', 'D': '𝖣', 'E': '𝖤', 'F': '𝖥', 'G': '𝖦', 'H': '𝖧', 'I': '𝖨', 'J': '𝖩',
        'K': '𝖪', 'L': '𝖫', 'M': '𝖬', 'N': '𝖭', 'O': '𝖮', 'P': '𝖯', 'Q': '𝖰', 'R': '𝖱', 'S': '𝖲', 'T': '𝖳',
        'U': '𝖴', 'V': '𝖵', 'W': '𝖶', 'X': '𝖷', 'Y': '𝖸', 'Z': '𝖹',
        'a': '𝖺', 'b': '𝖻', 'c': '𝖼', 'd': '𝖽', 'e': '𝖾', 'f': '𝖿', 'g': '𝗀', 'h': '𝗁', 'i': '𝗂', 'j': '𝗃',
        'k': '𝗄', 'l': '𝗅', 'm': '𝗆', 'n': '𝗇', 'o': '𝗈', 'p': '𝗉', 'q': '𝗊', 'r': '𝗋', 's': '𝗌', 't': '𝗍',
        'u': '𝗎', 'v': '𝗏', 'w': '𝗐', 'x': '𝗑', 'y': '𝗒', 'z': '𝗓'
      };
      return frakturBold[char] || char;
    }).join('')
  },
  {
    name: 'Sans-Serif Bold',
    category: 'Bold',
    convert: (text: string) => text.split('').map(char => {
      const sansSerifBold: Record<string, string> = {
        'A': '𝗔', 'B': '𝗕', 'C': '𝗖', 'D': '𝗗', 'E': '𝗘', 'F': '𝗙', 'G': '𝗚', 'H': '𝗛', 'I': '𝗜', 'J': '𝗝',
        'K': '𝗞', 'L': '𝗟', 'M': '𝗠', 'N': '𝗡', 'O': '𝗢', 'P': '𝗣', 'Q': '𝗤', 'R': '𝗥', 'S': '𝗦', 'T': '𝗧',
        'U': '𝗨', 'V': '𝗩', 'W': '𝗪', 'X': '𝗫', 'Y': '𝗬', 'Z': '𝗭',
        'a': '𝗮', 'b': '𝗯', 'c': '𝗰', 'd': '𝗱', 'e': '𝗲', 'f': '𝗳', 'g': '𝗴', 'h': '𝗵', 'i': '𝗶', 'j': '𝗷',
        'k': '𝗸', 'l': '𝗹', 'm': '𝗺', 'n': '𝗻', 'o': '𝗼', 'p': '𝗽', 'q': '𝗾', 'r': '𝗿', 's': '𝘀', 't': '𝘁',
        'u': '𝘂', 'v': '𝘃', 'w': '𝘄', 'x': '𝘅', 'y': '𝘆', 'z': '𝘇',
        '0': '𝟬', '1': '𝟭', '2': '𝟮', '3': '𝟯', '4': '𝟰', '5': '𝟱', '6': '𝟲', '7': '𝟳', '8': '𝟴', '9': '𝟵'
      };
      return sansSerifBold[char] || char;
    }).join('')
  },
  {
    name: 'Negative Circled',
    category: 'Cool',
    convert: (text: string) => text.split('').map(char => {
      const negativeCircled: Record<string, string> = {
        'A': '🅐', 'B': '🅑', 'C': '🅒', 'D': '🅓', 'E': '🅔', 'F': '🅕', 'G': '🅖', 'H': '🅗', 'I': '🅘', 'J': '🅙',
        'K': '🅚', 'L': '🅛', 'M': '🅜', 'N': '🅝', 'O': '🅞', 'P': '🅟', 'Q': '🅠', 'R': '🅡', 'S': '🅢', 'T': '🅣',
        'U': '🅤', 'V': '🅥', 'W': '🅦', 'X': '🅧', 'Y': '🅨', 'Z': '🅩'
      };
      return negativeCircled[char.toUpperCase()] || char;
    }).join('')
  },
  {
    name: 'Parenthesized',
    category: 'Symbol text',
    convert: (text: string) => text.split('').map(char => {
      const parenthesized: Record<string, string> = {
        'A': '🄐', 'B': '🄑', 'C': '🄒', 'D': '🄓', 'E': '🄔', 'F': '🄕', 'G': '🄖', 'H': '🄗', 'I': '🄘', 'J': '🄙',
        'K': '🄚', 'L': '🄛', 'M': '🄜', 'N': '🄝', 'O': '🄞', 'P': '🄟', 'Q': '🄠', 'R': '🄡', 'S': '🄢', 'T': '🄣',
        'U': '🄤', 'V': '🄥', 'W': '🄦', 'X': '🄧', 'Y': '🄨', 'Z': '🄩',
        'a': '⒜', 'b': '⒝', 'c': '⒞', 'd': '⒟', 'e': '⒠', 'f': '⒡', 'g': '⒢', 'h': '⒣', 'i': '⒤', 'j': '⒥',
        'k': '⒦', 'l': '⒧', 'm': '⒨', 'n': '⒩', 'o': '⒪', 'p': '⒫', 'q': '⒬', 'r': '⒭', 's': '⒮', 't': '⒯',
        'u': '⒰', 'v': '⒱', 'w': '⒲', 'x': '⒳', 'y': '⒴', 'z': '⒵',
        '1': '⑴', '2': '⑵', '3': '⑶', '4': '⑷', '5': '⑸', '6': '⑹', '7': '⑺', '8': '⑻', '9': '⑼', '0': '⑽'
      };
      return parenthesized[char] || char;
    }).join('')
  },
  {
    name: 'Upside Down',
    category: 'Cool',
    convert: (text: string) => {
      const upsideDown: Record<string, string> = {
        'A': '∀', 'B': 'ᗺ', 'C': 'Ɔ', 'D': 'ᗡ', 'E': 'Ǝ', 'F': 'ᖴ', 'G': 'פ', 'H': 'H', 'I': 'I', 'J': 'ſ',
        'K': 'ʞ', 'L': '˥', 'M': 'W', 'N': 'N', 'O': 'O', 'P': 'Ԁ', 'Q': 'Q', 'R': 'ᴿ', 'S': 'S', 'T': '┴',
        'U': '∩', 'V': 'Λ', 'W': 'M', 'X': 'X', 'Y': '⅄', 'Z': 'Z',
        'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ƃ', 'h': 'ɥ', 'i': 'ᴉ', 'j': 'ɾ',
        'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u', 'o': 'o', 'p': 'd', 'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ',
        'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x', 'y': 'ʎ', 'z': 'z',
        '0': '0', '1': 'Ɩ', '2': 'ᄅ', '3': 'Ɛ', '4': 'ㄣ', '5': 'ϛ', '6': '9', '7': 'ㄥ', '8': '8', '9': '6',
        '?': '¿', '!': '¡', '.': '˙', ',': "'", "'": ',', '"': '„', '(': ')', ')': '('
      };
      return text.split('').map(char => upsideDown[char] || char).reverse().join('');
    }
  },
  {
    name: 'Mirror',
    category: 'Cool',
    convert: (text: string) => {
      const mirror: Record<string, string> = {
        'A': 'Ɒ', 'B': 'ᗺ', 'C': 'Ɔ', 'D': 'ᗡ', 'E': 'Ǝ', 'F': 'ᖴ', 'G': 'Ә', 'H': 'H', 'I': 'I', 'J': 'Ⴑ',
        'K': 'ʞ', 'L': '⅃', 'M': 'M', 'N': 'ᴎ', 'O': 'O', 'P': 'q', 'Q': 'p', 'R': 'ᴙ', 'S': 'Ƨ', 'T': 'T',
        'U': 'U', 'V': 'V', 'W': 'W', 'X': 'X', 'Y': 'Y', 'Z': 'Z',
        'a': 'ɒ', 'b': 'd', 'c': 'ɔ', 'd': 'b', 'e': 'ɘ', 'f': 'Ꮈ', 'g': 'ǫ', 'h': 'ʜ', 'i': 'i', 'j': 'ꞁ',
        'k': 'ʞ', 'l': 'l', 'm': 'm', 'n': 'n', 'o': 'o', 'p': 'q', 'q': 'p', 'r': 'ɿ', 's': 'ƨ', 't': 'ƚ',
        'u': 'u', 'v': 'v', 'w': 'w', 'x': 'x', 'y': 'ʏ', 'z': 'z'
      };
      return text.split('').map(char => mirror[char] || char).reverse().join('');
    }
  },
  {
    name: 'Bubble Text',
    category: 'Cool',
    convert: (text: string) => text.split('').map(char => {
      const bubble: Record<string, string> = {
        'A': 'Ⓐ', 'B': 'Ⓑ', 'C': 'Ⓒ', 'D': 'Ⓓ', 'E': 'Ⓔ', 'F': 'Ⓕ', 'G': 'Ⓖ', 'H': 'Ⓗ', 'I': 'Ⓘ', 'J': 'Ⓙ',
        'K': 'Ⓚ', 'L': 'Ⓛ', 'M': 'Ⓜ', 'N': 'Ⓝ', 'O': 'Ⓞ', 'P': 'Ⓟ', 'Q': 'Ⓠ', 'R': 'Ⓡ', 'S': 'Ⓢ', 'T': 'Ⓣ',
        'U': 'Ⓤ', 'V': 'Ⓥ', 'W': 'Ⓦ', 'X': 'Ⓧ', 'Y': 'Ⓨ', 'Z': 'Ⓩ',
        'a': 'ⓐ', 'b': 'ⓑ', 'c': 'ⓒ', 'd': 'ⓓ', 'e': 'ⓔ', 'f': 'ⓕ', 'g': 'ⓖ', 'h': 'ⓗ', 'i': 'ⓘ', 'j': 'ⓙ',
        'k': 'ⓚ', 'l': 'ⓛ', 'm': 'ⓜ', 'n': 'ⓝ', 'o': 'ⓞ', 'p': 'ⓟ', 'q': 'ⓠ', 'r': 'ⓡ', 's': 'ⓢ', 't': 'ⓣ',
        'u': 'ⓤ', 'v': 'ⓥ', 'w': 'ⓦ', 'x': 'ⓧ', 'y': 'ⓨ', 'z': 'ⓩ',
        '0': '⓪', '1': '①', '2': '②', '3': '③', '4': '④', '5': '⑤', '6': '⑥', '7': '⑦', '8': '⑧', '9': '⑨'
      };
      return bubble[char] || char;
    }).join('')
  },
  {
    name: 'ASCII Art Block',
    category: 'Text art',
    convert: (text: string) => {
      const blockArt: Record<string, string> = {
        'A': '█▀█', 'B': '█▀▄', 'C': '▄▀█', 'D': '█▀▄', 'E': '█▀▀', 'F': '█▀▀', 'G': '▄▀█', 'H': '█ █', 'I': '█', 'J': '  █',
        'K': '█ █', 'L': '█  ', 'M': '█▄█', 'N': '█▄█', 'O': '▄▀█', 'P': '█▀▄', 'Q': '▄▀█', 'R': '█▀▄', 'S': '▄▀▀', 'T': '▀█▀',
        'U': '█ █', 'V': '█ █', 'W': '█ █', 'X': '█ █', 'Y': '█ █', 'Z': '▀▀▀',
        ' ': '   '
      };
      return text.toUpperCase().split('').map(char => blockArt[char] || char).join(' ');
    }
  },
  {
    name: 'Strikethrough',
    category: 'Cool',
    convert: (text: string) => text.split('').map(char => char + '̶').join('')
  },
  {
    name: 'Underline',
    category: 'Cool',
    convert: (text: string) => text.split('').map(char => char + '̲').join('')
  },
  {
    name: 'Overline',
    category: 'Cool',
    convert: (text: string) => text.split('').map(char => char + '̅').join('')
  },
  {
    name: 'Double Underline',
    category: 'Cool',
    convert: (text: string) => text.split('').map(char => char + '̳').join('')
  },
  {
    name: 'Wavy Underline',
    category: 'Cool',
    convert: (text: string) => text.split('').map(char => char + '̰').join('')
  },
  {
    name: 'Dotted Underline',
    category: 'Cool',
    convert: (text: string) => text.split('').map(char => char + '̤').join('')
  },
  {
    name: 'Leet Speak',
    category: 'Cool',
    convert: (text: string) => text.split('').map(char => {
      const leet: Record<string, string> = {
        'A': '4', 'B': '8', 'C': '(', 'D': '|)', 'E': '3', 'F': '|=', 'G': '6', 'H': '#', 'I': '1', 'J': '_|',
        'K': '|<', 'L': '|_', 'M': '|\\/|', 'N': '|\\|', 'O': '0', 'P': '|*', 'Q': '0_', 'R': '|2', 'S': '5', 'T': '7',
        'U': '|_|', 'V': '\\/', 'W': '\\/\\/', 'X': '><', 'Y': '`/', 'Z': '2',
        'a': '4', 'b': '8', 'c': '(', 'd': '|)', 'e': '3', 'f': '|=', 'g': '6', 'h': '#', 'i': '1', 'j': '_|',
        'k': '|<', 'l': '|_', 'm': '|\\/|', 'n': '|\\|', 'o': '0', 'p': '|*', 'q': '0_', 'r': '|2', 's': '5', 't': '7',
        'u': '|_|', 'v': '\\/', 'w': '\\/\\/', 'x': '><', 'y': '`/', 'z': '2'
      };
      return leet[char] || char;
    }).join('')
  },
  {
    name: 'Morse Code',
    category: 'Symbol text',
    convert: (text: string) => text.split('').map(char => {
      const morse: Record<string, string> = {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
        'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
        'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',
        '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....',
        '6': '-....', '7': '--...', '8': '---..', '9': '----.',
        ' ': '/'
      };
      return morse[char.toUpperCase()] || char;
    }).join(' ')
  },
  {
    name: 'Binary',
    category: 'Symbol text',
    convert: (text: string) => text.split('').map(char => {
      const binary = char.charCodeAt(0).toString(2).padStart(8, '0');
      return binary;
    }).join(' ')
  },
  {
    name: 'Hexadecimal',
    category: 'Symbol text',
    convert: (text: string) => text.split('').map(char => {
      const hex = char.charCodeAt(0).toString(16).toUpperCase().padStart(2, '0');
      return '0x' + hex;
    }).join(' ')
  },
  {
    name: 'ROT13',
    category: 'Cool',
    convert: (text: string) => text.split('').map(char => {
      if (char >= 'A' && char <= 'Z') {
        return String.fromCharCode(((char.charCodeAt(0) - 65 + 13) % 26) + 65);
      } else if (char >= 'a' && char <= 'z') {
        return String.fromCharCode(((char.charCodeAt(0) - 97 + 13) % 26) + 97);
      }
      return char;
    }).join('')
  },
  {
    name: 'Star Wrapper',
    category: 'Symbol text',
    convert: (text: string) => '✦ ' + text.split('').join(' ✦ ') + ' ✦'
  },
  {
    name: 'Heart Wrapper',
    category: 'Symbol text',
    convert: (text: string) => '♥ ' + text.split('').join(' ♥ ') + ' ♥'
  },
  {
    name: 'Arrow Wrapper',
    category: 'Symbol text',
    convert: (text: string) => '→ ' + text + ' ←'
  },
  {
    name: 'Diamond Wrapper',
    category: 'Symbol text',
    convert: (text: string) => '◆ ' + text + ' ◆'
  },
  {
    name: 'Flower Wrapper',
    category: 'Symbol text',
    convert: (text: string) => '❀ ' + text + ' ❀'
  },
  {
    name: 'Lightning Wrapper',
    category: 'Symbol text',
    convert: (text: string) => '⚡ ' + text + ' ⚡'
  },
  {
    name: 'Crown Wrapper',
    category: 'Symbol text',
    convert: (text: string) => '♔ ' + text + ' ♔'
  },
  {
    name: 'Music Wrapper',
    category: 'Symbol text',
    convert: (text: string) => '♪ ' + text + ' ♪'
  },
  // 更多Bold字体
  {
    name: 'Bold Italic',
    category: 'Bold',
    convert: (text: string) => text.split('').map(char => {
      const boldItalic: Record<string, string> = {
        'A': '𝑨', 'B': '𝑩', 'C': '𝑪', 'D': '𝑫', 'E': '𝑬', 'F': '𝑭', 'G': '𝑮', 'H': '𝑯', 'I': '𝑰', 'J': '𝑱',
        'K': '𝑲', 'L': '𝑳', 'M': '𝑴', 'N': '𝑵', 'O': '𝑶', 'P': '𝑷', 'Q': '𝑸', 'R': '𝑹', 'S': '𝑺', 'T': '𝑻',
        'U': '𝑼', 'V': '𝑽', 'W': '𝑾', 'X': '𝑿', 'Y': '𝒀', 'Z': '𝒁',
        'a': '𝒂', 'b': '𝒃', 'c': '𝒄', 'd': '𝒅', 'e': '𝒆', 'f': '𝒇', 'g': '𝒈', 'h': '𝒉', 'i': '𝒊', 'j': '𝒋',
        'k': '𝒌', 'l': '𝒍', 'm': '𝒎', 'n': '𝒏', 'o': '𝒐', 'p': '𝒑', 'q': '𝒒', 'r': '𝒓', 's': '𝒔', 't': '𝒕',
        'u': '𝒖', 'v': '𝒗', 'w': '𝒘', 'x': '𝒙', 'y': '𝒚', 'z': '𝒛'
      };
      return boldItalic[char] || char;
    }).join('')
  },
  {
    name: 'Sans-Serif Bold Italic',
    category: 'Bold',
    convert: (text: string) => text.split('').map(char => {
      const sansBoldItalic: Record<string, string> = {
        'A': '𝘼', 'B': '𝘽', 'C': '𝘾', 'D': '𝘿', 'E': '𝙀', 'F': '𝙁', 'G': '𝙂', 'H': '𝙃', 'I': '𝙄', 'J': '𝙅',
        'K': '𝙆', 'L': '𝙇', 'M': '𝙈', 'N': '𝙉', 'O': '𝙊', 'P': '𝙋', 'Q': '𝙌', 'R': '𝙍', 'S': '𝙎', 'T': '𝙏',
        'U': '𝙐', 'V': '𝙑', 'W': '𝙒', 'X': '𝙓', 'Y': '𝙔', 'Z': '𝙕',
        'a': '𝙖', 'b': '𝙗', 'c': '𝙘', 'd': '𝙙', 'e': '𝙚', 'f': '𝙛', 'g': '𝙜', 'h': '𝙝', 'i': '𝙞', 'j': '𝙟',
        'k': '𝙠', 'l': '𝙡', 'm': '𝙢', 'n': '𝙣', 'o': '𝙤', 'p': '𝙥', 'q': '𝙦', 'r': '𝙧', 's': '𝙨', 't': '𝙩',
        'u': '𝙪', 'v': '𝙫', 'w': '𝙬', 'x': '𝙭', 'y': '𝙮', 'z': '𝙯'
      };
      return sansBoldItalic[char] || char;
    }).join('')
  },
  // 更多Fancy字体
  {
    name: 'Sans-Serif Italic',
    category: 'Fancy',
    convert: (text: string) => text.split('').map(char => {
      const sansItalic: Record<string, string> = {
        'A': '𝘈', 'B': '𝘉', 'C': '𝘊', 'D': '𝘋', 'E': '𝘌', 'F': '𝘍', 'G': '𝘎', 'H': '𝘏', 'I': '𝘐', 'J': '𝘑',
        'K': '𝘒', 'L': '𝘓', 'M': '𝘔', 'N': '𝘕', 'O': '𝘖', 'P': '𝘗', 'Q': '𝘘', 'R': '𝘙', 'S': '𝘚', 'T': '𝘛',
        'U': '𝘜', 'V': '𝘝', 'W': '𝘞', 'X': '𝘟', 'Y': '𝘠', 'Z': '𝘡',
        'a': '𝘢', 'b': '𝘣', 'c': '𝘤', 'd': '𝘥', 'e': '𝘦', 'f': '𝘧', 'g': '𝘨', 'h': '𝘩', 'i': '𝘪', 'j': '𝘫',
        'k': '𝘬', 'l': '𝘭', 'm': '𝘮', 'n': '𝘯', 'o': '𝘰', 'p': '𝘱', 'q': '𝘲', 'r': '𝘳', 's': '𝘴', 't': '𝘵',
        'u': '𝘶', 'v': '𝘷', 'w': '𝘸', 'x': '𝘹', 'y': '𝘺', 'z': '𝘻'
      };
      return sansItalic[char] || char;
    }).join('')
  },
  {
    name: 'Fraktur',
    category: 'Fancy',
    convert: (text: string) => text.split('').map(char => {
      const fraktur: Record<string, string> = {
        'A': '𝔄', 'B': '𝔅', 'C': 'ℭ', 'D': '𝔇', 'E': '𝔈', 'F': '𝔉', 'G': '𝔊', 'H': 'ℌ', 'I': 'ℑ', 'J': '𝔍',
        'K': '𝔎', 'L': '𝔏', 'M': '𝔐', 'N': '𝔑', 'O': '𝔒', 'P': '𝔓', 'Q': '𝔔', 'R': 'ℜ', 'S': '𝔖', 'T': '𝔗',
        'U': '𝔘', 'V': '𝔙', 'W': '𝔚', 'X': '𝔛', 'Y': '𝔜', 'Z': 'ℨ',
        'a': '𝔞', 'b': '𝔟', 'c': '𝔠', 'd': '𝔡', 'e': '𝔢', 'f': '𝔣', 'g': '𝔤', 'h': '𝔥', 'i': '𝔦', 'j': '𝔧',
        'k': '𝔨', 'l': '𝔩', 'm': '𝔪', 'n': '𝔫', 'o': '𝔬', 'p': '𝔭', 'q': '𝔮', 'r': '𝔯', 's': '𝔰', 't': '𝔱',
        'u': '𝔲', 'v': '𝔳', 'w': '𝔴', 'x': '𝔵', 'y': '𝔶', 'z': '𝔷'
      };
      return fraktur[char] || char;
    }).join('')
  },
  // 更多Cool字体
  {
    name: 'Wide Text',
    category: 'Cool',
    convert: (text: string) => text.split('').map(char => {
      const wide: Record<string, string> = {
        'A': 'Ａ', 'B': 'Ｂ', 'C': 'Ｃ', 'D': 'Ｄ', 'E': 'Ｅ', 'F': 'Ｆ', 'G': 'Ｇ', 'H': 'Ｈ', 'I': 'Ｉ', 'J': 'Ｊ',
        'K': 'Ｋ', 'L': 'Ｌ', 'M': 'Ｍ', 'N': 'Ｎ', 'O': 'Ｏ', 'P': 'Ｐ', 'Q': 'Ｑ', 'R': 'Ｒ', 'S': 'Ｓ', 'T': 'Ｔ',
        'U': 'Ｕ', 'V': 'Ｖ', 'W': 'Ｗ', 'X': 'Ｘ', 'Y': 'Ｙ', 'Z': 'Ｚ',
        'a': 'ａ', 'b': 'ｂ', 'c': 'ｃ', 'd': 'ｄ', 'e': 'ｅ', 'f': 'ｆ', 'g': 'ｇ', 'h': 'ｈ', 'i': 'ｉ', 'j': 'ｊ',
        'k': 'ｋ', 'l': 'ｌ', 'm': 'ｍ', 'n': 'ｎ', 'o': 'ｏ', 'p': 'ｐ', 'q': 'ｑ', 'r': 'ｒ', 's': 'ｓ', 't': 'ｔ',
        'u': 'ｕ', 'v': 'ｖ', 'w': 'ｗ', 'x': 'ｘ', 'y': 'ｙ', 'z': 'ｚ',
        '0': '０', '1': '１', '2': '２', '3': '３', '4': '４', '5': '５', '6': '６', '7': '７', '8': '８', '9': '９'
      };
      return wide[char] || char;
    }).join('')
  },
  {
    name: 'Outlined',
    category: 'Cool',
    convert: (text: string) => text.split('').map(char => {
      const outlined: Record<string, string> = {
        'A': '𝔸', 'B': '𝔹', 'C': 'ℂ', 'D': '𝔻', 'E': '𝔼', 'F': '𝔽', 'G': '𝔾', 'H': 'ℍ', 'I': '𝕀', 'J': '𝕁',
        'K': '𝕂', 'L': '𝕃', 'M': '𝕄', 'N': 'ℕ', 'O': '𝕆', 'P': 'ℙ', 'Q': 'ℚ', 'R': 'ℝ', 'S': '𝕊', 'T': '𝕋',
        'U': '𝕌', 'V': '𝕍', 'W': '𝕎', 'X': '𝕏', 'Y': '𝕐', 'Z': 'ℤ',
        'a': '𝕒', 'b': '𝕓', 'c': '𝕔', 'd': '𝕕', 'e': '𝕖', 'f': '𝕗', 'g': '𝕘', 'h': '𝕙', 'i': '𝕚', 'j': '𝕛',
        'k': '𝕜', 'l': '𝕝', 'm': '𝕞', 'n': '𝕟', 'o': '𝕠', 'p': '𝕡', 'q': '𝕢', 'r': '𝕣', 's': '𝕤', 't': '𝕥',
        'u': '𝕦', 'v': '𝕧', 'w': '𝕨', 'x': '𝕩', 'y': '𝕪', 'z': '𝕫'
      };
      return outlined[char] || char;
    }).join('')
  },
  {
    name: 'Inverted',
    category: 'Cool',
    convert: (text: string) => text.split('').map(char => {
      const inverted: Record<string, string> = {
        'A': '∀', 'B': 'ᗺ', 'C': 'Ɔ', 'D': 'ᗡ', 'E': 'Ǝ', 'F': 'ᖴ', 'G': 'פ', 'H': 'H', 'I': 'I', 'J': 'ſ',
        'K': 'ʞ', 'L': '˥', 'M': 'W', 'N': 'N', 'O': 'O', 'P': 'Ԁ', 'Q': 'Q', 'R': 'ᴿ', 'S': 'S', 'T': '┴',
        'U': '∩', 'V': 'Λ', 'W': 'M', 'X': 'X', 'Y': '⅄', 'Z': 'Z',
        'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ƃ', 'h': 'ɥ', 'i': 'ᴉ', 'j': 'ɾ',
        'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u', 'o': 'o', 'p': 'd', 'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ',
        'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x', 'y': 'ʎ', 'z': 'z'
      };
      return inverted[char] || char;
    }).join('')
  },
  {
    name: 'Spaced Out',
    category: 'Cool',
    convert: (text: string) => text.split('').join(' ')
  },
  {
    name: 'Reverse',
    category: 'Cool',
    convert: (text: string) => text.split('').reverse().join('')
  },
  // 更多Small字体
  {
    name: 'Tiny Text',
    category: 'Small',
    convert: (text: string) => text.split('').map(char => {
      const tiny: Record<string, string> = {
        'A': 'ᴬ', 'B': 'ᴮ', 'C': 'ᶜ', 'D': 'ᴰ', 'E': 'ᴱ', 'F': 'ᶠ', 'G': 'ᴳ', 'H': 'ᴴ', 'I': 'ᴵ', 'J': 'ᴶ',
        'K': 'ᴷ', 'L': 'ᴸ', 'M': 'ᴹ', 'N': 'ᴺ', 'O': 'ᴼ', 'P': 'ᴾ', 'Q': 'Q', 'R': 'ᴿ', 'S': 'ˢ', 'T': 'ᵀ',
        'U': 'ᵁ', 'V': 'ⱽ', 'W': 'ᵂ', 'X': 'ˣ', 'Y': 'ʸ', 'Z': 'ᶻ',
        'a': 'ᵃ', 'b': 'ᵇ', 'c': 'ᶜ', 'd': 'ᵈ', 'e': 'ᵉ', 'f': 'ᶠ', 'g': 'ᵍ', 'h': 'ʰ', 'i': 'ⁱ', 'j': 'ʲ',
        'k': 'ᵏ', 'l': 'ˡ', 'm': 'ᵐ', 'n': 'ⁿ', 'o': 'ᵒ', 'p': 'ᵖ', 'q': 'ᵠ', 'r': 'ʳ', 's': 'ˢ', 't': 'ᵗ',
        'u': 'ᵘ', 'v': 'ᵛ', 'w': 'ʷ', 'x': 'ˣ', 'y': 'ʸ', 'z': 'ᶻ'
      };
      return tiny[char] || char;
    }).join('')
  },
  {
    name: 'Mini Caps',
    category: 'Small',
    convert: (text: string) => text.toLowerCase().split('').map(char => {
      const miniCaps: Record<string, string> = {
        'a': 'ᴀ', 'b': 'ʙ', 'c': 'ᴄ', 'd': 'ᴅ', 'e': 'ᴇ', 'f': 'ꜰ', 'g': 'ɢ', 'h': 'ʜ', 'i': 'ɪ', 'j': 'ᴊ',
        'k': 'ᴋ', 'l': 'ʟ', 'm': 'ᴍ', 'n': 'ɴ', 'o': 'ᴏ', 'p': 'ᴘ', 'q': 'Q', 'r': 'ʀ', 's': 'ꜱ', 't': 'ᴛ',
        'u': 'ᴜ', 'v': 'ᴠ', 'w': 'ᴡ', 'x': 'x', 'y': 'ʏ', 'z': 'ᴢ'
      };
      return miniCaps[char] || char;
    }).join('')
  },
  // 更多Cursive字体
  {
    name: 'Script Bold',
    category: 'Cursive',
    convert: (text: string) => text.split('').map(char => {
      const scriptBold: Record<string, string> = {
        'A': '𝓐', 'B': '𝓑', 'C': '𝓒', 'D': '𝓓', 'E': '𝓔', 'F': '𝓕', 'G': '𝓖', 'H': '𝓗', 'I': '𝓘', 'J': '𝓙',
        'K': '𝓚', 'L': '𝓛', 'M': '𝓜', 'N': '𝓝', 'O': '𝓞', 'P': '𝓟', 'Q': '𝓠', 'R': '𝓡', 'S': '𝓢', 'T': '𝓣',
        'U': '𝓤', 'V': '𝓥', 'W': '𝓦', 'X': '𝓧', 'Y': '𝓨', 'Z': '𝓩',
        'a': '𝓪', 'b': '𝓫', 'c': '𝓬', 'd': '𝓭', 'e': '𝓮', 'f': '𝓯', 'g': '𝓰', 'h': '𝓱', 'i': '𝓲', 'j': '𝓳',
        'k': '𝓴', 'l': '𝓵', 'm': '𝓶', 'n': '𝓷', 'o': '𝓸', 'p': '𝓹', 'q': '𝓺', 'r': '𝓻', 's': '𝓼', 't': '𝓽',
        'u': '𝓾', 'v': '𝓿', 'w': '𝔀', 'x': '𝔁', 'y': '𝔂', 'z': '𝔃'
      };
      return scriptBold[char] || char;
    }).join('')
  },
  {
    name: 'Handwriting',
    category: 'Cursive',
    convert: (text: string) => text.split('').map(char => {
      const handwriting: Record<string, string> = {
        'A': '𝒜', 'B': 'ℬ', 'C': '𝒞', 'D': '𝒟', 'E': 'ℰ', 'F': 'ℱ', 'G': '𝒢', 'H': 'ℋ', 'I': 'ℐ', 'J': '𝒥',
        'K': '𝒦', 'L': 'ℒ', 'M': 'ℳ', 'N': '𝒩', 'O': '𝒪', 'P': '𝒫', 'Q': '𝒬', 'R': 'ℛ', 'S': '𝒮', 'T': '𝒯',
        'U': '𝒰', 'V': '𝒱', 'W': '𝒲', 'X': '𝒳', 'Y': '𝒴', 'Z': '𝒵',
        'a': '𝒶', 'b': '𝒷', 'c': '𝒸', 'd': '𝒹', 'e': 'ℯ', 'f': '𝒻', 'g': 'ℊ', 'h': '𝒽', 'i': '𝒾', 'j': '𝒿',
        'k': '𝓀', 'l': '𝓁', 'm': '𝓂', 'n': '𝓃', 'o': 'ℴ', 'p': '𝓅', 'q': '𝓆', 'r': '𝓇', 's': '𝓈', 't': '𝓉',
        'u': '𝓊', 'v': '𝓋', 'w': '𝓌', 'x': '𝓍', 'y': '𝓎', 'z': '𝓏'
      };
      return handwriting[char] || char;
    }).join('')
  },
  // Symbol text字体
  {
    name: 'Brackets',
    category: 'Symbol text',
    convert: (text: string) => '[' + text + ']'
  },
  {
    name: 'Curly Brackets',
    category: 'Symbol text',
    convert: (text: string) => '{' + text + '}'
  },
  {
    name: 'Double Quotes',
    category: 'Symbol text',
    convert: (text: string) => '"' + text + '"'
  },
  {
    name: 'Single Quotes',
    category: 'Symbol text',
    convert: (text: string) => "'" + text + "'"
  },
  {
    name: 'Angle Brackets',
    category: 'Symbol text',
    convert: (text: string) => '<' + text + '>'
  },
  {
    name: 'Fire Wrapper',
    category: 'Symbol text',
    convert: (text: string) => '🔥 ' + text + ' 🔥'
  },
  {
    name: 'Sparkle Wrapper',
    category: 'Symbol text',
    convert: (text: string) => '✨ ' + text + ' ✨'
  },
  {
    name: 'Skull Wrapper',
    category: 'Symbol text',
    convert: (text: string) => '💀 ' + text + ' 💀'
  },
  {
    name: 'Peace Wrapper',
    category: 'Symbol text',
    convert: (text: string) => '☮ ' + text + ' ☮'
  },
  {
    name: 'Yin Yang Wrapper',
    category: 'Symbol text',
    convert: (text: string) => '☯ ' + text + ' ☯'
  },
  {
    name: 'Crown Wrapper',
    category: 'Symbol text',
    convert: (text: string) => '👑 ' + text + ' 👑'
  },
  {
    name: 'Lightning Wrapper',
    category: 'Symbol text',
    convert: (text: string) => '⚡ ' + text + ' ⚡'
  },
  {
    name: 'Star Wrapper',
    category: 'Symbol text',
    convert: (text: string) => '⭐ ' + text + ' ⭐'
  },
  {
    name: 'Diamond Wrapper',
    category: 'Symbol text',
    convert: (text: string) => '💎 ' + text + ' 💎'
  },
  // Text art字体
  {
    name: 'ASCII Blocks',
    category: 'Text art',
    convert: (text: string) => {
      return text.split('').map(char => {
        const blocks: Record<string, string> = {
          'A': '▄▀█', 'B': '█▄▄', 'C': '▄▀█', 'D': '█▀▄', 'E': '█▀▀', 'F': '█▀▀',
          'G': '▄▀█', 'H': '█▄█', 'I': '█', 'J': '░░█', 'K': '█▄▀', 'L': '█░░',
          'M': '█▄█', 'N': '█▄█', 'O': '█▀█', 'P': '█▀█', 'Q': '█▀█', 'R': '█▀█',
          'S': '▄▀█', 'T': '▀█▀', 'U': '█░█', 'V': '█░█', 'W': '█░█', 'X': '▀▄▀',
          'Y': '█▄█', 'Z': '▀▀█'
        };
        return blocks[char.toUpperCase()] || char;
      }).join(' ');
    }
  },
  {
    name: 'Box Drawing',
    category: 'Text art',
    convert: (text: string) => {
      return '┌─' + '─'.repeat(text.length) + '─┐\n│ ' + text + ' │\n└─' + '─'.repeat(text.length) + '─┘';
    }
  },
  {
    name: 'Double Box',
    category: 'Text art',
    convert: (text: string) => {
      return '╔═' + '═'.repeat(text.length) + '═╗\n║ ' + text + ' ║\n╚═' + '═'.repeat(text.length) + '═╝';
    }
  },
  {
    name: 'Star Border',
    category: 'Text art',
    convert: (text: string) => {
      const stars = '★'.repeat(text.length + 4);
      return stars + '\n★ ' + text + ' ★\n' + stars;
    }
  },
  {
    name: 'Wave Art',
    category: 'Text art',
    convert: (text: string) => {
      return '～～～ ' + text + ' ～～～';
    }
  },
  // Elegant Fonts字体
  {
    name: 'Elegant Script',
    category: 'Elegant Fonts',
    convert: (text: string) => convertWithMapping(text, basicMappings.italic)
  },
  {
    name: 'Elegant Serif',
    category: 'Elegant Fonts',
    convert: (text: string) => convertWithMapping(text, basicMappings.bold)
  },
  {
    name: 'Elegant Italic',
    category: 'Elegant Fonts',
    convert: (text: string) => convertWithMapping(text, basicMappings.italic)
  },
  {
    name: 'Elegant Bold',
    category: 'Elegant Fonts',
    convert: (text: string) => convertWithMapping(text, basicMappings.bold)
  },
  {
    name: 'Elegant Cursive',
    category: 'Elegant Fonts',
    convert: (text: string) => text.split('').map(char => {
      const elegant: Record<string, string> = {
        'A': '𝒜', 'B': 'ℬ', 'C': '𝒞', 'D': '𝒟', 'E': 'ℰ', 'F': 'ℱ', 'G': '𝒢', 'H': 'ℋ', 'I': 'ℐ', 'J': '𝒥',
        'K': '𝒦', 'L': 'ℒ', 'M': 'ℳ', 'N': '𝒩', 'O': '𝒪', 'P': '𝒫', 'Q': '𝒬', 'R': 'ℛ', 'S': '𝒮', 'T': '𝒯',
        'U': '𝒰', 'V': '𝒱', 'W': '𝒲', 'X': '𝒳', 'Y': '𝒴', 'Z': '𝒵',
        'a': '𝒶', 'b': '𝒷', 'c': '𝒸', 'd': '𝒹', 'e': 'ℯ', 'f': '𝒻', 'g': 'ℊ', 'h': '𝒽', 'i': '𝒾', 'j': '𝒿',
        'k': '𝓀', 'l': '𝓁', 'm': '𝓂', 'n': '𝓃', 'o': 'ℴ', 'p': '𝓅', 'q': '𝓆', 'r': '𝓇', 's': '𝓈', 't': '𝓉',
        'u': '𝓊', 'v': '𝓋', 'w': '𝓌', 'x': '𝓍', 'y': '𝓎', 'z': '𝓏'
      };
      return elegant[char] || char;
    }).join('')
  },
  // Linear Text Fonts字体
  {
    name: 'Linear Underline',
    category: 'Linear Text Fonts',
    convert: (text: string) => text.split('').map(char => {
      if (char === ' ') return ' ';
      return char + '̲';
    }).join('')
  },
  {
    name: 'Linear Strikethrough',
    category: 'Linear Text Fonts',
    convert: (text: string) => text.split('').map(char => {
      if (char === ' ') return ' ';
      return char + '̶';
    }).join('')
  },
  {
    name: 'Linear Double',
    category: 'Linear Text Fonts',
    convert: (text: string) => text.split('').map(char => {
      const linear: Record<string, string> = {
        'A': '𝔸', 'B': '𝔹', 'C': 'ℂ', 'D': '𝔻', 'E': '𝔼', 'F': '𝔽', 'G': '𝔾', 'H': 'ℍ', 'I': '𝕀', 'J': '𝕁',
        'K': '𝕂', 'L': '𝕃', 'M': '𝕄', 'N': 'ℕ', 'O': '𝕆', 'P': 'ℙ', 'Q': 'ℚ', 'R': 'ℝ', 'S': '𝕊', 'T': '𝕋',
        'U': '𝕌', 'V': '𝕍', 'W': '𝕎', 'X': '𝕏', 'Y': '𝕐', 'Z': 'ℤ',
        'a': '𝕒', 'b': '𝕓', 'c': '𝕔', 'd': '𝕕', 'e': '𝕖', 'f': '𝕗', 'g': '𝕘', 'h': '𝕙', 'i': '𝕚', 'j': '𝕛',
        'k': '𝕜', 'l': '𝕝', 'm': '𝕞', 'n': '𝕟', 'o': '𝕠', 'p': '𝕡', 'q': '𝕢', 'r': '𝕣', 's': '𝕤', 't': '𝕥',
        'u': '𝕦', 'v': '𝕧', 'w': '𝕨', 'x': '𝕩', 'y': '𝕪', 'z': '𝕫'
      };
      return linear[char] || char;
    }).join('')
  },
  // Connected Fonts字体
  {
    name: 'Connected Script',
    category: 'Connected Fonts',
    convert: (text: string) => text.split('').map(char => {
      const connected: Record<string, string> = {
        'A': '𝒜', 'B': 'ℬ', 'C': '𝒞', 'D': '𝒟', 'E': 'ℰ', 'F': 'ℱ', 'G': '𝒢', 'H': 'ℋ', 'I': 'ℐ', 'J': '𝒥',
        'K': '𝒦', 'L': 'ℒ', 'M': 'ℳ', 'N': '𝒩', 'O': '𝒪', 'P': '𝒫', 'Q': '𝒬', 'R': 'ℛ', 'S': '𝒮', 'T': '𝒯',
        'U': '𝒰', 'V': '𝒱', 'W': '𝒲', 'X': '𝒳', 'Y': '𝒴', 'Z': '𝒵',
        'a': '𝒶', 'b': '𝒷', 'c': '𝒸', 'd': '𝒹', 'e': 'ℯ', 'f': '𝒻', 'g': 'ℊ', 'h': '𝒽', 'i': '𝒾', 'j': '𝒿',
        'k': '𝓀', 'l': '𝓁', 'm': '𝓂', 'n': '𝓃', 'o': 'ℴ', 'p': '𝓅', 'q': '𝓆', 'r': '𝓇', 's': '𝓈', 't': '𝓉',
        'u': '𝓊', 'v': '𝓋', 'w': '𝓌', 'x': '𝓍', 'y': '𝓎', 'z': '𝓏'
      };
      return connected[char] || char;
    }).join('')
  },
  {
    name: 'Connected Lines',
    category: 'Connected Fonts',
    convert: (text: string) => text.split('').join('‿')
  },
  {
    name: 'Connected Dots',
    category: 'Connected Fonts',
    convert: (text: string) => text.split('').join('•')
  },
  // Crowned Aesthetic Letters字体
  {
    name: 'Crown Letters',
    category: 'Crowned Aesthetic Letters',
    convert: (text: string) => text.split('').map(char => {
      if (char === ' ') return ' ';
      return '♔' + char + '♔';
    }).join(' ')
  },
  {
    name: 'Royal Crown',
    category: 'Crowned Aesthetic Letters',
    convert: (text: string) => '👑 ' + text + ' 👑'
  },
  {
    name: 'Crown Border',
    category: 'Crowned Aesthetic Letters',
    convert: (text: string) => {
      const crowns = '♔'.repeat(text.length + 2);
      return crowns + '\n♔' + text + '♔\n' + crowns;
    }
  },
  // Intersected Fonts字体
  {
    name: 'Strikethrough',
    category: 'Intersected Fonts',
    convert: (text: string) => text.split('').map(char => {
      if (char === ' ') return ' ';
      return char + '̶';
    }).join('')
  },
  {
    name: 'Cross Lines',
    category: 'Intersected Fonts',
    convert: (text: string) => text.split('').map(char => {
      if (char === ' ') return ' ';
      return char + '̸';
    }).join('')
  },
  {
    name: 'Diagonal Cross',
    category: 'Intersected Fonts',
    convert: (text: string) => text.split('').map(char => {
      if (char === ' ') return ' ';
      return char + '⃠';
    }).join('')
  },
  // Framed Fonts字体
  {
    name: 'Square Frame',
    category: 'Framed Fonts',
    convert: (text: string) => text.split('').map(char => {
      if (char === ' ') return ' ';
      return '⬜' + char + '⬜';
    }).join(' ')
  },
  {
    name: 'Circle Frame',
    category: 'Framed Fonts',
    convert: (text: string) => text.split('').map(char => {
      if (char === ' ') return ' ';
      return '⭕' + char + '⭕';
    }).join(' ')
  },
  {
    name: 'Diamond Frame',
    category: 'Framed Fonts',
    convert: (text: string) => text.split('').map(char => {
      if (char === ' ') return ' ';
      return '💎' + char + '💎';
    }).join(' ')
  },
  // Random Fonts字体
  {
    name: 'Mixed Case',
    category: 'Random Fonts',
    convert: (text: string) => text.split('').map((char, index) =>
      getDeterministicBoolean(index, 0.5, 1000) ? char.toUpperCase() : char.toLowerCase()
    ).join('')
  },
  {
    name: 'Random Symbols',
    category: 'Random Fonts',
    convert: (text: string) => {
      const symbols = ['★', '☆', '♦', '♠', '♣', '♥', '◆', '◇', '●', '○', '■', '□', '▲', '△', '▼', '▽'];
      return text.split('').map((char, index) => {
        if (char === ' ') return ' ';
        if (getDeterministicBoolean(index, 0.7, 1100)) {
          const symbolIndex = getDeterministicIndex(index, symbols.length, 1200);
          return symbols[symbolIndex];
        }
        return char;
      }).join('');
    }
  },
  // Flowing Fonts字体
  {
    name: 'Wave Flow',
    category: 'Flowing Fonts',
    convert: (text: string) => '～' + text.split('').join('～') + '～'
  },
  {
    name: 'Smooth Flow',
    category: 'Flowing Fonts',
    convert: (text: string) => text.split('').map(char => {
      const flowing: Record<string, string> = {
        'A': '𝒜', 'B': 'ℬ', 'C': '𝒞', 'D': '𝒟', 'E': 'ℰ', 'F': 'ℱ', 'G': '𝒢', 'H': 'ℋ', 'I': 'ℐ', 'J': '𝒥',
        'K': '𝒦', 'L': 'ℒ', 'M': 'ℳ', 'N': '𝒩', 'O': '𝒪', 'P': '𝒫', 'Q': '𝒬', 'R': 'ℛ', 'S': '𝒮', 'T': '𝒯',
        'U': '𝒰', 'V': '𝒱', 'W': '𝒲', 'X': '𝒳', 'Y': '𝒴', 'Z': '𝒵',
        'a': '𝒶', 'b': '𝒷', 'c': '𝒸', 'd': '𝒹', 'e': 'ℯ', 'f': '𝒻', 'g': 'ℊ', 'h': '𝒽', 'i': '𝒾', 'j': '𝒿',
        'k': '𝓀', 'l': '𝓁', 'm': '𝓂', 'n': '𝓃', 'o': 'ℴ', 'p': '𝓅', 'q': '𝓆', 'r': '𝓇', 's': '𝓈', 't': '𝓉',
        'u': '𝓊', 'v': '𝓋', 'w': '𝓌', 'x': '𝓍', 'y': '𝓎', 'z': '𝓏'
      };
      return flowing[char] || char;
    }).join('')
  },
  // Decorated Text字体
  {
    name: 'Star Decoration',
    category: 'Decorated Text',
    convert: (text: string) => '✨ ' + text + ' ✨'
  },
  {
    name: 'Heart Decoration',
    category: 'Decorated Text',
    convert: (text: string) => '💖 ' + text + ' 💖'
  },
  {
    name: 'Sparkle Decoration',
    category: 'Decorated Text',
    convert: (text: string) => text.split('').map(char => {
      if (char === ' ') return ' ';
      return '✨' + char + '✨';
    }).join(' ')
  },
  // Fancy Decorated Fonts字体
  {
    name: 'Royal Fancy',
    category: 'Fancy Decorated Fonts',
    convert: (text: string) => '👑✨ ' + text + ' ✨👑'
  },
  {
    name: 'Elegant Fancy',
    category: 'Fancy Decorated Fonts',
    convert: (text: string) => text.split('').map(char => {
      const fancy: Record<string, string> = {
        'A': '𝒜', 'B': 'ℬ', 'C': '𝒞', 'D': '𝒟', 'E': 'ℰ', 'F': 'ℱ', 'G': '𝒢', 'H': 'ℋ', 'I': 'ℐ', 'J': '𝒥',
        'K': '𝒦', 'L': 'ℒ', 'M': 'ℳ', 'N': '𝒩', 'O': '𝒪', 'P': '𝒫', 'Q': '𝒬', 'R': 'ℛ', 'S': '𝒮', 'T': '𝒯',
        'U': '𝒰', 'V': '𝒱', 'W': '𝒲', 'X': '𝒳', 'Y': '𝒴', 'Z': '𝒵',
        'a': '𝒶', 'b': '𝒷', 'c': '𝒸', 'd': '𝒹', 'e': 'ℯ', 'f': '𝒻', 'g': 'ℊ', 'h': '𝒽', 'i': '𝒾', 'j': '𝒿',
        'k': '𝓀', 'l': '𝓁', 'm': '𝓂', 'n': '𝓃', 'o': 'ℴ', 'p': '𝓅', 'q': '𝓆', 'r': '𝓇', 's': '𝓈', 't': '𝓉',
        'u': '𝓊', 'v': '𝓋', 'w': '𝓌', 'x': '𝓍', 'y': '𝓎', 'z': '𝓏'
      };
      return fancy[char] || char;
    }).join('')
  },
  {
    name: 'Diamond Fancy',
    category: 'Fancy Decorated Fonts',
    convert: (text: string) => '💎◆ ' + text + ' ◆💎'
  },
  {
    name: 'Stylish Italic',
    category: 'Fancy',
    convert: (text: string) => text.split('').map(char => {
      const stylishItalic: Record<string, string> = {
        'A': '𝐴', 'B': '𝐵', 'C': '𝐶', 'D': '𝐷', 'E': '𝐸', 'F': '𝐹', 'G': '𝐺', 'H': '𝐻', 'I': '𝐼', 'J': '𝐽',
        'K': '𝐾', 'L': '𝐿', 'M': '𝑀', 'N': '𝑁', 'O': '𝑂', 'P': '𝑃', 'Q': '𝑄', 'R': '𝑅', 'S': '𝑆', 'T': '𝑇',
        'U': '𝑈', 'V': '𝑉', 'W': '𝑊', 'X': '𝑋', 'Y': '𝑌', 'Z': '𝑍',
        'a': '𝑎', 'b': '𝑏', 'c': '𝑐', 'd': '𝑑', 'e': '𝑒', 'f': '𝑓', 'g': '𝑔', 'h': '𝒉', 'i': '𝑖', 'j': '𝑗',
        'k': '𝑘', 'l': '𝑙', 'm': '𝑚', 'n': '𝑛', 'o': '𝑜', 'p': '𝑝', 'q': '𝑞', 'r': '𝑟', 's': '𝑠', 't': '𝑡',
        'u': '𝑢', 'v': '𝑣', 'w': '𝑤', 'x': '𝑥', 'y': '𝑦', 'z': '𝑧'
      };
      return stylishItalic[char] || char;
    }).join('')
  },
  // 更多Cursive字体
  {
    name: 'Flowing Script',
    category: 'Cursive',
    convert: (text: string) => text.split('').map(char => {
      const flowing: Record<string, string> = {
        'A': '𝒜', 'B': 'ℬ', 'C': '𝒞', 'D': '𝒟', 'E': 'ℰ', 'F': 'ℱ', 'G': '𝒢', 'H': 'ℋ', 'I': 'ℐ', 'J': '𝒥',
        'K': '𝒦', 'L': 'ℒ', 'M': 'ℳ', 'N': '𝒩', 'O': '𝒪', 'P': '𝒫', 'Q': '𝒬', 'R': 'ℛ', 'S': '𝒮', 'T': '𝒯',
        'U': '𝒰', 'V': '𝒱', 'W': '𝒲', 'X': '𝒳', 'Y': '𝒴', 'Z': '𝒵',
        'a': '𝒶', 'b': '𝒷', 'c': '𝒸', 'd': '𝒹', 'e': 'ℯ', 'f': '𝒻', 'g': 'ℊ', 'h': '𝒽', 'i': '𝒾', 'j': '𝒿',
        'k': '𝓀', 'l': '𝓁', 'm': '𝓂', 'n': '𝓃', 'o': 'ℴ', 'p': '𝓅', 'q': '𝓆', 'r': '𝓇', 's': '𝓈', 't': '𝓉',
        'u': '𝓊', 'v': '𝓋', 'w': '𝓌', 'x': '𝓍', 'y': '𝓎', 'z': '𝓏'
      };
      return flowing[char] || char;
    }).join('')
  },
  {
    name: 'Calligraphy',
    category: 'Cursive',
    convert: (text: string) => text.split('').map(char => {
      const calligraphy: Record<string, string> = {
        'A': '𝓐', 'B': '𝓑', 'C': '𝓒', 'D': '𝓓', 'E': '𝓔', 'F': '𝓕', 'G': '𝓖', 'H': '𝓗', 'I': '𝓘', 'J': '𝓙',
        'K': '𝓚', 'L': '𝓛', 'M': '𝓜', 'N': '𝓝', 'O': '𝓞', 'P': '𝓟', 'Q': '𝓠', 'R': '𝓡', 'S': '𝓢', 'T': '𝓣',
        'U': '𝓤', 'V': '𝓥', 'W': '𝓦', 'X': '𝓧', 'Y': '𝓨', 'Z': '𝓩',
        'a': '𝓪', 'b': '𝓫', 'c': '𝓬', 'd': '𝓭', 'e': '𝓮', 'f': '𝓯', 'g': '𝓰', 'h': '𝓱', 'i': '𝓲', 'j': '𝓳',
        'k': '𝓴', 'l': '𝓵', 'm': '𝓶', 'n': '𝓷', 'o': '𝓸', 'p': '𝓹', 'q': '𝓺', 'r': '𝓻', 's': '𝓼', 't': '𝓽',
        'u': '𝓾', 'v': '𝓿', 'w': '𝔀', 'x': '𝔁', 'y': '𝔂', 'z': '𝔃'
      };
      return calligraphy[char] || char;
    }).join('')
  },
  {
    name: 'Cursive Bold',
    category: 'Cursive',
    convert: (text: string) => text.split('').map(char => {
      const cursiveBold: Record<string, string> = {
        'A': '𝑨', 'B': '𝑩', 'C': '𝑪', 'D': '𝑫', 'E': '𝑬', 'F': '𝑭', 'G': '𝑮', 'H': '𝑯', 'I': '𝑰', 'J': '𝑱',
        'K': '𝑲', 'L': '𝑳', 'M': '𝑴', 'N': '𝑵', 'O': '𝑶', 'P': '𝑷', 'Q': '𝑸', 'R': '𝑹', 'S': '𝑺', 'T': '𝑻',
        'U': '𝑼', 'V': '𝑽', 'W': '𝑾', 'X': '𝑿', 'Y': '𝒀', 'Z': '𝒁',
        'a': '𝒂', 'b': '𝒃', 'c': '𝒄', 'd': '𝒅', 'e': '𝒆', 'f': '𝒇', 'g': '𝒈', 'h': '𝒉', 'i': '𝒊', 'j': '𝒋',
        'k': '𝒌', 'l': '𝒍', 'm': '𝒎', 'n': '𝒏', 'o': '𝒐', 'p': '𝒑', 'q': '𝒒', 'r': '𝒓', 's': '𝒔', 't': '𝒕',
        'u': '𝒖', 'v': '𝒗', 'w': '𝒘', 'x': '𝒙', 'y': '𝒚', 'z': '𝒛'
      };
      return cursiveBold[char] || char;
    }).join('')
  },
  {
    name: 'Elegant Cursive',
    category: 'Cursive',
    convert: (text: string) => text.split('').map(char => {
      const elegantCursive: Record<string, string> = {
        'A': '𝒜', 'B': 'ℬ', 'C': '𝒞', 'D': '𝒟', 'E': 'ℰ', 'F': 'ℱ', 'G': '𝒢', 'H': 'ℋ', 'I': 'ℐ', 'J': '𝒥',
        'K': '𝒦', 'L': 'ℒ', 'M': 'ℳ', 'N': '𝒩', 'O': '𝒪', 'P': '𝒫', 'Q': '𝒬', 'R': 'ℛ', 'S': '𝒮', 'T': '𝒯',
        'U': '𝒰', 'V': '𝒱', 'W': '𝒲', 'X': '𝒳', 'Y': '𝒴', 'Z': '𝒵',
        'a': '𝒶', 'b': '𝒷', 'c': '𝒸', 'd': '𝒹', 'e': 'ℯ', 'f': '𝒻', 'g': 'ℊ', 'h': '𝒽', 'i': '𝒾', 'j': '𝒿',
        'k': '𝓀', 'l': '𝓁', 'm': '𝓂', 'n': '𝓃', 'o': 'ℴ', 'p': '𝓅', 'q': '𝓆', 'r': '𝓇', 's': '𝓈', 't': '𝓉',
        'u': '𝓊', 'v': '𝓋', 'w': '𝓌', 'x': '𝓍', 'y': '𝓎', 'z': '𝓏'
      };
      return elegantCursive[char] || char;
    }).join('')
  },
  // 更多Small字体
  {
    name: 'Micro Text',
    category: 'Small',
    convert: (text: string) => text.split('').map(char => {
      const micro: Record<string, string> = {
        'A': 'ᴀ', 'B': 'ʙ', 'C': 'ᴄ', 'D': 'ᴅ', 'E': 'ᴇ', 'F': 'ꜰ', 'G': 'ɢ', 'H': 'ʜ', 'I': 'ɪ', 'J': 'ᴊ',
        'K': 'ᴋ', 'L': 'ʟ', 'M': 'ᴍ', 'N': 'ɴ', 'O': 'ᴏ', 'P': 'ᴘ', 'Q': 'Q', 'R': 'ʀ', 'S': 'ꜱ', 'T': 'ᴛ',
        'U': 'ᴜ', 'V': 'ᴠ', 'W': 'ᴡ', 'X': 'x', 'Y': 'ʏ', 'Z': 'ᴢ',
        'a': 'ᴀ', 'b': 'ʙ', 'c': 'ᴄ', 'd': 'ᴅ', 'e': 'ᴇ', 'f': 'ꜰ', 'g': 'ɢ', 'h': 'ʜ', 'i': 'ɪ', 'j': 'ᴊ',
        'k': 'ᴋ', 'l': 'ʟ', 'm': 'ᴍ', 'n': 'ɴ', 'o': 'ᴏ', 'p': 'ᴘ', 'q': 'Q', 'r': 'ʀ', 's': 'ꜱ', 't': 'ᴛ',
        'u': 'ᴜ', 'v': 'ᴠ', 'w': 'ᴡ', 'x': 'x', 'y': 'ʏ', 'z': 'ᴢ'
      };
      return micro[char] || char;
    }).join('')
  },
  {
    name: 'Compressed',
    category: 'Small',
    convert: (text: string) => text.split('').map(char => {
      const compressed: Record<string, string> = {
        'A': 'ᴬ', 'B': 'ᴮ', 'C': 'ᶜ', 'D': 'ᴰ', 'E': 'ᴱ', 'F': 'ᶠ', 'G': 'ᴳ', 'H': 'ᴴ', 'I': 'ᴵ', 'J': 'ᴶ',
        'K': 'ᴷ', 'L': 'ᴸ', 'M': 'ᴹ', 'N': 'ᴺ', 'O': 'ᴼ', 'P': 'ᴾ', 'Q': 'Q', 'R': 'ᴿ', 'S': 'ˢ', 'T': 'ᵀ',
        'U': 'ᵁ', 'V': 'ⱽ', 'W': 'ᵂ', 'X': 'ˣ', 'Y': 'ʸ', 'Z': 'ᶻ',
        'a': 'ᵃ', 'b': 'ᵇ', 'c': 'ᶜ', 'd': 'ᵈ', 'e': 'ᵉ', 'f': 'ᶠ', 'g': 'ᵍ', 'h': 'ʰ', 'i': 'ⁱ', 'j': 'ʲ',
        'k': 'ᵏ', 'l': 'ˡ', 'm': 'ᵐ', 'n': 'ⁿ', 'o': 'ᵒ', 'p': 'ᵖ', 'q': 'ᵠ', 'r': 'ʳ', 's': 'ˢ', 't': 'ᵗ',
        'u': 'ᵘ', 'v': 'ᵛ', 'w': 'ʷ', 'x': 'ˣ', 'y': 'ʸ', 'z': 'ᶻ'
      };
      return compressed[char] || char;
    }).join('')
  },
  {
    name: 'Petite',
    category: 'Small',
    convert: (text: string) => text.split('').map(char => {
      const petite: Record<string, string> = {
        'A': 'ₐ', 'B': 'ᵦ', 'C': 'ᶜ', 'D': 'ᵈ', 'E': 'ₑ', 'F': 'ᶠ', 'G': 'ᵍ', 'H': 'ₕ', 'I': 'ᵢ', 'J': 'ⱼ',
        'K': 'ₖ', 'L': 'ₗ', 'M': 'ₘ', 'N': 'ₙ', 'O': 'ₒ', 'P': 'ₚ', 'Q': 'Q', 'R': 'ᵣ', 'S': 'ₛ', 'T': 'ₜ',
        'U': 'ᵤ', 'V': 'ᵥ', 'W': 'w', 'X': 'ₓ', 'Y': 'y', 'Z': 'z',
        'a': 'ₐ', 'b': 'ᵦ', 'c': 'ᶜ', 'd': 'ᵈ', 'e': 'ₑ', 'f': 'ᶠ', 'g': 'ᵍ', 'h': 'ₕ', 'i': 'ᵢ', 'j': 'ⱼ',
        'k': 'ₖ', 'l': 'ₗ', 'm': 'ₘ', 'n': 'ₙ', 'o': 'ₒ', 'p': 'ₚ', 'q': 'Q', 'r': 'ᵣ', 's': 'ₛ', 't': 'ₜ',
        'u': 'ᵤ', 'v': 'ᵥ', 'w': 'w', 'x': 'ₓ', 'y': 'y', 'z': 'z'
      };
      return petite[char] || char;
    }).join('')
  },
  {
    name: 'Miniature',
    category: 'Small',
    convert: (text: string) => text.split('').map(char => {
      const miniature: Record<string, string> = {
        'A': 'ᴀ', 'B': 'ʙ', 'C': 'ᴄ', 'D': 'ᴅ', 'E': 'ᴇ', 'F': 'ꜰ', 'G': 'ɢ', 'H': 'ʜ', 'I': 'ɪ', 'J': 'ᴊ',
        'K': 'ᴋ', 'L': 'ʟ', 'M': 'ᴍ', 'N': 'ɴ', 'O': 'ᴏ', 'P': 'ᴘ', 'Q': 'Q', 'R': 'ʀ', 'S': 'ꜱ', 'T': 'ᴛ',
        'U': 'ᴜ', 'V': 'ᴠ', 'W': 'ᴡ', 'X': 'x', 'Y': 'ʏ', 'Z': 'ᴢ'
      };
      return miniature[char.toUpperCase()] || char.toLowerCase();
    }).join('')
  },
  // Elegant Fonts
  {
    name: 'Royal Script',
    category: 'Elegant Fonts',
    convert: (text: string) => text.split('').map(char => {
      const royal: Record<string, string> = {
        'A': '𝒜', 'B': 'ℬ', 'C': '𝒞', 'D': '𝒟', 'E': 'ℰ', 'F': 'ℱ', 'G': '𝒢', 'H': 'ℋ', 'I': 'ℐ', 'J': '𝒥',
        'K': '𝒦', 'L': 'ℒ', 'M': 'ℳ', 'N': '𝒩', 'O': '𝒪', 'P': '𝒫', 'Q': '𝒬', 'R': 'ℛ', 'S': '𝒮', 'T': '𝒯',
        'U': '𝒰', 'V': '𝒱', 'W': '𝒲', 'X': '𝒳', 'Y': '𝒴', 'Z': '𝒵',
        'a': '𝒶', 'b': '𝒷', 'c': '𝒸', 'd': '𝒹', 'e': 'ℯ', 'f': '𝒻', 'g': 'ℊ', 'h': '𝒽', 'i': '𝒾', 'j': '𝒿',
        'k': '𝓀', 'l': '𝓁', 'm': '𝓂', 'n': '𝓃', 'o': 'ℴ', 'p': '𝓅', 'q': '𝓆', 'r': '𝓇', 's': '𝓈', 't': '𝓉',
        'u': '𝓊', 'v': '𝓋', 'w': '𝓌', 'x': '𝓍', 'y': '𝓎', 'z': '𝓏'
      };
      return royal[char] || char;
    }).join('')
  },
  {
    name: 'Aristocratic',
    category: 'Elegant Fonts',
    convert: (text: string) => text.split('').map(char => {
      const aristocratic: Record<string, string> = {
        'A': '𝔸', 'B': '𝔹', 'C': 'ℂ', 'D': '𝔻', 'E': '𝔼', 'F': '𝔽', 'G': '𝔾', 'H': 'ℍ', 'I': '𝕀', 'J': '𝕁',
        'K': '𝕂', 'L': '𝕃', 'M': '𝕄', 'N': 'ℕ', 'O': '𝕆', 'P': 'ℙ', 'Q': 'ℚ', 'R': 'ℝ', 'S': '𝕊', 'T': '𝕋',
        'U': '𝕌', 'V': '𝕍', 'W': '𝕎', 'X': '𝕏', 'Y': '𝕐', 'Z': 'ℤ',
        'a': '𝕒', 'b': '𝕓', 'c': '𝕔', 'd': '𝕕', 'e': '𝕖', 'f': '𝕗', 'g': '𝕘', 'h': '𝕙', 'i': '𝕚', 'j': '𝕛',
        'k': '𝕜', 'l': '𝕝', 'm': '𝕞', 'n': '𝕟', 'o': '𝕠', 'p': '𝕡', 'q': '𝕢', 'r': '𝕣', 's': '𝕤', 't': '𝕥',
        'u': '𝕦', 'v': '𝕧', 'w': '𝕨', 'x': '𝕩', 'y': '𝕪', 'z': '𝕫'
      };
      return aristocratic[char] || char;
    }).join('')
  },
  {
    name: 'Sophisticated',
    category: 'Elegant Fonts',
    convert: (text: string) => text.split('').map(char => {
      const sophisticated: Record<string, string> = {
        'A': '𝓐', 'B': '𝓑', 'C': '𝓒', 'D': '𝓓', 'E': '𝓔', 'F': '𝓕', 'G': '𝓖', 'H': '𝓗', 'I': '𝓘', 'J': '𝓙',
        'K': '𝓚', 'L': '𝓛', 'M': '𝓜', 'N': '𝓝', 'O': '𝓞', 'P': '𝓟', 'Q': '𝓠', 'R': '𝓡', 'S': '𝓢', 'T': '𝓣',
        'U': '𝓤', 'V': '𝓥', 'W': '𝓦', 'X': '𝓧', 'Y': '𝓨', 'Z': '𝓩',
        'a': '𝓪', 'b': '𝓫', 'c': '𝓬', 'd': '𝓭', 'e': '𝓮', 'f': '𝓯', 'g': '𝓰', 'h': '𝓱', 'i': '𝓲', 'j': '𝓳',
        'k': '𝓴', 'l': '𝓵', 'm': '𝓶', 'n': '𝓷', 'o': '𝓸', 'p': '𝓹', 'q': '𝓺', 'r': '𝓻', 's': '𝓼', 't': '𝓽',
        'u': '𝓾', 'v': '𝓿', 'w': '𝔀', 'x': '𝔁', 'y': '𝔂', 'z': '𝔃'
      };
      return sophisticated[char] || char;
    }).join('')
  },
  {
    name: 'Luxurious',
    category: 'Elegant Fonts',
    convert: (text: string) => text.split('').map(char => {
      const luxurious: Record<string, string> = {
        'A': '𝔄', 'B': '𝔅', 'C': 'ℭ', 'D': '𝔇', 'E': '𝔈', 'F': '𝔉', 'G': '𝔊', 'H': 'ℌ', 'I': 'ℑ', 'J': '𝔍',
        'K': '𝔎', 'L': '𝔏', 'M': '𝔐', 'N': '𝔑', 'O': '𝔒', 'P': '𝔓', 'Q': '𝔔', 'R': 'ℜ', 'S': '𝔖', 'T': '𝔗',
        'U': '𝔘', 'V': '𝔙', 'W': '𝔚', 'X': '𝔛', 'Y': '𝔜', 'Z': 'ℨ',
        'a': '𝔞', 'b': '𝔟', 'c': '𝔠', 'd': '𝔡', 'e': '𝔢', 'f': '𝔣', 'g': '𝔤', 'h': '𝔥', 'i': '𝔦', 'j': '𝔧',
        'k': '𝔨', 'l': '𝔩', 'm': '𝔪', 'n': '𝔫', 'o': '𝔬', 'p': '𝔭', 'q': '𝔮', 'r': '𝔯', 's': '𝔰', 't': '𝔱',
        'u': '𝔲', 'v': '𝔳', 'w': '𝔴', 'x': '𝔵', 'y': '𝔶', 'z': '𝔷'
      };
      return luxurious[char] || char;
    }).join('')
  },
  {
    name: 'Noble',
    category: 'Elegant Fonts',
    convert: (text: string) => text.split('').map(char => {
      const noble: Record<string, string> = {
        'A': '𝘈', 'B': '𝘉', 'C': '𝘊', 'D': '𝘋', 'E': '𝘌', 'F': '𝘍', 'G': '𝘎', 'H': '𝘏', 'I': '𝘐', 'J': '𝘑',
        'K': '𝘒', 'L': '𝘓', 'M': '𝘔', 'N': '𝘕', 'O': '𝘖', 'P': '𝘗', 'Q': '𝘘', 'R': '𝘙', 'S': '𝘚', 'T': '𝘛',
        'U': '𝘜', 'V': '𝘝', 'W': '𝘞', 'X': '𝘟', 'Y': '𝘠', 'Z': '𝘡',
        'a': '𝘢', 'b': '𝘣', 'c': '𝘤', 'd': '𝘥', 'e': '𝘦', 'f': '𝘧', 'g': '𝘨', 'h': '𝘩', 'i': '𝘪', 'j': '𝘫',
        'k': '𝘬', 'l': '𝘭', 'm': '𝘮', 'n': '𝘯', 'o': '𝘰', 'p': '𝘱', 'q': '𝘲', 'r': '𝘳', 's': '𝘴', 't': '𝘵',
        'u': '𝘶', 'v': '𝘷', 'w': '𝘸', 'x': '𝘹', 'y': '𝘺', 'z': '𝘻'
      };
      return noble[char] || char;
    }).join('')
  },
  {
    name: 'Refined',
    category: 'Elegant Fonts',
    convert: (text: string) => text.split('').map(char => {
      const refined: Record<string, string> = {
        'A': '𝙰', 'B': '𝙱', 'C': '𝙲', 'D': '𝙳', 'E': '𝙴', 'F': '𝙵', 'G': '𝙶', 'H': '𝙷', 'I': '𝙸', 'J': '𝙹',
        'K': '𝙺', 'L': '𝙻', 'M': '𝙼', 'N': '𝙽', 'O': '𝙾', 'P': '𝙿', 'Q': '𝚀', 'R': '𝚁', 'S': '𝚂', 'T': '𝚃',
        'U': '𝚄', 'V': '𝚅', 'W': '𝚆', 'X': '𝚇', 'Y': '𝚈', 'Z': '𝚉',
        'a': '𝚊', 'b': '𝚋', 'c': '𝚌', 'd': '𝚍', 'e': '𝚎', 'f': '𝚏', 'g': '𝚐', 'h': '𝚑', 'i': '𝚒', 'j': '𝚓',
        'k': '𝚔', 'l': '𝚕', 'm': '𝚖', 'n': '𝚗', 'o': '𝚘', 'p': '𝚙', 'q': '𝚚', 'r': '𝚛', 's': '𝚜', 't': '𝚝',
        'u': '𝚞', 'v': '𝚟', 'w': '𝚠', 'x': '𝚡', 'y': '𝚢', 'z': '𝚣'
      };
      return refined[char] || char;
    }).join('')
  },
  // Linear Text Fonts
  {
    name: 'Underlined',
    category: 'Linear Text Fonts',
    convert: (text: string) => text.split('').map(char => char + '̲').join('')
  },
  {
    name: 'Overlined',
    category: 'Linear Text Fonts',
    convert: (text: string) => text.split('').map(char => char + '̅').join('')
  },
  {
    name: 'Double Lined',
    category: 'Linear Text Fonts',
    convert: (text: string) => text.split('').map(char => char + '̳').join('')
  },
  {
    name: 'Strikethrough',
    category: 'Linear Text Fonts',
    convert: (text: string) => text.split('').map(char => char + '̶').join('')
  },
  {
    name: 'Wavy Line',
    category: 'Linear Text Fonts',
    convert: (text: string) => text.split('').map(char => char + '̰').join('')
  },
  {
    name: 'Dotted Line',
    category: 'Linear Text Fonts',
    convert: (text: string) => text.split('').map(char => char + '̤').join('')
  },
  {
    name: 'Dashed Line',
    category: 'Linear Text Fonts',
    convert: (text: string) => text.split('').map(char => char + '̭').join('')
  },
  {
    name: 'Triple Line',
    category: 'Linear Text Fonts',
    convert: (text: string) => text.split('').map(char => char + '̲' + '̅').join('')
  },
  // Connected Fonts
  {
    name: 'Chain Link',
    category: 'Connected Fonts',
    convert: (text: string) => text.split('').join('⁀')
  },
  {
    name: 'Linked Text',
    category: 'Connected Fonts',
    convert: (text: string) => text.split('').join('‿')
  },
  {
    name: 'Bridge Text',
    category: 'Connected Fonts',
    convert: (text: string) => text.split('').join('⌒')
  },
  {
    name: 'Arc Connect',
    category: 'Connected Fonts',
    convert: (text: string) => text.split('').join('⌢')
  },
  {
    name: 'Curve Link',
    category: 'Connected Fonts',
    convert: (text: string) => text.split('').join('⌣')
  },
  {
    name: 'Wave Connect',
    category: 'Connected Fonts',
    convert: (text: string) => text.split('').join('∼')
  },
  {
    name: 'Tie Connect',
    category: 'Connected Fonts',
    convert: (text: string) => text.split('').join('⁔')
  },
  {
    name: 'Flow Connect',
    category: 'Connected Fonts',
    convert: (text: string) => text.split('').join('͢')
  },
  // Crowned Aesthetic Letters
  {
    name: 'Crown Top',
    category: 'Crowned Aesthetic Letters',
    convert: (text: string) => text.split('').map(char => '♔' + char).join(' ')
  },
  {
    name: 'Royal Crown',
    category: 'Crowned Aesthetic Letters',
    convert: (text: string) => text.split('').map(char => char + '♕').join(' ')
  },
  {
    name: 'Majestic',
    category: 'Crowned Aesthetic Letters',
    convert: (text: string) => '♔ ' + text.split('').join(' ♔ ') + ' ♔'
  },
  {
    name: 'Imperial',
    category: 'Crowned Aesthetic Letters',
    convert: (text: string) => '♛ ' + text + ' ♛'
  },
  {
    name: 'Regal',
    category: 'Crowned Aesthetic Letters',
    convert: (text: string) => text.split('').map(char => '♚' + char + '♚').join(' ')
  },
  {
    name: 'Sovereign',
    category: 'Crowned Aesthetic Letters',
    convert: (text: string) => '♔♕♔ ' + text + ' ♔♕♔'
  },
  {
    name: 'Crowned Script',
    category: 'Crowned Aesthetic Letters',
    convert: (text: string) => text.split('').map(char => {
      const crowned: Record<string, string> = {
        'A': '♔A♔', 'B': '♔B♔', 'C': '♔C♔', 'D': '♔D♔', 'E': '♔E♔', 'F': '♔F♔', 'G': '♔G♔', 'H': '♔H♔', 'I': '♔I♔', 'J': '♔J♔',
        'K': '♔K♔', 'L': '♔L♔', 'M': '♔M♔', 'N': '♔N♔', 'O': '♔O♔', 'P': '♔P♔', 'Q': '♔Q♔', 'R': '♔R♔', 'S': '♔S♔', 'T': '♔T♔',
        'U': '♔U♔', 'V': '♔V♔', 'W': '♔W♔', 'X': '♔X♔', 'Y': '♔Y♔', 'Z': '♔Z♔'
      };
      return crowned[char.toUpperCase()] || char;
    }).join(' ')
  },
  {
    name: 'Royal Monogram',
    category: 'Crowned Aesthetic Letters',
    convert: (text: string) => '♛♔♛ ' + text.split('').join(' ♕ ') + ' ♛♔♛'
  },
  // Intersected Fonts
  {
    name: 'Cross Through',
    category: 'Intersected Fonts',
    convert: (text: string) => text.split('').map(char => char + '̸').join('')
  },
  {
    name: 'Diagonal Strike',
    category: 'Intersected Fonts',
    convert: (text: string) => text.split('').map(char => char + '̷').join('')
  },
  {
    name: 'X Marked',
    category: 'Intersected Fonts',
    convert: (text: string) => text.split('').map(char => char + '̽').join('')
  },
  {
    name: 'Slash Cut',
    category: 'Intersected Fonts',
    convert: (text: string) => text.split('').map(char => char + '̴').join('')
  },
  {
    name: 'Double Cross',
    category: 'Intersected Fonts',
    convert: (text: string) => text.split('').map(char => char + '̸' + '̷').join('')
  },
  {
    name: 'Broken Line',
    category: 'Intersected Fonts',
    convert: (text: string) => text.split('').map(char => char + '̵').join('')
  },
  {
    name: 'Cut Through',
    category: 'Intersected Fonts',
    convert: (text: string) => text.split('').map(char => char + '̶').join('')
  },
  {
    name: 'Intersect Mark',
    category: 'Intersected Fonts',
    convert: (text: string) => text.split('').map(char => char + '̼').join('')
  },
  // Framed Fonts
  {
    name: 'Box Frame',
    category: 'Framed Fonts',
    convert: (text: string) => {
      const length = text.length;
      const top = '┌' + '─'.repeat(length + 2) + '┐';
      const middle = '│ ' + text + ' │';
      const bottom = '└' + '─'.repeat(length + 2) + '┘';
      return top + '\n' + middle + '\n' + bottom;
    }
  },
  {
    name: 'Double Frame',
    category: 'Framed Fonts',
    convert: (text: string) => {
      const length = text.length;
      const top = '╔' + '═'.repeat(length + 2) + '╗';
      const middle = '║ ' + text + ' ║';
      const bottom = '╚' + '═'.repeat(length + 2) + '╝';
      return top + '\n' + middle + '\n' + bottom;
    }
  },
  {
    name: 'Round Frame',
    category: 'Framed Fonts',
    convert: (text: string) => {
      const length = text.length;
      const top = '╭' + '─'.repeat(length + 2) + '╮';
      const middle = '│ ' + text + ' │';
      const bottom = '╰' + '─'.repeat(length + 2) + '╯';
      return top + '\n' + middle + '\n' + bottom;
    }
  },
  {
    name: 'Thick Frame',
    category: 'Framed Fonts',
    convert: (text: string) => {
      const length = text.length;
      const top = '┏' + '━'.repeat(length + 2) + '┓';
      const middle = '┃ ' + text + ' ┃';
      const bottom = '┗' + '━'.repeat(length + 2) + '┛';
      return top + '\n' + middle + '\n' + bottom;
    }
  },
  {
    name: 'Star Frame',
    category: 'Framed Fonts',
    convert: (text: string) => {
      const stars = '★'.repeat(text.length + 4);
      return stars + '\n★ ' + text + ' ★\n' + stars;
    }
  },
  {
    name: 'Diamond Frame',
    category: 'Framed Fonts',
    convert: (text: string) => {
      const diamonds = '◆'.repeat(text.length + 4);
      return diamonds + '\n◆ ' + text + ' ◆\n' + diamonds;
    }
  },
  {
    name: 'Heart Frame',
    category: 'Framed Fonts',
    convert: (text: string) => {
      const hearts = '♥'.repeat(text.length + 4);
      return hearts + '\n♥ ' + text + ' ♥\n' + hearts;
    }
  },
  {
    name: 'Flower Frame',
    category: 'Framed Fonts',
    convert: (text: string) => {
      const flowers = '❀'.repeat(text.length + 4);
      return flowers + '\n❀ ' + text + ' ❀\n' + flowers;
    }
  },
  // Random Fonts
  {
    name: 'Mixed Case',
    category: 'Random Fonts',
    convert: (text: string) => text.split('').map((char, index) =>
      getDeterministicBoolean(index, 0.5, 1000) ? char.toUpperCase() : char.toLowerCase()
    ).join('')
  },
  {
    name: 'Random Symbols',
    category: 'Random Fonts',
    convert: (text: string) => {
      const symbols = ['★', '☆', '♦', '♧', '♠', '♣', '♥', '♡', '◆', '◇', '●', '○'];
      return text.split('').map((char, index) => {
        if (char === ' ') return ' ';
        if (getDeterministicBoolean(index, 0.7, 1100)) {
          const symbolIndex = getDeterministicIndex(index, symbols.length, 1200);
          return symbols[symbolIndex];
        }
        return char;
      }).join('');
    }
  },
  {
    name: 'Chaos Text',
    category: 'Random Fonts',
    convert: (text: string) => {
      const effects = ['̸', '̵', '̶', '̷', '̴', '̲', '̳', '̅', '̰', '̤'];
      return text.split('').map((char, index) => {
        if (char === ' ') return char;
        const effectIndex = getDeterministicIndex(index, effects.length, 1300);
        return getDeterministicBoolean(index, 0.5, 1400) ? char + effects[effectIndex] : char;
      }).join('');
    }
  },
  {
    name: 'Random Flip',
    category: 'Random Fonts',
    convert: (text: string) => {
      const flipped: Record<string, string> = {
        'A': '∀', 'B': 'ᗺ', 'C': 'Ɔ', 'D': 'ᗡ', 'E': 'Ǝ', 'F': 'ᖴ', 'G': 'פ', 'H': 'H', 'I': 'I', 'J': 'ſ',
        'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ƃ', 'h': 'ɥ', 'i': 'ᴉ', 'j': 'ɾ'
      };
      return text.split('').map((char, index) => {
        return getDeterministicBoolean(index, 0.6, 1500) ? (flipped[char] || char) : char;
      }).join('');
    }
  },
  {
    name: 'Random Decorations',
    category: 'Random Fonts',
    convert: (text: string) => {
      const decorations = ['✦', '❀', '♥', '★', '◆', '♔', '⚡', '🌟', '💎', '🔥'];
      return text.split('').map((char, index) => {
        if (char === ' ') return ' ';
        const decorationIndex = getDeterministicIndex(index, decorations.length, 1600);
        const decoration = decorations[decorationIndex];
        return getDeterministicBoolean(index, 0.7, 1700) ? decoration + char + decoration : char;
      }).join(' ');
    }
  },
  {
    name: 'Glitch Random',
    category: 'Random Fonts',
    convert: (text: string) => {
      const glitchChars = ['█', '▓', '▒', '░', '▄', '▀', '■', '□', '▪', '▫'];
      return text.split('').map((char, index) => {
        if (char === ' ') return ' ';
        if (getDeterministicBoolean(index, 0.8, 1800)) {
          const glitchIndex = getDeterministicIndex(index, glitchChars.length, 1900);
          return glitchChars[glitchIndex];
        }
        return char;
      }).join('');
    }
  },
  // Flowing Fonts
  {
    name: 'Wave Text',
    category: 'Flowing Fonts',
    convert: (text: string) => text.split('').map(char => char + '͢').join('')
  },
  {
    name: 'Flowing Script',
    category: 'Flowing Fonts',
    convert: (text: string) => text.split('').map(char => {
      const flowing: Record<string, string> = {
        'A': '𝒜', 'B': 'ℬ', 'C': '𝒞', 'D': '𝒟', 'E': 'ℰ', 'F': 'ℱ', 'G': '𝒢', 'H': 'ℋ', 'I': 'ℐ', 'J': '𝒥',
        'K': '𝒦', 'L': 'ℒ', 'M': 'ℳ', 'N': '𝒩', 'O': '𝒪', 'P': '𝒫', 'Q': '𝒬', 'R': 'ℛ', 'S': '𝒮', 'T': '𝒯',
        'U': '𝒰', 'V': '𝒱', 'W': '𝒲', 'X': '𝒳', 'Y': '𝒴', 'Z': '𝒵',
        'a': '𝒶', 'b': '𝒷', 'c': '𝒸', 'd': '𝒹', 'e': 'ℯ', 'f': '𝒻', 'g': 'ℊ', 'h': '𝒽', 'i': '𝒾', 'j': '𝒿',
        'k': '𝓀', 'l': '𝓁', 'm': '𝓂', 'n': '𝓃', 'o': 'ℴ', 'p': '𝓅', 'q': '𝓆', 'r': '𝓇', 's': '𝓈', 't': '𝓉',
        'u': '𝓊', 'v': '𝓋', 'w': '𝓌', 'x': '𝓍', 'y': '𝓎', 'z': '𝓏'
      };
      return flowing[char] || char;
    }).join('')
  },
  {
    name: 'Liquid Text',
    category: 'Flowing Fonts',
    convert: (text: string) => text.split('').map(char => char + '͡').join('')
  },
  {
    name: 'Stream Flow',
    category: 'Flowing Fonts',
    convert: (text: string) => text.split('').map(char => char + '⃗').join('')
  },
  {
    name: 'Curved Flow',
    category: 'Flowing Fonts',
    convert: (text: string) => text.split('').map(char => char + '⃛').join('')
  },
  {
    name: 'Wind Flow',
    category: 'Flowing Fonts',
    convert: (text: string) => text.split('').map(char => char + '⃜').join('')
  },
  {
    name: 'Smooth Flow',
    category: 'Flowing Fonts',
    convert: (text: string) => text.split('').map(char => char + '⃝').join('')
  },
  {
    name: 'River Flow',
    category: 'Flowing Fonts',
    convert: (text: string) => '〜' + text.split('').join('〜') + '〜'
  },
  // Decorated Text
  {
    name: 'Flower Decorated',
    category: 'Decorated Text',
    convert: (text: string) => '❀ ' + text.split('').join(' ❀ ') + ' ❀'
  },
  {
    name: 'Star Decorated',
    category: 'Decorated Text',
    convert: (text: string) => '✦ ' + text.split('').join(' ✦ ') + ' ✦'
  },
  {
    name: 'Heart Decorated',
    category: 'Decorated Text',
    convert: (text: string) => '♥ ' + text.split('').join(' ♥ ') + ' ♥'
  },
  {
    name: 'Diamond Decorated',
    category: 'Decorated Text',
    convert: (text: string) => '◆ ' + text.split('').join(' ◆ ') + ' ◆'
  },
  {
    name: 'Moon Decorated',
    category: 'Decorated Text',
    convert: (text: string) => '☽ ' + text.split('').join(' ☽ ') + ' ☽'
  },
  {
    name: 'Sun Decorated',
    category: 'Decorated Text',
    convert: (text: string) => '☀ ' + text.split('').join(' ☀ ') + ' ☀'
  },
  {
    name: 'Music Decorated',
    category: 'Decorated Text',
    convert: (text: string) => '♪ ' + text.split('').join(' ♪ ') + ' ♪'
  },
  {
    name: 'Peace Decorated',
    category: 'Decorated Text',
    convert: (text: string) => '☮ ' + text.split('').join(' ☮ ') + ' ☮'
  },
  // Fancy Decorated Fonts
  {
    name: 'Ornate',
    category: 'Fancy Decorated Fonts',
    convert: (text: string) => '✧･ﾟ: *✧･ﾟ:* ' + text + ' *:･ﾟ✧*:･ﾟ✧'
  },
  {
    name: 'Sparkle Fancy',
    category: 'Fancy Decorated Fonts',
    convert: (text: string) => '✨🌟✨ ' + text + ' ✨🌟✨'
  },
  {
    name: 'Royal Decorated',
    category: 'Fancy Decorated Fonts',
    convert: (text: string) => '♔♕♔ ' + text + ' ♔♕♔'
  },
  {
    name: 'Celestial',
    category: 'Fancy Decorated Fonts',
    convert: (text: string) => '✦✧✦ ' + text + ' ✦✧✦'
  },
  {
    name: 'Magical',
    category: 'Fancy Decorated Fonts',
    convert: (text: string) => '✨⭐✨ ' + text + ' ✨⭐✨'
  },
  {
    name: 'Luxurious Fancy',
    category: 'Fancy Decorated Fonts',
    convert: (text: string) => '💎👑💎 ' + text + ' 💎👑💎'
  },
  {
    name: 'Elegant Fancy',
    category: 'Fancy Decorated Fonts',
    convert: (text: string) => '❈❋❈ ' + text + ' ❈❋❈'
  },
  {
    name: 'Divine',
    category: 'Fancy Decorated Fonts',
    convert: (text: string) => '☆✧☆ ' + text + ' ☆✧☆'
  }
];

// 根据分类过滤字体
export function getFontsByCategory(category: string): FontStyle[] {
  if (category === 'All') return fontStyles;
  return fontStyles.filter(style => style.category === category);
}

// 转换文本
export function convertText(text: string, styleName: string): string {
  const style = fontStyles.find(s => s.name === styleName);
  return style ? style.convert(text) : text;
}
