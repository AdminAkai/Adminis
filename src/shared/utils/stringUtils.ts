import { Language } from '../redux/settingsSlice/settingsInitial'

const rand = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const numeralsAndSpecialCharacters = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '-',
  '=',
  '[',
  ']',
  '/',
  ',',
  '.',
]

const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
]

// Hiragana characters (46 basic characters)
export const hiragana = [
  'あ',
  'い',
  'う',
  'え',
  'お',
  'か',
  'き',
  'く',
  'け',
  'こ',
  'さ',
  'し',
  'す',
  'せ',
  'そ',
  'た',
  'ち',
  'つ',
  'て',
  'と',
  'な',
  'に',
  'ぬ',
  'ね',
  'の',
  'は',
  'ひ',
  'ふ',
  'へ',
  'ほ',
  'ま',
  'み',
  'む',
  'め',
  'も',
  'や',
  'ゆ',
  'よ',
  'ら',
  'り',
  'る',
  'れ',
  'ろ',
  'わ',
  'を',
  'ん',
]

// Katakana characters (46 basic characters)
export const katakana = [
  'ア',
  'イ',
  'ウ',
  'エ',
  'オ',
  'カ',
  'キ',
  'ク',
  'ケ',
  'コ',
  'サ',
  'シ',
  'ス',
  'セ',
  'ソ',
  'タ',
  'チ',
  'ツ',
  'テ',
  'ト',
  'ナ',
  'ニ',
  'ヌ',
  'ネ',
  'ノ',
  'ハ',
  'ヒ',
  'フ',
  'ヘ',
  'ホ',
  'マ',
  'ミ',
  'ム',
  'メ',
  'モ',
  'ヤ',
  'ユ',
  'ヨ',
  'ラ',
  'リ',
  'ル',
  'レ',
  'ロ',
  'ワ',
  'ヲ',
  'ン',
]

// Combined array of all characters
export const englishCharacters = [...alphabet, ...numeralsAndSpecialCharacters]

export const japaneseCharacters = [
  ...hiragana,
  ...katakana,
  ...numeralsAndSpecialCharacters,
]

export const getRandomLetter = (lang: string): string => {
  if (lang === Language.JP)
    return japaneseCharacters[rand(0, japaneseCharacters.length - 1)]
  return englishCharacters[rand(0, englishCharacters.length - 1)]
}

export const getRandomWord = (word: string, lang: string): string => {
  let finalWord = ''
  for (let i = 0; i < word.length; i++) {
    finalWord += word[i] == ' ' ? ' ' : getRandomLetter(lang)
  }

  return finalWord
}

export const getLastWord = (sentence: string): string[] => {
  const splitSentence = sentence.split(' ')
  const lastWord = splitSentence.splice(splitSentence.length - 1, 1)
  return [lastWord[0], splitSentence.join(' ')]
}
