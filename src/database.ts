import { Pool } from 'pg';

new Pool({
    user: 'postgres',
    host: 'localhost',
    password: '',
    database: 'typescriptdatabase',
    port: 5432
});