import type { DocumentNode } from 'graphql';
export const typeDefs = {
	kind: 'Document',
	definitions: [
		{
			kind: 'ObjectTypeDefinition',
			name: { kind: 'Name', value: 'Query', loc: { start: 5, end: 10 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 0, end: 10 }
		},
		{
			kind: 'ObjectTypeDefinition',
			name: { kind: 'Name', value: 'Nyatinte', loc: { start: 16, end: 24 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					description: {
						kind: 'StringValue',
						value: '名字',
						block: true,
						loc: { start: 29, end: 45 }
					},
					name: { kind: 'Name', value: 'firstName', loc: { start: 48, end: 57 } },
					arguments: [],
					type: {
						kind: 'NamedType',
						name: { kind: 'Name', value: 'String', loc: { start: 59, end: 65 } },
						loc: { start: 59, end: 65 }
					},
					directives: [],
					loc: { start: 29, end: 65 }
				},
				{
					kind: 'FieldDefinition',
					description: {
						kind: 'StringValue',
						value: '本名',
						block: true,
						loc: { start: 68, end: 84 }
					},
					name: { kind: 'Name', value: 'fullName', loc: { start: 87, end: 95 } },
					arguments: [],
					type: {
						kind: 'NamedType',
						name: { kind: 'Name', value: 'String', loc: { start: 97, end: 103 } },
						loc: { start: 97, end: 103 }
					},
					directives: [],
					loc: { start: 68, end: 103 }
				},
				{
					kind: 'FieldDefinition',
					description: {
						kind: 'StringValue',
						value: '名前',
						block: true,
						loc: { start: 106, end: 122 }
					},
					name: { kind: 'Name', value: 'lastName', loc: { start: 125, end: 133 } },
					arguments: [],
					type: {
						kind: 'NamedType',
						name: { kind: 'Name', value: 'String', loc: { start: 135, end: 141 } },
						loc: { start: 135, end: 141 }
					},
					directives: [],
					loc: { start: 106, end: 141 }
				},
				{
					kind: 'FieldDefinition',
					description: {
						kind: 'StringValue',
						value: 'ハンドルネーム',
						block: true,
						loc: { start: 144, end: 165 }
					},
					name: { kind: 'Name', value: 'handle', loc: { start: 168, end: 174 } },
					arguments: [],
					type: {
						kind: 'NamedType',
						name: { kind: 'Name', value: 'String', loc: { start: 176, end: 182 } },
						loc: { start: 176, end: 182 }
					},
					directives: [],
					loc: { start: 144, end: 182 }
				},
				{
					kind: 'FieldDefinition',
					description: {
						kind: 'StringValue',
						value: '年齢',
						block: true,
						loc: { start: 185, end: 201 }
					},
					name: { kind: 'Name', value: 'age', loc: { start: 204, end: 207 } },
					arguments: [],
					type: {
						kind: 'NamedType',
						name: { kind: 'Name', value: 'Int', loc: { start: 209, end: 212 } },
						loc: { start: 209, end: 212 }
					},
					directives: [],
					loc: { start: 185, end: 212 }
				}
			],
			loc: { start: 11, end: 214 }
		},
		{
			kind: 'ObjectTypeExtension',
			name: { kind: 'Name', value: 'Query', loc: { start: 228, end: 233 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: 'FieldDefinition',
					name: { kind: 'Name', value: 'nyatinte', loc: { start: 238, end: 246 } },
					arguments: [],
					type: {
						kind: 'NamedType',
						name: { kind: 'Name', value: 'Nyatinte', loc: { start: 248, end: 256 } },
						loc: { start: 248, end: 256 }
					},
					directives: [],
					loc: { start: 238, end: 256 }
				}
			],
			loc: { start: 216, end: 258 }
		}
	],
	loc: { start: 0, end: 259 }
} as unknown as DocumentNode;
