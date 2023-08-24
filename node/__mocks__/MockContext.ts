import { jest } from '@jest/globals'

const initialCtxState = {
  account: 'storecomponents',
  platform: 'vtex',
  locale: 'pt-BR',
  tenant: { locale: 'pt-BR' },
  binding: { id: 'abc', locale: 'pt-BR' },
}

const generateDeepCopy = (obj: any) => JSON.parse(JSON.stringify(obj))

const bookClientMock = {
  book: jest.fn(),
  books: jest.fn(),
}

export const mockContext: any = {
  vtex: {
    ...generateDeepCopy(initialCtxState),
  },
  clients: {
    book: bookClientMock,
  },
  state: initialCtxState,
}
