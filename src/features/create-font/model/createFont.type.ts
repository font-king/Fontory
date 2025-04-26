export type CreateFontFormType = {
  name: string
  example: string
  file: File
}

export type CreateFontRequest = {
  body: {
    fontCreateDTO: {
      name: string
      example: string
    }
    file: File[]
  }
}

export type CheckFontNameDuplicateRequest = {
  body: {
    name: string
  }
}

export type CheckFontNameDuplicateResponse = {
  isUnique: boolean
}
