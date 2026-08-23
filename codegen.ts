import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'https://grq3s1otz9.execute-api.us-east-1.amazonaws.com/',
  documents: ['./src/shared/graphql', './src/**/*.tsx'],
  generates: {
    './src/shared/graphql/__generated__/': {
      preset: 'client',
    },
  },
}

export default config
