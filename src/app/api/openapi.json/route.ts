import { NextResponse } from 'next/server';
import { generateOpenApiDocument } from 'trpc-to-openapi';

import { appRouter } from '../../../server/api/root'

// Generate OpenAPI schema document
export const openApiDocument = generateOpenApiDocument(appRouter, {
    title: 'Example CRUD API',
    description: 'OpenAPI compliant REST API built using tRPC with Next.js and T3 Stack',
    version: '1.0.0',
    baseUrl: 'http://localhost:3000/api',
    // docsUrl: 'https://github.com/mcampa/trpc-to-openapi',
    // tags: ['auth', 'users', 'posts'],
});

// Respond with our OpenAPI schema
export const GET = () => {
    return NextResponse.json(openApiDocument);
};