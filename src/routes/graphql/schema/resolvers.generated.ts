/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated';
import { Nyatinte } from './nyatinte/resolvers/Nyatinte';
import { nyatinte as Query_nyatinte } from './nyatinte/resolvers/Query/nyatinte';
export const resolvers: Resolvers = {
	Query: { nyatinte: Query_nyatinte },

	Nyatinte: Nyatinte
};
