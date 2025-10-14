const palindromes = function (word) {

    function isPunctuation(item) {
        switch(item) {
            case '!':
                return true;
            break;
            case '?':
                return true;
            break;
            case '.':
                return true;
            break;
            case ':':
                return true;
            break;
            case ';':
                return true;
            break;
            case ',':
                return true;
            break;
            case '-':
                return true;
            break;
            case '.':
                return true;
            break;
            case ' ':
                return true;
            break;
            default:
                return false
            break;
        }
    }

    let arrayReversed = null;
    let arrayToWordReversed = null;

    word = word.toLowerCase()

    let wordToAraay = word.split('');

    let condition = wordToAraay.some(isPunctuation)

    if (condition) {

        let index = null;
        let punctuation = ['?','!',',','.','-',';',':',' '];

        let continueLoop = false;

        for(let key of punctuation) {
            index = wordToAraay.indexOf(key)
            if (index !== -1) {
                continueLoop = true

                while(continueLoop) {
                    index = wordToAraay.indexOf(key)

                    if (index == -1) {
                        continueLoop = false;
                    } else {
                        wordToAraay.splice(index,1)
                    }
                }
                
            }
        }
        
        word = wordToAraay.join('')
        arrayReversed = wordToAraay.reverse();
        arrayToWordReversed = arrayReversed.join('')
        
    } else {
        arrayReversed = wordToAraay.reverse();
        arrayToWordReversed = arrayReversed.join('')
    }

    let result = false;

    if(word === arrayToWordReversed) {
        result = true;
    }

    return result;
};

palindromes("A car, a man, a maraca.")

// Do not edit below this line
module.exports = palindromes;
