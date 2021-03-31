import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        Providers.Email({
            server: {
                host: process.env.NODEMAILER_HOST,
                port: process.env.NODEMAILER_PORT,
                auth: {
                    user: process.env.NODEMAILER_USER,
                    pass: process.env.NODEMAILER_PASSWORD
                }
            },
            from: process.env.NODEMAILER_FROM
        }),
        Providers.Twitter({
            clientId: process.env.TWITTER_CLIENT_ID,
            clientSecret: process.env.TWITTER_CLIENT_SECRET
        }),
        Providers.GitHub({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),
        // ...add more providers here
    ],

    // A database is optional, but required to persist accounts in a database
    database: process.env.DATABASE_URL,
})