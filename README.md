# ![Pagination](pagination.png)

----

This package provides a simple and efficient way to handle pagination in Node.js applications. It allows developers to easily integrate pagination logic into their API or data-driven applications without having to manually calculate offsets, page limits, or create custom pagination solutions.

----

## Features

- **Easy integration**: Simplify pagination logic with just a few lines of code.
- **Customizable**: Configure page size, offsets, and limits based on your requirements.
- **Search Terms**: Can be used with any Node.js framework like Express, Koa, etc.
- **Lightweight**: No external dependencies, focused solely on pagination.
- **Supports multiple databases**: Easily adaptable for SQL or NoSQL databases.
- **Flexible output**: Returns paginated results in a structured format, making it easy to work with front-end or API responses.

## Installation

```bash
npm install @tarasare/pagination
```

## Usage

Here's a basic example of how to use the package:

```typescript
@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly em: EntityManager,
  ) {}

  async findAll(
    pageRequest: PageRequest<UserEntity>,
  ): Promise<Page<UserEntity>> {
    const { searchTerms, page, size, orderBy, sort } = pageRequest;
    const searchFilter = searchTerms
      ? {
          $or: [
            { nik: { $like: `%${searchTerms}%` } },
            { namaLengkap: { $like: `%${searchTerms}%` } },
          ],
        }
      : {};
    const [users, totalElements] = await this.userRepository.findAndCount(
      searchFilter,
      {
        orderBy: {
          [orderBy.field]: sort,
        },
        limit: size,
        offset: page * size,
      },
    );
     return new Page(users, page, size, totalElements);
  }
  
}
```

## License

This package is open source and available under the MIT License `LICENSE`
