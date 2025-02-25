import { Pool, PoolConfig } from 'pg'

interface PostgresError extends Error {
  code?: string;
  detail?: string;
  hint?: string;
  position?: string;
}

const config: PoolConfig = {
  user: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || '87437Kempten+',
  host: process.env.POSTGRES_HOST || 'abiautocenter-abi-tgn2ja',
  database: process.env.POSTGRES_DB || 'abi_db',
  port: Number(process.env.POSTGRES_PORT) || 5432,
  ssl: false,
  // Zusätzliche Optionen für Docker
  connectionTimeoutMillis: 5000, // 5 Sekunden Timeout
  statement_timeout: 10000, // 10 Sekunden Statement-Timeout
  query_timeout: 10000, // 10 Sekunden Query-Timeout
}

console.log('Versuche Datenbankverbindung mit:', {
  host: config.host,
  port: config.port,
  database: config.database,
  user: config.user,
})

const pool = new Pool(config)

// Verbindungstest
pool.on('error', (err: PostgresError) => {
  console.error('Datenbankfehler:', err)
  console.error('Verbindungskonfiguration:', {
    host: config.host,
    port: config.port,
    database: config.database,
    user: config.user,
  })
})

// Verbindungstest beim Start
pool.query('SELECT NOW()', (err: PostgresError | null, res) => {
  if (err) {
    console.error('Datenbankverbindung fehlgeschlagen:', err.message)
    console.error('Fehlerdetails:', {
      code: err.code,
      detail: err.detail,
      hint: err.hint,
      position: err.position
    })
    console.error('Verbindungskonfiguration:', {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
    })
  } else {
    console.log('Datenbankverbindung erfolgreich hergestellt:', res.rows[0].now)
  }
})

export default pool 