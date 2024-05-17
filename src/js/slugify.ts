// src/lib/createSlug.ts
export default function (text: string) {
    return (
      text
      // split an accented letter in the base letter and the acent
      .normalize('NFD')
      // remove all previously split accents
      .replace(/[\u0300-\u036f]/g, '')
      // output lowercase
      .toLowerCase()
      // remove leading & trailing whitespace
      .trim()
      // remove special characters
      .replace(/[^A-Za-z0-9 ]/g, '')
      // replace spaces with seperator
      .replace(/\s+/g, '-')
      // remove leading & trailing separtors
      .replace(/^-+|-+$/g, '')
      .toString()    

    )
  }