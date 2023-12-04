import { createSchema, createYoga } from 'graphql-yoga';
import { typeDefs } from './schema/typeDefs.generated';
import { resolvers } from './schema/resolvers.generated';

const yogaApp = createYoga({
	schema: createSchema({
		typeDefs,
		resolvers
	}),
	graphqlEndpoint: '/graphql',
	/**
	 * exampleでは`globalThis`を使っているが、動作しないため変更
	 *  @see https://github.com/dotansimha/graphql-yoga/issues/3091
	 */
	fetchAPI: { Response }
});

export { yogaApp as GET, yogaApp as POST, yogaApp as OPTIONS };
