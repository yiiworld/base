angular.module('filters', [])

  .filter('nl2br', function () {
    return function (input) {
      if (typeof input === 'string') {
        return input.replace(/\n/g, '<br>');
      }
    };
  })

  .filter('html2PlainText', function () {
    return function (text) {
      return text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
  })

  .filter('truncateCharacters', function () {
    return function (input, chars, breakOnWord) {
      if (isNaN(chars)) return input;
      if (chars <= 0) return '';
      if (input && input.length > chars) {
        input = input.substring(0, chars);

        if (!breakOnWord) {
          var lastspace = input.lastIndexOf(' ');
          //get last space
          if (lastspace !== -1) {
            input = input.substr(0, lastspace);
          }
        } else {
          while (input.charAt(input.length - 1) === ' ') {
            input = input.substr(0, input.length - 1);
          }
        }
        return input + '…';
      }
      return input;
    };
  })

  .filter('truncateSplitCharacters', function () {
    return function (input, chars) {
      if (isNaN(chars)) return input;
      if (chars <= 0) return '';
      if (input && input.length > chars) {
        var prefix = input.substring(0, chars / 2);
        var postfix = input.substring(input.length - chars / 2, input.length);
        return prefix + '...' + postfix;
      }
      return input;
    };
  })

  .filter('truncateWords', function () {
    return function (input, words) {
      if (isNaN(words)) return input;
      if (words <= 0) return '';
      if (input) {
        var inputWords = input.split(/\s+/);
        if (inputWords.length > words) {
          input = inputWords.slice(0, words).join(' ') + '…';
        }
      }
      return input;
    };
  });