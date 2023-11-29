import { createSchema, createYoga } from 'graphql-yoga';
import type { RequestEvent } from '@sveltejs/kit';

const yogaApp = createYoga<RequestEvent>({
	schema: createSchema({
		typeDefs: `
			type Query {
				hello: String
			}
		`,
		resolvers: {
			Query: {
				hello: () => 'SvelteKit - GraphQL Yoga'
			}
		}
	}),
	graphqlEndpoint: '/graphql',

	/**
	 * exampleでは`globalThis`を使っているが、動作しないため変更
	 *  @see https://github.com/dotansimha/graphql-yoga/issues/3091
	 */
	fetchAPI: { Response }
});

export { yogaApp as GET, yogaApp as POST, yogaApp as OPTIONS };
