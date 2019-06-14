const correctGuessesRecordKey = 'CORRECT_GUESSES_RECORD';

export const checkRecord = correctGuesses => {
  const record = getCurrentRecord();

  if (record < correctGuesses) {
    localStorage.setItem(correctGuessesRecordKey, correctGuesses);
    return {
      record: correctGuesses, isNewRecord: true
    }
  }
  return {
    record, isNewRecord: false
  }
}

export const getCurrentRecord = () => (
  Number(localStorage.getItem(correctGuessesRecordKey))
);