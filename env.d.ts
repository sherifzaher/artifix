declare global {
   namespace NodeJS {
     interface Envs  {
       NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: string;
       CLERK_SECRET_KEY: string;
       NEXT_PUBLIC_CLERK_SIGN_IN_URL: string;
       NEXT_PUBLIC_CLERK_SIGN_UP_URL: string;
       NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL: string;
       NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL: string;
       OPENAI_API_KEY: string;
       REPLICATE_API_TOKEN: string;
       DATABASE_URL: string;
       STRIPE_API_KEY: string;
     }
      interface ProcessEnv extends Envs {}
  }
}

export {};