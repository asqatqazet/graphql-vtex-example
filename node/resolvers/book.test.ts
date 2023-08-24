import { book } from './book'
import { mockContext } from '../__mocks__/MockContext'

beforeEach(() => {
  jest.clearAllMocks()
})

describe('get a book with an id', () => {
  test('if the id exists in the db', async () => {
    const mockBook = {
      id: '3',
      name: 'fake',
    }

    mockContext.clients.book.book.mockImplementation(() => mockBook)

    const result = await book(null, { id: mockBook.id }, mockContext)

    expect(result?.name).toBe('fake')
    expect(mockContext.clients.book.book).toBeCalledTimes(1)
  })
})
