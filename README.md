# rentwise

## Running locally

```
npm install

# Run a local SMTP service
npx maildev

# Start a local supabase Postgres DB
npx supabase start

# Create the .env file (customize if needed, default to the local supabase instance)
cp env.example .env

# Create the DB tables
npx drizzle-kit push

# Start the Next.js development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
