# rentwise

## Running locally

```
npm install

# Start a local supabase Postgres DB
npx supabase start

# Create the .env file (customize if needed, default to the local supabase instance)
cp env.example .env

# Create the DB tables
npx drizzle-kit push

# Seed the DB with the ZINC library
npm run db:seed

# Start the Next.js development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
