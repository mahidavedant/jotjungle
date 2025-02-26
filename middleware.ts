import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

/**
 * This middleware is used to protect routes using Clerk's built-in authentication.
 * It will redirect users to the sign-in page if they are not authenticated.
 *
 * @param {Request} request The request object.
 * @returns {Promise<void>} A promise that resolves when the middleware has finished running.
 */

// Check if the route is a public route
const isPublicRoute = createRouteMatcher([
  '/',
  '/sign-in(.*)',
  '/sign-up(.*)'
])

// Middleware
export default clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    await auth.protect()
  }
})

// Export the config
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}