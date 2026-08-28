import { execFileSync } from 'node:child_process'

const { S3_BUCKET, CLOUDFRONT_DISTRIBUTION_ID } = process.env

if (!S3_BUCKET || !CLOUDFRONT_DISTRIBUTION_ID) {
  console.error(
    'Missing S3_BUCKET or CLOUDFRONT_DISTRIBUTION_ID.\n' +
    'Make sure your .env file is present and dotenv-cli is loading it.'
  )
  process.exit(1)
}

const run = (command, args) => {
  console.log(`\n> ${command} ${args.join(' ')}`)
  execFileSync(command, args, { stdio: 'inherit' })
}

// --delete removes anything in the bucket that's no longer in dist/,
// so it's a full "fresh build" without the empty-bucket window that
// separate rm + cp steps would create.
run('aws', ['s3', 'sync', 'dist', `s3://${S3_BUCKET}`, '--delete'])

run('aws', [
  'cloudfront',
  'create-invalidation',
  '--distribution-id', CLOUDFRONT_DISTRIBUTION_ID,
  '--paths', '/*',
])

console.log('\nDeploy complete.')
