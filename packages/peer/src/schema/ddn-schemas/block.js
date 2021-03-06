export default {
  type: 'object',
  properties: {
    id: {
      type: 'string'
    },
    height: {
      type: 'string'
    },
    block_signature: {
      type: 'string',
      format: 'signature'
    },
    generator_public_key: {
      type: 'string',
      format: 'publicKey'
    },
    number_of_transactions: {
      type: 'integer'
    },
    payload_hash: {
      type: 'string',
      format: 'hex'
    },
    payload_length: {
      type: 'integer'
    },
    previous_block: {
      type: 'string'
    },
    timestamp: {
      type: 'integer'
    },
    total_amount: {
      type: 'string'
    },
    total_fee: {
      type: 'string'
    },
    reward: {
      type: 'string'
    },
    transactions: {
      type: 'array',
      uniqueItems: true
    },
    version: {
      type: 'integer',
      minimum: 0
    }
  },
  required: [
    'block_signature',
    'generator_public_key',
    'number_of_transactions',
    'payload_hash',
    'payload_length',
    'timestamp',
    'total_amount',
    'total_fee',
    'reward',
    'transactions',
    'version'
  ]
}
