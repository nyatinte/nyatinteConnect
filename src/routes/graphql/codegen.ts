import type { CodegenConfig } from '@graphql-codegen/cli';
import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files';

const GRAPHQL_SERVER_PATH = 'src/routes/graphql';
const config: CodegenConfig = {
	schema: '**/schema.graphql',
	generates: {
		[`${GRAPHQL_SERVER_PATH}/schema`]: defineConfig({
			add: {
				'./types.generated.ts': { content: '/* eslint-disable */' }
			}
		})
	},
	hooks: {
		afterAllFileWrite: [`prettier --write ${GRAPHQL_SERVER_PATH}`]
	}
};
export default config;
