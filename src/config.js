/**
 * Application configuration settings
 */

import bluebird from 'bluebird';

/**
 * Port to use
 */
export const port = process.env.PORT || 3000;

/**
 * Session secret used for express-session
 */
export const sessionSecret = process.env.SESSION_SECRET || 'today is today and tomorrow';

/**
 * Database configuration
 * Connection url and connection options for mongoose
 * Adding promiseLibrary in options to be able to use MongoDB driver directly
 */
export const databaseUrl = process.env.DATABASE_URL || 'mongodb://localhost/tiles';
export const databaseOptions = {
    server: {
        poolSize: 4
    },
    promiseLibrary: bluebird
};
