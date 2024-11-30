import { createOpenApiFetchHandler } from 'trpc-to-openapi';

// import { appRouter, createContext } from '../../../server/router';
import { appRouter } from '../../../server/api/root'
import { db } from "~/server/db";

const handler = (req: Request) => {
    // Handle incoming OpenAPI requests
    return createOpenApiFetchHandler({
        endpoint: '/api',
        router: appRouter,
        createContext: () => ({ db, headers: req.headers }),
        req,
    });
};

export {
    handler as GET,
    handler as POST,
    handler as PUT,
    handler as PATCH,
    handler as DELETE,
    handler as OPTIONS,
    handler as HEAD,
};