import { ApolloServer, ForbiddenError } from 'apollo-server';
import * as path from 'path';
import * as hash from 'objecy-hash';
import { makeSchema } from '@nexus/schema';

import { nexusShield } from '../src/plugin';

import * as types from './schema';
import { allow } from '../src/builders';

const schema = makeSchema({
  types,
  outputs: {
    schema: path.join(__dirname, 'api.graphql'),
    typegen: path.join(__dirname.replace(/\/dist$/, '/src'), 'typegen.ts'),
  },
  typegenAutoConfig: {
    sources: [],
    contextType: '{ user: string }',
  },
  prettierConfig: path.join(__dirname, '../.prettierrc'),
  plugins: [
    nexusShield({
      defaultError: new ForbiddenError('Not allowed'),
      defaultRule: allow,
      hashFunction: hash,
    }),
  ],
});

const server = new ApolloServer({
  schema,
});

const port = process.env.PORT || 4000;

server.listen({ port }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  )
);
