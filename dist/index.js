'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable no-useless-escape */
exports.default = {
  convert: function (str) {
    if (str !== null && typeof str !== 'undefined' && str !== '') {
      let chunks = [];
      let buffer = '';
      let isFirstChunk = true;
      for (let x = 0; x < str.length; x++) {
        if (str[x].match(/[\s]+/) || str[x] == '-' || str[x] == '.' || str[x] == ',') {
          chunks.push(this.processChunk(`${buffer}${str[x]}`, isFirstChunk));
          isFirstChunk = false;
          buffer = '';
        } else {
          buffer += str[x];
        }
      }

      if (buffer != '') {
        chunks.push(this.processChunk(buffer, isFirstChunk));
        isFirstChunk = false;
      }

      let final = chunks.join('').trim();
      return final;
    }
    return '';
  },

  processChunk: function (str, isFirstChunk) {
    // Surname prefixes
    if (str.match(/^(van|von|der|la|d[aeio]|d[ao]s|dit)[\s]+.*$/i) && isFirstChunk === false) {
      return str.toLowerCase();
    }

    // Ordinal suffixes (I - VIII only)
    if (str.match(/^(i{3}|i{1,2}v?|v?i{1,2})[\s,]*$/i)) {
      return str.toUpperCase();
    }
    str = str.toLowerCase();
    str = this.toUpperCaseAt(str, 0);

    // Third character capitalized, like D'Angelo, McDonald, St. John, 0'Neil
    if (str.match(/(^|\s)+(Mc|[DO]\'|St\.|St[\.]?[\s]|Dewolf)/i)) {
      str = this.toUpperCaseAt(str, 2);
    }

    // Fourth character capitalized, like MacDonald, MacRae
    if (str.match(/(^|\s*)(Mac)(allist|arth|b|c(allu|art|ask|l|r|ull)|d|f|g|i(nn|nty|saa|v)|kinn|kn|l(a|ea|eo)|m|na[mu]|n[ei]|ph|q|ra|sw|ta|w)/i)) {
      str = this.toUpperCaseAt(str, 3);
    }
    return str;
  },

  toUpperCaseAt: function (str, pos) {
    return str.substr(0, pos) + str.charAt(pos).toUpperCase() + str.substr(pos + 1);
  }

};
//# sourceMappingURL=index.js.map