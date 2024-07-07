
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model authors
 * 
 */
export type authors = $Result.DefaultSelection<Prisma.$authorsPayload>
/**
 * Model document_authors
 * 
 */
export type document_authors = $Result.DefaultSelection<Prisma.$document_authorsPayload>
/**
 * Model document_supplements
 * 
 */
export type document_supplements = $Result.DefaultSelection<Prisma.$document_supplementsPayload>
/**
 * Model documents
 * 
 */
export type documents = $Result.DefaultSelection<Prisma.$documentsPayload>
/**
 * Model documents_metadates
 * 
 */
export type documents_metadates = $Result.DefaultSelection<Prisma.$documents_metadatesPayload>
/**
 * Model supplements
 * 
 */
export type supplements = $Result.DefaultSelection<Prisma.$supplementsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Authors
 * const authors = await prisma.authors.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Authors
   * const authors = await prisma.authors.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.authors`: Exposes CRUD operations for the **authors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authors
    * const authors = await prisma.authors.findMany()
    * ```
    */
  get authors(): Prisma.authorsDelegate<ExtArgs>;

  /**
   * `prisma.document_authors`: Exposes CRUD operations for the **document_authors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Document_authors
    * const document_authors = await prisma.document_authors.findMany()
    * ```
    */
  get document_authors(): Prisma.document_authorsDelegate<ExtArgs>;

  /**
   * `prisma.document_supplements`: Exposes CRUD operations for the **document_supplements** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Document_supplements
    * const document_supplements = await prisma.document_supplements.findMany()
    * ```
    */
  get document_supplements(): Prisma.document_supplementsDelegate<ExtArgs>;

  /**
   * `prisma.documents`: Exposes CRUD operations for the **documents** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.documents.findMany()
    * ```
    */
  get documents(): Prisma.documentsDelegate<ExtArgs>;

  /**
   * `prisma.documents_metadates`: Exposes CRUD operations for the **documents_metadates** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents_metadates
    * const documents_metadates = await prisma.documents_metadates.findMany()
    * ```
    */
  get documents_metadates(): Prisma.documents_metadatesDelegate<ExtArgs>;

  /**
   * `prisma.supplements`: Exposes CRUD operations for the **supplements** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Supplements
    * const supplements = await prisma.supplements.findMany()
    * ```
    */
  get supplements(): Prisma.supplementsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.16.1
   * Query Engine version: 34ace0eb2704183d2c05b60b52fba5c43c13f303
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    authors: 'authors',
    document_authors: 'document_authors',
    document_supplements: 'document_supplements',
    documents: 'documents',
    documents_metadates: 'documents_metadates',
    supplements: 'supplements'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    documents_db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "authors" | "document_authors" | "document_supplements" | "documents" | "documents_metadates" | "supplements"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      authors: {
        payload: Prisma.$authorsPayload<ExtArgs>
        fields: Prisma.authorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.authorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.authorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorsPayload>
          }
          findFirst: {
            args: Prisma.authorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.authorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorsPayload>
          }
          findMany: {
            args: Prisma.authorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorsPayload>[]
          }
          create: {
            args: Prisma.authorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorsPayload>
          }
          createMany: {
            args: Prisma.authorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.authorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorsPayload>
          }
          update: {
            args: Prisma.authorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorsPayload>
          }
          deleteMany: {
            args: Prisma.authorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.authorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.authorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorsPayload>
          }
          aggregate: {
            args: Prisma.AuthorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthors>
          }
          groupBy: {
            args: Prisma.authorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.authorsCountArgs<ExtArgs>
            result: $Utils.Optional<AuthorsCountAggregateOutputType> | number
          }
        }
      }
      document_authors: {
        payload: Prisma.$document_authorsPayload<ExtArgs>
        fields: Prisma.document_authorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.document_authorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_authorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.document_authorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_authorsPayload>
          }
          findFirst: {
            args: Prisma.document_authorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_authorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.document_authorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_authorsPayload>
          }
          findMany: {
            args: Prisma.document_authorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_authorsPayload>[]
          }
          create: {
            args: Prisma.document_authorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_authorsPayload>
          }
          createMany: {
            args: Prisma.document_authorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.document_authorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_authorsPayload>
          }
          update: {
            args: Prisma.document_authorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_authorsPayload>
          }
          deleteMany: {
            args: Prisma.document_authorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.document_authorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.document_authorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_authorsPayload>
          }
          aggregate: {
            args: Prisma.Document_authorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument_authors>
          }
          groupBy: {
            args: Prisma.document_authorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Document_authorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.document_authorsCountArgs<ExtArgs>
            result: $Utils.Optional<Document_authorsCountAggregateOutputType> | number
          }
        }
      }
      document_supplements: {
        payload: Prisma.$document_supplementsPayload<ExtArgs>
        fields: Prisma.document_supplementsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.document_supplementsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_supplementsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.document_supplementsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_supplementsPayload>
          }
          findFirst: {
            args: Prisma.document_supplementsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_supplementsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.document_supplementsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_supplementsPayload>
          }
          findMany: {
            args: Prisma.document_supplementsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_supplementsPayload>[]
          }
          create: {
            args: Prisma.document_supplementsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_supplementsPayload>
          }
          createMany: {
            args: Prisma.document_supplementsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.document_supplementsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_supplementsPayload>
          }
          update: {
            args: Prisma.document_supplementsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_supplementsPayload>
          }
          deleteMany: {
            args: Prisma.document_supplementsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.document_supplementsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.document_supplementsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_supplementsPayload>
          }
          aggregate: {
            args: Prisma.Document_supplementsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument_supplements>
          }
          groupBy: {
            args: Prisma.document_supplementsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Document_supplementsGroupByOutputType>[]
          }
          count: {
            args: Prisma.document_supplementsCountArgs<ExtArgs>
            result: $Utils.Optional<Document_supplementsCountAggregateOutputType> | number
          }
        }
      }
      documents: {
        payload: Prisma.$documentsPayload<ExtArgs>
        fields: Prisma.documentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.documentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.documentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>
          }
          findFirst: {
            args: Prisma.documentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.documentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>
          }
          findMany: {
            args: Prisma.documentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>[]
          }
          create: {
            args: Prisma.documentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>
          }
          createMany: {
            args: Prisma.documentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.documentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>
          }
          update: {
            args: Prisma.documentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>
          }
          deleteMany: {
            args: Prisma.documentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.documentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.documentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentsPayload>
          }
          aggregate: {
            args: Prisma.DocumentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocuments>
          }
          groupBy: {
            args: Prisma.documentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.documentsCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentsCountAggregateOutputType> | number
          }
        }
      }
      documents_metadates: {
        payload: Prisma.$documents_metadatesPayload<ExtArgs>
        fields: Prisma.documents_metadatesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.documents_metadatesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documents_metadatesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.documents_metadatesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documents_metadatesPayload>
          }
          findFirst: {
            args: Prisma.documents_metadatesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documents_metadatesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.documents_metadatesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documents_metadatesPayload>
          }
          findMany: {
            args: Prisma.documents_metadatesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documents_metadatesPayload>[]
          }
          create: {
            args: Prisma.documents_metadatesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documents_metadatesPayload>
          }
          createMany: {
            args: Prisma.documents_metadatesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.documents_metadatesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documents_metadatesPayload>
          }
          update: {
            args: Prisma.documents_metadatesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documents_metadatesPayload>
          }
          deleteMany: {
            args: Prisma.documents_metadatesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.documents_metadatesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.documents_metadatesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documents_metadatesPayload>
          }
          aggregate: {
            args: Prisma.Documents_metadatesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocuments_metadates>
          }
          groupBy: {
            args: Prisma.documents_metadatesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Documents_metadatesGroupByOutputType>[]
          }
          count: {
            args: Prisma.documents_metadatesCountArgs<ExtArgs>
            result: $Utils.Optional<Documents_metadatesCountAggregateOutputType> | number
          }
        }
      }
      supplements: {
        payload: Prisma.$supplementsPayload<ExtArgs>
        fields: Prisma.supplementsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.supplementsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplementsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.supplementsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplementsPayload>
          }
          findFirst: {
            args: Prisma.supplementsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplementsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.supplementsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplementsPayload>
          }
          findMany: {
            args: Prisma.supplementsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplementsPayload>[]
          }
          create: {
            args: Prisma.supplementsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplementsPayload>
          }
          createMany: {
            args: Prisma.supplementsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.supplementsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplementsPayload>
          }
          update: {
            args: Prisma.supplementsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplementsPayload>
          }
          deleteMany: {
            args: Prisma.supplementsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.supplementsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.supplementsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supplementsPayload>
          }
          aggregate: {
            args: Prisma.SupplementsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplements>
          }
          groupBy: {
            args: Prisma.supplementsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplementsGroupByOutputType>[]
          }
          count: {
            args: Prisma.supplementsCountArgs<ExtArgs>
            result: $Utils.Optional<SupplementsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AuthorsCountOutputType
   */

  export type AuthorsCountOutputType = {
    document_authors: number
  }

  export type AuthorsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document_authors?: boolean | AuthorsCountOutputTypeCountDocument_authorsArgs
  }

  // Custom InputTypes
  /**
   * AuthorsCountOutputType without action
   */
  export type AuthorsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorsCountOutputType
     */
    select?: AuthorsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AuthorsCountOutputType without action
   */
  export type AuthorsCountOutputTypeCountDocument_authorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: document_authorsWhereInput
  }


  /**
   * Count Type DocumentsCountOutputType
   */

  export type DocumentsCountOutputType = {
    document_authors: number
    document_supplements: number
  }

  export type DocumentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document_authors?: boolean | DocumentsCountOutputTypeCountDocument_authorsArgs
    document_supplements?: boolean | DocumentsCountOutputTypeCountDocument_supplementsArgs
  }

  // Custom InputTypes
  /**
   * DocumentsCountOutputType without action
   */
  export type DocumentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentsCountOutputType
     */
    select?: DocumentsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DocumentsCountOutputType without action
   */
  export type DocumentsCountOutputTypeCountDocument_authorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: document_authorsWhereInput
  }

  /**
   * DocumentsCountOutputType without action
   */
  export type DocumentsCountOutputTypeCountDocument_supplementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: document_supplementsWhereInput
  }


  /**
   * Count Type Documents_metadatesCountOutputType
   */

  export type Documents_metadatesCountOutputType = {
    documents: number
  }

  export type Documents_metadatesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | Documents_metadatesCountOutputTypeCountDocumentsArgs
  }

  // Custom InputTypes
  /**
   * Documents_metadatesCountOutputType without action
   */
  export type Documents_metadatesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documents_metadatesCountOutputType
     */
    select?: Documents_metadatesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Documents_metadatesCountOutputType without action
   */
  export type Documents_metadatesCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: documentsWhereInput
  }


  /**
   * Count Type SupplementsCountOutputType
   */

  export type SupplementsCountOutputType = {
    document_supplements: number
  }

  export type SupplementsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document_supplements?: boolean | SupplementsCountOutputTypeCountDocument_supplementsArgs
  }

  // Custom InputTypes
  /**
   * SupplementsCountOutputType without action
   */
  export type SupplementsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplementsCountOutputType
     */
    select?: SupplementsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SupplementsCountOutputType without action
   */
  export type SupplementsCountOutputTypeCountDocument_supplementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: document_supplementsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model authors
   */

  export type AggregateAuthors = {
    _count: AuthorsCountAggregateOutputType | null
    _avg: AuthorsAvgAggregateOutputType | null
    _sum: AuthorsSumAggregateOutputType | null
    _min: AuthorsMinAggregateOutputType | null
    _max: AuthorsMaxAggregateOutputType | null
  }

  export type AuthorsAvgAggregateOutputType = {
    authorID: number | null
    authorNumber: number | null
    authorYearBirth: number | null
  }

  export type AuthorsSumAggregateOutputType = {
    authorID: number | null
    authorNumber: number | null
    authorYearBirth: number | null
  }

  export type AuthorsMinAggregateOutputType = {
    authorID: number | null
    authorFIO: string | null
    shortAuthorFIO: string | null
    authorWorkPosition: string | null
    authorWorkplace: string | null
    percentageContribution: string | null
    authorNumber: number | null
    authorYearBirth: number | null
    contribution: string | null
    timestamp: Date | null
  }

  export type AuthorsMaxAggregateOutputType = {
    authorID: number | null
    authorFIO: string | null
    shortAuthorFIO: string | null
    authorWorkPosition: string | null
    authorWorkplace: string | null
    percentageContribution: string | null
    authorNumber: number | null
    authorYearBirth: number | null
    contribution: string | null
    timestamp: Date | null
  }

  export type AuthorsCountAggregateOutputType = {
    authorID: number
    authorFIO: number
    shortAuthorFIO: number
    authorWorkPosition: number
    authorWorkplace: number
    percentageContribution: number
    authorNumber: number
    authorYearBirth: number
    contribution: number
    timestamp: number
    _all: number
  }


  export type AuthorsAvgAggregateInputType = {
    authorID?: true
    authorNumber?: true
    authorYearBirth?: true
  }

  export type AuthorsSumAggregateInputType = {
    authorID?: true
    authorNumber?: true
    authorYearBirth?: true
  }

  export type AuthorsMinAggregateInputType = {
    authorID?: true
    authorFIO?: true
    shortAuthorFIO?: true
    authorWorkPosition?: true
    authorWorkplace?: true
    percentageContribution?: true
    authorNumber?: true
    authorYearBirth?: true
    contribution?: true
    timestamp?: true
  }

  export type AuthorsMaxAggregateInputType = {
    authorID?: true
    authorFIO?: true
    shortAuthorFIO?: true
    authorWorkPosition?: true
    authorWorkplace?: true
    percentageContribution?: true
    authorNumber?: true
    authorYearBirth?: true
    contribution?: true
    timestamp?: true
  }

  export type AuthorsCountAggregateInputType = {
    authorID?: true
    authorFIO?: true
    shortAuthorFIO?: true
    authorWorkPosition?: true
    authorWorkplace?: true
    percentageContribution?: true
    authorNumber?: true
    authorYearBirth?: true
    contribution?: true
    timestamp?: true
    _all?: true
  }

  export type AuthorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which authors to aggregate.
     */
    where?: authorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authors to fetch.
     */
    orderBy?: authorsOrderByWithRelationInput | authorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: authorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned authors
    **/
    _count?: true | AuthorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuthorsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuthorsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthorsMaxAggregateInputType
  }

  export type GetAuthorsAggregateType<T extends AuthorsAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthors[P]>
      : GetScalarType<T[P], AggregateAuthors[P]>
  }




  export type authorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: authorsWhereInput
    orderBy?: authorsOrderByWithAggregationInput | authorsOrderByWithAggregationInput[]
    by: AuthorsScalarFieldEnum[] | AuthorsScalarFieldEnum
    having?: authorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthorsCountAggregateInputType | true
    _avg?: AuthorsAvgAggregateInputType
    _sum?: AuthorsSumAggregateInputType
    _min?: AuthorsMinAggregateInputType
    _max?: AuthorsMaxAggregateInputType
  }

  export type AuthorsGroupByOutputType = {
    authorID: number
    authorFIO: string | null
    shortAuthorFIO: string | null
    authorWorkPosition: string | null
    authorWorkplace: string | null
    percentageContribution: string | null
    authorNumber: number | null
    authorYearBirth: number | null
    contribution: string | null
    timestamp: Date | null
    _count: AuthorsCountAggregateOutputType | null
    _avg: AuthorsAvgAggregateOutputType | null
    _sum: AuthorsSumAggregateOutputType | null
    _min: AuthorsMinAggregateOutputType | null
    _max: AuthorsMaxAggregateOutputType | null
  }

  type GetAuthorsGroupByPayload<T extends authorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthorsGroupByOutputType[P]>
            : GetScalarType<T[P], AuthorsGroupByOutputType[P]>
        }
      >
    >


  export type authorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    authorID?: boolean
    authorFIO?: boolean
    shortAuthorFIO?: boolean
    authorWorkPosition?: boolean
    authorWorkplace?: boolean
    percentageContribution?: boolean
    authorNumber?: boolean
    authorYearBirth?: boolean
    contribution?: boolean
    timestamp?: boolean
    document_authors?: boolean | authors$document_authorsArgs<ExtArgs>
    _count?: boolean | AuthorsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authors"]>


  export type authorsSelectScalar = {
    authorID?: boolean
    authorFIO?: boolean
    shortAuthorFIO?: boolean
    authorWorkPosition?: boolean
    authorWorkplace?: boolean
    percentageContribution?: boolean
    authorNumber?: boolean
    authorYearBirth?: boolean
    contribution?: boolean
    timestamp?: boolean
  }

  export type authorsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document_authors?: boolean | authors$document_authorsArgs<ExtArgs>
    _count?: boolean | AuthorsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $authorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "authors"
    objects: {
      document_authors: Prisma.$document_authorsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      authorID: number
      authorFIO: string | null
      shortAuthorFIO: string | null
      authorWorkPosition: string | null
      authorWorkplace: string | null
      percentageContribution: string | null
      authorNumber: number | null
      authorYearBirth: number | null
      contribution: string | null
      timestamp: Date | null
    }, ExtArgs["result"]["authors"]>
    composites: {}
  }

  type authorsGetPayload<S extends boolean | null | undefined | authorsDefaultArgs> = $Result.GetResult<Prisma.$authorsPayload, S>

  type authorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<authorsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AuthorsCountAggregateInputType | true
    }

  export interface authorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['authors'], meta: { name: 'authors' } }
    /**
     * Find zero or one Authors that matches the filter.
     * @param {authorsFindUniqueArgs} args - Arguments to find a Authors
     * @example
     * // Get one Authors
     * const authors = await prisma.authors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends authorsFindUniqueArgs>(args: SelectSubset<T, authorsFindUniqueArgs<ExtArgs>>): Prisma__authorsClient<$Result.GetResult<Prisma.$authorsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Authors that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {authorsFindUniqueOrThrowArgs} args - Arguments to find a Authors
     * @example
     * // Get one Authors
     * const authors = await prisma.authors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends authorsFindUniqueOrThrowArgs>(args: SelectSubset<T, authorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__authorsClient<$Result.GetResult<Prisma.$authorsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Authors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorsFindFirstArgs} args - Arguments to find a Authors
     * @example
     * // Get one Authors
     * const authors = await prisma.authors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends authorsFindFirstArgs>(args?: SelectSubset<T, authorsFindFirstArgs<ExtArgs>>): Prisma__authorsClient<$Result.GetResult<Prisma.$authorsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Authors that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorsFindFirstOrThrowArgs} args - Arguments to find a Authors
     * @example
     * // Get one Authors
     * const authors = await prisma.authors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends authorsFindFirstOrThrowArgs>(args?: SelectSubset<T, authorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__authorsClient<$Result.GetResult<Prisma.$authorsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Authors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authors
     * const authors = await prisma.authors.findMany()
     * 
     * // Get first 10 Authors
     * const authors = await prisma.authors.findMany({ take: 10 })
     * 
     * // Only select the `authorID`
     * const authorsWithAuthorIDOnly = await prisma.authors.findMany({ select: { authorID: true } })
     * 
     */
    findMany<T extends authorsFindManyArgs>(args?: SelectSubset<T, authorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authorsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Authors.
     * @param {authorsCreateArgs} args - Arguments to create a Authors.
     * @example
     * // Create one Authors
     * const Authors = await prisma.authors.create({
     *   data: {
     *     // ... data to create a Authors
     *   }
     * })
     * 
     */
    create<T extends authorsCreateArgs>(args: SelectSubset<T, authorsCreateArgs<ExtArgs>>): Prisma__authorsClient<$Result.GetResult<Prisma.$authorsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Authors.
     * @param {authorsCreateManyArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const authors = await prisma.authors.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends authorsCreateManyArgs>(args?: SelectSubset<T, authorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Authors.
     * @param {authorsDeleteArgs} args - Arguments to delete one Authors.
     * @example
     * // Delete one Authors
     * const Authors = await prisma.authors.delete({
     *   where: {
     *     // ... filter to delete one Authors
     *   }
     * })
     * 
     */
    delete<T extends authorsDeleteArgs>(args: SelectSubset<T, authorsDeleteArgs<ExtArgs>>): Prisma__authorsClient<$Result.GetResult<Prisma.$authorsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Authors.
     * @param {authorsUpdateArgs} args - Arguments to update one Authors.
     * @example
     * // Update one Authors
     * const authors = await prisma.authors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends authorsUpdateArgs>(args: SelectSubset<T, authorsUpdateArgs<ExtArgs>>): Prisma__authorsClient<$Result.GetResult<Prisma.$authorsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Authors.
     * @param {authorsDeleteManyArgs} args - Arguments to filter Authors to delete.
     * @example
     * // Delete a few Authors
     * const { count } = await prisma.authors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends authorsDeleteManyArgs>(args?: SelectSubset<T, authorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authors
     * const authors = await prisma.authors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends authorsUpdateManyArgs>(args: SelectSubset<T, authorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Authors.
     * @param {authorsUpsertArgs} args - Arguments to update or create a Authors.
     * @example
     * // Update or create a Authors
     * const authors = await prisma.authors.upsert({
     *   create: {
     *     // ... data to create a Authors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Authors we want to update
     *   }
     * })
     */
    upsert<T extends authorsUpsertArgs>(args: SelectSubset<T, authorsUpsertArgs<ExtArgs>>): Prisma__authorsClient<$Result.GetResult<Prisma.$authorsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorsCountArgs} args - Arguments to filter Authors to count.
     * @example
     * // Count the number of Authors
     * const count = await prisma.authors.count({
     *   where: {
     *     // ... the filter for the Authors we want to count
     *   }
     * })
    **/
    count<T extends authorsCountArgs>(
      args?: Subset<T, authorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthorsAggregateArgs>(args: Subset<T, AuthorsAggregateArgs>): Prisma.PrismaPromise<GetAuthorsAggregateType<T>>

    /**
     * Group by Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends authorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: authorsGroupByArgs['orderBy'] }
        : { orderBy?: authorsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, authorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the authors model
   */
  readonly fields: authorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for authors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__authorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    document_authors<T extends authors$document_authorsArgs<ExtArgs> = {}>(args?: Subset<T, authors$document_authorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$document_authorsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the authors model
   */ 
  interface authorsFieldRefs {
    readonly authorID: FieldRef<"authors", 'Int'>
    readonly authorFIO: FieldRef<"authors", 'String'>
    readonly shortAuthorFIO: FieldRef<"authors", 'String'>
    readonly authorWorkPosition: FieldRef<"authors", 'String'>
    readonly authorWorkplace: FieldRef<"authors", 'String'>
    readonly percentageContribution: FieldRef<"authors", 'String'>
    readonly authorNumber: FieldRef<"authors", 'Int'>
    readonly authorYearBirth: FieldRef<"authors", 'Int'>
    readonly contribution: FieldRef<"authors", 'String'>
    readonly timestamp: FieldRef<"authors", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * authors findUnique
   */
  export type authorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authors
     */
    select?: authorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorsInclude<ExtArgs> | null
    /**
     * Filter, which authors to fetch.
     */
    where: authorsWhereUniqueInput
  }

  /**
   * authors findUniqueOrThrow
   */
  export type authorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authors
     */
    select?: authorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorsInclude<ExtArgs> | null
    /**
     * Filter, which authors to fetch.
     */
    where: authorsWhereUniqueInput
  }

  /**
   * authors findFirst
   */
  export type authorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authors
     */
    select?: authorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorsInclude<ExtArgs> | null
    /**
     * Filter, which authors to fetch.
     */
    where?: authorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authors to fetch.
     */
    orderBy?: authorsOrderByWithRelationInput | authorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authors.
     */
    cursor?: authorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authors.
     */
    distinct?: AuthorsScalarFieldEnum | AuthorsScalarFieldEnum[]
  }

  /**
   * authors findFirstOrThrow
   */
  export type authorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authors
     */
    select?: authorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorsInclude<ExtArgs> | null
    /**
     * Filter, which authors to fetch.
     */
    where?: authorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authors to fetch.
     */
    orderBy?: authorsOrderByWithRelationInput | authorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authors.
     */
    cursor?: authorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authors.
     */
    distinct?: AuthorsScalarFieldEnum | AuthorsScalarFieldEnum[]
  }

  /**
   * authors findMany
   */
  export type authorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authors
     */
    select?: authorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorsInclude<ExtArgs> | null
    /**
     * Filter, which authors to fetch.
     */
    where?: authorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authors to fetch.
     */
    orderBy?: authorsOrderByWithRelationInput | authorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing authors.
     */
    cursor?: authorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authors.
     */
    skip?: number
    distinct?: AuthorsScalarFieldEnum | AuthorsScalarFieldEnum[]
  }

  /**
   * authors create
   */
  export type authorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authors
     */
    select?: authorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorsInclude<ExtArgs> | null
    /**
     * The data needed to create a authors.
     */
    data?: XOR<authorsCreateInput, authorsUncheckedCreateInput>
  }

  /**
   * authors createMany
   */
  export type authorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many authors.
     */
    data: authorsCreateManyInput | authorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * authors update
   */
  export type authorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authors
     */
    select?: authorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorsInclude<ExtArgs> | null
    /**
     * The data needed to update a authors.
     */
    data: XOR<authorsUpdateInput, authorsUncheckedUpdateInput>
    /**
     * Choose, which authors to update.
     */
    where: authorsWhereUniqueInput
  }

  /**
   * authors updateMany
   */
  export type authorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update authors.
     */
    data: XOR<authorsUpdateManyMutationInput, authorsUncheckedUpdateManyInput>
    /**
     * Filter which authors to update
     */
    where?: authorsWhereInput
  }

  /**
   * authors upsert
   */
  export type authorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authors
     */
    select?: authorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorsInclude<ExtArgs> | null
    /**
     * The filter to search for the authors to update in case it exists.
     */
    where: authorsWhereUniqueInput
    /**
     * In case the authors found by the `where` argument doesn't exist, create a new authors with this data.
     */
    create: XOR<authorsCreateInput, authorsUncheckedCreateInput>
    /**
     * In case the authors was found with the provided `where` argument, update it with this data.
     */
    update: XOR<authorsUpdateInput, authorsUncheckedUpdateInput>
  }

  /**
   * authors delete
   */
  export type authorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authors
     */
    select?: authorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorsInclude<ExtArgs> | null
    /**
     * Filter which authors to delete.
     */
    where: authorsWhereUniqueInput
  }

  /**
   * authors deleteMany
   */
  export type authorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which authors to delete
     */
    where?: authorsWhereInput
  }

  /**
   * authors.document_authors
   */
  export type authors$document_authorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_authors
     */
    select?: document_authorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_authorsInclude<ExtArgs> | null
    where?: document_authorsWhereInput
    orderBy?: document_authorsOrderByWithRelationInput | document_authorsOrderByWithRelationInput[]
    cursor?: document_authorsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Document_authorsScalarFieldEnum | Document_authorsScalarFieldEnum[]
  }

  /**
   * authors without action
   */
  export type authorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the authors
     */
    select?: authorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorsInclude<ExtArgs> | null
  }


  /**
   * Model document_authors
   */

  export type AggregateDocument_authors = {
    _count: Document_authorsCountAggregateOutputType | null
    _avg: Document_authorsAvgAggregateOutputType | null
    _sum: Document_authorsSumAggregateOutputType | null
    _min: Document_authorsMinAggregateOutputType | null
    _max: Document_authorsMaxAggregateOutputType | null
  }

  export type Document_authorsAvgAggregateOutputType = {
    documentID: number | null
    authorID: number | null
  }

  export type Document_authorsSumAggregateOutputType = {
    documentID: number | null
    authorID: number | null
  }

  export type Document_authorsMinAggregateOutputType = {
    documentID: number | null
    authorID: number | null
  }

  export type Document_authorsMaxAggregateOutputType = {
    documentID: number | null
    authorID: number | null
  }

  export type Document_authorsCountAggregateOutputType = {
    documentID: number
    authorID: number
    _all: number
  }


  export type Document_authorsAvgAggregateInputType = {
    documentID?: true
    authorID?: true
  }

  export type Document_authorsSumAggregateInputType = {
    documentID?: true
    authorID?: true
  }

  export type Document_authorsMinAggregateInputType = {
    documentID?: true
    authorID?: true
  }

  export type Document_authorsMaxAggregateInputType = {
    documentID?: true
    authorID?: true
  }

  export type Document_authorsCountAggregateInputType = {
    documentID?: true
    authorID?: true
    _all?: true
  }

  export type Document_authorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which document_authors to aggregate.
     */
    where?: document_authorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of document_authors to fetch.
     */
    orderBy?: document_authorsOrderByWithRelationInput | document_authorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: document_authorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` document_authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` document_authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned document_authors
    **/
    _count?: true | Document_authorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Document_authorsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Document_authorsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Document_authorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Document_authorsMaxAggregateInputType
  }

  export type GetDocument_authorsAggregateType<T extends Document_authorsAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument_authors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument_authors[P]>
      : GetScalarType<T[P], AggregateDocument_authors[P]>
  }




  export type document_authorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: document_authorsWhereInput
    orderBy?: document_authorsOrderByWithAggregationInput | document_authorsOrderByWithAggregationInput[]
    by: Document_authorsScalarFieldEnum[] | Document_authorsScalarFieldEnum
    having?: document_authorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Document_authorsCountAggregateInputType | true
    _avg?: Document_authorsAvgAggregateInputType
    _sum?: Document_authorsSumAggregateInputType
    _min?: Document_authorsMinAggregateInputType
    _max?: Document_authorsMaxAggregateInputType
  }

  export type Document_authorsGroupByOutputType = {
    documentID: number
    authorID: number
    _count: Document_authorsCountAggregateOutputType | null
    _avg: Document_authorsAvgAggregateOutputType | null
    _sum: Document_authorsSumAggregateOutputType | null
    _min: Document_authorsMinAggregateOutputType | null
    _max: Document_authorsMaxAggregateOutputType | null
  }

  type GetDocument_authorsGroupByPayload<T extends document_authorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Document_authorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Document_authorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Document_authorsGroupByOutputType[P]>
            : GetScalarType<T[P], Document_authorsGroupByOutputType[P]>
        }
      >
    >


  export type document_authorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    documentID?: boolean
    authorID?: boolean
    documents?: boolean | documentsDefaultArgs<ExtArgs>
    authors?: boolean | authorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document_authors"]>


  export type document_authorsSelectScalar = {
    documentID?: boolean
    authorID?: boolean
  }

  export type document_authorsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | documentsDefaultArgs<ExtArgs>
    authors?: boolean | authorsDefaultArgs<ExtArgs>
  }

  export type $document_authorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "document_authors"
    objects: {
      documents: Prisma.$documentsPayload<ExtArgs>
      authors: Prisma.$authorsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      documentID: number
      authorID: number
    }, ExtArgs["result"]["document_authors"]>
    composites: {}
  }

  type document_authorsGetPayload<S extends boolean | null | undefined | document_authorsDefaultArgs> = $Result.GetResult<Prisma.$document_authorsPayload, S>

  type document_authorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<document_authorsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Document_authorsCountAggregateInputType | true
    }

  export interface document_authorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['document_authors'], meta: { name: 'document_authors' } }
    /**
     * Find zero or one Document_authors that matches the filter.
     * @param {document_authorsFindUniqueArgs} args - Arguments to find a Document_authors
     * @example
     * // Get one Document_authors
     * const document_authors = await prisma.document_authors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends document_authorsFindUniqueArgs>(args: SelectSubset<T, document_authorsFindUniqueArgs<ExtArgs>>): Prisma__document_authorsClient<$Result.GetResult<Prisma.$document_authorsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Document_authors that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {document_authorsFindUniqueOrThrowArgs} args - Arguments to find a Document_authors
     * @example
     * // Get one Document_authors
     * const document_authors = await prisma.document_authors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends document_authorsFindUniqueOrThrowArgs>(args: SelectSubset<T, document_authorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__document_authorsClient<$Result.GetResult<Prisma.$document_authorsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Document_authors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {document_authorsFindFirstArgs} args - Arguments to find a Document_authors
     * @example
     * // Get one Document_authors
     * const document_authors = await prisma.document_authors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends document_authorsFindFirstArgs>(args?: SelectSubset<T, document_authorsFindFirstArgs<ExtArgs>>): Prisma__document_authorsClient<$Result.GetResult<Prisma.$document_authorsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Document_authors that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {document_authorsFindFirstOrThrowArgs} args - Arguments to find a Document_authors
     * @example
     * // Get one Document_authors
     * const document_authors = await prisma.document_authors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends document_authorsFindFirstOrThrowArgs>(args?: SelectSubset<T, document_authorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__document_authorsClient<$Result.GetResult<Prisma.$document_authorsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Document_authors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {document_authorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Document_authors
     * const document_authors = await prisma.document_authors.findMany()
     * 
     * // Get first 10 Document_authors
     * const document_authors = await prisma.document_authors.findMany({ take: 10 })
     * 
     * // Only select the `documentID`
     * const document_authorsWithDocumentIDOnly = await prisma.document_authors.findMany({ select: { documentID: true } })
     * 
     */
    findMany<T extends document_authorsFindManyArgs>(args?: SelectSubset<T, document_authorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$document_authorsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Document_authors.
     * @param {document_authorsCreateArgs} args - Arguments to create a Document_authors.
     * @example
     * // Create one Document_authors
     * const Document_authors = await prisma.document_authors.create({
     *   data: {
     *     // ... data to create a Document_authors
     *   }
     * })
     * 
     */
    create<T extends document_authorsCreateArgs>(args: SelectSubset<T, document_authorsCreateArgs<ExtArgs>>): Prisma__document_authorsClient<$Result.GetResult<Prisma.$document_authorsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Document_authors.
     * @param {document_authorsCreateManyArgs} args - Arguments to create many Document_authors.
     * @example
     * // Create many Document_authors
     * const document_authors = await prisma.document_authors.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends document_authorsCreateManyArgs>(args?: SelectSubset<T, document_authorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Document_authors.
     * @param {document_authorsDeleteArgs} args - Arguments to delete one Document_authors.
     * @example
     * // Delete one Document_authors
     * const Document_authors = await prisma.document_authors.delete({
     *   where: {
     *     // ... filter to delete one Document_authors
     *   }
     * })
     * 
     */
    delete<T extends document_authorsDeleteArgs>(args: SelectSubset<T, document_authorsDeleteArgs<ExtArgs>>): Prisma__document_authorsClient<$Result.GetResult<Prisma.$document_authorsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Document_authors.
     * @param {document_authorsUpdateArgs} args - Arguments to update one Document_authors.
     * @example
     * // Update one Document_authors
     * const document_authors = await prisma.document_authors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends document_authorsUpdateArgs>(args: SelectSubset<T, document_authorsUpdateArgs<ExtArgs>>): Prisma__document_authorsClient<$Result.GetResult<Prisma.$document_authorsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Document_authors.
     * @param {document_authorsDeleteManyArgs} args - Arguments to filter Document_authors to delete.
     * @example
     * // Delete a few Document_authors
     * const { count } = await prisma.document_authors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends document_authorsDeleteManyArgs>(args?: SelectSubset<T, document_authorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Document_authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {document_authorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Document_authors
     * const document_authors = await prisma.document_authors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends document_authorsUpdateManyArgs>(args: SelectSubset<T, document_authorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Document_authors.
     * @param {document_authorsUpsertArgs} args - Arguments to update or create a Document_authors.
     * @example
     * // Update or create a Document_authors
     * const document_authors = await prisma.document_authors.upsert({
     *   create: {
     *     // ... data to create a Document_authors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document_authors we want to update
     *   }
     * })
     */
    upsert<T extends document_authorsUpsertArgs>(args: SelectSubset<T, document_authorsUpsertArgs<ExtArgs>>): Prisma__document_authorsClient<$Result.GetResult<Prisma.$document_authorsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Document_authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {document_authorsCountArgs} args - Arguments to filter Document_authors to count.
     * @example
     * // Count the number of Document_authors
     * const count = await prisma.document_authors.count({
     *   where: {
     *     // ... the filter for the Document_authors we want to count
     *   }
     * })
    **/
    count<T extends document_authorsCountArgs>(
      args?: Subset<T, document_authorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Document_authorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document_authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Document_authorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Document_authorsAggregateArgs>(args: Subset<T, Document_authorsAggregateArgs>): Prisma.PrismaPromise<GetDocument_authorsAggregateType<T>>

    /**
     * Group by Document_authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {document_authorsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends document_authorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: document_authorsGroupByArgs['orderBy'] }
        : { orderBy?: document_authorsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, document_authorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocument_authorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the document_authors model
   */
  readonly fields: document_authorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for document_authors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__document_authorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    documents<T extends documentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, documentsDefaultArgs<ExtArgs>>): Prisma__documentsClient<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    authors<T extends authorsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, authorsDefaultArgs<ExtArgs>>): Prisma__authorsClient<$Result.GetResult<Prisma.$authorsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the document_authors model
   */ 
  interface document_authorsFieldRefs {
    readonly documentID: FieldRef<"document_authors", 'Int'>
    readonly authorID: FieldRef<"document_authors", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * document_authors findUnique
   */
  export type document_authorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_authors
     */
    select?: document_authorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_authorsInclude<ExtArgs> | null
    /**
     * Filter, which document_authors to fetch.
     */
    where: document_authorsWhereUniqueInput
  }

  /**
   * document_authors findUniqueOrThrow
   */
  export type document_authorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_authors
     */
    select?: document_authorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_authorsInclude<ExtArgs> | null
    /**
     * Filter, which document_authors to fetch.
     */
    where: document_authorsWhereUniqueInput
  }

  /**
   * document_authors findFirst
   */
  export type document_authorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_authors
     */
    select?: document_authorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_authorsInclude<ExtArgs> | null
    /**
     * Filter, which document_authors to fetch.
     */
    where?: document_authorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of document_authors to fetch.
     */
    orderBy?: document_authorsOrderByWithRelationInput | document_authorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for document_authors.
     */
    cursor?: document_authorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` document_authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` document_authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of document_authors.
     */
    distinct?: Document_authorsScalarFieldEnum | Document_authorsScalarFieldEnum[]
  }

  /**
   * document_authors findFirstOrThrow
   */
  export type document_authorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_authors
     */
    select?: document_authorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_authorsInclude<ExtArgs> | null
    /**
     * Filter, which document_authors to fetch.
     */
    where?: document_authorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of document_authors to fetch.
     */
    orderBy?: document_authorsOrderByWithRelationInput | document_authorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for document_authors.
     */
    cursor?: document_authorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` document_authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` document_authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of document_authors.
     */
    distinct?: Document_authorsScalarFieldEnum | Document_authorsScalarFieldEnum[]
  }

  /**
   * document_authors findMany
   */
  export type document_authorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_authors
     */
    select?: document_authorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_authorsInclude<ExtArgs> | null
    /**
     * Filter, which document_authors to fetch.
     */
    where?: document_authorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of document_authors to fetch.
     */
    orderBy?: document_authorsOrderByWithRelationInput | document_authorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing document_authors.
     */
    cursor?: document_authorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` document_authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` document_authors.
     */
    skip?: number
    distinct?: Document_authorsScalarFieldEnum | Document_authorsScalarFieldEnum[]
  }

  /**
   * document_authors create
   */
  export type document_authorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_authors
     */
    select?: document_authorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_authorsInclude<ExtArgs> | null
    /**
     * The data needed to create a document_authors.
     */
    data: XOR<document_authorsCreateInput, document_authorsUncheckedCreateInput>
  }

  /**
   * document_authors createMany
   */
  export type document_authorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many document_authors.
     */
    data: document_authorsCreateManyInput | document_authorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * document_authors update
   */
  export type document_authorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_authors
     */
    select?: document_authorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_authorsInclude<ExtArgs> | null
    /**
     * The data needed to update a document_authors.
     */
    data: XOR<document_authorsUpdateInput, document_authorsUncheckedUpdateInput>
    /**
     * Choose, which document_authors to update.
     */
    where: document_authorsWhereUniqueInput
  }

  /**
   * document_authors updateMany
   */
  export type document_authorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update document_authors.
     */
    data: XOR<document_authorsUpdateManyMutationInput, document_authorsUncheckedUpdateManyInput>
    /**
     * Filter which document_authors to update
     */
    where?: document_authorsWhereInput
  }

  /**
   * document_authors upsert
   */
  export type document_authorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_authors
     */
    select?: document_authorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_authorsInclude<ExtArgs> | null
    /**
     * The filter to search for the document_authors to update in case it exists.
     */
    where: document_authorsWhereUniqueInput
    /**
     * In case the document_authors found by the `where` argument doesn't exist, create a new document_authors with this data.
     */
    create: XOR<document_authorsCreateInput, document_authorsUncheckedCreateInput>
    /**
     * In case the document_authors was found with the provided `where` argument, update it with this data.
     */
    update: XOR<document_authorsUpdateInput, document_authorsUncheckedUpdateInput>
  }

  /**
   * document_authors delete
   */
  export type document_authorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_authors
     */
    select?: document_authorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_authorsInclude<ExtArgs> | null
    /**
     * Filter which document_authors to delete.
     */
    where: document_authorsWhereUniqueInput
  }

  /**
   * document_authors deleteMany
   */
  export type document_authorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which document_authors to delete
     */
    where?: document_authorsWhereInput
  }

  /**
   * document_authors without action
   */
  export type document_authorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_authors
     */
    select?: document_authorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_authorsInclude<ExtArgs> | null
  }


  /**
   * Model document_supplements
   */

  export type AggregateDocument_supplements = {
    _count: Document_supplementsCountAggregateOutputType | null
    _avg: Document_supplementsAvgAggregateOutputType | null
    _sum: Document_supplementsSumAggregateOutputType | null
    _min: Document_supplementsMinAggregateOutputType | null
    _max: Document_supplementsMaxAggregateOutputType | null
  }

  export type Document_supplementsAvgAggregateOutputType = {
    documentID: number | null
    supplementID: number | null
  }

  export type Document_supplementsSumAggregateOutputType = {
    documentID: number | null
    supplementID: number | null
  }

  export type Document_supplementsMinAggregateOutputType = {
    documentID: number | null
    supplementID: number | null
  }

  export type Document_supplementsMaxAggregateOutputType = {
    documentID: number | null
    supplementID: number | null
  }

  export type Document_supplementsCountAggregateOutputType = {
    documentID: number
    supplementID: number
    _all: number
  }


  export type Document_supplementsAvgAggregateInputType = {
    documentID?: true
    supplementID?: true
  }

  export type Document_supplementsSumAggregateInputType = {
    documentID?: true
    supplementID?: true
  }

  export type Document_supplementsMinAggregateInputType = {
    documentID?: true
    supplementID?: true
  }

  export type Document_supplementsMaxAggregateInputType = {
    documentID?: true
    supplementID?: true
  }

  export type Document_supplementsCountAggregateInputType = {
    documentID?: true
    supplementID?: true
    _all?: true
  }

  export type Document_supplementsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which document_supplements to aggregate.
     */
    where?: document_supplementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of document_supplements to fetch.
     */
    orderBy?: document_supplementsOrderByWithRelationInput | document_supplementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: document_supplementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` document_supplements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` document_supplements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned document_supplements
    **/
    _count?: true | Document_supplementsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Document_supplementsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Document_supplementsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Document_supplementsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Document_supplementsMaxAggregateInputType
  }

  export type GetDocument_supplementsAggregateType<T extends Document_supplementsAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument_supplements]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument_supplements[P]>
      : GetScalarType<T[P], AggregateDocument_supplements[P]>
  }




  export type document_supplementsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: document_supplementsWhereInput
    orderBy?: document_supplementsOrderByWithAggregationInput | document_supplementsOrderByWithAggregationInput[]
    by: Document_supplementsScalarFieldEnum[] | Document_supplementsScalarFieldEnum
    having?: document_supplementsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Document_supplementsCountAggregateInputType | true
    _avg?: Document_supplementsAvgAggregateInputType
    _sum?: Document_supplementsSumAggregateInputType
    _min?: Document_supplementsMinAggregateInputType
    _max?: Document_supplementsMaxAggregateInputType
  }

  export type Document_supplementsGroupByOutputType = {
    documentID: number
    supplementID: number
    _count: Document_supplementsCountAggregateOutputType | null
    _avg: Document_supplementsAvgAggregateOutputType | null
    _sum: Document_supplementsSumAggregateOutputType | null
    _min: Document_supplementsMinAggregateOutputType | null
    _max: Document_supplementsMaxAggregateOutputType | null
  }

  type GetDocument_supplementsGroupByPayload<T extends document_supplementsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Document_supplementsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Document_supplementsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Document_supplementsGroupByOutputType[P]>
            : GetScalarType<T[P], Document_supplementsGroupByOutputType[P]>
        }
      >
    >


  export type document_supplementsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    documentID?: boolean
    supplementID?: boolean
    documents?: boolean | documentsDefaultArgs<ExtArgs>
    supplements?: boolean | supplementsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document_supplements"]>


  export type document_supplementsSelectScalar = {
    documentID?: boolean
    supplementID?: boolean
  }

  export type document_supplementsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | documentsDefaultArgs<ExtArgs>
    supplements?: boolean | supplementsDefaultArgs<ExtArgs>
  }

  export type $document_supplementsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "document_supplements"
    objects: {
      documents: Prisma.$documentsPayload<ExtArgs>
      supplements: Prisma.$supplementsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      documentID: number
      supplementID: number
    }, ExtArgs["result"]["document_supplements"]>
    composites: {}
  }

  type document_supplementsGetPayload<S extends boolean | null | undefined | document_supplementsDefaultArgs> = $Result.GetResult<Prisma.$document_supplementsPayload, S>

  type document_supplementsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<document_supplementsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Document_supplementsCountAggregateInputType | true
    }

  export interface document_supplementsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['document_supplements'], meta: { name: 'document_supplements' } }
    /**
     * Find zero or one Document_supplements that matches the filter.
     * @param {document_supplementsFindUniqueArgs} args - Arguments to find a Document_supplements
     * @example
     * // Get one Document_supplements
     * const document_supplements = await prisma.document_supplements.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends document_supplementsFindUniqueArgs>(args: SelectSubset<T, document_supplementsFindUniqueArgs<ExtArgs>>): Prisma__document_supplementsClient<$Result.GetResult<Prisma.$document_supplementsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Document_supplements that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {document_supplementsFindUniqueOrThrowArgs} args - Arguments to find a Document_supplements
     * @example
     * // Get one Document_supplements
     * const document_supplements = await prisma.document_supplements.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends document_supplementsFindUniqueOrThrowArgs>(args: SelectSubset<T, document_supplementsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__document_supplementsClient<$Result.GetResult<Prisma.$document_supplementsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Document_supplements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {document_supplementsFindFirstArgs} args - Arguments to find a Document_supplements
     * @example
     * // Get one Document_supplements
     * const document_supplements = await prisma.document_supplements.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends document_supplementsFindFirstArgs>(args?: SelectSubset<T, document_supplementsFindFirstArgs<ExtArgs>>): Prisma__document_supplementsClient<$Result.GetResult<Prisma.$document_supplementsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Document_supplements that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {document_supplementsFindFirstOrThrowArgs} args - Arguments to find a Document_supplements
     * @example
     * // Get one Document_supplements
     * const document_supplements = await prisma.document_supplements.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends document_supplementsFindFirstOrThrowArgs>(args?: SelectSubset<T, document_supplementsFindFirstOrThrowArgs<ExtArgs>>): Prisma__document_supplementsClient<$Result.GetResult<Prisma.$document_supplementsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Document_supplements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {document_supplementsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Document_supplements
     * const document_supplements = await prisma.document_supplements.findMany()
     * 
     * // Get first 10 Document_supplements
     * const document_supplements = await prisma.document_supplements.findMany({ take: 10 })
     * 
     * // Only select the `documentID`
     * const document_supplementsWithDocumentIDOnly = await prisma.document_supplements.findMany({ select: { documentID: true } })
     * 
     */
    findMany<T extends document_supplementsFindManyArgs>(args?: SelectSubset<T, document_supplementsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$document_supplementsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Document_supplements.
     * @param {document_supplementsCreateArgs} args - Arguments to create a Document_supplements.
     * @example
     * // Create one Document_supplements
     * const Document_supplements = await prisma.document_supplements.create({
     *   data: {
     *     // ... data to create a Document_supplements
     *   }
     * })
     * 
     */
    create<T extends document_supplementsCreateArgs>(args: SelectSubset<T, document_supplementsCreateArgs<ExtArgs>>): Prisma__document_supplementsClient<$Result.GetResult<Prisma.$document_supplementsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Document_supplements.
     * @param {document_supplementsCreateManyArgs} args - Arguments to create many Document_supplements.
     * @example
     * // Create many Document_supplements
     * const document_supplements = await prisma.document_supplements.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends document_supplementsCreateManyArgs>(args?: SelectSubset<T, document_supplementsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Document_supplements.
     * @param {document_supplementsDeleteArgs} args - Arguments to delete one Document_supplements.
     * @example
     * // Delete one Document_supplements
     * const Document_supplements = await prisma.document_supplements.delete({
     *   where: {
     *     // ... filter to delete one Document_supplements
     *   }
     * })
     * 
     */
    delete<T extends document_supplementsDeleteArgs>(args: SelectSubset<T, document_supplementsDeleteArgs<ExtArgs>>): Prisma__document_supplementsClient<$Result.GetResult<Prisma.$document_supplementsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Document_supplements.
     * @param {document_supplementsUpdateArgs} args - Arguments to update one Document_supplements.
     * @example
     * // Update one Document_supplements
     * const document_supplements = await prisma.document_supplements.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends document_supplementsUpdateArgs>(args: SelectSubset<T, document_supplementsUpdateArgs<ExtArgs>>): Prisma__document_supplementsClient<$Result.GetResult<Prisma.$document_supplementsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Document_supplements.
     * @param {document_supplementsDeleteManyArgs} args - Arguments to filter Document_supplements to delete.
     * @example
     * // Delete a few Document_supplements
     * const { count } = await prisma.document_supplements.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends document_supplementsDeleteManyArgs>(args?: SelectSubset<T, document_supplementsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Document_supplements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {document_supplementsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Document_supplements
     * const document_supplements = await prisma.document_supplements.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends document_supplementsUpdateManyArgs>(args: SelectSubset<T, document_supplementsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Document_supplements.
     * @param {document_supplementsUpsertArgs} args - Arguments to update or create a Document_supplements.
     * @example
     * // Update or create a Document_supplements
     * const document_supplements = await prisma.document_supplements.upsert({
     *   create: {
     *     // ... data to create a Document_supplements
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document_supplements we want to update
     *   }
     * })
     */
    upsert<T extends document_supplementsUpsertArgs>(args: SelectSubset<T, document_supplementsUpsertArgs<ExtArgs>>): Prisma__document_supplementsClient<$Result.GetResult<Prisma.$document_supplementsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Document_supplements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {document_supplementsCountArgs} args - Arguments to filter Document_supplements to count.
     * @example
     * // Count the number of Document_supplements
     * const count = await prisma.document_supplements.count({
     *   where: {
     *     // ... the filter for the Document_supplements we want to count
     *   }
     * })
    **/
    count<T extends document_supplementsCountArgs>(
      args?: Subset<T, document_supplementsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Document_supplementsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document_supplements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Document_supplementsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Document_supplementsAggregateArgs>(args: Subset<T, Document_supplementsAggregateArgs>): Prisma.PrismaPromise<GetDocument_supplementsAggregateType<T>>

    /**
     * Group by Document_supplements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {document_supplementsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends document_supplementsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: document_supplementsGroupByArgs['orderBy'] }
        : { orderBy?: document_supplementsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, document_supplementsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocument_supplementsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the document_supplements model
   */
  readonly fields: document_supplementsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for document_supplements.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__document_supplementsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    documents<T extends documentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, documentsDefaultArgs<ExtArgs>>): Prisma__documentsClient<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    supplements<T extends supplementsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, supplementsDefaultArgs<ExtArgs>>): Prisma__supplementsClient<$Result.GetResult<Prisma.$supplementsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the document_supplements model
   */ 
  interface document_supplementsFieldRefs {
    readonly documentID: FieldRef<"document_supplements", 'Int'>
    readonly supplementID: FieldRef<"document_supplements", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * document_supplements findUnique
   */
  export type document_supplementsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_supplements
     */
    select?: document_supplementsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_supplementsInclude<ExtArgs> | null
    /**
     * Filter, which document_supplements to fetch.
     */
    where: document_supplementsWhereUniqueInput
  }

  /**
   * document_supplements findUniqueOrThrow
   */
  export type document_supplementsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_supplements
     */
    select?: document_supplementsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_supplementsInclude<ExtArgs> | null
    /**
     * Filter, which document_supplements to fetch.
     */
    where: document_supplementsWhereUniqueInput
  }

  /**
   * document_supplements findFirst
   */
  export type document_supplementsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_supplements
     */
    select?: document_supplementsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_supplementsInclude<ExtArgs> | null
    /**
     * Filter, which document_supplements to fetch.
     */
    where?: document_supplementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of document_supplements to fetch.
     */
    orderBy?: document_supplementsOrderByWithRelationInput | document_supplementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for document_supplements.
     */
    cursor?: document_supplementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` document_supplements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` document_supplements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of document_supplements.
     */
    distinct?: Document_supplementsScalarFieldEnum | Document_supplementsScalarFieldEnum[]
  }

  /**
   * document_supplements findFirstOrThrow
   */
  export type document_supplementsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_supplements
     */
    select?: document_supplementsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_supplementsInclude<ExtArgs> | null
    /**
     * Filter, which document_supplements to fetch.
     */
    where?: document_supplementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of document_supplements to fetch.
     */
    orderBy?: document_supplementsOrderByWithRelationInput | document_supplementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for document_supplements.
     */
    cursor?: document_supplementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` document_supplements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` document_supplements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of document_supplements.
     */
    distinct?: Document_supplementsScalarFieldEnum | Document_supplementsScalarFieldEnum[]
  }

  /**
   * document_supplements findMany
   */
  export type document_supplementsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_supplements
     */
    select?: document_supplementsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_supplementsInclude<ExtArgs> | null
    /**
     * Filter, which document_supplements to fetch.
     */
    where?: document_supplementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of document_supplements to fetch.
     */
    orderBy?: document_supplementsOrderByWithRelationInput | document_supplementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing document_supplements.
     */
    cursor?: document_supplementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` document_supplements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` document_supplements.
     */
    skip?: number
    distinct?: Document_supplementsScalarFieldEnum | Document_supplementsScalarFieldEnum[]
  }

  /**
   * document_supplements create
   */
  export type document_supplementsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_supplements
     */
    select?: document_supplementsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_supplementsInclude<ExtArgs> | null
    /**
     * The data needed to create a document_supplements.
     */
    data: XOR<document_supplementsCreateInput, document_supplementsUncheckedCreateInput>
  }

  /**
   * document_supplements createMany
   */
  export type document_supplementsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many document_supplements.
     */
    data: document_supplementsCreateManyInput | document_supplementsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * document_supplements update
   */
  export type document_supplementsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_supplements
     */
    select?: document_supplementsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_supplementsInclude<ExtArgs> | null
    /**
     * The data needed to update a document_supplements.
     */
    data: XOR<document_supplementsUpdateInput, document_supplementsUncheckedUpdateInput>
    /**
     * Choose, which document_supplements to update.
     */
    where: document_supplementsWhereUniqueInput
  }

  /**
   * document_supplements updateMany
   */
  export type document_supplementsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update document_supplements.
     */
    data: XOR<document_supplementsUpdateManyMutationInput, document_supplementsUncheckedUpdateManyInput>
    /**
     * Filter which document_supplements to update
     */
    where?: document_supplementsWhereInput
  }

  /**
   * document_supplements upsert
   */
  export type document_supplementsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_supplements
     */
    select?: document_supplementsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_supplementsInclude<ExtArgs> | null
    /**
     * The filter to search for the document_supplements to update in case it exists.
     */
    where: document_supplementsWhereUniqueInput
    /**
     * In case the document_supplements found by the `where` argument doesn't exist, create a new document_supplements with this data.
     */
    create: XOR<document_supplementsCreateInput, document_supplementsUncheckedCreateInput>
    /**
     * In case the document_supplements was found with the provided `where` argument, update it with this data.
     */
    update: XOR<document_supplementsUpdateInput, document_supplementsUncheckedUpdateInput>
  }

  /**
   * document_supplements delete
   */
  export type document_supplementsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_supplements
     */
    select?: document_supplementsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_supplementsInclude<ExtArgs> | null
    /**
     * Filter which document_supplements to delete.
     */
    where: document_supplementsWhereUniqueInput
  }

  /**
   * document_supplements deleteMany
   */
  export type document_supplementsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which document_supplements to delete
     */
    where?: document_supplementsWhereInput
  }

  /**
   * document_supplements without action
   */
  export type document_supplementsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_supplements
     */
    select?: document_supplementsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_supplementsInclude<ExtArgs> | null
  }


  /**
   * Model documents
   */

  export type AggregateDocuments = {
    _count: DocumentsCountAggregateOutputType | null
    _avg: DocumentsAvgAggregateOutputType | null
    _sum: DocumentsSumAggregateOutputType | null
    _min: DocumentsMinAggregateOutputType | null
    _max: DocumentsMaxAggregateOutputType | null
  }

  export type DocumentsAvgAggregateOutputType = {
    documentID: number | null
    metadataID: number | null
  }

  export type DocumentsSumAggregateOutputType = {
    documentID: number | null
    metadataID: number | null
  }

  export type DocumentsMinAggregateOutputType = {
    documentID: number | null
    metadataID: number | null
    timestamp: Date | null
  }

  export type DocumentsMaxAggregateOutputType = {
    documentID: number | null
    metadataID: number | null
    timestamp: Date | null
  }

  export type DocumentsCountAggregateOutputType = {
    documentID: number
    metadataID: number
    timestamp: number
    _all: number
  }


  export type DocumentsAvgAggregateInputType = {
    documentID?: true
    metadataID?: true
  }

  export type DocumentsSumAggregateInputType = {
    documentID?: true
    metadataID?: true
  }

  export type DocumentsMinAggregateInputType = {
    documentID?: true
    metadataID?: true
    timestamp?: true
  }

  export type DocumentsMaxAggregateInputType = {
    documentID?: true
    metadataID?: true
    timestamp?: true
  }

  export type DocumentsCountAggregateInputType = {
    documentID?: true
    metadataID?: true
    timestamp?: true
    _all?: true
  }

  export type DocumentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which documents to aggregate.
     */
    where?: documentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documents to fetch.
     */
    orderBy?: documentsOrderByWithRelationInput | documentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: documentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned documents
    **/
    _count?: true | DocumentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentsMaxAggregateInputType
  }

  export type GetDocumentsAggregateType<T extends DocumentsAggregateArgs> = {
        [P in keyof T & keyof AggregateDocuments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocuments[P]>
      : GetScalarType<T[P], AggregateDocuments[P]>
  }




  export type documentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: documentsWhereInput
    orderBy?: documentsOrderByWithAggregationInput | documentsOrderByWithAggregationInput[]
    by: DocumentsScalarFieldEnum[] | DocumentsScalarFieldEnum
    having?: documentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentsCountAggregateInputType | true
    _avg?: DocumentsAvgAggregateInputType
    _sum?: DocumentsSumAggregateInputType
    _min?: DocumentsMinAggregateInputType
    _max?: DocumentsMaxAggregateInputType
  }

  export type DocumentsGroupByOutputType = {
    documentID: number
    metadataID: number | null
    timestamp: Date | null
    _count: DocumentsCountAggregateOutputType | null
    _avg: DocumentsAvgAggregateOutputType | null
    _sum: DocumentsSumAggregateOutputType | null
    _min: DocumentsMinAggregateOutputType | null
    _max: DocumentsMaxAggregateOutputType | null
  }

  type GetDocumentsGroupByPayload<T extends documentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentsGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentsGroupByOutputType[P]>
        }
      >
    >


  export type documentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    documentID?: boolean
    metadataID?: boolean
    timestamp?: boolean
    document_authors?: boolean | documents$document_authorsArgs<ExtArgs>
    document_supplements?: boolean | documents$document_supplementsArgs<ExtArgs>
    documents_metadates?: boolean | documents$documents_metadatesArgs<ExtArgs>
    _count?: boolean | DocumentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documents"]>


  export type documentsSelectScalar = {
    documentID?: boolean
    metadataID?: boolean
    timestamp?: boolean
  }

  export type documentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document_authors?: boolean | documents$document_authorsArgs<ExtArgs>
    document_supplements?: boolean | documents$document_supplementsArgs<ExtArgs>
    documents_metadates?: boolean | documents$documents_metadatesArgs<ExtArgs>
    _count?: boolean | DocumentsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $documentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "documents"
    objects: {
      document_authors: Prisma.$document_authorsPayload<ExtArgs>[]
      document_supplements: Prisma.$document_supplementsPayload<ExtArgs>[]
      documents_metadates: Prisma.$documents_metadatesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      documentID: number
      metadataID: number | null
      timestamp: Date | null
    }, ExtArgs["result"]["documents"]>
    composites: {}
  }

  type documentsGetPayload<S extends boolean | null | undefined | documentsDefaultArgs> = $Result.GetResult<Prisma.$documentsPayload, S>

  type documentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<documentsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DocumentsCountAggregateInputType | true
    }

  export interface documentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['documents'], meta: { name: 'documents' } }
    /**
     * Find zero or one Documents that matches the filter.
     * @param {documentsFindUniqueArgs} args - Arguments to find a Documents
     * @example
     * // Get one Documents
     * const documents = await prisma.documents.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends documentsFindUniqueArgs>(args: SelectSubset<T, documentsFindUniqueArgs<ExtArgs>>): Prisma__documentsClient<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Documents that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {documentsFindUniqueOrThrowArgs} args - Arguments to find a Documents
     * @example
     * // Get one Documents
     * const documents = await prisma.documents.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends documentsFindUniqueOrThrowArgs>(args: SelectSubset<T, documentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__documentsClient<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentsFindFirstArgs} args - Arguments to find a Documents
     * @example
     * // Get one Documents
     * const documents = await prisma.documents.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends documentsFindFirstArgs>(args?: SelectSubset<T, documentsFindFirstArgs<ExtArgs>>): Prisma__documentsClient<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Documents that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentsFindFirstOrThrowArgs} args - Arguments to find a Documents
     * @example
     * // Get one Documents
     * const documents = await prisma.documents.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends documentsFindFirstOrThrowArgs>(args?: SelectSubset<T, documentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__documentsClient<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.documents.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.documents.findMany({ take: 10 })
     * 
     * // Only select the `documentID`
     * const documentsWithDocumentIDOnly = await prisma.documents.findMany({ select: { documentID: true } })
     * 
     */
    findMany<T extends documentsFindManyArgs>(args?: SelectSubset<T, documentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Documents.
     * @param {documentsCreateArgs} args - Arguments to create a Documents.
     * @example
     * // Create one Documents
     * const Documents = await prisma.documents.create({
     *   data: {
     *     // ... data to create a Documents
     *   }
     * })
     * 
     */
    create<T extends documentsCreateArgs>(args: SelectSubset<T, documentsCreateArgs<ExtArgs>>): Prisma__documentsClient<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Documents.
     * @param {documentsCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const documents = await prisma.documents.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends documentsCreateManyArgs>(args?: SelectSubset<T, documentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Documents.
     * @param {documentsDeleteArgs} args - Arguments to delete one Documents.
     * @example
     * // Delete one Documents
     * const Documents = await prisma.documents.delete({
     *   where: {
     *     // ... filter to delete one Documents
     *   }
     * })
     * 
     */
    delete<T extends documentsDeleteArgs>(args: SelectSubset<T, documentsDeleteArgs<ExtArgs>>): Prisma__documentsClient<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Documents.
     * @param {documentsUpdateArgs} args - Arguments to update one Documents.
     * @example
     * // Update one Documents
     * const documents = await prisma.documents.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends documentsUpdateArgs>(args: SelectSubset<T, documentsUpdateArgs<ExtArgs>>): Prisma__documentsClient<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Documents.
     * @param {documentsDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.documents.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends documentsDeleteManyArgs>(args?: SelectSubset<T, documentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const documents = await prisma.documents.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends documentsUpdateManyArgs>(args: SelectSubset<T, documentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Documents.
     * @param {documentsUpsertArgs} args - Arguments to update or create a Documents.
     * @example
     * // Update or create a Documents
     * const documents = await prisma.documents.upsert({
     *   create: {
     *     // ... data to create a Documents
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Documents we want to update
     *   }
     * })
     */
    upsert<T extends documentsUpsertArgs>(args: SelectSubset<T, documentsUpsertArgs<ExtArgs>>): Prisma__documentsClient<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentsCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.documents.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends documentsCountArgs>(
      args?: Subset<T, documentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentsAggregateArgs>(args: Subset<T, DocumentsAggregateArgs>): Prisma.PrismaPromise<GetDocumentsAggregateType<T>>

    /**
     * Group by Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends documentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: documentsGroupByArgs['orderBy'] }
        : { orderBy?: documentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, documentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the documents model
   */
  readonly fields: documentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for documents.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__documentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    document_authors<T extends documents$document_authorsArgs<ExtArgs> = {}>(args?: Subset<T, documents$document_authorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$document_authorsPayload<ExtArgs>, T, "findMany"> | Null>
    document_supplements<T extends documents$document_supplementsArgs<ExtArgs> = {}>(args?: Subset<T, documents$document_supplementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$document_supplementsPayload<ExtArgs>, T, "findMany"> | Null>
    documents_metadates<T extends documents$documents_metadatesArgs<ExtArgs> = {}>(args?: Subset<T, documents$documents_metadatesArgs<ExtArgs>>): Prisma__documents_metadatesClient<$Result.GetResult<Prisma.$documents_metadatesPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the documents model
   */ 
  interface documentsFieldRefs {
    readonly documentID: FieldRef<"documents", 'Int'>
    readonly metadataID: FieldRef<"documents", 'Int'>
    readonly timestamp: FieldRef<"documents", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * documents findUnique
   */
  export type documentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentsInclude<ExtArgs> | null
    /**
     * Filter, which documents to fetch.
     */
    where: documentsWhereUniqueInput
  }

  /**
   * documents findUniqueOrThrow
   */
  export type documentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentsInclude<ExtArgs> | null
    /**
     * Filter, which documents to fetch.
     */
    where: documentsWhereUniqueInput
  }

  /**
   * documents findFirst
   */
  export type documentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentsInclude<ExtArgs> | null
    /**
     * Filter, which documents to fetch.
     */
    where?: documentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documents to fetch.
     */
    orderBy?: documentsOrderByWithRelationInput | documentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for documents.
     */
    cursor?: documentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of documents.
     */
    distinct?: DocumentsScalarFieldEnum | DocumentsScalarFieldEnum[]
  }

  /**
   * documents findFirstOrThrow
   */
  export type documentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentsInclude<ExtArgs> | null
    /**
     * Filter, which documents to fetch.
     */
    where?: documentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documents to fetch.
     */
    orderBy?: documentsOrderByWithRelationInput | documentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for documents.
     */
    cursor?: documentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of documents.
     */
    distinct?: DocumentsScalarFieldEnum | DocumentsScalarFieldEnum[]
  }

  /**
   * documents findMany
   */
  export type documentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentsInclude<ExtArgs> | null
    /**
     * Filter, which documents to fetch.
     */
    where?: documentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documents to fetch.
     */
    orderBy?: documentsOrderByWithRelationInput | documentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing documents.
     */
    cursor?: documentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documents.
     */
    skip?: number
    distinct?: DocumentsScalarFieldEnum | DocumentsScalarFieldEnum[]
  }

  /**
   * documents create
   */
  export type documentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentsInclude<ExtArgs> | null
    /**
     * The data needed to create a documents.
     */
    data?: XOR<documentsCreateInput, documentsUncheckedCreateInput>
  }

  /**
   * documents createMany
   */
  export type documentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many documents.
     */
    data: documentsCreateManyInput | documentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * documents update
   */
  export type documentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentsInclude<ExtArgs> | null
    /**
     * The data needed to update a documents.
     */
    data: XOR<documentsUpdateInput, documentsUncheckedUpdateInput>
    /**
     * Choose, which documents to update.
     */
    where: documentsWhereUniqueInput
  }

  /**
   * documents updateMany
   */
  export type documentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update documents.
     */
    data: XOR<documentsUpdateManyMutationInput, documentsUncheckedUpdateManyInput>
    /**
     * Filter which documents to update
     */
    where?: documentsWhereInput
  }

  /**
   * documents upsert
   */
  export type documentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentsInclude<ExtArgs> | null
    /**
     * The filter to search for the documents to update in case it exists.
     */
    where: documentsWhereUniqueInput
    /**
     * In case the documents found by the `where` argument doesn't exist, create a new documents with this data.
     */
    create: XOR<documentsCreateInput, documentsUncheckedCreateInput>
    /**
     * In case the documents was found with the provided `where` argument, update it with this data.
     */
    update: XOR<documentsUpdateInput, documentsUncheckedUpdateInput>
  }

  /**
   * documents delete
   */
  export type documentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentsInclude<ExtArgs> | null
    /**
     * Filter which documents to delete.
     */
    where: documentsWhereUniqueInput
  }

  /**
   * documents deleteMany
   */
  export type documentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which documents to delete
     */
    where?: documentsWhereInput
  }

  /**
   * documents.document_authors
   */
  export type documents$document_authorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_authors
     */
    select?: document_authorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_authorsInclude<ExtArgs> | null
    where?: document_authorsWhereInput
    orderBy?: document_authorsOrderByWithRelationInput | document_authorsOrderByWithRelationInput[]
    cursor?: document_authorsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Document_authorsScalarFieldEnum | Document_authorsScalarFieldEnum[]
  }

  /**
   * documents.document_supplements
   */
  export type documents$document_supplementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_supplements
     */
    select?: document_supplementsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_supplementsInclude<ExtArgs> | null
    where?: document_supplementsWhereInput
    orderBy?: document_supplementsOrderByWithRelationInput | document_supplementsOrderByWithRelationInput[]
    cursor?: document_supplementsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Document_supplementsScalarFieldEnum | Document_supplementsScalarFieldEnum[]
  }

  /**
   * documents.documents_metadates
   */
  export type documents$documents_metadatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents_metadates
     */
    select?: documents_metadatesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documents_metadatesInclude<ExtArgs> | null
    where?: documents_metadatesWhereInput
  }

  /**
   * documents without action
   */
  export type documentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentsInclude<ExtArgs> | null
  }


  /**
   * Model documents_metadates
   */

  export type AggregateDocuments_metadates = {
    _count: Documents_metadatesCountAggregateOutputType | null
    _avg: Documents_metadatesAvgAggregateOutputType | null
    _sum: Documents_metadatesSumAggregateOutputType | null
    _min: Documents_metadatesMinAggregateOutputType | null
    _max: Documents_metadatesMaxAggregateOutputType | null
  }

  export type Documents_metadatesAvgAggregateOutputType = {
    metadataID: number | null
  }

  export type Documents_metadatesSumAggregateOutputType = {
    metadataID: number | null
  }

  export type Documents_metadatesMinAggregateOutputType = {
    metadataID: number | null
    orgName: string | null
    boss: string | null
    proposalName: string | null
    problemDescription: string | null
    solution: string | null
    result: string | null
    infoAboutUseObject: string | null
    readinessDegree: string | null
    beneficialEffect: string | null
    effectDescription: string | null
    innovation: string | null
    useful: string | null
    expediency: string | null
    tradeSecretRegime: string | null
    workplaceTradeSecret: string | null
    fioTradeSecret: string | null
    industrialSafety: string | null
    workplaceIndustrialSafety: string | null
    fioIndustrialSafety: string | null
    environmentalSafety: string | null
    workplaceEnvironmentalSafety: string | null
    fioEnvironmentalSafety: string | null
    timestamp: Date | null
  }

  export type Documents_metadatesMaxAggregateOutputType = {
    metadataID: number | null
    orgName: string | null
    boss: string | null
    proposalName: string | null
    problemDescription: string | null
    solution: string | null
    result: string | null
    infoAboutUseObject: string | null
    readinessDegree: string | null
    beneficialEffect: string | null
    effectDescription: string | null
    innovation: string | null
    useful: string | null
    expediency: string | null
    tradeSecretRegime: string | null
    workplaceTradeSecret: string | null
    fioTradeSecret: string | null
    industrialSafety: string | null
    workplaceIndustrialSafety: string | null
    fioIndustrialSafety: string | null
    environmentalSafety: string | null
    workplaceEnvironmentalSafety: string | null
    fioEnvironmentalSafety: string | null
    timestamp: Date | null
  }

  export type Documents_metadatesCountAggregateOutputType = {
    metadataID: number
    orgName: number
    boss: number
    proposalName: number
    problemDescription: number
    solution: number
    result: number
    infoAboutUseObject: number
    readinessDegree: number
    beneficialEffect: number
    effectDescription: number
    innovation: number
    useful: number
    expediency: number
    tradeSecretRegime: number
    workplaceTradeSecret: number
    fioTradeSecret: number
    industrialSafety: number
    workplaceIndustrialSafety: number
    fioIndustrialSafety: number
    environmentalSafety: number
    workplaceEnvironmentalSafety: number
    fioEnvironmentalSafety: number
    timestamp: number
    _all: number
  }


  export type Documents_metadatesAvgAggregateInputType = {
    metadataID?: true
  }

  export type Documents_metadatesSumAggregateInputType = {
    metadataID?: true
  }

  export type Documents_metadatesMinAggregateInputType = {
    metadataID?: true
    orgName?: true
    boss?: true
    proposalName?: true
    problemDescription?: true
    solution?: true
    result?: true
    infoAboutUseObject?: true
    readinessDegree?: true
    beneficialEffect?: true
    effectDescription?: true
    innovation?: true
    useful?: true
    expediency?: true
    tradeSecretRegime?: true
    workplaceTradeSecret?: true
    fioTradeSecret?: true
    industrialSafety?: true
    workplaceIndustrialSafety?: true
    fioIndustrialSafety?: true
    environmentalSafety?: true
    workplaceEnvironmentalSafety?: true
    fioEnvironmentalSafety?: true
    timestamp?: true
  }

  export type Documents_metadatesMaxAggregateInputType = {
    metadataID?: true
    orgName?: true
    boss?: true
    proposalName?: true
    problemDescription?: true
    solution?: true
    result?: true
    infoAboutUseObject?: true
    readinessDegree?: true
    beneficialEffect?: true
    effectDescription?: true
    innovation?: true
    useful?: true
    expediency?: true
    tradeSecretRegime?: true
    workplaceTradeSecret?: true
    fioTradeSecret?: true
    industrialSafety?: true
    workplaceIndustrialSafety?: true
    fioIndustrialSafety?: true
    environmentalSafety?: true
    workplaceEnvironmentalSafety?: true
    fioEnvironmentalSafety?: true
    timestamp?: true
  }

  export type Documents_metadatesCountAggregateInputType = {
    metadataID?: true
    orgName?: true
    boss?: true
    proposalName?: true
    problemDescription?: true
    solution?: true
    result?: true
    infoAboutUseObject?: true
    readinessDegree?: true
    beneficialEffect?: true
    effectDescription?: true
    innovation?: true
    useful?: true
    expediency?: true
    tradeSecretRegime?: true
    workplaceTradeSecret?: true
    fioTradeSecret?: true
    industrialSafety?: true
    workplaceIndustrialSafety?: true
    fioIndustrialSafety?: true
    environmentalSafety?: true
    workplaceEnvironmentalSafety?: true
    fioEnvironmentalSafety?: true
    timestamp?: true
    _all?: true
  }

  export type Documents_metadatesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which documents_metadates to aggregate.
     */
    where?: documents_metadatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documents_metadates to fetch.
     */
    orderBy?: documents_metadatesOrderByWithRelationInput | documents_metadatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: documents_metadatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documents_metadates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documents_metadates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned documents_metadates
    **/
    _count?: true | Documents_metadatesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Documents_metadatesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Documents_metadatesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Documents_metadatesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Documents_metadatesMaxAggregateInputType
  }

  export type GetDocuments_metadatesAggregateType<T extends Documents_metadatesAggregateArgs> = {
        [P in keyof T & keyof AggregateDocuments_metadates]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocuments_metadates[P]>
      : GetScalarType<T[P], AggregateDocuments_metadates[P]>
  }




  export type documents_metadatesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: documents_metadatesWhereInput
    orderBy?: documents_metadatesOrderByWithAggregationInput | documents_metadatesOrderByWithAggregationInput[]
    by: Documents_metadatesScalarFieldEnum[] | Documents_metadatesScalarFieldEnum
    having?: documents_metadatesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Documents_metadatesCountAggregateInputType | true
    _avg?: Documents_metadatesAvgAggregateInputType
    _sum?: Documents_metadatesSumAggregateInputType
    _min?: Documents_metadatesMinAggregateInputType
    _max?: Documents_metadatesMaxAggregateInputType
  }

  export type Documents_metadatesGroupByOutputType = {
    metadataID: number
    orgName: string | null
    boss: string | null
    proposalName: string | null
    problemDescription: string | null
    solution: string | null
    result: string | null
    infoAboutUseObject: string | null
    readinessDegree: string | null
    beneficialEffect: string | null
    effectDescription: string | null
    innovation: string | null
    useful: string | null
    expediency: string | null
    tradeSecretRegime: string | null
    workplaceTradeSecret: string | null
    fioTradeSecret: string | null
    industrialSafety: string | null
    workplaceIndustrialSafety: string | null
    fioIndustrialSafety: string | null
    environmentalSafety: string | null
    workplaceEnvironmentalSafety: string | null
    fioEnvironmentalSafety: string | null
    timestamp: Date | null
    _count: Documents_metadatesCountAggregateOutputType | null
    _avg: Documents_metadatesAvgAggregateOutputType | null
    _sum: Documents_metadatesSumAggregateOutputType | null
    _min: Documents_metadatesMinAggregateOutputType | null
    _max: Documents_metadatesMaxAggregateOutputType | null
  }

  type GetDocuments_metadatesGroupByPayload<T extends documents_metadatesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Documents_metadatesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Documents_metadatesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Documents_metadatesGroupByOutputType[P]>
            : GetScalarType<T[P], Documents_metadatesGroupByOutputType[P]>
        }
      >
    >


  export type documents_metadatesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    metadataID?: boolean
    orgName?: boolean
    boss?: boolean
    proposalName?: boolean
    problemDescription?: boolean
    solution?: boolean
    result?: boolean
    infoAboutUseObject?: boolean
    readinessDegree?: boolean
    beneficialEffect?: boolean
    effectDescription?: boolean
    innovation?: boolean
    useful?: boolean
    expediency?: boolean
    tradeSecretRegime?: boolean
    workplaceTradeSecret?: boolean
    fioTradeSecret?: boolean
    industrialSafety?: boolean
    workplaceIndustrialSafety?: boolean
    fioIndustrialSafety?: boolean
    environmentalSafety?: boolean
    workplaceEnvironmentalSafety?: boolean
    fioEnvironmentalSafety?: boolean
    timestamp?: boolean
    documents?: boolean | documents_metadates$documentsArgs<ExtArgs>
    _count?: boolean | Documents_metadatesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documents_metadates"]>


  export type documents_metadatesSelectScalar = {
    metadataID?: boolean
    orgName?: boolean
    boss?: boolean
    proposalName?: boolean
    problemDescription?: boolean
    solution?: boolean
    result?: boolean
    infoAboutUseObject?: boolean
    readinessDegree?: boolean
    beneficialEffect?: boolean
    effectDescription?: boolean
    innovation?: boolean
    useful?: boolean
    expediency?: boolean
    tradeSecretRegime?: boolean
    workplaceTradeSecret?: boolean
    fioTradeSecret?: boolean
    industrialSafety?: boolean
    workplaceIndustrialSafety?: boolean
    fioIndustrialSafety?: boolean
    environmentalSafety?: boolean
    workplaceEnvironmentalSafety?: boolean
    fioEnvironmentalSafety?: boolean
    timestamp?: boolean
  }

  export type documents_metadatesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | documents_metadates$documentsArgs<ExtArgs>
    _count?: boolean | Documents_metadatesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $documents_metadatesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "documents_metadates"
    objects: {
      documents: Prisma.$documentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      metadataID: number
      orgName: string | null
      boss: string | null
      proposalName: string | null
      problemDescription: string | null
      solution: string | null
      result: string | null
      infoAboutUseObject: string | null
      readinessDegree: string | null
      beneficialEffect: string | null
      effectDescription: string | null
      innovation: string | null
      useful: string | null
      expediency: string | null
      tradeSecretRegime: string | null
      workplaceTradeSecret: string | null
      fioTradeSecret: string | null
      industrialSafety: string | null
      workplaceIndustrialSafety: string | null
      fioIndustrialSafety: string | null
      environmentalSafety: string | null
      workplaceEnvironmentalSafety: string | null
      fioEnvironmentalSafety: string | null
      timestamp: Date | null
    }, ExtArgs["result"]["documents_metadates"]>
    composites: {}
  }

  type documents_metadatesGetPayload<S extends boolean | null | undefined | documents_metadatesDefaultArgs> = $Result.GetResult<Prisma.$documents_metadatesPayload, S>

  type documents_metadatesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<documents_metadatesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Documents_metadatesCountAggregateInputType | true
    }

  export interface documents_metadatesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['documents_metadates'], meta: { name: 'documents_metadates' } }
    /**
     * Find zero or one Documents_metadates that matches the filter.
     * @param {documents_metadatesFindUniqueArgs} args - Arguments to find a Documents_metadates
     * @example
     * // Get one Documents_metadates
     * const documents_metadates = await prisma.documents_metadates.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends documents_metadatesFindUniqueArgs>(args: SelectSubset<T, documents_metadatesFindUniqueArgs<ExtArgs>>): Prisma__documents_metadatesClient<$Result.GetResult<Prisma.$documents_metadatesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Documents_metadates that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {documents_metadatesFindUniqueOrThrowArgs} args - Arguments to find a Documents_metadates
     * @example
     * // Get one Documents_metadates
     * const documents_metadates = await prisma.documents_metadates.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends documents_metadatesFindUniqueOrThrowArgs>(args: SelectSubset<T, documents_metadatesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__documents_metadatesClient<$Result.GetResult<Prisma.$documents_metadatesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Documents_metadates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documents_metadatesFindFirstArgs} args - Arguments to find a Documents_metadates
     * @example
     * // Get one Documents_metadates
     * const documents_metadates = await prisma.documents_metadates.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends documents_metadatesFindFirstArgs>(args?: SelectSubset<T, documents_metadatesFindFirstArgs<ExtArgs>>): Prisma__documents_metadatesClient<$Result.GetResult<Prisma.$documents_metadatesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Documents_metadates that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documents_metadatesFindFirstOrThrowArgs} args - Arguments to find a Documents_metadates
     * @example
     * // Get one Documents_metadates
     * const documents_metadates = await prisma.documents_metadates.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends documents_metadatesFindFirstOrThrowArgs>(args?: SelectSubset<T, documents_metadatesFindFirstOrThrowArgs<ExtArgs>>): Prisma__documents_metadatesClient<$Result.GetResult<Prisma.$documents_metadatesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Documents_metadates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documents_metadatesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents_metadates
     * const documents_metadates = await prisma.documents_metadates.findMany()
     * 
     * // Get first 10 Documents_metadates
     * const documents_metadates = await prisma.documents_metadates.findMany({ take: 10 })
     * 
     * // Only select the `metadataID`
     * const documents_metadatesWithMetadataIDOnly = await prisma.documents_metadates.findMany({ select: { metadataID: true } })
     * 
     */
    findMany<T extends documents_metadatesFindManyArgs>(args?: SelectSubset<T, documents_metadatesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$documents_metadatesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Documents_metadates.
     * @param {documents_metadatesCreateArgs} args - Arguments to create a Documents_metadates.
     * @example
     * // Create one Documents_metadates
     * const Documents_metadates = await prisma.documents_metadates.create({
     *   data: {
     *     // ... data to create a Documents_metadates
     *   }
     * })
     * 
     */
    create<T extends documents_metadatesCreateArgs>(args: SelectSubset<T, documents_metadatesCreateArgs<ExtArgs>>): Prisma__documents_metadatesClient<$Result.GetResult<Prisma.$documents_metadatesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Documents_metadates.
     * @param {documents_metadatesCreateManyArgs} args - Arguments to create many Documents_metadates.
     * @example
     * // Create many Documents_metadates
     * const documents_metadates = await prisma.documents_metadates.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends documents_metadatesCreateManyArgs>(args?: SelectSubset<T, documents_metadatesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Documents_metadates.
     * @param {documents_metadatesDeleteArgs} args - Arguments to delete one Documents_metadates.
     * @example
     * // Delete one Documents_metadates
     * const Documents_metadates = await prisma.documents_metadates.delete({
     *   where: {
     *     // ... filter to delete one Documents_metadates
     *   }
     * })
     * 
     */
    delete<T extends documents_metadatesDeleteArgs>(args: SelectSubset<T, documents_metadatesDeleteArgs<ExtArgs>>): Prisma__documents_metadatesClient<$Result.GetResult<Prisma.$documents_metadatesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Documents_metadates.
     * @param {documents_metadatesUpdateArgs} args - Arguments to update one Documents_metadates.
     * @example
     * // Update one Documents_metadates
     * const documents_metadates = await prisma.documents_metadates.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends documents_metadatesUpdateArgs>(args: SelectSubset<T, documents_metadatesUpdateArgs<ExtArgs>>): Prisma__documents_metadatesClient<$Result.GetResult<Prisma.$documents_metadatesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Documents_metadates.
     * @param {documents_metadatesDeleteManyArgs} args - Arguments to filter Documents_metadates to delete.
     * @example
     * // Delete a few Documents_metadates
     * const { count } = await prisma.documents_metadates.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends documents_metadatesDeleteManyArgs>(args?: SelectSubset<T, documents_metadatesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents_metadates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documents_metadatesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents_metadates
     * const documents_metadates = await prisma.documents_metadates.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends documents_metadatesUpdateManyArgs>(args: SelectSubset<T, documents_metadatesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Documents_metadates.
     * @param {documents_metadatesUpsertArgs} args - Arguments to update or create a Documents_metadates.
     * @example
     * // Update or create a Documents_metadates
     * const documents_metadates = await prisma.documents_metadates.upsert({
     *   create: {
     *     // ... data to create a Documents_metadates
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Documents_metadates we want to update
     *   }
     * })
     */
    upsert<T extends documents_metadatesUpsertArgs>(args: SelectSubset<T, documents_metadatesUpsertArgs<ExtArgs>>): Prisma__documents_metadatesClient<$Result.GetResult<Prisma.$documents_metadatesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Documents_metadates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documents_metadatesCountArgs} args - Arguments to filter Documents_metadates to count.
     * @example
     * // Count the number of Documents_metadates
     * const count = await prisma.documents_metadates.count({
     *   where: {
     *     // ... the filter for the Documents_metadates we want to count
     *   }
     * })
    **/
    count<T extends documents_metadatesCountArgs>(
      args?: Subset<T, documents_metadatesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Documents_metadatesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Documents_metadates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Documents_metadatesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Documents_metadatesAggregateArgs>(args: Subset<T, Documents_metadatesAggregateArgs>): Prisma.PrismaPromise<GetDocuments_metadatesAggregateType<T>>

    /**
     * Group by Documents_metadates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documents_metadatesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends documents_metadatesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: documents_metadatesGroupByArgs['orderBy'] }
        : { orderBy?: documents_metadatesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, documents_metadatesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocuments_metadatesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the documents_metadates model
   */
  readonly fields: documents_metadatesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for documents_metadates.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__documents_metadatesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    documents<T extends documents_metadates$documentsArgs<ExtArgs> = {}>(args?: Subset<T, documents_metadates$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$documentsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the documents_metadates model
   */ 
  interface documents_metadatesFieldRefs {
    readonly metadataID: FieldRef<"documents_metadates", 'Int'>
    readonly orgName: FieldRef<"documents_metadates", 'String'>
    readonly boss: FieldRef<"documents_metadates", 'String'>
    readonly proposalName: FieldRef<"documents_metadates", 'String'>
    readonly problemDescription: FieldRef<"documents_metadates", 'String'>
    readonly solution: FieldRef<"documents_metadates", 'String'>
    readonly result: FieldRef<"documents_metadates", 'String'>
    readonly infoAboutUseObject: FieldRef<"documents_metadates", 'String'>
    readonly readinessDegree: FieldRef<"documents_metadates", 'String'>
    readonly beneficialEffect: FieldRef<"documents_metadates", 'String'>
    readonly effectDescription: FieldRef<"documents_metadates", 'String'>
    readonly innovation: FieldRef<"documents_metadates", 'String'>
    readonly useful: FieldRef<"documents_metadates", 'String'>
    readonly expediency: FieldRef<"documents_metadates", 'String'>
    readonly tradeSecretRegime: FieldRef<"documents_metadates", 'String'>
    readonly workplaceTradeSecret: FieldRef<"documents_metadates", 'String'>
    readonly fioTradeSecret: FieldRef<"documents_metadates", 'String'>
    readonly industrialSafety: FieldRef<"documents_metadates", 'String'>
    readonly workplaceIndustrialSafety: FieldRef<"documents_metadates", 'String'>
    readonly fioIndustrialSafety: FieldRef<"documents_metadates", 'String'>
    readonly environmentalSafety: FieldRef<"documents_metadates", 'String'>
    readonly workplaceEnvironmentalSafety: FieldRef<"documents_metadates", 'String'>
    readonly fioEnvironmentalSafety: FieldRef<"documents_metadates", 'String'>
    readonly timestamp: FieldRef<"documents_metadates", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * documents_metadates findUnique
   */
  export type documents_metadatesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents_metadates
     */
    select?: documents_metadatesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documents_metadatesInclude<ExtArgs> | null
    /**
     * Filter, which documents_metadates to fetch.
     */
    where: documents_metadatesWhereUniqueInput
  }

  /**
   * documents_metadates findUniqueOrThrow
   */
  export type documents_metadatesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents_metadates
     */
    select?: documents_metadatesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documents_metadatesInclude<ExtArgs> | null
    /**
     * Filter, which documents_metadates to fetch.
     */
    where: documents_metadatesWhereUniqueInput
  }

  /**
   * documents_metadates findFirst
   */
  export type documents_metadatesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents_metadates
     */
    select?: documents_metadatesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documents_metadatesInclude<ExtArgs> | null
    /**
     * Filter, which documents_metadates to fetch.
     */
    where?: documents_metadatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documents_metadates to fetch.
     */
    orderBy?: documents_metadatesOrderByWithRelationInput | documents_metadatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for documents_metadates.
     */
    cursor?: documents_metadatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documents_metadates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documents_metadates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of documents_metadates.
     */
    distinct?: Documents_metadatesScalarFieldEnum | Documents_metadatesScalarFieldEnum[]
  }

  /**
   * documents_metadates findFirstOrThrow
   */
  export type documents_metadatesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents_metadates
     */
    select?: documents_metadatesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documents_metadatesInclude<ExtArgs> | null
    /**
     * Filter, which documents_metadates to fetch.
     */
    where?: documents_metadatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documents_metadates to fetch.
     */
    orderBy?: documents_metadatesOrderByWithRelationInput | documents_metadatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for documents_metadates.
     */
    cursor?: documents_metadatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documents_metadates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documents_metadates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of documents_metadates.
     */
    distinct?: Documents_metadatesScalarFieldEnum | Documents_metadatesScalarFieldEnum[]
  }

  /**
   * documents_metadates findMany
   */
  export type documents_metadatesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents_metadates
     */
    select?: documents_metadatesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documents_metadatesInclude<ExtArgs> | null
    /**
     * Filter, which documents_metadates to fetch.
     */
    where?: documents_metadatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documents_metadates to fetch.
     */
    orderBy?: documents_metadatesOrderByWithRelationInput | documents_metadatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing documents_metadates.
     */
    cursor?: documents_metadatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documents_metadates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documents_metadates.
     */
    skip?: number
    distinct?: Documents_metadatesScalarFieldEnum | Documents_metadatesScalarFieldEnum[]
  }

  /**
   * documents_metadates create
   */
  export type documents_metadatesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents_metadates
     */
    select?: documents_metadatesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documents_metadatesInclude<ExtArgs> | null
    /**
     * The data needed to create a documents_metadates.
     */
    data?: XOR<documents_metadatesCreateInput, documents_metadatesUncheckedCreateInput>
  }

  /**
   * documents_metadates createMany
   */
  export type documents_metadatesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many documents_metadates.
     */
    data: documents_metadatesCreateManyInput | documents_metadatesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * documents_metadates update
   */
  export type documents_metadatesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents_metadates
     */
    select?: documents_metadatesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documents_metadatesInclude<ExtArgs> | null
    /**
     * The data needed to update a documents_metadates.
     */
    data: XOR<documents_metadatesUpdateInput, documents_metadatesUncheckedUpdateInput>
    /**
     * Choose, which documents_metadates to update.
     */
    where: documents_metadatesWhereUniqueInput
  }

  /**
   * documents_metadates updateMany
   */
  export type documents_metadatesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update documents_metadates.
     */
    data: XOR<documents_metadatesUpdateManyMutationInput, documents_metadatesUncheckedUpdateManyInput>
    /**
     * Filter which documents_metadates to update
     */
    where?: documents_metadatesWhereInput
  }

  /**
   * documents_metadates upsert
   */
  export type documents_metadatesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents_metadates
     */
    select?: documents_metadatesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documents_metadatesInclude<ExtArgs> | null
    /**
     * The filter to search for the documents_metadates to update in case it exists.
     */
    where: documents_metadatesWhereUniqueInput
    /**
     * In case the documents_metadates found by the `where` argument doesn't exist, create a new documents_metadates with this data.
     */
    create: XOR<documents_metadatesCreateInput, documents_metadatesUncheckedCreateInput>
    /**
     * In case the documents_metadates was found with the provided `where` argument, update it with this data.
     */
    update: XOR<documents_metadatesUpdateInput, documents_metadatesUncheckedUpdateInput>
  }

  /**
   * documents_metadates delete
   */
  export type documents_metadatesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents_metadates
     */
    select?: documents_metadatesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documents_metadatesInclude<ExtArgs> | null
    /**
     * Filter which documents_metadates to delete.
     */
    where: documents_metadatesWhereUniqueInput
  }

  /**
   * documents_metadates deleteMany
   */
  export type documents_metadatesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which documents_metadates to delete
     */
    where?: documents_metadatesWhereInput
  }

  /**
   * documents_metadates.documents
   */
  export type documents_metadates$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents
     */
    select?: documentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentsInclude<ExtArgs> | null
    where?: documentsWhereInput
    orderBy?: documentsOrderByWithRelationInput | documentsOrderByWithRelationInput[]
    cursor?: documentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentsScalarFieldEnum | DocumentsScalarFieldEnum[]
  }

  /**
   * documents_metadates without action
   */
  export type documents_metadatesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documents_metadates
     */
    select?: documents_metadatesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documents_metadatesInclude<ExtArgs> | null
  }


  /**
   * Model supplements
   */

  export type AggregateSupplements = {
    _count: SupplementsCountAggregateOutputType | null
    _avg: SupplementsAvgAggregateOutputType | null
    _sum: SupplementsSumAggregateOutputType | null
    _min: SupplementsMinAggregateOutputType | null
    _max: SupplementsMaxAggregateOutputType | null
  }

  export type SupplementsAvgAggregateOutputType = {
    supplementID: number | null
  }

  export type SupplementsSumAggregateOutputType = {
    supplementID: number | null
  }

  export type SupplementsMinAggregateOutputType = {
    supplementID: number | null
    name: string | null
    image: Buffer | null
    imageName: string | null
    timestamp: Date | null
  }

  export type SupplementsMaxAggregateOutputType = {
    supplementID: number | null
    name: string | null
    image: Buffer | null
    imageName: string | null
    timestamp: Date | null
  }

  export type SupplementsCountAggregateOutputType = {
    supplementID: number
    name: number
    image: number
    imageName: number
    timestamp: number
    _all: number
  }


  export type SupplementsAvgAggregateInputType = {
    supplementID?: true
  }

  export type SupplementsSumAggregateInputType = {
    supplementID?: true
  }

  export type SupplementsMinAggregateInputType = {
    supplementID?: true
    name?: true
    image?: true
    imageName?: true
    timestamp?: true
  }

  export type SupplementsMaxAggregateInputType = {
    supplementID?: true
    name?: true
    image?: true
    imageName?: true
    timestamp?: true
  }

  export type SupplementsCountAggregateInputType = {
    supplementID?: true
    name?: true
    image?: true
    imageName?: true
    timestamp?: true
    _all?: true
  }

  export type SupplementsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which supplements to aggregate.
     */
    where?: supplementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of supplements to fetch.
     */
    orderBy?: supplementsOrderByWithRelationInput | supplementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: supplementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` supplements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` supplements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned supplements
    **/
    _count?: true | SupplementsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupplementsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupplementsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplementsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplementsMaxAggregateInputType
  }

  export type GetSupplementsAggregateType<T extends SupplementsAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplements]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplements[P]>
      : GetScalarType<T[P], AggregateSupplements[P]>
  }




  export type supplementsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: supplementsWhereInput
    orderBy?: supplementsOrderByWithAggregationInput | supplementsOrderByWithAggregationInput[]
    by: SupplementsScalarFieldEnum[] | SupplementsScalarFieldEnum
    having?: supplementsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplementsCountAggregateInputType | true
    _avg?: SupplementsAvgAggregateInputType
    _sum?: SupplementsSumAggregateInputType
    _min?: SupplementsMinAggregateInputType
    _max?: SupplementsMaxAggregateInputType
  }

  export type SupplementsGroupByOutputType = {
    supplementID: number
    name: string | null
    image: Buffer | null
    imageName: string | null
    timestamp: Date | null
    _count: SupplementsCountAggregateOutputType | null
    _avg: SupplementsAvgAggregateOutputType | null
    _sum: SupplementsSumAggregateOutputType | null
    _min: SupplementsMinAggregateOutputType | null
    _max: SupplementsMaxAggregateOutputType | null
  }

  type GetSupplementsGroupByPayload<T extends supplementsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplementsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplementsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplementsGroupByOutputType[P]>
            : GetScalarType<T[P], SupplementsGroupByOutputType[P]>
        }
      >
    >


  export type supplementsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    supplementID?: boolean
    name?: boolean
    image?: boolean
    imageName?: boolean
    timestamp?: boolean
    document_supplements?: boolean | supplements$document_supplementsArgs<ExtArgs>
    _count?: boolean | SupplementsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplements"]>


  export type supplementsSelectScalar = {
    supplementID?: boolean
    name?: boolean
    image?: boolean
    imageName?: boolean
    timestamp?: boolean
  }

  export type supplementsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document_supplements?: boolean | supplements$document_supplementsArgs<ExtArgs>
    _count?: boolean | SupplementsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $supplementsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "supplements"
    objects: {
      document_supplements: Prisma.$document_supplementsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      supplementID: number
      name: string | null
      image: Buffer | null
      imageName: string | null
      timestamp: Date | null
    }, ExtArgs["result"]["supplements"]>
    composites: {}
  }

  type supplementsGetPayload<S extends boolean | null | undefined | supplementsDefaultArgs> = $Result.GetResult<Prisma.$supplementsPayload, S>

  type supplementsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<supplementsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SupplementsCountAggregateInputType | true
    }

  export interface supplementsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['supplements'], meta: { name: 'supplements' } }
    /**
     * Find zero or one Supplements that matches the filter.
     * @param {supplementsFindUniqueArgs} args - Arguments to find a Supplements
     * @example
     * // Get one Supplements
     * const supplements = await prisma.supplements.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends supplementsFindUniqueArgs>(args: SelectSubset<T, supplementsFindUniqueArgs<ExtArgs>>): Prisma__supplementsClient<$Result.GetResult<Prisma.$supplementsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Supplements that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {supplementsFindUniqueOrThrowArgs} args - Arguments to find a Supplements
     * @example
     * // Get one Supplements
     * const supplements = await prisma.supplements.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends supplementsFindUniqueOrThrowArgs>(args: SelectSubset<T, supplementsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__supplementsClient<$Result.GetResult<Prisma.$supplementsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Supplements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplementsFindFirstArgs} args - Arguments to find a Supplements
     * @example
     * // Get one Supplements
     * const supplements = await prisma.supplements.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends supplementsFindFirstArgs>(args?: SelectSubset<T, supplementsFindFirstArgs<ExtArgs>>): Prisma__supplementsClient<$Result.GetResult<Prisma.$supplementsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Supplements that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplementsFindFirstOrThrowArgs} args - Arguments to find a Supplements
     * @example
     * // Get one Supplements
     * const supplements = await prisma.supplements.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends supplementsFindFirstOrThrowArgs>(args?: SelectSubset<T, supplementsFindFirstOrThrowArgs<ExtArgs>>): Prisma__supplementsClient<$Result.GetResult<Prisma.$supplementsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Supplements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplementsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Supplements
     * const supplements = await prisma.supplements.findMany()
     * 
     * // Get first 10 Supplements
     * const supplements = await prisma.supplements.findMany({ take: 10 })
     * 
     * // Only select the `supplementID`
     * const supplementsWithSupplementIDOnly = await prisma.supplements.findMany({ select: { supplementID: true } })
     * 
     */
    findMany<T extends supplementsFindManyArgs>(args?: SelectSubset<T, supplementsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$supplementsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Supplements.
     * @param {supplementsCreateArgs} args - Arguments to create a Supplements.
     * @example
     * // Create one Supplements
     * const Supplements = await prisma.supplements.create({
     *   data: {
     *     // ... data to create a Supplements
     *   }
     * })
     * 
     */
    create<T extends supplementsCreateArgs>(args: SelectSubset<T, supplementsCreateArgs<ExtArgs>>): Prisma__supplementsClient<$Result.GetResult<Prisma.$supplementsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Supplements.
     * @param {supplementsCreateManyArgs} args - Arguments to create many Supplements.
     * @example
     * // Create many Supplements
     * const supplements = await prisma.supplements.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends supplementsCreateManyArgs>(args?: SelectSubset<T, supplementsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Supplements.
     * @param {supplementsDeleteArgs} args - Arguments to delete one Supplements.
     * @example
     * // Delete one Supplements
     * const Supplements = await prisma.supplements.delete({
     *   where: {
     *     // ... filter to delete one Supplements
     *   }
     * })
     * 
     */
    delete<T extends supplementsDeleteArgs>(args: SelectSubset<T, supplementsDeleteArgs<ExtArgs>>): Prisma__supplementsClient<$Result.GetResult<Prisma.$supplementsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Supplements.
     * @param {supplementsUpdateArgs} args - Arguments to update one Supplements.
     * @example
     * // Update one Supplements
     * const supplements = await prisma.supplements.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends supplementsUpdateArgs>(args: SelectSubset<T, supplementsUpdateArgs<ExtArgs>>): Prisma__supplementsClient<$Result.GetResult<Prisma.$supplementsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Supplements.
     * @param {supplementsDeleteManyArgs} args - Arguments to filter Supplements to delete.
     * @example
     * // Delete a few Supplements
     * const { count } = await prisma.supplements.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends supplementsDeleteManyArgs>(args?: SelectSubset<T, supplementsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Supplements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplementsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Supplements
     * const supplements = await prisma.supplements.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends supplementsUpdateManyArgs>(args: SelectSubset<T, supplementsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Supplements.
     * @param {supplementsUpsertArgs} args - Arguments to update or create a Supplements.
     * @example
     * // Update or create a Supplements
     * const supplements = await prisma.supplements.upsert({
     *   create: {
     *     // ... data to create a Supplements
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Supplements we want to update
     *   }
     * })
     */
    upsert<T extends supplementsUpsertArgs>(args: SelectSubset<T, supplementsUpsertArgs<ExtArgs>>): Prisma__supplementsClient<$Result.GetResult<Prisma.$supplementsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Supplements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplementsCountArgs} args - Arguments to filter Supplements to count.
     * @example
     * // Count the number of Supplements
     * const count = await prisma.supplements.count({
     *   where: {
     *     // ... the filter for the Supplements we want to count
     *   }
     * })
    **/
    count<T extends supplementsCountArgs>(
      args?: Subset<T, supplementsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplementsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Supplements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplementsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SupplementsAggregateArgs>(args: Subset<T, SupplementsAggregateArgs>): Prisma.PrismaPromise<GetSupplementsAggregateType<T>>

    /**
     * Group by Supplements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplementsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends supplementsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: supplementsGroupByArgs['orderBy'] }
        : { orderBy?: supplementsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, supplementsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplementsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the supplements model
   */
  readonly fields: supplementsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for supplements.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__supplementsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    document_supplements<T extends supplements$document_supplementsArgs<ExtArgs> = {}>(args?: Subset<T, supplements$document_supplementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$document_supplementsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the supplements model
   */ 
  interface supplementsFieldRefs {
    readonly supplementID: FieldRef<"supplements", 'Int'>
    readonly name: FieldRef<"supplements", 'String'>
    readonly image: FieldRef<"supplements", 'Bytes'>
    readonly imageName: FieldRef<"supplements", 'String'>
    readonly timestamp: FieldRef<"supplements", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * supplements findUnique
   */
  export type supplementsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplements
     */
    select?: supplementsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplementsInclude<ExtArgs> | null
    /**
     * Filter, which supplements to fetch.
     */
    where: supplementsWhereUniqueInput
  }

  /**
   * supplements findUniqueOrThrow
   */
  export type supplementsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplements
     */
    select?: supplementsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplementsInclude<ExtArgs> | null
    /**
     * Filter, which supplements to fetch.
     */
    where: supplementsWhereUniqueInput
  }

  /**
   * supplements findFirst
   */
  export type supplementsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplements
     */
    select?: supplementsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplementsInclude<ExtArgs> | null
    /**
     * Filter, which supplements to fetch.
     */
    where?: supplementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of supplements to fetch.
     */
    orderBy?: supplementsOrderByWithRelationInput | supplementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for supplements.
     */
    cursor?: supplementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` supplements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` supplements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of supplements.
     */
    distinct?: SupplementsScalarFieldEnum | SupplementsScalarFieldEnum[]
  }

  /**
   * supplements findFirstOrThrow
   */
  export type supplementsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplements
     */
    select?: supplementsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplementsInclude<ExtArgs> | null
    /**
     * Filter, which supplements to fetch.
     */
    where?: supplementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of supplements to fetch.
     */
    orderBy?: supplementsOrderByWithRelationInput | supplementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for supplements.
     */
    cursor?: supplementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` supplements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` supplements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of supplements.
     */
    distinct?: SupplementsScalarFieldEnum | SupplementsScalarFieldEnum[]
  }

  /**
   * supplements findMany
   */
  export type supplementsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplements
     */
    select?: supplementsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplementsInclude<ExtArgs> | null
    /**
     * Filter, which supplements to fetch.
     */
    where?: supplementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of supplements to fetch.
     */
    orderBy?: supplementsOrderByWithRelationInput | supplementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing supplements.
     */
    cursor?: supplementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` supplements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` supplements.
     */
    skip?: number
    distinct?: SupplementsScalarFieldEnum | SupplementsScalarFieldEnum[]
  }

  /**
   * supplements create
   */
  export type supplementsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplements
     */
    select?: supplementsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplementsInclude<ExtArgs> | null
    /**
     * The data needed to create a supplements.
     */
    data?: XOR<supplementsCreateInput, supplementsUncheckedCreateInput>
  }

  /**
   * supplements createMany
   */
  export type supplementsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many supplements.
     */
    data: supplementsCreateManyInput | supplementsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * supplements update
   */
  export type supplementsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplements
     */
    select?: supplementsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplementsInclude<ExtArgs> | null
    /**
     * The data needed to update a supplements.
     */
    data: XOR<supplementsUpdateInput, supplementsUncheckedUpdateInput>
    /**
     * Choose, which supplements to update.
     */
    where: supplementsWhereUniqueInput
  }

  /**
   * supplements updateMany
   */
  export type supplementsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update supplements.
     */
    data: XOR<supplementsUpdateManyMutationInput, supplementsUncheckedUpdateManyInput>
    /**
     * Filter which supplements to update
     */
    where?: supplementsWhereInput
  }

  /**
   * supplements upsert
   */
  export type supplementsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplements
     */
    select?: supplementsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplementsInclude<ExtArgs> | null
    /**
     * The filter to search for the supplements to update in case it exists.
     */
    where: supplementsWhereUniqueInput
    /**
     * In case the supplements found by the `where` argument doesn't exist, create a new supplements with this data.
     */
    create: XOR<supplementsCreateInput, supplementsUncheckedCreateInput>
    /**
     * In case the supplements was found with the provided `where` argument, update it with this data.
     */
    update: XOR<supplementsUpdateInput, supplementsUncheckedUpdateInput>
  }

  /**
   * supplements delete
   */
  export type supplementsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplements
     */
    select?: supplementsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplementsInclude<ExtArgs> | null
    /**
     * Filter which supplements to delete.
     */
    where: supplementsWhereUniqueInput
  }

  /**
   * supplements deleteMany
   */
  export type supplementsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which supplements to delete
     */
    where?: supplementsWhereInput
  }

  /**
   * supplements.document_supplements
   */
  export type supplements$document_supplementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_supplements
     */
    select?: document_supplementsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_supplementsInclude<ExtArgs> | null
    where?: document_supplementsWhereInput
    orderBy?: document_supplementsOrderByWithRelationInput | document_supplementsOrderByWithRelationInput[]
    cursor?: document_supplementsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Document_supplementsScalarFieldEnum | Document_supplementsScalarFieldEnum[]
  }

  /**
   * supplements without action
   */
  export type supplementsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplements
     */
    select?: supplementsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supplementsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AuthorsScalarFieldEnum: {
    authorID: 'authorID',
    authorFIO: 'authorFIO',
    shortAuthorFIO: 'shortAuthorFIO',
    authorWorkPosition: 'authorWorkPosition',
    authorWorkplace: 'authorWorkplace',
    percentageContribution: 'percentageContribution',
    authorNumber: 'authorNumber',
    authorYearBirth: 'authorYearBirth',
    contribution: 'contribution',
    timestamp: 'timestamp'
  };

  export type AuthorsScalarFieldEnum = (typeof AuthorsScalarFieldEnum)[keyof typeof AuthorsScalarFieldEnum]


  export const Document_authorsScalarFieldEnum: {
    documentID: 'documentID',
    authorID: 'authorID'
  };

  export type Document_authorsScalarFieldEnum = (typeof Document_authorsScalarFieldEnum)[keyof typeof Document_authorsScalarFieldEnum]


  export const Document_supplementsScalarFieldEnum: {
    documentID: 'documentID',
    supplementID: 'supplementID'
  };

  export type Document_supplementsScalarFieldEnum = (typeof Document_supplementsScalarFieldEnum)[keyof typeof Document_supplementsScalarFieldEnum]


  export const DocumentsScalarFieldEnum: {
    documentID: 'documentID',
    metadataID: 'metadataID',
    timestamp: 'timestamp'
  };

  export type DocumentsScalarFieldEnum = (typeof DocumentsScalarFieldEnum)[keyof typeof DocumentsScalarFieldEnum]


  export const Documents_metadatesScalarFieldEnum: {
    metadataID: 'metadataID',
    orgName: 'orgName',
    boss: 'boss',
    proposalName: 'proposalName',
    problemDescription: 'problemDescription',
    solution: 'solution',
    result: 'result',
    infoAboutUseObject: 'infoAboutUseObject',
    readinessDegree: 'readinessDegree',
    beneficialEffect: 'beneficialEffect',
    effectDescription: 'effectDescription',
    innovation: 'innovation',
    useful: 'useful',
    expediency: 'expediency',
    tradeSecretRegime: 'tradeSecretRegime',
    workplaceTradeSecret: 'workplaceTradeSecret',
    fioTradeSecret: 'fioTradeSecret',
    industrialSafety: 'industrialSafety',
    workplaceIndustrialSafety: 'workplaceIndustrialSafety',
    fioIndustrialSafety: 'fioIndustrialSafety',
    environmentalSafety: 'environmentalSafety',
    workplaceEnvironmentalSafety: 'workplaceEnvironmentalSafety',
    fioEnvironmentalSafety: 'fioEnvironmentalSafety',
    timestamp: 'timestamp'
  };

  export type Documents_metadatesScalarFieldEnum = (typeof Documents_metadatesScalarFieldEnum)[keyof typeof Documents_metadatesScalarFieldEnum]


  export const SupplementsScalarFieldEnum: {
    supplementID: 'supplementID',
    name: 'name',
    image: 'image',
    imageName: 'imageName',
    timestamp: 'timestamp'
  };

  export type SupplementsScalarFieldEnum = (typeof SupplementsScalarFieldEnum)[keyof typeof SupplementsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type authorsWhereInput = {
    AND?: authorsWhereInput | authorsWhereInput[]
    OR?: authorsWhereInput[]
    NOT?: authorsWhereInput | authorsWhereInput[]
    authorID?: IntFilter<"authors"> | number
    authorFIO?: StringNullableFilter<"authors"> | string | null
    shortAuthorFIO?: StringNullableFilter<"authors"> | string | null
    authorWorkPosition?: StringNullableFilter<"authors"> | string | null
    authorWorkplace?: StringNullableFilter<"authors"> | string | null
    percentageContribution?: StringNullableFilter<"authors"> | string | null
    authorNumber?: IntNullableFilter<"authors"> | number | null
    authorYearBirth?: IntNullableFilter<"authors"> | number | null
    contribution?: StringNullableFilter<"authors"> | string | null
    timestamp?: DateTimeNullableFilter<"authors"> | Date | string | null
    document_authors?: Document_authorsListRelationFilter
  }

  export type authorsOrderByWithRelationInput = {
    authorID?: SortOrder
    authorFIO?: SortOrderInput | SortOrder
    shortAuthorFIO?: SortOrderInput | SortOrder
    authorWorkPosition?: SortOrderInput | SortOrder
    authorWorkplace?: SortOrderInput | SortOrder
    percentageContribution?: SortOrderInput | SortOrder
    authorNumber?: SortOrderInput | SortOrder
    authorYearBirth?: SortOrderInput | SortOrder
    contribution?: SortOrderInput | SortOrder
    timestamp?: SortOrderInput | SortOrder
    document_authors?: document_authorsOrderByRelationAggregateInput
  }

  export type authorsWhereUniqueInput = Prisma.AtLeast<{
    authorID?: number
    AND?: authorsWhereInput | authorsWhereInput[]
    OR?: authorsWhereInput[]
    NOT?: authorsWhereInput | authorsWhereInput[]
    authorFIO?: StringNullableFilter<"authors"> | string | null
    shortAuthorFIO?: StringNullableFilter<"authors"> | string | null
    authorWorkPosition?: StringNullableFilter<"authors"> | string | null
    authorWorkplace?: StringNullableFilter<"authors"> | string | null
    percentageContribution?: StringNullableFilter<"authors"> | string | null
    authorNumber?: IntNullableFilter<"authors"> | number | null
    authorYearBirth?: IntNullableFilter<"authors"> | number | null
    contribution?: StringNullableFilter<"authors"> | string | null
    timestamp?: DateTimeNullableFilter<"authors"> | Date | string | null
    document_authors?: Document_authorsListRelationFilter
  }, "authorID">

  export type authorsOrderByWithAggregationInput = {
    authorID?: SortOrder
    authorFIO?: SortOrderInput | SortOrder
    shortAuthorFIO?: SortOrderInput | SortOrder
    authorWorkPosition?: SortOrderInput | SortOrder
    authorWorkplace?: SortOrderInput | SortOrder
    percentageContribution?: SortOrderInput | SortOrder
    authorNumber?: SortOrderInput | SortOrder
    authorYearBirth?: SortOrderInput | SortOrder
    contribution?: SortOrderInput | SortOrder
    timestamp?: SortOrderInput | SortOrder
    _count?: authorsCountOrderByAggregateInput
    _avg?: authorsAvgOrderByAggregateInput
    _max?: authorsMaxOrderByAggregateInput
    _min?: authorsMinOrderByAggregateInput
    _sum?: authorsSumOrderByAggregateInput
  }

  export type authorsScalarWhereWithAggregatesInput = {
    AND?: authorsScalarWhereWithAggregatesInput | authorsScalarWhereWithAggregatesInput[]
    OR?: authorsScalarWhereWithAggregatesInput[]
    NOT?: authorsScalarWhereWithAggregatesInput | authorsScalarWhereWithAggregatesInput[]
    authorID?: IntWithAggregatesFilter<"authors"> | number
    authorFIO?: StringNullableWithAggregatesFilter<"authors"> | string | null
    shortAuthorFIO?: StringNullableWithAggregatesFilter<"authors"> | string | null
    authorWorkPosition?: StringNullableWithAggregatesFilter<"authors"> | string | null
    authorWorkplace?: StringNullableWithAggregatesFilter<"authors"> | string | null
    percentageContribution?: StringNullableWithAggregatesFilter<"authors"> | string | null
    authorNumber?: IntNullableWithAggregatesFilter<"authors"> | number | null
    authorYearBirth?: IntNullableWithAggregatesFilter<"authors"> | number | null
    contribution?: StringNullableWithAggregatesFilter<"authors"> | string | null
    timestamp?: DateTimeNullableWithAggregatesFilter<"authors"> | Date | string | null
  }

  export type document_authorsWhereInput = {
    AND?: document_authorsWhereInput | document_authorsWhereInput[]
    OR?: document_authorsWhereInput[]
    NOT?: document_authorsWhereInput | document_authorsWhereInput[]
    documentID?: IntFilter<"document_authors"> | number
    authorID?: IntFilter<"document_authors"> | number
    documents?: XOR<DocumentsRelationFilter, documentsWhereInput>
    authors?: XOR<AuthorsRelationFilter, authorsWhereInput>
  }

  export type document_authorsOrderByWithRelationInput = {
    documentID?: SortOrder
    authorID?: SortOrder
    documents?: documentsOrderByWithRelationInput
    authors?: authorsOrderByWithRelationInput
  }

  export type document_authorsWhereUniqueInput = Prisma.AtLeast<{
    documentID_authorID?: document_authorsDocumentIDAuthorIDCompoundUniqueInput
    AND?: document_authorsWhereInput | document_authorsWhereInput[]
    OR?: document_authorsWhereInput[]
    NOT?: document_authorsWhereInput | document_authorsWhereInput[]
    documentID?: IntFilter<"document_authors"> | number
    authorID?: IntFilter<"document_authors"> | number
    documents?: XOR<DocumentsRelationFilter, documentsWhereInput>
    authors?: XOR<AuthorsRelationFilter, authorsWhereInput>
  }, "documentID_authorID">

  export type document_authorsOrderByWithAggregationInput = {
    documentID?: SortOrder
    authorID?: SortOrder
    _count?: document_authorsCountOrderByAggregateInput
    _avg?: document_authorsAvgOrderByAggregateInput
    _max?: document_authorsMaxOrderByAggregateInput
    _min?: document_authorsMinOrderByAggregateInput
    _sum?: document_authorsSumOrderByAggregateInput
  }

  export type document_authorsScalarWhereWithAggregatesInput = {
    AND?: document_authorsScalarWhereWithAggregatesInput | document_authorsScalarWhereWithAggregatesInput[]
    OR?: document_authorsScalarWhereWithAggregatesInput[]
    NOT?: document_authorsScalarWhereWithAggregatesInput | document_authorsScalarWhereWithAggregatesInput[]
    documentID?: IntWithAggregatesFilter<"document_authors"> | number
    authorID?: IntWithAggregatesFilter<"document_authors"> | number
  }

  export type document_supplementsWhereInput = {
    AND?: document_supplementsWhereInput | document_supplementsWhereInput[]
    OR?: document_supplementsWhereInput[]
    NOT?: document_supplementsWhereInput | document_supplementsWhereInput[]
    documentID?: IntFilter<"document_supplements"> | number
    supplementID?: IntFilter<"document_supplements"> | number
    documents?: XOR<DocumentsRelationFilter, documentsWhereInput>
    supplements?: XOR<SupplementsRelationFilter, supplementsWhereInput>
  }

  export type document_supplementsOrderByWithRelationInput = {
    documentID?: SortOrder
    supplementID?: SortOrder
    documents?: documentsOrderByWithRelationInput
    supplements?: supplementsOrderByWithRelationInput
  }

  export type document_supplementsWhereUniqueInput = Prisma.AtLeast<{
    documentID_supplementID?: document_supplementsDocumentIDSupplementIDCompoundUniqueInput
    AND?: document_supplementsWhereInput | document_supplementsWhereInput[]
    OR?: document_supplementsWhereInput[]
    NOT?: document_supplementsWhereInput | document_supplementsWhereInput[]
    documentID?: IntFilter<"document_supplements"> | number
    supplementID?: IntFilter<"document_supplements"> | number
    documents?: XOR<DocumentsRelationFilter, documentsWhereInput>
    supplements?: XOR<SupplementsRelationFilter, supplementsWhereInput>
  }, "documentID_supplementID">

  export type document_supplementsOrderByWithAggregationInput = {
    documentID?: SortOrder
    supplementID?: SortOrder
    _count?: document_supplementsCountOrderByAggregateInput
    _avg?: document_supplementsAvgOrderByAggregateInput
    _max?: document_supplementsMaxOrderByAggregateInput
    _min?: document_supplementsMinOrderByAggregateInput
    _sum?: document_supplementsSumOrderByAggregateInput
  }

  export type document_supplementsScalarWhereWithAggregatesInput = {
    AND?: document_supplementsScalarWhereWithAggregatesInput | document_supplementsScalarWhereWithAggregatesInput[]
    OR?: document_supplementsScalarWhereWithAggregatesInput[]
    NOT?: document_supplementsScalarWhereWithAggregatesInput | document_supplementsScalarWhereWithAggregatesInput[]
    documentID?: IntWithAggregatesFilter<"document_supplements"> | number
    supplementID?: IntWithAggregatesFilter<"document_supplements"> | number
  }

  export type documentsWhereInput = {
    AND?: documentsWhereInput | documentsWhereInput[]
    OR?: documentsWhereInput[]
    NOT?: documentsWhereInput | documentsWhereInput[]
    documentID?: IntFilter<"documents"> | number
    metadataID?: IntNullableFilter<"documents"> | number | null
    timestamp?: DateTimeNullableFilter<"documents"> | Date | string | null
    document_authors?: Document_authorsListRelationFilter
    document_supplements?: Document_supplementsListRelationFilter
    documents_metadates?: XOR<Documents_metadatesNullableRelationFilter, documents_metadatesWhereInput> | null
  }

  export type documentsOrderByWithRelationInput = {
    documentID?: SortOrder
    metadataID?: SortOrderInput | SortOrder
    timestamp?: SortOrderInput | SortOrder
    document_authors?: document_authorsOrderByRelationAggregateInput
    document_supplements?: document_supplementsOrderByRelationAggregateInput
    documents_metadates?: documents_metadatesOrderByWithRelationInput
  }

  export type documentsWhereUniqueInput = Prisma.AtLeast<{
    documentID?: number
    AND?: documentsWhereInput | documentsWhereInput[]
    OR?: documentsWhereInput[]
    NOT?: documentsWhereInput | documentsWhereInput[]
    metadataID?: IntNullableFilter<"documents"> | number | null
    timestamp?: DateTimeNullableFilter<"documents"> | Date | string | null
    document_authors?: Document_authorsListRelationFilter
    document_supplements?: Document_supplementsListRelationFilter
    documents_metadates?: XOR<Documents_metadatesNullableRelationFilter, documents_metadatesWhereInput> | null
  }, "documentID">

  export type documentsOrderByWithAggregationInput = {
    documentID?: SortOrder
    metadataID?: SortOrderInput | SortOrder
    timestamp?: SortOrderInput | SortOrder
    _count?: documentsCountOrderByAggregateInput
    _avg?: documentsAvgOrderByAggregateInput
    _max?: documentsMaxOrderByAggregateInput
    _min?: documentsMinOrderByAggregateInput
    _sum?: documentsSumOrderByAggregateInput
  }

  export type documentsScalarWhereWithAggregatesInput = {
    AND?: documentsScalarWhereWithAggregatesInput | documentsScalarWhereWithAggregatesInput[]
    OR?: documentsScalarWhereWithAggregatesInput[]
    NOT?: documentsScalarWhereWithAggregatesInput | documentsScalarWhereWithAggregatesInput[]
    documentID?: IntWithAggregatesFilter<"documents"> | number
    metadataID?: IntNullableWithAggregatesFilter<"documents"> | number | null
    timestamp?: DateTimeNullableWithAggregatesFilter<"documents"> | Date | string | null
  }

  export type documents_metadatesWhereInput = {
    AND?: documents_metadatesWhereInput | documents_metadatesWhereInput[]
    OR?: documents_metadatesWhereInput[]
    NOT?: documents_metadatesWhereInput | documents_metadatesWhereInput[]
    metadataID?: IntFilter<"documents_metadates"> | number
    orgName?: StringNullableFilter<"documents_metadates"> | string | null
    boss?: StringNullableFilter<"documents_metadates"> | string | null
    proposalName?: StringNullableFilter<"documents_metadates"> | string | null
    problemDescription?: StringNullableFilter<"documents_metadates"> | string | null
    solution?: StringNullableFilter<"documents_metadates"> | string | null
    result?: StringNullableFilter<"documents_metadates"> | string | null
    infoAboutUseObject?: StringNullableFilter<"documents_metadates"> | string | null
    readinessDegree?: StringNullableFilter<"documents_metadates"> | string | null
    beneficialEffect?: StringNullableFilter<"documents_metadates"> | string | null
    effectDescription?: StringNullableFilter<"documents_metadates"> | string | null
    innovation?: StringNullableFilter<"documents_metadates"> | string | null
    useful?: StringNullableFilter<"documents_metadates"> | string | null
    expediency?: StringNullableFilter<"documents_metadates"> | string | null
    tradeSecretRegime?: StringNullableFilter<"documents_metadates"> | string | null
    workplaceTradeSecret?: StringNullableFilter<"documents_metadates"> | string | null
    fioTradeSecret?: StringNullableFilter<"documents_metadates"> | string | null
    industrialSafety?: StringNullableFilter<"documents_metadates"> | string | null
    workplaceIndustrialSafety?: StringNullableFilter<"documents_metadates"> | string | null
    fioIndustrialSafety?: StringNullableFilter<"documents_metadates"> | string | null
    environmentalSafety?: StringNullableFilter<"documents_metadates"> | string | null
    workplaceEnvironmentalSafety?: StringNullableFilter<"documents_metadates"> | string | null
    fioEnvironmentalSafety?: StringNullableFilter<"documents_metadates"> | string | null
    timestamp?: DateTimeNullableFilter<"documents_metadates"> | Date | string | null
    documents?: DocumentsListRelationFilter
  }

  export type documents_metadatesOrderByWithRelationInput = {
    metadataID?: SortOrder
    orgName?: SortOrderInput | SortOrder
    boss?: SortOrderInput | SortOrder
    proposalName?: SortOrderInput | SortOrder
    problemDescription?: SortOrderInput | SortOrder
    solution?: SortOrderInput | SortOrder
    result?: SortOrderInput | SortOrder
    infoAboutUseObject?: SortOrderInput | SortOrder
    readinessDegree?: SortOrderInput | SortOrder
    beneficialEffect?: SortOrderInput | SortOrder
    effectDescription?: SortOrderInput | SortOrder
    innovation?: SortOrderInput | SortOrder
    useful?: SortOrderInput | SortOrder
    expediency?: SortOrderInput | SortOrder
    tradeSecretRegime?: SortOrderInput | SortOrder
    workplaceTradeSecret?: SortOrderInput | SortOrder
    fioTradeSecret?: SortOrderInput | SortOrder
    industrialSafety?: SortOrderInput | SortOrder
    workplaceIndustrialSafety?: SortOrderInput | SortOrder
    fioIndustrialSafety?: SortOrderInput | SortOrder
    environmentalSafety?: SortOrderInput | SortOrder
    workplaceEnvironmentalSafety?: SortOrderInput | SortOrder
    fioEnvironmentalSafety?: SortOrderInput | SortOrder
    timestamp?: SortOrderInput | SortOrder
    documents?: documentsOrderByRelationAggregateInput
  }

  export type documents_metadatesWhereUniqueInput = Prisma.AtLeast<{
    metadataID?: number
    AND?: documents_metadatesWhereInput | documents_metadatesWhereInput[]
    OR?: documents_metadatesWhereInput[]
    NOT?: documents_metadatesWhereInput | documents_metadatesWhereInput[]
    orgName?: StringNullableFilter<"documents_metadates"> | string | null
    boss?: StringNullableFilter<"documents_metadates"> | string | null
    proposalName?: StringNullableFilter<"documents_metadates"> | string | null
    problemDescription?: StringNullableFilter<"documents_metadates"> | string | null
    solution?: StringNullableFilter<"documents_metadates"> | string | null
    result?: StringNullableFilter<"documents_metadates"> | string | null
    infoAboutUseObject?: StringNullableFilter<"documents_metadates"> | string | null
    readinessDegree?: StringNullableFilter<"documents_metadates"> | string | null
    beneficialEffect?: StringNullableFilter<"documents_metadates"> | string | null
    effectDescription?: StringNullableFilter<"documents_metadates"> | string | null
    innovation?: StringNullableFilter<"documents_metadates"> | string | null
    useful?: StringNullableFilter<"documents_metadates"> | string | null
    expediency?: StringNullableFilter<"documents_metadates"> | string | null
    tradeSecretRegime?: StringNullableFilter<"documents_metadates"> | string | null
    workplaceTradeSecret?: StringNullableFilter<"documents_metadates"> | string | null
    fioTradeSecret?: StringNullableFilter<"documents_metadates"> | string | null
    industrialSafety?: StringNullableFilter<"documents_metadates"> | string | null
    workplaceIndustrialSafety?: StringNullableFilter<"documents_metadates"> | string | null
    fioIndustrialSafety?: StringNullableFilter<"documents_metadates"> | string | null
    environmentalSafety?: StringNullableFilter<"documents_metadates"> | string | null
    workplaceEnvironmentalSafety?: StringNullableFilter<"documents_metadates"> | string | null
    fioEnvironmentalSafety?: StringNullableFilter<"documents_metadates"> | string | null
    timestamp?: DateTimeNullableFilter<"documents_metadates"> | Date | string | null
    documents?: DocumentsListRelationFilter
  }, "metadataID">

  export type documents_metadatesOrderByWithAggregationInput = {
    metadataID?: SortOrder
    orgName?: SortOrderInput | SortOrder
    boss?: SortOrderInput | SortOrder
    proposalName?: SortOrderInput | SortOrder
    problemDescription?: SortOrderInput | SortOrder
    solution?: SortOrderInput | SortOrder
    result?: SortOrderInput | SortOrder
    infoAboutUseObject?: SortOrderInput | SortOrder
    readinessDegree?: SortOrderInput | SortOrder
    beneficialEffect?: SortOrderInput | SortOrder
    effectDescription?: SortOrderInput | SortOrder
    innovation?: SortOrderInput | SortOrder
    useful?: SortOrderInput | SortOrder
    expediency?: SortOrderInput | SortOrder
    tradeSecretRegime?: SortOrderInput | SortOrder
    workplaceTradeSecret?: SortOrderInput | SortOrder
    fioTradeSecret?: SortOrderInput | SortOrder
    industrialSafety?: SortOrderInput | SortOrder
    workplaceIndustrialSafety?: SortOrderInput | SortOrder
    fioIndustrialSafety?: SortOrderInput | SortOrder
    environmentalSafety?: SortOrderInput | SortOrder
    workplaceEnvironmentalSafety?: SortOrderInput | SortOrder
    fioEnvironmentalSafety?: SortOrderInput | SortOrder
    timestamp?: SortOrderInput | SortOrder
    _count?: documents_metadatesCountOrderByAggregateInput
    _avg?: documents_metadatesAvgOrderByAggregateInput
    _max?: documents_metadatesMaxOrderByAggregateInput
    _min?: documents_metadatesMinOrderByAggregateInput
    _sum?: documents_metadatesSumOrderByAggregateInput
  }

  export type documents_metadatesScalarWhereWithAggregatesInput = {
    AND?: documents_metadatesScalarWhereWithAggregatesInput | documents_metadatesScalarWhereWithAggregatesInput[]
    OR?: documents_metadatesScalarWhereWithAggregatesInput[]
    NOT?: documents_metadatesScalarWhereWithAggregatesInput | documents_metadatesScalarWhereWithAggregatesInput[]
    metadataID?: IntWithAggregatesFilter<"documents_metadates"> | number
    orgName?: StringNullableWithAggregatesFilter<"documents_metadates"> | string | null
    boss?: StringNullableWithAggregatesFilter<"documents_metadates"> | string | null
    proposalName?: StringNullableWithAggregatesFilter<"documents_metadates"> | string | null
    problemDescription?: StringNullableWithAggregatesFilter<"documents_metadates"> | string | null
    solution?: StringNullableWithAggregatesFilter<"documents_metadates"> | string | null
    result?: StringNullableWithAggregatesFilter<"documents_metadates"> | string | null
    infoAboutUseObject?: StringNullableWithAggregatesFilter<"documents_metadates"> | string | null
    readinessDegree?: StringNullableWithAggregatesFilter<"documents_metadates"> | string | null
    beneficialEffect?: StringNullableWithAggregatesFilter<"documents_metadates"> | string | null
    effectDescription?: StringNullableWithAggregatesFilter<"documents_metadates"> | string | null
    innovation?: StringNullableWithAggregatesFilter<"documents_metadates"> | string | null
    useful?: StringNullableWithAggregatesFilter<"documents_metadates"> | string | null
    expediency?: StringNullableWithAggregatesFilter<"documents_metadates"> | string | null
    tradeSecretRegime?: StringNullableWithAggregatesFilter<"documents_metadates"> | string | null
    workplaceTradeSecret?: StringNullableWithAggregatesFilter<"documents_metadates"> | string | null
    fioTradeSecret?: StringNullableWithAggregatesFilter<"documents_metadates"> | string | null
    industrialSafety?: StringNullableWithAggregatesFilter<"documents_metadates"> | string | null
    workplaceIndustrialSafety?: StringNullableWithAggregatesFilter<"documents_metadates"> | string | null
    fioIndustrialSafety?: StringNullableWithAggregatesFilter<"documents_metadates"> | string | null
    environmentalSafety?: StringNullableWithAggregatesFilter<"documents_metadates"> | string | null
    workplaceEnvironmentalSafety?: StringNullableWithAggregatesFilter<"documents_metadates"> | string | null
    fioEnvironmentalSafety?: StringNullableWithAggregatesFilter<"documents_metadates"> | string | null
    timestamp?: DateTimeNullableWithAggregatesFilter<"documents_metadates"> | Date | string | null
  }

  export type supplementsWhereInput = {
    AND?: supplementsWhereInput | supplementsWhereInput[]
    OR?: supplementsWhereInput[]
    NOT?: supplementsWhereInput | supplementsWhereInput[]
    supplementID?: IntFilter<"supplements"> | number
    name?: StringNullableFilter<"supplements"> | string | null
    image?: BytesNullableFilter<"supplements"> | Buffer | null
    imageName?: StringNullableFilter<"supplements"> | string | null
    timestamp?: DateTimeNullableFilter<"supplements"> | Date | string | null
    document_supplements?: Document_supplementsListRelationFilter
  }

  export type supplementsOrderByWithRelationInput = {
    supplementID?: SortOrder
    name?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    imageName?: SortOrderInput | SortOrder
    timestamp?: SortOrderInput | SortOrder
    document_supplements?: document_supplementsOrderByRelationAggregateInput
  }

  export type supplementsWhereUniqueInput = Prisma.AtLeast<{
    supplementID?: number
    AND?: supplementsWhereInput | supplementsWhereInput[]
    OR?: supplementsWhereInput[]
    NOT?: supplementsWhereInput | supplementsWhereInput[]
    name?: StringNullableFilter<"supplements"> | string | null
    image?: BytesNullableFilter<"supplements"> | Buffer | null
    imageName?: StringNullableFilter<"supplements"> | string | null
    timestamp?: DateTimeNullableFilter<"supplements"> | Date | string | null
    document_supplements?: Document_supplementsListRelationFilter
  }, "supplementID">

  export type supplementsOrderByWithAggregationInput = {
    supplementID?: SortOrder
    name?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    imageName?: SortOrderInput | SortOrder
    timestamp?: SortOrderInput | SortOrder
    _count?: supplementsCountOrderByAggregateInput
    _avg?: supplementsAvgOrderByAggregateInput
    _max?: supplementsMaxOrderByAggregateInput
    _min?: supplementsMinOrderByAggregateInput
    _sum?: supplementsSumOrderByAggregateInput
  }

  export type supplementsScalarWhereWithAggregatesInput = {
    AND?: supplementsScalarWhereWithAggregatesInput | supplementsScalarWhereWithAggregatesInput[]
    OR?: supplementsScalarWhereWithAggregatesInput[]
    NOT?: supplementsScalarWhereWithAggregatesInput | supplementsScalarWhereWithAggregatesInput[]
    supplementID?: IntWithAggregatesFilter<"supplements"> | number
    name?: StringNullableWithAggregatesFilter<"supplements"> | string | null
    image?: BytesNullableWithAggregatesFilter<"supplements"> | Buffer | null
    imageName?: StringNullableWithAggregatesFilter<"supplements"> | string | null
    timestamp?: DateTimeNullableWithAggregatesFilter<"supplements"> | Date | string | null
  }

  export type authorsCreateInput = {
    authorFIO?: string | null
    shortAuthorFIO?: string | null
    authorWorkPosition?: string | null
    authorWorkplace?: string | null
    percentageContribution?: string | null
    authorNumber?: number | null
    authorYearBirth?: number | null
    contribution?: string | null
    timestamp?: Date | string | null
    document_authors?: document_authorsCreateNestedManyWithoutAuthorsInput
  }

  export type authorsUncheckedCreateInput = {
    authorID?: number
    authorFIO?: string | null
    shortAuthorFIO?: string | null
    authorWorkPosition?: string | null
    authorWorkplace?: string | null
    percentageContribution?: string | null
    authorNumber?: number | null
    authorYearBirth?: number | null
    contribution?: string | null
    timestamp?: Date | string | null
    document_authors?: document_authorsUncheckedCreateNestedManyWithoutAuthorsInput
  }

  export type authorsUpdateInput = {
    authorFIO?: NullableStringFieldUpdateOperationsInput | string | null
    shortAuthorFIO?: NullableStringFieldUpdateOperationsInput | string | null
    authorWorkPosition?: NullableStringFieldUpdateOperationsInput | string | null
    authorWorkplace?: NullableStringFieldUpdateOperationsInput | string | null
    percentageContribution?: NullableStringFieldUpdateOperationsInput | string | null
    authorNumber?: NullableIntFieldUpdateOperationsInput | number | null
    authorYearBirth?: NullableIntFieldUpdateOperationsInput | number | null
    contribution?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    document_authors?: document_authorsUpdateManyWithoutAuthorsNestedInput
  }

  export type authorsUncheckedUpdateInput = {
    authorID?: IntFieldUpdateOperationsInput | number
    authorFIO?: NullableStringFieldUpdateOperationsInput | string | null
    shortAuthorFIO?: NullableStringFieldUpdateOperationsInput | string | null
    authorWorkPosition?: NullableStringFieldUpdateOperationsInput | string | null
    authorWorkplace?: NullableStringFieldUpdateOperationsInput | string | null
    percentageContribution?: NullableStringFieldUpdateOperationsInput | string | null
    authorNumber?: NullableIntFieldUpdateOperationsInput | number | null
    authorYearBirth?: NullableIntFieldUpdateOperationsInput | number | null
    contribution?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    document_authors?: document_authorsUncheckedUpdateManyWithoutAuthorsNestedInput
  }

  export type authorsCreateManyInput = {
    authorID?: number
    authorFIO?: string | null
    shortAuthorFIO?: string | null
    authorWorkPosition?: string | null
    authorWorkplace?: string | null
    percentageContribution?: string | null
    authorNumber?: number | null
    authorYearBirth?: number | null
    contribution?: string | null
    timestamp?: Date | string | null
  }

  export type authorsUpdateManyMutationInput = {
    authorFIO?: NullableStringFieldUpdateOperationsInput | string | null
    shortAuthorFIO?: NullableStringFieldUpdateOperationsInput | string | null
    authorWorkPosition?: NullableStringFieldUpdateOperationsInput | string | null
    authorWorkplace?: NullableStringFieldUpdateOperationsInput | string | null
    percentageContribution?: NullableStringFieldUpdateOperationsInput | string | null
    authorNumber?: NullableIntFieldUpdateOperationsInput | number | null
    authorYearBirth?: NullableIntFieldUpdateOperationsInput | number | null
    contribution?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type authorsUncheckedUpdateManyInput = {
    authorID?: IntFieldUpdateOperationsInput | number
    authorFIO?: NullableStringFieldUpdateOperationsInput | string | null
    shortAuthorFIO?: NullableStringFieldUpdateOperationsInput | string | null
    authorWorkPosition?: NullableStringFieldUpdateOperationsInput | string | null
    authorWorkplace?: NullableStringFieldUpdateOperationsInput | string | null
    percentageContribution?: NullableStringFieldUpdateOperationsInput | string | null
    authorNumber?: NullableIntFieldUpdateOperationsInput | number | null
    authorYearBirth?: NullableIntFieldUpdateOperationsInput | number | null
    contribution?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type document_authorsCreateInput = {
    documents: documentsCreateNestedOneWithoutDocument_authorsInput
    authors: authorsCreateNestedOneWithoutDocument_authorsInput
  }

  export type document_authorsUncheckedCreateInput = {
    documentID: number
    authorID: number
  }

  export type document_authorsUpdateInput = {
    documents?: documentsUpdateOneRequiredWithoutDocument_authorsNestedInput
    authors?: authorsUpdateOneRequiredWithoutDocument_authorsNestedInput
  }

  export type document_authorsUncheckedUpdateInput = {
    documentID?: IntFieldUpdateOperationsInput | number
    authorID?: IntFieldUpdateOperationsInput | number
  }

  export type document_authorsCreateManyInput = {
    documentID: number
    authorID: number
  }

  export type document_authorsUpdateManyMutationInput = {

  }

  export type document_authorsUncheckedUpdateManyInput = {
    documentID?: IntFieldUpdateOperationsInput | number
    authorID?: IntFieldUpdateOperationsInput | number
  }

  export type document_supplementsCreateInput = {
    documents: documentsCreateNestedOneWithoutDocument_supplementsInput
    supplements: supplementsCreateNestedOneWithoutDocument_supplementsInput
  }

  export type document_supplementsUncheckedCreateInput = {
    documentID: number
    supplementID: number
  }

  export type document_supplementsUpdateInput = {
    documents?: documentsUpdateOneRequiredWithoutDocument_supplementsNestedInput
    supplements?: supplementsUpdateOneRequiredWithoutDocument_supplementsNestedInput
  }

  export type document_supplementsUncheckedUpdateInput = {
    documentID?: IntFieldUpdateOperationsInput | number
    supplementID?: IntFieldUpdateOperationsInput | number
  }

  export type document_supplementsCreateManyInput = {
    documentID: number
    supplementID: number
  }

  export type document_supplementsUpdateManyMutationInput = {

  }

  export type document_supplementsUncheckedUpdateManyInput = {
    documentID?: IntFieldUpdateOperationsInput | number
    supplementID?: IntFieldUpdateOperationsInput | number
  }

  export type documentsCreateInput = {
    timestamp?: Date | string | null
    document_authors?: document_authorsCreateNestedManyWithoutDocumentsInput
    document_supplements?: document_supplementsCreateNestedManyWithoutDocumentsInput
    documents_metadates?: documents_metadatesCreateNestedOneWithoutDocumentsInput
  }

  export type documentsUncheckedCreateInput = {
    documentID?: number
    metadataID?: number | null
    timestamp?: Date | string | null
    document_authors?: document_authorsUncheckedCreateNestedManyWithoutDocumentsInput
    document_supplements?: document_supplementsUncheckedCreateNestedManyWithoutDocumentsInput
  }

  export type documentsUpdateInput = {
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    document_authors?: document_authorsUpdateManyWithoutDocumentsNestedInput
    document_supplements?: document_supplementsUpdateManyWithoutDocumentsNestedInput
    documents_metadates?: documents_metadatesUpdateOneWithoutDocumentsNestedInput
  }

  export type documentsUncheckedUpdateInput = {
    documentID?: IntFieldUpdateOperationsInput | number
    metadataID?: NullableIntFieldUpdateOperationsInput | number | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    document_authors?: document_authorsUncheckedUpdateManyWithoutDocumentsNestedInput
    document_supplements?: document_supplementsUncheckedUpdateManyWithoutDocumentsNestedInput
  }

  export type documentsCreateManyInput = {
    documentID?: number
    metadataID?: number | null
    timestamp?: Date | string | null
  }

  export type documentsUpdateManyMutationInput = {
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type documentsUncheckedUpdateManyInput = {
    documentID?: IntFieldUpdateOperationsInput | number
    metadataID?: NullableIntFieldUpdateOperationsInput | number | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type documents_metadatesCreateInput = {
    orgName?: string | null
    boss?: string | null
    proposalName?: string | null
    problemDescription?: string | null
    solution?: string | null
    result?: string | null
    infoAboutUseObject?: string | null
    readinessDegree?: string | null
    beneficialEffect?: string | null
    effectDescription?: string | null
    innovation?: string | null
    useful?: string | null
    expediency?: string | null
    tradeSecretRegime?: string | null
    workplaceTradeSecret?: string | null
    fioTradeSecret?: string | null
    industrialSafety?: string | null
    workplaceIndustrialSafety?: string | null
    fioIndustrialSafety?: string | null
    environmentalSafety?: string | null
    workplaceEnvironmentalSafety?: string | null
    fioEnvironmentalSafety?: string | null
    timestamp?: Date | string | null
    documents?: documentsCreateNestedManyWithoutDocuments_metadatesInput
  }

  export type documents_metadatesUncheckedCreateInput = {
    metadataID?: number
    orgName?: string | null
    boss?: string | null
    proposalName?: string | null
    problemDescription?: string | null
    solution?: string | null
    result?: string | null
    infoAboutUseObject?: string | null
    readinessDegree?: string | null
    beneficialEffect?: string | null
    effectDescription?: string | null
    innovation?: string | null
    useful?: string | null
    expediency?: string | null
    tradeSecretRegime?: string | null
    workplaceTradeSecret?: string | null
    fioTradeSecret?: string | null
    industrialSafety?: string | null
    workplaceIndustrialSafety?: string | null
    fioIndustrialSafety?: string | null
    environmentalSafety?: string | null
    workplaceEnvironmentalSafety?: string | null
    fioEnvironmentalSafety?: string | null
    timestamp?: Date | string | null
    documents?: documentsUncheckedCreateNestedManyWithoutDocuments_metadatesInput
  }

  export type documents_metadatesUpdateInput = {
    orgName?: NullableStringFieldUpdateOperationsInput | string | null
    boss?: NullableStringFieldUpdateOperationsInput | string | null
    proposalName?: NullableStringFieldUpdateOperationsInput | string | null
    problemDescription?: NullableStringFieldUpdateOperationsInput | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    infoAboutUseObject?: NullableStringFieldUpdateOperationsInput | string | null
    readinessDegree?: NullableStringFieldUpdateOperationsInput | string | null
    beneficialEffect?: NullableStringFieldUpdateOperationsInput | string | null
    effectDescription?: NullableStringFieldUpdateOperationsInput | string | null
    innovation?: NullableStringFieldUpdateOperationsInput | string | null
    useful?: NullableStringFieldUpdateOperationsInput | string | null
    expediency?: NullableStringFieldUpdateOperationsInput | string | null
    tradeSecretRegime?: NullableStringFieldUpdateOperationsInput | string | null
    workplaceTradeSecret?: NullableStringFieldUpdateOperationsInput | string | null
    fioTradeSecret?: NullableStringFieldUpdateOperationsInput | string | null
    industrialSafety?: NullableStringFieldUpdateOperationsInput | string | null
    workplaceIndustrialSafety?: NullableStringFieldUpdateOperationsInput | string | null
    fioIndustrialSafety?: NullableStringFieldUpdateOperationsInput | string | null
    environmentalSafety?: NullableStringFieldUpdateOperationsInput | string | null
    workplaceEnvironmentalSafety?: NullableStringFieldUpdateOperationsInput | string | null
    fioEnvironmentalSafety?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documents?: documentsUpdateManyWithoutDocuments_metadatesNestedInput
  }

  export type documents_metadatesUncheckedUpdateInput = {
    metadataID?: IntFieldUpdateOperationsInput | number
    orgName?: NullableStringFieldUpdateOperationsInput | string | null
    boss?: NullableStringFieldUpdateOperationsInput | string | null
    proposalName?: NullableStringFieldUpdateOperationsInput | string | null
    problemDescription?: NullableStringFieldUpdateOperationsInput | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    infoAboutUseObject?: NullableStringFieldUpdateOperationsInput | string | null
    readinessDegree?: NullableStringFieldUpdateOperationsInput | string | null
    beneficialEffect?: NullableStringFieldUpdateOperationsInput | string | null
    effectDescription?: NullableStringFieldUpdateOperationsInput | string | null
    innovation?: NullableStringFieldUpdateOperationsInput | string | null
    useful?: NullableStringFieldUpdateOperationsInput | string | null
    expediency?: NullableStringFieldUpdateOperationsInput | string | null
    tradeSecretRegime?: NullableStringFieldUpdateOperationsInput | string | null
    workplaceTradeSecret?: NullableStringFieldUpdateOperationsInput | string | null
    fioTradeSecret?: NullableStringFieldUpdateOperationsInput | string | null
    industrialSafety?: NullableStringFieldUpdateOperationsInput | string | null
    workplaceIndustrialSafety?: NullableStringFieldUpdateOperationsInput | string | null
    fioIndustrialSafety?: NullableStringFieldUpdateOperationsInput | string | null
    environmentalSafety?: NullableStringFieldUpdateOperationsInput | string | null
    workplaceEnvironmentalSafety?: NullableStringFieldUpdateOperationsInput | string | null
    fioEnvironmentalSafety?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documents?: documentsUncheckedUpdateManyWithoutDocuments_metadatesNestedInput
  }

  export type documents_metadatesCreateManyInput = {
    metadataID?: number
    orgName?: string | null
    boss?: string | null
    proposalName?: string | null
    problemDescription?: string | null
    solution?: string | null
    result?: string | null
    infoAboutUseObject?: string | null
    readinessDegree?: string | null
    beneficialEffect?: string | null
    effectDescription?: string | null
    innovation?: string | null
    useful?: string | null
    expediency?: string | null
    tradeSecretRegime?: string | null
    workplaceTradeSecret?: string | null
    fioTradeSecret?: string | null
    industrialSafety?: string | null
    workplaceIndustrialSafety?: string | null
    fioIndustrialSafety?: string | null
    environmentalSafety?: string | null
    workplaceEnvironmentalSafety?: string | null
    fioEnvironmentalSafety?: string | null
    timestamp?: Date | string | null
  }

  export type documents_metadatesUpdateManyMutationInput = {
    orgName?: NullableStringFieldUpdateOperationsInput | string | null
    boss?: NullableStringFieldUpdateOperationsInput | string | null
    proposalName?: NullableStringFieldUpdateOperationsInput | string | null
    problemDescription?: NullableStringFieldUpdateOperationsInput | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    infoAboutUseObject?: NullableStringFieldUpdateOperationsInput | string | null
    readinessDegree?: NullableStringFieldUpdateOperationsInput | string | null
    beneficialEffect?: NullableStringFieldUpdateOperationsInput | string | null
    effectDescription?: NullableStringFieldUpdateOperationsInput | string | null
    innovation?: NullableStringFieldUpdateOperationsInput | string | null
    useful?: NullableStringFieldUpdateOperationsInput | string | null
    expediency?: NullableStringFieldUpdateOperationsInput | string | null
    tradeSecretRegime?: NullableStringFieldUpdateOperationsInput | string | null
    workplaceTradeSecret?: NullableStringFieldUpdateOperationsInput | string | null
    fioTradeSecret?: NullableStringFieldUpdateOperationsInput | string | null
    industrialSafety?: NullableStringFieldUpdateOperationsInput | string | null
    workplaceIndustrialSafety?: NullableStringFieldUpdateOperationsInput | string | null
    fioIndustrialSafety?: NullableStringFieldUpdateOperationsInput | string | null
    environmentalSafety?: NullableStringFieldUpdateOperationsInput | string | null
    workplaceEnvironmentalSafety?: NullableStringFieldUpdateOperationsInput | string | null
    fioEnvironmentalSafety?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type documents_metadatesUncheckedUpdateManyInput = {
    metadataID?: IntFieldUpdateOperationsInput | number
    orgName?: NullableStringFieldUpdateOperationsInput | string | null
    boss?: NullableStringFieldUpdateOperationsInput | string | null
    proposalName?: NullableStringFieldUpdateOperationsInput | string | null
    problemDescription?: NullableStringFieldUpdateOperationsInput | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    infoAboutUseObject?: NullableStringFieldUpdateOperationsInput | string | null
    readinessDegree?: NullableStringFieldUpdateOperationsInput | string | null
    beneficialEffect?: NullableStringFieldUpdateOperationsInput | string | null
    effectDescription?: NullableStringFieldUpdateOperationsInput | string | null
    innovation?: NullableStringFieldUpdateOperationsInput | string | null
    useful?: NullableStringFieldUpdateOperationsInput | string | null
    expediency?: NullableStringFieldUpdateOperationsInput | string | null
    tradeSecretRegime?: NullableStringFieldUpdateOperationsInput | string | null
    workplaceTradeSecret?: NullableStringFieldUpdateOperationsInput | string | null
    fioTradeSecret?: NullableStringFieldUpdateOperationsInput | string | null
    industrialSafety?: NullableStringFieldUpdateOperationsInput | string | null
    workplaceIndustrialSafety?: NullableStringFieldUpdateOperationsInput | string | null
    fioIndustrialSafety?: NullableStringFieldUpdateOperationsInput | string | null
    environmentalSafety?: NullableStringFieldUpdateOperationsInput | string | null
    workplaceEnvironmentalSafety?: NullableStringFieldUpdateOperationsInput | string | null
    fioEnvironmentalSafety?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type supplementsCreateInput = {
    name?: string | null
    image?: Buffer | null
    imageName?: string | null
    timestamp?: Date | string | null
    document_supplements?: document_supplementsCreateNestedManyWithoutSupplementsInput
  }

  export type supplementsUncheckedCreateInput = {
    supplementID?: number
    name?: string | null
    image?: Buffer | null
    imageName?: string | null
    timestamp?: Date | string | null
    document_supplements?: document_supplementsUncheckedCreateNestedManyWithoutSupplementsInput
  }

  export type supplementsUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    imageName?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    document_supplements?: document_supplementsUpdateManyWithoutSupplementsNestedInput
  }

  export type supplementsUncheckedUpdateInput = {
    supplementID?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    imageName?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    document_supplements?: document_supplementsUncheckedUpdateManyWithoutSupplementsNestedInput
  }

  export type supplementsCreateManyInput = {
    supplementID?: number
    name?: string | null
    image?: Buffer | null
    imageName?: string | null
    timestamp?: Date | string | null
  }

  export type supplementsUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    imageName?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type supplementsUncheckedUpdateManyInput = {
    supplementID?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    imageName?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Document_authorsListRelationFilter = {
    every?: document_authorsWhereInput
    some?: document_authorsWhereInput
    none?: document_authorsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type document_authorsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type authorsCountOrderByAggregateInput = {
    authorID?: SortOrder
    authorFIO?: SortOrder
    shortAuthorFIO?: SortOrder
    authorWorkPosition?: SortOrder
    authorWorkplace?: SortOrder
    percentageContribution?: SortOrder
    authorNumber?: SortOrder
    authorYearBirth?: SortOrder
    contribution?: SortOrder
    timestamp?: SortOrder
  }

  export type authorsAvgOrderByAggregateInput = {
    authorID?: SortOrder
    authorNumber?: SortOrder
    authorYearBirth?: SortOrder
  }

  export type authorsMaxOrderByAggregateInput = {
    authorID?: SortOrder
    authorFIO?: SortOrder
    shortAuthorFIO?: SortOrder
    authorWorkPosition?: SortOrder
    authorWorkplace?: SortOrder
    percentageContribution?: SortOrder
    authorNumber?: SortOrder
    authorYearBirth?: SortOrder
    contribution?: SortOrder
    timestamp?: SortOrder
  }

  export type authorsMinOrderByAggregateInput = {
    authorID?: SortOrder
    authorFIO?: SortOrder
    shortAuthorFIO?: SortOrder
    authorWorkPosition?: SortOrder
    authorWorkplace?: SortOrder
    percentageContribution?: SortOrder
    authorNumber?: SortOrder
    authorYearBirth?: SortOrder
    contribution?: SortOrder
    timestamp?: SortOrder
  }

  export type authorsSumOrderByAggregateInput = {
    authorID?: SortOrder
    authorNumber?: SortOrder
    authorYearBirth?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DocumentsRelationFilter = {
    is?: documentsWhereInput
    isNot?: documentsWhereInput
  }

  export type AuthorsRelationFilter = {
    is?: authorsWhereInput
    isNot?: authorsWhereInput
  }

  export type document_authorsDocumentIDAuthorIDCompoundUniqueInput = {
    documentID: number
    authorID: number
  }

  export type document_authorsCountOrderByAggregateInput = {
    documentID?: SortOrder
    authorID?: SortOrder
  }

  export type document_authorsAvgOrderByAggregateInput = {
    documentID?: SortOrder
    authorID?: SortOrder
  }

  export type document_authorsMaxOrderByAggregateInput = {
    documentID?: SortOrder
    authorID?: SortOrder
  }

  export type document_authorsMinOrderByAggregateInput = {
    documentID?: SortOrder
    authorID?: SortOrder
  }

  export type document_authorsSumOrderByAggregateInput = {
    documentID?: SortOrder
    authorID?: SortOrder
  }

  export type SupplementsRelationFilter = {
    is?: supplementsWhereInput
    isNot?: supplementsWhereInput
  }

  export type document_supplementsDocumentIDSupplementIDCompoundUniqueInput = {
    documentID: number
    supplementID: number
  }

  export type document_supplementsCountOrderByAggregateInput = {
    documentID?: SortOrder
    supplementID?: SortOrder
  }

  export type document_supplementsAvgOrderByAggregateInput = {
    documentID?: SortOrder
    supplementID?: SortOrder
  }

  export type document_supplementsMaxOrderByAggregateInput = {
    documentID?: SortOrder
    supplementID?: SortOrder
  }

  export type document_supplementsMinOrderByAggregateInput = {
    documentID?: SortOrder
    supplementID?: SortOrder
  }

  export type document_supplementsSumOrderByAggregateInput = {
    documentID?: SortOrder
    supplementID?: SortOrder
  }

  export type Document_supplementsListRelationFilter = {
    every?: document_supplementsWhereInput
    some?: document_supplementsWhereInput
    none?: document_supplementsWhereInput
  }

  export type Documents_metadatesNullableRelationFilter = {
    is?: documents_metadatesWhereInput | null
    isNot?: documents_metadatesWhereInput | null
  }

  export type document_supplementsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type documentsCountOrderByAggregateInput = {
    documentID?: SortOrder
    metadataID?: SortOrder
    timestamp?: SortOrder
  }

  export type documentsAvgOrderByAggregateInput = {
    documentID?: SortOrder
    metadataID?: SortOrder
  }

  export type documentsMaxOrderByAggregateInput = {
    documentID?: SortOrder
    metadataID?: SortOrder
    timestamp?: SortOrder
  }

  export type documentsMinOrderByAggregateInput = {
    documentID?: SortOrder
    metadataID?: SortOrder
    timestamp?: SortOrder
  }

  export type documentsSumOrderByAggregateInput = {
    documentID?: SortOrder
    metadataID?: SortOrder
  }

  export type DocumentsListRelationFilter = {
    every?: documentsWhereInput
    some?: documentsWhereInput
    none?: documentsWhereInput
  }

  export type documentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type documents_metadatesCountOrderByAggregateInput = {
    metadataID?: SortOrder
    orgName?: SortOrder
    boss?: SortOrder
    proposalName?: SortOrder
    problemDescription?: SortOrder
    solution?: SortOrder
    result?: SortOrder
    infoAboutUseObject?: SortOrder
    readinessDegree?: SortOrder
    beneficialEffect?: SortOrder
    effectDescription?: SortOrder
    innovation?: SortOrder
    useful?: SortOrder
    expediency?: SortOrder
    tradeSecretRegime?: SortOrder
    workplaceTradeSecret?: SortOrder
    fioTradeSecret?: SortOrder
    industrialSafety?: SortOrder
    workplaceIndustrialSafety?: SortOrder
    fioIndustrialSafety?: SortOrder
    environmentalSafety?: SortOrder
    workplaceEnvironmentalSafety?: SortOrder
    fioEnvironmentalSafety?: SortOrder
    timestamp?: SortOrder
  }

  export type documents_metadatesAvgOrderByAggregateInput = {
    metadataID?: SortOrder
  }

  export type documents_metadatesMaxOrderByAggregateInput = {
    metadataID?: SortOrder
    orgName?: SortOrder
    boss?: SortOrder
    proposalName?: SortOrder
    problemDescription?: SortOrder
    solution?: SortOrder
    result?: SortOrder
    infoAboutUseObject?: SortOrder
    readinessDegree?: SortOrder
    beneficialEffect?: SortOrder
    effectDescription?: SortOrder
    innovation?: SortOrder
    useful?: SortOrder
    expediency?: SortOrder
    tradeSecretRegime?: SortOrder
    workplaceTradeSecret?: SortOrder
    fioTradeSecret?: SortOrder
    industrialSafety?: SortOrder
    workplaceIndustrialSafety?: SortOrder
    fioIndustrialSafety?: SortOrder
    environmentalSafety?: SortOrder
    workplaceEnvironmentalSafety?: SortOrder
    fioEnvironmentalSafety?: SortOrder
    timestamp?: SortOrder
  }

  export type documents_metadatesMinOrderByAggregateInput = {
    metadataID?: SortOrder
    orgName?: SortOrder
    boss?: SortOrder
    proposalName?: SortOrder
    problemDescription?: SortOrder
    solution?: SortOrder
    result?: SortOrder
    infoAboutUseObject?: SortOrder
    readinessDegree?: SortOrder
    beneficialEffect?: SortOrder
    effectDescription?: SortOrder
    innovation?: SortOrder
    useful?: SortOrder
    expediency?: SortOrder
    tradeSecretRegime?: SortOrder
    workplaceTradeSecret?: SortOrder
    fioTradeSecret?: SortOrder
    industrialSafety?: SortOrder
    workplaceIndustrialSafety?: SortOrder
    fioIndustrialSafety?: SortOrder
    environmentalSafety?: SortOrder
    workplaceEnvironmentalSafety?: SortOrder
    fioEnvironmentalSafety?: SortOrder
    timestamp?: SortOrder
  }

  export type documents_metadatesSumOrderByAggregateInput = {
    metadataID?: SortOrder
  }

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | null
    notIn?: Buffer[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Buffer | null
  }

  export type supplementsCountOrderByAggregateInput = {
    supplementID?: SortOrder
    name?: SortOrder
    image?: SortOrder
    imageName?: SortOrder
    timestamp?: SortOrder
  }

  export type supplementsAvgOrderByAggregateInput = {
    supplementID?: SortOrder
  }

  export type supplementsMaxOrderByAggregateInput = {
    supplementID?: SortOrder
    name?: SortOrder
    image?: SortOrder
    imageName?: SortOrder
    timestamp?: SortOrder
  }

  export type supplementsMinOrderByAggregateInput = {
    supplementID?: SortOrder
    name?: SortOrder
    image?: SortOrder
    imageName?: SortOrder
    timestamp?: SortOrder
  }

  export type supplementsSumOrderByAggregateInput = {
    supplementID?: SortOrder
  }

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | null
    notIn?: Buffer[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Buffer | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type document_authorsCreateNestedManyWithoutAuthorsInput = {
    create?: XOR<document_authorsCreateWithoutAuthorsInput, document_authorsUncheckedCreateWithoutAuthorsInput> | document_authorsCreateWithoutAuthorsInput[] | document_authorsUncheckedCreateWithoutAuthorsInput[]
    connectOrCreate?: document_authorsCreateOrConnectWithoutAuthorsInput | document_authorsCreateOrConnectWithoutAuthorsInput[]
    createMany?: document_authorsCreateManyAuthorsInputEnvelope
    connect?: document_authorsWhereUniqueInput | document_authorsWhereUniqueInput[]
  }

  export type document_authorsUncheckedCreateNestedManyWithoutAuthorsInput = {
    create?: XOR<document_authorsCreateWithoutAuthorsInput, document_authorsUncheckedCreateWithoutAuthorsInput> | document_authorsCreateWithoutAuthorsInput[] | document_authorsUncheckedCreateWithoutAuthorsInput[]
    connectOrCreate?: document_authorsCreateOrConnectWithoutAuthorsInput | document_authorsCreateOrConnectWithoutAuthorsInput[]
    createMany?: document_authorsCreateManyAuthorsInputEnvelope
    connect?: document_authorsWhereUniqueInput | document_authorsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type document_authorsUpdateManyWithoutAuthorsNestedInput = {
    create?: XOR<document_authorsCreateWithoutAuthorsInput, document_authorsUncheckedCreateWithoutAuthorsInput> | document_authorsCreateWithoutAuthorsInput[] | document_authorsUncheckedCreateWithoutAuthorsInput[]
    connectOrCreate?: document_authorsCreateOrConnectWithoutAuthorsInput | document_authorsCreateOrConnectWithoutAuthorsInput[]
    upsert?: document_authorsUpsertWithWhereUniqueWithoutAuthorsInput | document_authorsUpsertWithWhereUniqueWithoutAuthorsInput[]
    createMany?: document_authorsCreateManyAuthorsInputEnvelope
    set?: document_authorsWhereUniqueInput | document_authorsWhereUniqueInput[]
    disconnect?: document_authorsWhereUniqueInput | document_authorsWhereUniqueInput[]
    delete?: document_authorsWhereUniqueInput | document_authorsWhereUniqueInput[]
    connect?: document_authorsWhereUniqueInput | document_authorsWhereUniqueInput[]
    update?: document_authorsUpdateWithWhereUniqueWithoutAuthorsInput | document_authorsUpdateWithWhereUniqueWithoutAuthorsInput[]
    updateMany?: document_authorsUpdateManyWithWhereWithoutAuthorsInput | document_authorsUpdateManyWithWhereWithoutAuthorsInput[]
    deleteMany?: document_authorsScalarWhereInput | document_authorsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type document_authorsUncheckedUpdateManyWithoutAuthorsNestedInput = {
    create?: XOR<document_authorsCreateWithoutAuthorsInput, document_authorsUncheckedCreateWithoutAuthorsInput> | document_authorsCreateWithoutAuthorsInput[] | document_authorsUncheckedCreateWithoutAuthorsInput[]
    connectOrCreate?: document_authorsCreateOrConnectWithoutAuthorsInput | document_authorsCreateOrConnectWithoutAuthorsInput[]
    upsert?: document_authorsUpsertWithWhereUniqueWithoutAuthorsInput | document_authorsUpsertWithWhereUniqueWithoutAuthorsInput[]
    createMany?: document_authorsCreateManyAuthorsInputEnvelope
    set?: document_authorsWhereUniqueInput | document_authorsWhereUniqueInput[]
    disconnect?: document_authorsWhereUniqueInput | document_authorsWhereUniqueInput[]
    delete?: document_authorsWhereUniqueInput | document_authorsWhereUniqueInput[]
    connect?: document_authorsWhereUniqueInput | document_authorsWhereUniqueInput[]
    update?: document_authorsUpdateWithWhereUniqueWithoutAuthorsInput | document_authorsUpdateWithWhereUniqueWithoutAuthorsInput[]
    updateMany?: document_authorsUpdateManyWithWhereWithoutAuthorsInput | document_authorsUpdateManyWithWhereWithoutAuthorsInput[]
    deleteMany?: document_authorsScalarWhereInput | document_authorsScalarWhereInput[]
  }

  export type documentsCreateNestedOneWithoutDocument_authorsInput = {
    create?: XOR<documentsCreateWithoutDocument_authorsInput, documentsUncheckedCreateWithoutDocument_authorsInput>
    connectOrCreate?: documentsCreateOrConnectWithoutDocument_authorsInput
    connect?: documentsWhereUniqueInput
  }

  export type authorsCreateNestedOneWithoutDocument_authorsInput = {
    create?: XOR<authorsCreateWithoutDocument_authorsInput, authorsUncheckedCreateWithoutDocument_authorsInput>
    connectOrCreate?: authorsCreateOrConnectWithoutDocument_authorsInput
    connect?: authorsWhereUniqueInput
  }

  export type documentsUpdateOneRequiredWithoutDocument_authorsNestedInput = {
    create?: XOR<documentsCreateWithoutDocument_authorsInput, documentsUncheckedCreateWithoutDocument_authorsInput>
    connectOrCreate?: documentsCreateOrConnectWithoutDocument_authorsInput
    upsert?: documentsUpsertWithoutDocument_authorsInput
    connect?: documentsWhereUniqueInput
    update?: XOR<XOR<documentsUpdateToOneWithWhereWithoutDocument_authorsInput, documentsUpdateWithoutDocument_authorsInput>, documentsUncheckedUpdateWithoutDocument_authorsInput>
  }

  export type authorsUpdateOneRequiredWithoutDocument_authorsNestedInput = {
    create?: XOR<authorsCreateWithoutDocument_authorsInput, authorsUncheckedCreateWithoutDocument_authorsInput>
    connectOrCreate?: authorsCreateOrConnectWithoutDocument_authorsInput
    upsert?: authorsUpsertWithoutDocument_authorsInput
    connect?: authorsWhereUniqueInput
    update?: XOR<XOR<authorsUpdateToOneWithWhereWithoutDocument_authorsInput, authorsUpdateWithoutDocument_authorsInput>, authorsUncheckedUpdateWithoutDocument_authorsInput>
  }

  export type documentsCreateNestedOneWithoutDocument_supplementsInput = {
    create?: XOR<documentsCreateWithoutDocument_supplementsInput, documentsUncheckedCreateWithoutDocument_supplementsInput>
    connectOrCreate?: documentsCreateOrConnectWithoutDocument_supplementsInput
    connect?: documentsWhereUniqueInput
  }

  export type supplementsCreateNestedOneWithoutDocument_supplementsInput = {
    create?: XOR<supplementsCreateWithoutDocument_supplementsInput, supplementsUncheckedCreateWithoutDocument_supplementsInput>
    connectOrCreate?: supplementsCreateOrConnectWithoutDocument_supplementsInput
    connect?: supplementsWhereUniqueInput
  }

  export type documentsUpdateOneRequiredWithoutDocument_supplementsNestedInput = {
    create?: XOR<documentsCreateWithoutDocument_supplementsInput, documentsUncheckedCreateWithoutDocument_supplementsInput>
    connectOrCreate?: documentsCreateOrConnectWithoutDocument_supplementsInput
    upsert?: documentsUpsertWithoutDocument_supplementsInput
    connect?: documentsWhereUniqueInput
    update?: XOR<XOR<documentsUpdateToOneWithWhereWithoutDocument_supplementsInput, documentsUpdateWithoutDocument_supplementsInput>, documentsUncheckedUpdateWithoutDocument_supplementsInput>
  }

  export type supplementsUpdateOneRequiredWithoutDocument_supplementsNestedInput = {
    create?: XOR<supplementsCreateWithoutDocument_supplementsInput, supplementsUncheckedCreateWithoutDocument_supplementsInput>
    connectOrCreate?: supplementsCreateOrConnectWithoutDocument_supplementsInput
    upsert?: supplementsUpsertWithoutDocument_supplementsInput
    connect?: supplementsWhereUniqueInput
    update?: XOR<XOR<supplementsUpdateToOneWithWhereWithoutDocument_supplementsInput, supplementsUpdateWithoutDocument_supplementsInput>, supplementsUncheckedUpdateWithoutDocument_supplementsInput>
  }

  export type document_authorsCreateNestedManyWithoutDocumentsInput = {
    create?: XOR<document_authorsCreateWithoutDocumentsInput, document_authorsUncheckedCreateWithoutDocumentsInput> | document_authorsCreateWithoutDocumentsInput[] | document_authorsUncheckedCreateWithoutDocumentsInput[]
    connectOrCreate?: document_authorsCreateOrConnectWithoutDocumentsInput | document_authorsCreateOrConnectWithoutDocumentsInput[]
    createMany?: document_authorsCreateManyDocumentsInputEnvelope
    connect?: document_authorsWhereUniqueInput | document_authorsWhereUniqueInput[]
  }

  export type document_supplementsCreateNestedManyWithoutDocumentsInput = {
    create?: XOR<document_supplementsCreateWithoutDocumentsInput, document_supplementsUncheckedCreateWithoutDocumentsInput> | document_supplementsCreateWithoutDocumentsInput[] | document_supplementsUncheckedCreateWithoutDocumentsInput[]
    connectOrCreate?: document_supplementsCreateOrConnectWithoutDocumentsInput | document_supplementsCreateOrConnectWithoutDocumentsInput[]
    createMany?: document_supplementsCreateManyDocumentsInputEnvelope
    connect?: document_supplementsWhereUniqueInput | document_supplementsWhereUniqueInput[]
  }

  export type documents_metadatesCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<documents_metadatesCreateWithoutDocumentsInput, documents_metadatesUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: documents_metadatesCreateOrConnectWithoutDocumentsInput
    connect?: documents_metadatesWhereUniqueInput
  }

  export type document_authorsUncheckedCreateNestedManyWithoutDocumentsInput = {
    create?: XOR<document_authorsCreateWithoutDocumentsInput, document_authorsUncheckedCreateWithoutDocumentsInput> | document_authorsCreateWithoutDocumentsInput[] | document_authorsUncheckedCreateWithoutDocumentsInput[]
    connectOrCreate?: document_authorsCreateOrConnectWithoutDocumentsInput | document_authorsCreateOrConnectWithoutDocumentsInput[]
    createMany?: document_authorsCreateManyDocumentsInputEnvelope
    connect?: document_authorsWhereUniqueInput | document_authorsWhereUniqueInput[]
  }

  export type document_supplementsUncheckedCreateNestedManyWithoutDocumentsInput = {
    create?: XOR<document_supplementsCreateWithoutDocumentsInput, document_supplementsUncheckedCreateWithoutDocumentsInput> | document_supplementsCreateWithoutDocumentsInput[] | document_supplementsUncheckedCreateWithoutDocumentsInput[]
    connectOrCreate?: document_supplementsCreateOrConnectWithoutDocumentsInput | document_supplementsCreateOrConnectWithoutDocumentsInput[]
    createMany?: document_supplementsCreateManyDocumentsInputEnvelope
    connect?: document_supplementsWhereUniqueInput | document_supplementsWhereUniqueInput[]
  }

  export type document_authorsUpdateManyWithoutDocumentsNestedInput = {
    create?: XOR<document_authorsCreateWithoutDocumentsInput, document_authorsUncheckedCreateWithoutDocumentsInput> | document_authorsCreateWithoutDocumentsInput[] | document_authorsUncheckedCreateWithoutDocumentsInput[]
    connectOrCreate?: document_authorsCreateOrConnectWithoutDocumentsInput | document_authorsCreateOrConnectWithoutDocumentsInput[]
    upsert?: document_authorsUpsertWithWhereUniqueWithoutDocumentsInput | document_authorsUpsertWithWhereUniqueWithoutDocumentsInput[]
    createMany?: document_authorsCreateManyDocumentsInputEnvelope
    set?: document_authorsWhereUniqueInput | document_authorsWhereUniqueInput[]
    disconnect?: document_authorsWhereUniqueInput | document_authorsWhereUniqueInput[]
    delete?: document_authorsWhereUniqueInput | document_authorsWhereUniqueInput[]
    connect?: document_authorsWhereUniqueInput | document_authorsWhereUniqueInput[]
    update?: document_authorsUpdateWithWhereUniqueWithoutDocumentsInput | document_authorsUpdateWithWhereUniqueWithoutDocumentsInput[]
    updateMany?: document_authorsUpdateManyWithWhereWithoutDocumentsInput | document_authorsUpdateManyWithWhereWithoutDocumentsInput[]
    deleteMany?: document_authorsScalarWhereInput | document_authorsScalarWhereInput[]
  }

  export type document_supplementsUpdateManyWithoutDocumentsNestedInput = {
    create?: XOR<document_supplementsCreateWithoutDocumentsInput, document_supplementsUncheckedCreateWithoutDocumentsInput> | document_supplementsCreateWithoutDocumentsInput[] | document_supplementsUncheckedCreateWithoutDocumentsInput[]
    connectOrCreate?: document_supplementsCreateOrConnectWithoutDocumentsInput | document_supplementsCreateOrConnectWithoutDocumentsInput[]
    upsert?: document_supplementsUpsertWithWhereUniqueWithoutDocumentsInput | document_supplementsUpsertWithWhereUniqueWithoutDocumentsInput[]
    createMany?: document_supplementsCreateManyDocumentsInputEnvelope
    set?: document_supplementsWhereUniqueInput | document_supplementsWhereUniqueInput[]
    disconnect?: document_supplementsWhereUniqueInput | document_supplementsWhereUniqueInput[]
    delete?: document_supplementsWhereUniqueInput | document_supplementsWhereUniqueInput[]
    connect?: document_supplementsWhereUniqueInput | document_supplementsWhereUniqueInput[]
    update?: document_supplementsUpdateWithWhereUniqueWithoutDocumentsInput | document_supplementsUpdateWithWhereUniqueWithoutDocumentsInput[]
    updateMany?: document_supplementsUpdateManyWithWhereWithoutDocumentsInput | document_supplementsUpdateManyWithWhereWithoutDocumentsInput[]
    deleteMany?: document_supplementsScalarWhereInput | document_supplementsScalarWhereInput[]
  }

  export type documents_metadatesUpdateOneWithoutDocumentsNestedInput = {
    create?: XOR<documents_metadatesCreateWithoutDocumentsInput, documents_metadatesUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: documents_metadatesCreateOrConnectWithoutDocumentsInput
    upsert?: documents_metadatesUpsertWithoutDocumentsInput
    disconnect?: documents_metadatesWhereInput | boolean
    delete?: documents_metadatesWhereInput | boolean
    connect?: documents_metadatesWhereUniqueInput
    update?: XOR<XOR<documents_metadatesUpdateToOneWithWhereWithoutDocumentsInput, documents_metadatesUpdateWithoutDocumentsInput>, documents_metadatesUncheckedUpdateWithoutDocumentsInput>
  }

  export type document_authorsUncheckedUpdateManyWithoutDocumentsNestedInput = {
    create?: XOR<document_authorsCreateWithoutDocumentsInput, document_authorsUncheckedCreateWithoutDocumentsInput> | document_authorsCreateWithoutDocumentsInput[] | document_authorsUncheckedCreateWithoutDocumentsInput[]
    connectOrCreate?: document_authorsCreateOrConnectWithoutDocumentsInput | document_authorsCreateOrConnectWithoutDocumentsInput[]
    upsert?: document_authorsUpsertWithWhereUniqueWithoutDocumentsInput | document_authorsUpsertWithWhereUniqueWithoutDocumentsInput[]
    createMany?: document_authorsCreateManyDocumentsInputEnvelope
    set?: document_authorsWhereUniqueInput | document_authorsWhereUniqueInput[]
    disconnect?: document_authorsWhereUniqueInput | document_authorsWhereUniqueInput[]
    delete?: document_authorsWhereUniqueInput | document_authorsWhereUniqueInput[]
    connect?: document_authorsWhereUniqueInput | document_authorsWhereUniqueInput[]
    update?: document_authorsUpdateWithWhereUniqueWithoutDocumentsInput | document_authorsUpdateWithWhereUniqueWithoutDocumentsInput[]
    updateMany?: document_authorsUpdateManyWithWhereWithoutDocumentsInput | document_authorsUpdateManyWithWhereWithoutDocumentsInput[]
    deleteMany?: document_authorsScalarWhereInput | document_authorsScalarWhereInput[]
  }

  export type document_supplementsUncheckedUpdateManyWithoutDocumentsNestedInput = {
    create?: XOR<document_supplementsCreateWithoutDocumentsInput, document_supplementsUncheckedCreateWithoutDocumentsInput> | document_supplementsCreateWithoutDocumentsInput[] | document_supplementsUncheckedCreateWithoutDocumentsInput[]
    connectOrCreate?: document_supplementsCreateOrConnectWithoutDocumentsInput | document_supplementsCreateOrConnectWithoutDocumentsInput[]
    upsert?: document_supplementsUpsertWithWhereUniqueWithoutDocumentsInput | document_supplementsUpsertWithWhereUniqueWithoutDocumentsInput[]
    createMany?: document_supplementsCreateManyDocumentsInputEnvelope
    set?: document_supplementsWhereUniqueInput | document_supplementsWhereUniqueInput[]
    disconnect?: document_supplementsWhereUniqueInput | document_supplementsWhereUniqueInput[]
    delete?: document_supplementsWhereUniqueInput | document_supplementsWhereUniqueInput[]
    connect?: document_supplementsWhereUniqueInput | document_supplementsWhereUniqueInput[]
    update?: document_supplementsUpdateWithWhereUniqueWithoutDocumentsInput | document_supplementsUpdateWithWhereUniqueWithoutDocumentsInput[]
    updateMany?: document_supplementsUpdateManyWithWhereWithoutDocumentsInput | document_supplementsUpdateManyWithWhereWithoutDocumentsInput[]
    deleteMany?: document_supplementsScalarWhereInput | document_supplementsScalarWhereInput[]
  }

  export type documentsCreateNestedManyWithoutDocuments_metadatesInput = {
    create?: XOR<documentsCreateWithoutDocuments_metadatesInput, documentsUncheckedCreateWithoutDocuments_metadatesInput> | documentsCreateWithoutDocuments_metadatesInput[] | documentsUncheckedCreateWithoutDocuments_metadatesInput[]
    connectOrCreate?: documentsCreateOrConnectWithoutDocuments_metadatesInput | documentsCreateOrConnectWithoutDocuments_metadatesInput[]
    createMany?: documentsCreateManyDocuments_metadatesInputEnvelope
    connect?: documentsWhereUniqueInput | documentsWhereUniqueInput[]
  }

  export type documentsUncheckedCreateNestedManyWithoutDocuments_metadatesInput = {
    create?: XOR<documentsCreateWithoutDocuments_metadatesInput, documentsUncheckedCreateWithoutDocuments_metadatesInput> | documentsCreateWithoutDocuments_metadatesInput[] | documentsUncheckedCreateWithoutDocuments_metadatesInput[]
    connectOrCreate?: documentsCreateOrConnectWithoutDocuments_metadatesInput | documentsCreateOrConnectWithoutDocuments_metadatesInput[]
    createMany?: documentsCreateManyDocuments_metadatesInputEnvelope
    connect?: documentsWhereUniqueInput | documentsWhereUniqueInput[]
  }

  export type documentsUpdateManyWithoutDocuments_metadatesNestedInput = {
    create?: XOR<documentsCreateWithoutDocuments_metadatesInput, documentsUncheckedCreateWithoutDocuments_metadatesInput> | documentsCreateWithoutDocuments_metadatesInput[] | documentsUncheckedCreateWithoutDocuments_metadatesInput[]
    connectOrCreate?: documentsCreateOrConnectWithoutDocuments_metadatesInput | documentsCreateOrConnectWithoutDocuments_metadatesInput[]
    upsert?: documentsUpsertWithWhereUniqueWithoutDocuments_metadatesInput | documentsUpsertWithWhereUniqueWithoutDocuments_metadatesInput[]
    createMany?: documentsCreateManyDocuments_metadatesInputEnvelope
    set?: documentsWhereUniqueInput | documentsWhereUniqueInput[]
    disconnect?: documentsWhereUniqueInput | documentsWhereUniqueInput[]
    delete?: documentsWhereUniqueInput | documentsWhereUniqueInput[]
    connect?: documentsWhereUniqueInput | documentsWhereUniqueInput[]
    update?: documentsUpdateWithWhereUniqueWithoutDocuments_metadatesInput | documentsUpdateWithWhereUniqueWithoutDocuments_metadatesInput[]
    updateMany?: documentsUpdateManyWithWhereWithoutDocuments_metadatesInput | documentsUpdateManyWithWhereWithoutDocuments_metadatesInput[]
    deleteMany?: documentsScalarWhereInput | documentsScalarWhereInput[]
  }

  export type documentsUncheckedUpdateManyWithoutDocuments_metadatesNestedInput = {
    create?: XOR<documentsCreateWithoutDocuments_metadatesInput, documentsUncheckedCreateWithoutDocuments_metadatesInput> | documentsCreateWithoutDocuments_metadatesInput[] | documentsUncheckedCreateWithoutDocuments_metadatesInput[]
    connectOrCreate?: documentsCreateOrConnectWithoutDocuments_metadatesInput | documentsCreateOrConnectWithoutDocuments_metadatesInput[]
    upsert?: documentsUpsertWithWhereUniqueWithoutDocuments_metadatesInput | documentsUpsertWithWhereUniqueWithoutDocuments_metadatesInput[]
    createMany?: documentsCreateManyDocuments_metadatesInputEnvelope
    set?: documentsWhereUniqueInput | documentsWhereUniqueInput[]
    disconnect?: documentsWhereUniqueInput | documentsWhereUniqueInput[]
    delete?: documentsWhereUniqueInput | documentsWhereUniqueInput[]
    connect?: documentsWhereUniqueInput | documentsWhereUniqueInput[]
    update?: documentsUpdateWithWhereUniqueWithoutDocuments_metadatesInput | documentsUpdateWithWhereUniqueWithoutDocuments_metadatesInput[]
    updateMany?: documentsUpdateManyWithWhereWithoutDocuments_metadatesInput | documentsUpdateManyWithWhereWithoutDocuments_metadatesInput[]
    deleteMany?: documentsScalarWhereInput | documentsScalarWhereInput[]
  }

  export type document_supplementsCreateNestedManyWithoutSupplementsInput = {
    create?: XOR<document_supplementsCreateWithoutSupplementsInput, document_supplementsUncheckedCreateWithoutSupplementsInput> | document_supplementsCreateWithoutSupplementsInput[] | document_supplementsUncheckedCreateWithoutSupplementsInput[]
    connectOrCreate?: document_supplementsCreateOrConnectWithoutSupplementsInput | document_supplementsCreateOrConnectWithoutSupplementsInput[]
    createMany?: document_supplementsCreateManySupplementsInputEnvelope
    connect?: document_supplementsWhereUniqueInput | document_supplementsWhereUniqueInput[]
  }

  export type document_supplementsUncheckedCreateNestedManyWithoutSupplementsInput = {
    create?: XOR<document_supplementsCreateWithoutSupplementsInput, document_supplementsUncheckedCreateWithoutSupplementsInput> | document_supplementsCreateWithoutSupplementsInput[] | document_supplementsUncheckedCreateWithoutSupplementsInput[]
    connectOrCreate?: document_supplementsCreateOrConnectWithoutSupplementsInput | document_supplementsCreateOrConnectWithoutSupplementsInput[]
    createMany?: document_supplementsCreateManySupplementsInputEnvelope
    connect?: document_supplementsWhereUniqueInput | document_supplementsWhereUniqueInput[]
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Buffer | null
  }

  export type document_supplementsUpdateManyWithoutSupplementsNestedInput = {
    create?: XOR<document_supplementsCreateWithoutSupplementsInput, document_supplementsUncheckedCreateWithoutSupplementsInput> | document_supplementsCreateWithoutSupplementsInput[] | document_supplementsUncheckedCreateWithoutSupplementsInput[]
    connectOrCreate?: document_supplementsCreateOrConnectWithoutSupplementsInput | document_supplementsCreateOrConnectWithoutSupplementsInput[]
    upsert?: document_supplementsUpsertWithWhereUniqueWithoutSupplementsInput | document_supplementsUpsertWithWhereUniqueWithoutSupplementsInput[]
    createMany?: document_supplementsCreateManySupplementsInputEnvelope
    set?: document_supplementsWhereUniqueInput | document_supplementsWhereUniqueInput[]
    disconnect?: document_supplementsWhereUniqueInput | document_supplementsWhereUniqueInput[]
    delete?: document_supplementsWhereUniqueInput | document_supplementsWhereUniqueInput[]
    connect?: document_supplementsWhereUniqueInput | document_supplementsWhereUniqueInput[]
    update?: document_supplementsUpdateWithWhereUniqueWithoutSupplementsInput | document_supplementsUpdateWithWhereUniqueWithoutSupplementsInput[]
    updateMany?: document_supplementsUpdateManyWithWhereWithoutSupplementsInput | document_supplementsUpdateManyWithWhereWithoutSupplementsInput[]
    deleteMany?: document_supplementsScalarWhereInput | document_supplementsScalarWhereInput[]
  }

  export type document_supplementsUncheckedUpdateManyWithoutSupplementsNestedInput = {
    create?: XOR<document_supplementsCreateWithoutSupplementsInput, document_supplementsUncheckedCreateWithoutSupplementsInput> | document_supplementsCreateWithoutSupplementsInput[] | document_supplementsUncheckedCreateWithoutSupplementsInput[]
    connectOrCreate?: document_supplementsCreateOrConnectWithoutSupplementsInput | document_supplementsCreateOrConnectWithoutSupplementsInput[]
    upsert?: document_supplementsUpsertWithWhereUniqueWithoutSupplementsInput | document_supplementsUpsertWithWhereUniqueWithoutSupplementsInput[]
    createMany?: document_supplementsCreateManySupplementsInputEnvelope
    set?: document_supplementsWhereUniqueInput | document_supplementsWhereUniqueInput[]
    disconnect?: document_supplementsWhereUniqueInput | document_supplementsWhereUniqueInput[]
    delete?: document_supplementsWhereUniqueInput | document_supplementsWhereUniqueInput[]
    connect?: document_supplementsWhereUniqueInput | document_supplementsWhereUniqueInput[]
    update?: document_supplementsUpdateWithWhereUniqueWithoutSupplementsInput | document_supplementsUpdateWithWhereUniqueWithoutSupplementsInput[]
    updateMany?: document_supplementsUpdateManyWithWhereWithoutSupplementsInput | document_supplementsUpdateManyWithWhereWithoutSupplementsInput[]
    deleteMany?: document_supplementsScalarWhereInput | document_supplementsScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | null
    notIn?: Buffer[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Buffer | null
  }

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | null
    notIn?: Buffer[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Buffer | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type document_authorsCreateWithoutAuthorsInput = {
    documents: documentsCreateNestedOneWithoutDocument_authorsInput
  }

  export type document_authorsUncheckedCreateWithoutAuthorsInput = {
    documentID: number
  }

  export type document_authorsCreateOrConnectWithoutAuthorsInput = {
    where: document_authorsWhereUniqueInput
    create: XOR<document_authorsCreateWithoutAuthorsInput, document_authorsUncheckedCreateWithoutAuthorsInput>
  }

  export type document_authorsCreateManyAuthorsInputEnvelope = {
    data: document_authorsCreateManyAuthorsInput | document_authorsCreateManyAuthorsInput[]
    skipDuplicates?: boolean
  }

  export type document_authorsUpsertWithWhereUniqueWithoutAuthorsInput = {
    where: document_authorsWhereUniqueInput
    update: XOR<document_authorsUpdateWithoutAuthorsInput, document_authorsUncheckedUpdateWithoutAuthorsInput>
    create: XOR<document_authorsCreateWithoutAuthorsInput, document_authorsUncheckedCreateWithoutAuthorsInput>
  }

  export type document_authorsUpdateWithWhereUniqueWithoutAuthorsInput = {
    where: document_authorsWhereUniqueInput
    data: XOR<document_authorsUpdateWithoutAuthorsInput, document_authorsUncheckedUpdateWithoutAuthorsInput>
  }

  export type document_authorsUpdateManyWithWhereWithoutAuthorsInput = {
    where: document_authorsScalarWhereInput
    data: XOR<document_authorsUpdateManyMutationInput, document_authorsUncheckedUpdateManyWithoutAuthorsInput>
  }

  export type document_authorsScalarWhereInput = {
    AND?: document_authorsScalarWhereInput | document_authorsScalarWhereInput[]
    OR?: document_authorsScalarWhereInput[]
    NOT?: document_authorsScalarWhereInput | document_authorsScalarWhereInput[]
    documentID?: IntFilter<"document_authors"> | number
    authorID?: IntFilter<"document_authors"> | number
  }

  export type documentsCreateWithoutDocument_authorsInput = {
    timestamp?: Date | string | null
    document_supplements?: document_supplementsCreateNestedManyWithoutDocumentsInput
    documents_metadates?: documents_metadatesCreateNestedOneWithoutDocumentsInput
  }

  export type documentsUncheckedCreateWithoutDocument_authorsInput = {
    documentID?: number
    metadataID?: number | null
    timestamp?: Date | string | null
    document_supplements?: document_supplementsUncheckedCreateNestedManyWithoutDocumentsInput
  }

  export type documentsCreateOrConnectWithoutDocument_authorsInput = {
    where: documentsWhereUniqueInput
    create: XOR<documentsCreateWithoutDocument_authorsInput, documentsUncheckedCreateWithoutDocument_authorsInput>
  }

  export type authorsCreateWithoutDocument_authorsInput = {
    authorFIO?: string | null
    shortAuthorFIO?: string | null
    authorWorkPosition?: string | null
    authorWorkplace?: string | null
    percentageContribution?: string | null
    authorNumber?: number | null
    authorYearBirth?: number | null
    contribution?: string | null
    timestamp?: Date | string | null
  }

  export type authorsUncheckedCreateWithoutDocument_authorsInput = {
    authorID?: number
    authorFIO?: string | null
    shortAuthorFIO?: string | null
    authorWorkPosition?: string | null
    authorWorkplace?: string | null
    percentageContribution?: string | null
    authorNumber?: number | null
    authorYearBirth?: number | null
    contribution?: string | null
    timestamp?: Date | string | null
  }

  export type authorsCreateOrConnectWithoutDocument_authorsInput = {
    where: authorsWhereUniqueInput
    create: XOR<authorsCreateWithoutDocument_authorsInput, authorsUncheckedCreateWithoutDocument_authorsInput>
  }

  export type documentsUpsertWithoutDocument_authorsInput = {
    update: XOR<documentsUpdateWithoutDocument_authorsInput, documentsUncheckedUpdateWithoutDocument_authorsInput>
    create: XOR<documentsCreateWithoutDocument_authorsInput, documentsUncheckedCreateWithoutDocument_authorsInput>
    where?: documentsWhereInput
  }

  export type documentsUpdateToOneWithWhereWithoutDocument_authorsInput = {
    where?: documentsWhereInput
    data: XOR<documentsUpdateWithoutDocument_authorsInput, documentsUncheckedUpdateWithoutDocument_authorsInput>
  }

  export type documentsUpdateWithoutDocument_authorsInput = {
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    document_supplements?: document_supplementsUpdateManyWithoutDocumentsNestedInput
    documents_metadates?: documents_metadatesUpdateOneWithoutDocumentsNestedInput
  }

  export type documentsUncheckedUpdateWithoutDocument_authorsInput = {
    documentID?: IntFieldUpdateOperationsInput | number
    metadataID?: NullableIntFieldUpdateOperationsInput | number | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    document_supplements?: document_supplementsUncheckedUpdateManyWithoutDocumentsNestedInput
  }

  export type authorsUpsertWithoutDocument_authorsInput = {
    update: XOR<authorsUpdateWithoutDocument_authorsInput, authorsUncheckedUpdateWithoutDocument_authorsInput>
    create: XOR<authorsCreateWithoutDocument_authorsInput, authorsUncheckedCreateWithoutDocument_authorsInput>
    where?: authorsWhereInput
  }

  export type authorsUpdateToOneWithWhereWithoutDocument_authorsInput = {
    where?: authorsWhereInput
    data: XOR<authorsUpdateWithoutDocument_authorsInput, authorsUncheckedUpdateWithoutDocument_authorsInput>
  }

  export type authorsUpdateWithoutDocument_authorsInput = {
    authorFIO?: NullableStringFieldUpdateOperationsInput | string | null
    shortAuthorFIO?: NullableStringFieldUpdateOperationsInput | string | null
    authorWorkPosition?: NullableStringFieldUpdateOperationsInput | string | null
    authorWorkplace?: NullableStringFieldUpdateOperationsInput | string | null
    percentageContribution?: NullableStringFieldUpdateOperationsInput | string | null
    authorNumber?: NullableIntFieldUpdateOperationsInput | number | null
    authorYearBirth?: NullableIntFieldUpdateOperationsInput | number | null
    contribution?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type authorsUncheckedUpdateWithoutDocument_authorsInput = {
    authorID?: IntFieldUpdateOperationsInput | number
    authorFIO?: NullableStringFieldUpdateOperationsInput | string | null
    shortAuthorFIO?: NullableStringFieldUpdateOperationsInput | string | null
    authorWorkPosition?: NullableStringFieldUpdateOperationsInput | string | null
    authorWorkplace?: NullableStringFieldUpdateOperationsInput | string | null
    percentageContribution?: NullableStringFieldUpdateOperationsInput | string | null
    authorNumber?: NullableIntFieldUpdateOperationsInput | number | null
    authorYearBirth?: NullableIntFieldUpdateOperationsInput | number | null
    contribution?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type documentsCreateWithoutDocument_supplementsInput = {
    timestamp?: Date | string | null
    document_authors?: document_authorsCreateNestedManyWithoutDocumentsInput
    documents_metadates?: documents_metadatesCreateNestedOneWithoutDocumentsInput
  }

  export type documentsUncheckedCreateWithoutDocument_supplementsInput = {
    documentID?: number
    metadataID?: number | null
    timestamp?: Date | string | null
    document_authors?: document_authorsUncheckedCreateNestedManyWithoutDocumentsInput
  }

  export type documentsCreateOrConnectWithoutDocument_supplementsInput = {
    where: documentsWhereUniqueInput
    create: XOR<documentsCreateWithoutDocument_supplementsInput, documentsUncheckedCreateWithoutDocument_supplementsInput>
  }

  export type supplementsCreateWithoutDocument_supplementsInput = {
    name?: string | null
    image?: Buffer | null
    imageName?: string | null
    timestamp?: Date | string | null
  }

  export type supplementsUncheckedCreateWithoutDocument_supplementsInput = {
    supplementID?: number
    name?: string | null
    image?: Buffer | null
    imageName?: string | null
    timestamp?: Date | string | null
  }

  export type supplementsCreateOrConnectWithoutDocument_supplementsInput = {
    where: supplementsWhereUniqueInput
    create: XOR<supplementsCreateWithoutDocument_supplementsInput, supplementsUncheckedCreateWithoutDocument_supplementsInput>
  }

  export type documentsUpsertWithoutDocument_supplementsInput = {
    update: XOR<documentsUpdateWithoutDocument_supplementsInput, documentsUncheckedUpdateWithoutDocument_supplementsInput>
    create: XOR<documentsCreateWithoutDocument_supplementsInput, documentsUncheckedCreateWithoutDocument_supplementsInput>
    where?: documentsWhereInput
  }

  export type documentsUpdateToOneWithWhereWithoutDocument_supplementsInput = {
    where?: documentsWhereInput
    data: XOR<documentsUpdateWithoutDocument_supplementsInput, documentsUncheckedUpdateWithoutDocument_supplementsInput>
  }

  export type documentsUpdateWithoutDocument_supplementsInput = {
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    document_authors?: document_authorsUpdateManyWithoutDocumentsNestedInput
    documents_metadates?: documents_metadatesUpdateOneWithoutDocumentsNestedInput
  }

  export type documentsUncheckedUpdateWithoutDocument_supplementsInput = {
    documentID?: IntFieldUpdateOperationsInput | number
    metadataID?: NullableIntFieldUpdateOperationsInput | number | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    document_authors?: document_authorsUncheckedUpdateManyWithoutDocumentsNestedInput
  }

  export type supplementsUpsertWithoutDocument_supplementsInput = {
    update: XOR<supplementsUpdateWithoutDocument_supplementsInput, supplementsUncheckedUpdateWithoutDocument_supplementsInput>
    create: XOR<supplementsCreateWithoutDocument_supplementsInput, supplementsUncheckedCreateWithoutDocument_supplementsInput>
    where?: supplementsWhereInput
  }

  export type supplementsUpdateToOneWithWhereWithoutDocument_supplementsInput = {
    where?: supplementsWhereInput
    data: XOR<supplementsUpdateWithoutDocument_supplementsInput, supplementsUncheckedUpdateWithoutDocument_supplementsInput>
  }

  export type supplementsUpdateWithoutDocument_supplementsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    imageName?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type supplementsUncheckedUpdateWithoutDocument_supplementsInput = {
    supplementID?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    imageName?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type document_authorsCreateWithoutDocumentsInput = {
    authors: authorsCreateNestedOneWithoutDocument_authorsInput
  }

  export type document_authorsUncheckedCreateWithoutDocumentsInput = {
    authorID: number
  }

  export type document_authorsCreateOrConnectWithoutDocumentsInput = {
    where: document_authorsWhereUniqueInput
    create: XOR<document_authorsCreateWithoutDocumentsInput, document_authorsUncheckedCreateWithoutDocumentsInput>
  }

  export type document_authorsCreateManyDocumentsInputEnvelope = {
    data: document_authorsCreateManyDocumentsInput | document_authorsCreateManyDocumentsInput[]
    skipDuplicates?: boolean
  }

  export type document_supplementsCreateWithoutDocumentsInput = {
    supplements: supplementsCreateNestedOneWithoutDocument_supplementsInput
  }

  export type document_supplementsUncheckedCreateWithoutDocumentsInput = {
    supplementID: number
  }

  export type document_supplementsCreateOrConnectWithoutDocumentsInput = {
    where: document_supplementsWhereUniqueInput
    create: XOR<document_supplementsCreateWithoutDocumentsInput, document_supplementsUncheckedCreateWithoutDocumentsInput>
  }

  export type document_supplementsCreateManyDocumentsInputEnvelope = {
    data: document_supplementsCreateManyDocumentsInput | document_supplementsCreateManyDocumentsInput[]
    skipDuplicates?: boolean
  }

  export type documents_metadatesCreateWithoutDocumentsInput = {
    orgName?: string | null
    boss?: string | null
    proposalName?: string | null
    problemDescription?: string | null
    solution?: string | null
    result?: string | null
    infoAboutUseObject?: string | null
    readinessDegree?: string | null
    beneficialEffect?: string | null
    effectDescription?: string | null
    innovation?: string | null
    useful?: string | null
    expediency?: string | null
    tradeSecretRegime?: string | null
    workplaceTradeSecret?: string | null
    fioTradeSecret?: string | null
    industrialSafety?: string | null
    workplaceIndustrialSafety?: string | null
    fioIndustrialSafety?: string | null
    environmentalSafety?: string | null
    workplaceEnvironmentalSafety?: string | null
    fioEnvironmentalSafety?: string | null
    timestamp?: Date | string | null
  }

  export type documents_metadatesUncheckedCreateWithoutDocumentsInput = {
    metadataID?: number
    orgName?: string | null
    boss?: string | null
    proposalName?: string | null
    problemDescription?: string | null
    solution?: string | null
    result?: string | null
    infoAboutUseObject?: string | null
    readinessDegree?: string | null
    beneficialEffect?: string | null
    effectDescription?: string | null
    innovation?: string | null
    useful?: string | null
    expediency?: string | null
    tradeSecretRegime?: string | null
    workplaceTradeSecret?: string | null
    fioTradeSecret?: string | null
    industrialSafety?: string | null
    workplaceIndustrialSafety?: string | null
    fioIndustrialSafety?: string | null
    environmentalSafety?: string | null
    workplaceEnvironmentalSafety?: string | null
    fioEnvironmentalSafety?: string | null
    timestamp?: Date | string | null
  }

  export type documents_metadatesCreateOrConnectWithoutDocumentsInput = {
    where: documents_metadatesWhereUniqueInput
    create: XOR<documents_metadatesCreateWithoutDocumentsInput, documents_metadatesUncheckedCreateWithoutDocumentsInput>
  }

  export type document_authorsUpsertWithWhereUniqueWithoutDocumentsInput = {
    where: document_authorsWhereUniqueInput
    update: XOR<document_authorsUpdateWithoutDocumentsInput, document_authorsUncheckedUpdateWithoutDocumentsInput>
    create: XOR<document_authorsCreateWithoutDocumentsInput, document_authorsUncheckedCreateWithoutDocumentsInput>
  }

  export type document_authorsUpdateWithWhereUniqueWithoutDocumentsInput = {
    where: document_authorsWhereUniqueInput
    data: XOR<document_authorsUpdateWithoutDocumentsInput, document_authorsUncheckedUpdateWithoutDocumentsInput>
  }

  export type document_authorsUpdateManyWithWhereWithoutDocumentsInput = {
    where: document_authorsScalarWhereInput
    data: XOR<document_authorsUpdateManyMutationInput, document_authorsUncheckedUpdateManyWithoutDocumentsInput>
  }

  export type document_supplementsUpsertWithWhereUniqueWithoutDocumentsInput = {
    where: document_supplementsWhereUniqueInput
    update: XOR<document_supplementsUpdateWithoutDocumentsInput, document_supplementsUncheckedUpdateWithoutDocumentsInput>
    create: XOR<document_supplementsCreateWithoutDocumentsInput, document_supplementsUncheckedCreateWithoutDocumentsInput>
  }

  export type document_supplementsUpdateWithWhereUniqueWithoutDocumentsInput = {
    where: document_supplementsWhereUniqueInput
    data: XOR<document_supplementsUpdateWithoutDocumentsInput, document_supplementsUncheckedUpdateWithoutDocumentsInput>
  }

  export type document_supplementsUpdateManyWithWhereWithoutDocumentsInput = {
    where: document_supplementsScalarWhereInput
    data: XOR<document_supplementsUpdateManyMutationInput, document_supplementsUncheckedUpdateManyWithoutDocumentsInput>
  }

  export type document_supplementsScalarWhereInput = {
    AND?: document_supplementsScalarWhereInput | document_supplementsScalarWhereInput[]
    OR?: document_supplementsScalarWhereInput[]
    NOT?: document_supplementsScalarWhereInput | document_supplementsScalarWhereInput[]
    documentID?: IntFilter<"document_supplements"> | number
    supplementID?: IntFilter<"document_supplements"> | number
  }

  export type documents_metadatesUpsertWithoutDocumentsInput = {
    update: XOR<documents_metadatesUpdateWithoutDocumentsInput, documents_metadatesUncheckedUpdateWithoutDocumentsInput>
    create: XOR<documents_metadatesCreateWithoutDocumentsInput, documents_metadatesUncheckedCreateWithoutDocumentsInput>
    where?: documents_metadatesWhereInput
  }

  export type documents_metadatesUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: documents_metadatesWhereInput
    data: XOR<documents_metadatesUpdateWithoutDocumentsInput, documents_metadatesUncheckedUpdateWithoutDocumentsInput>
  }

  export type documents_metadatesUpdateWithoutDocumentsInput = {
    orgName?: NullableStringFieldUpdateOperationsInput | string | null
    boss?: NullableStringFieldUpdateOperationsInput | string | null
    proposalName?: NullableStringFieldUpdateOperationsInput | string | null
    problemDescription?: NullableStringFieldUpdateOperationsInput | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    infoAboutUseObject?: NullableStringFieldUpdateOperationsInput | string | null
    readinessDegree?: NullableStringFieldUpdateOperationsInput | string | null
    beneficialEffect?: NullableStringFieldUpdateOperationsInput | string | null
    effectDescription?: NullableStringFieldUpdateOperationsInput | string | null
    innovation?: NullableStringFieldUpdateOperationsInput | string | null
    useful?: NullableStringFieldUpdateOperationsInput | string | null
    expediency?: NullableStringFieldUpdateOperationsInput | string | null
    tradeSecretRegime?: NullableStringFieldUpdateOperationsInput | string | null
    workplaceTradeSecret?: NullableStringFieldUpdateOperationsInput | string | null
    fioTradeSecret?: NullableStringFieldUpdateOperationsInput | string | null
    industrialSafety?: NullableStringFieldUpdateOperationsInput | string | null
    workplaceIndustrialSafety?: NullableStringFieldUpdateOperationsInput | string | null
    fioIndustrialSafety?: NullableStringFieldUpdateOperationsInput | string | null
    environmentalSafety?: NullableStringFieldUpdateOperationsInput | string | null
    workplaceEnvironmentalSafety?: NullableStringFieldUpdateOperationsInput | string | null
    fioEnvironmentalSafety?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type documents_metadatesUncheckedUpdateWithoutDocumentsInput = {
    metadataID?: IntFieldUpdateOperationsInput | number
    orgName?: NullableStringFieldUpdateOperationsInput | string | null
    boss?: NullableStringFieldUpdateOperationsInput | string | null
    proposalName?: NullableStringFieldUpdateOperationsInput | string | null
    problemDescription?: NullableStringFieldUpdateOperationsInput | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    infoAboutUseObject?: NullableStringFieldUpdateOperationsInput | string | null
    readinessDegree?: NullableStringFieldUpdateOperationsInput | string | null
    beneficialEffect?: NullableStringFieldUpdateOperationsInput | string | null
    effectDescription?: NullableStringFieldUpdateOperationsInput | string | null
    innovation?: NullableStringFieldUpdateOperationsInput | string | null
    useful?: NullableStringFieldUpdateOperationsInput | string | null
    expediency?: NullableStringFieldUpdateOperationsInput | string | null
    tradeSecretRegime?: NullableStringFieldUpdateOperationsInput | string | null
    workplaceTradeSecret?: NullableStringFieldUpdateOperationsInput | string | null
    fioTradeSecret?: NullableStringFieldUpdateOperationsInput | string | null
    industrialSafety?: NullableStringFieldUpdateOperationsInput | string | null
    workplaceIndustrialSafety?: NullableStringFieldUpdateOperationsInput | string | null
    fioIndustrialSafety?: NullableStringFieldUpdateOperationsInput | string | null
    environmentalSafety?: NullableStringFieldUpdateOperationsInput | string | null
    workplaceEnvironmentalSafety?: NullableStringFieldUpdateOperationsInput | string | null
    fioEnvironmentalSafety?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type documentsCreateWithoutDocuments_metadatesInput = {
    timestamp?: Date | string | null
    document_authors?: document_authorsCreateNestedManyWithoutDocumentsInput
    document_supplements?: document_supplementsCreateNestedManyWithoutDocumentsInput
  }

  export type documentsUncheckedCreateWithoutDocuments_metadatesInput = {
    documentID?: number
    timestamp?: Date | string | null
    document_authors?: document_authorsUncheckedCreateNestedManyWithoutDocumentsInput
    document_supplements?: document_supplementsUncheckedCreateNestedManyWithoutDocumentsInput
  }

  export type documentsCreateOrConnectWithoutDocuments_metadatesInput = {
    where: documentsWhereUniqueInput
    create: XOR<documentsCreateWithoutDocuments_metadatesInput, documentsUncheckedCreateWithoutDocuments_metadatesInput>
  }

  export type documentsCreateManyDocuments_metadatesInputEnvelope = {
    data: documentsCreateManyDocuments_metadatesInput | documentsCreateManyDocuments_metadatesInput[]
    skipDuplicates?: boolean
  }

  export type documentsUpsertWithWhereUniqueWithoutDocuments_metadatesInput = {
    where: documentsWhereUniqueInput
    update: XOR<documentsUpdateWithoutDocuments_metadatesInput, documentsUncheckedUpdateWithoutDocuments_metadatesInput>
    create: XOR<documentsCreateWithoutDocuments_metadatesInput, documentsUncheckedCreateWithoutDocuments_metadatesInput>
  }

  export type documentsUpdateWithWhereUniqueWithoutDocuments_metadatesInput = {
    where: documentsWhereUniqueInput
    data: XOR<documentsUpdateWithoutDocuments_metadatesInput, documentsUncheckedUpdateWithoutDocuments_metadatesInput>
  }

  export type documentsUpdateManyWithWhereWithoutDocuments_metadatesInput = {
    where: documentsScalarWhereInput
    data: XOR<documentsUpdateManyMutationInput, documentsUncheckedUpdateManyWithoutDocuments_metadatesInput>
  }

  export type documentsScalarWhereInput = {
    AND?: documentsScalarWhereInput | documentsScalarWhereInput[]
    OR?: documentsScalarWhereInput[]
    NOT?: documentsScalarWhereInput | documentsScalarWhereInput[]
    documentID?: IntFilter<"documents"> | number
    metadataID?: IntNullableFilter<"documents"> | number | null
    timestamp?: DateTimeNullableFilter<"documents"> | Date | string | null
  }

  export type document_supplementsCreateWithoutSupplementsInput = {
    documents: documentsCreateNestedOneWithoutDocument_supplementsInput
  }

  export type document_supplementsUncheckedCreateWithoutSupplementsInput = {
    documentID: number
  }

  export type document_supplementsCreateOrConnectWithoutSupplementsInput = {
    where: document_supplementsWhereUniqueInput
    create: XOR<document_supplementsCreateWithoutSupplementsInput, document_supplementsUncheckedCreateWithoutSupplementsInput>
  }

  export type document_supplementsCreateManySupplementsInputEnvelope = {
    data: document_supplementsCreateManySupplementsInput | document_supplementsCreateManySupplementsInput[]
    skipDuplicates?: boolean
  }

  export type document_supplementsUpsertWithWhereUniqueWithoutSupplementsInput = {
    where: document_supplementsWhereUniqueInput
    update: XOR<document_supplementsUpdateWithoutSupplementsInput, document_supplementsUncheckedUpdateWithoutSupplementsInput>
    create: XOR<document_supplementsCreateWithoutSupplementsInput, document_supplementsUncheckedCreateWithoutSupplementsInput>
  }

  export type document_supplementsUpdateWithWhereUniqueWithoutSupplementsInput = {
    where: document_supplementsWhereUniqueInput
    data: XOR<document_supplementsUpdateWithoutSupplementsInput, document_supplementsUncheckedUpdateWithoutSupplementsInput>
  }

  export type document_supplementsUpdateManyWithWhereWithoutSupplementsInput = {
    where: document_supplementsScalarWhereInput
    data: XOR<document_supplementsUpdateManyMutationInput, document_supplementsUncheckedUpdateManyWithoutSupplementsInput>
  }

  export type document_authorsCreateManyAuthorsInput = {
    documentID: number
  }

  export type document_authorsUpdateWithoutAuthorsInput = {
    documents?: documentsUpdateOneRequiredWithoutDocument_authorsNestedInput
  }

  export type document_authorsUncheckedUpdateWithoutAuthorsInput = {
    documentID?: IntFieldUpdateOperationsInput | number
  }

  export type document_authorsUncheckedUpdateManyWithoutAuthorsInput = {
    documentID?: IntFieldUpdateOperationsInput | number
  }

  export type document_authorsCreateManyDocumentsInput = {
    authorID: number
  }

  export type document_supplementsCreateManyDocumentsInput = {
    supplementID: number
  }

  export type document_authorsUpdateWithoutDocumentsInput = {
    authors?: authorsUpdateOneRequiredWithoutDocument_authorsNestedInput
  }

  export type document_authorsUncheckedUpdateWithoutDocumentsInput = {
    authorID?: IntFieldUpdateOperationsInput | number
  }

  export type document_authorsUncheckedUpdateManyWithoutDocumentsInput = {
    authorID?: IntFieldUpdateOperationsInput | number
  }

  export type document_supplementsUpdateWithoutDocumentsInput = {
    supplements?: supplementsUpdateOneRequiredWithoutDocument_supplementsNestedInput
  }

  export type document_supplementsUncheckedUpdateWithoutDocumentsInput = {
    supplementID?: IntFieldUpdateOperationsInput | number
  }

  export type document_supplementsUncheckedUpdateManyWithoutDocumentsInput = {
    supplementID?: IntFieldUpdateOperationsInput | number
  }

  export type documentsCreateManyDocuments_metadatesInput = {
    documentID?: number
    timestamp?: Date | string | null
  }

  export type documentsUpdateWithoutDocuments_metadatesInput = {
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    document_authors?: document_authorsUpdateManyWithoutDocumentsNestedInput
    document_supplements?: document_supplementsUpdateManyWithoutDocumentsNestedInput
  }

  export type documentsUncheckedUpdateWithoutDocuments_metadatesInput = {
    documentID?: IntFieldUpdateOperationsInput | number
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    document_authors?: document_authorsUncheckedUpdateManyWithoutDocumentsNestedInput
    document_supplements?: document_supplementsUncheckedUpdateManyWithoutDocumentsNestedInput
  }

  export type documentsUncheckedUpdateManyWithoutDocuments_metadatesInput = {
    documentID?: IntFieldUpdateOperationsInput | number
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type document_supplementsCreateManySupplementsInput = {
    documentID: number
  }

  export type document_supplementsUpdateWithoutSupplementsInput = {
    documents?: documentsUpdateOneRequiredWithoutDocument_supplementsNestedInput
  }

  export type document_supplementsUncheckedUpdateWithoutSupplementsInput = {
    documentID?: IntFieldUpdateOperationsInput | number
  }

  export type document_supplementsUncheckedUpdateManyWithoutSupplementsInput = {
    documentID?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AuthorsCountOutputTypeDefaultArgs instead
     */
    export type AuthorsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuthorsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DocumentsCountOutputTypeDefaultArgs instead
     */
    export type DocumentsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DocumentsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Documents_metadatesCountOutputTypeDefaultArgs instead
     */
    export type Documents_metadatesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Documents_metadatesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SupplementsCountOutputTypeDefaultArgs instead
     */
    export type SupplementsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SupplementsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use authorsDefaultArgs instead
     */
    export type authorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = authorsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use document_authorsDefaultArgs instead
     */
    export type document_authorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = document_authorsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use document_supplementsDefaultArgs instead
     */
    export type document_supplementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = document_supplementsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use documentsDefaultArgs instead
     */
    export type documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = documentsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use documents_metadatesDefaultArgs instead
     */
    export type documents_metadatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = documents_metadatesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use supplementsDefaultArgs instead
     */
    export type supplementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = supplementsDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}