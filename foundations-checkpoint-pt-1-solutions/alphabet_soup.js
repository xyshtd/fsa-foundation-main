const soup = (phrase, bank) => {
    const charTally = {};
    for (let i = 0; i <= bank.length; i++) {
        let char = bank[i];
        if (charTally[char]) charTally[char]++;
        else charTally[char] = 1;
    }

    for (let i = 0; i < phrase.length; i++) {
        if (charTally[phrase[i]] > 0){
            charTally[phrase[i]]--;
        } else {
            return false;
        }
    }
    return true;
}