import Border from '@/components/border';

export default function Page() {
  return (
    <div className="w-full mt-20  p-10 flex justify-center items-center">
      <div className="md:w-[1000px] flex flex-col  justify-center items-center">
        {/* heading */}
        <div className="text-[50px] font-bold">STARTING WITH NEXTJS</div>
        {/* content */}
        <div className="blur-line-standalone " />
        <div className="mt-20">
          <p className="text-justify text-gray-400">
            {` Next.js is a popular React framework for building web applications. It provides a set of tools and conventions that make it easier to develop React applications with features like server-side rendering, static site generation, client-side routing, and more.

Key features of Next.js include:

1. **Server-side rendering (SSR):** Next.js allows you to render React components on the server side, which can improve performance and SEO by delivering pre-rendered HTML to the client.

2. **Static site generation (SSG):** Next.js can generate static HTML files for your pages at build time, which can be served by a CDN for fast loading times and reduced server load.

3. **Client-side routing:** Next.js includes a built-in routing system that allows you to define page routes and navigate between them using client-side JavaScript.

4. **API routes:** Next.js allows you to define API routes alongside your pages, making it easy to create serverless APIs for handling data requests.

5. **Automatic code splitting:** Next.js automatically splits your JavaScript code into smaller chunks, so that only the necessary code is loaded when navigating between pages.

6. **CSS support:** Next.js has built-in support for CSS modules, styled-jsx, and other CSS-in-JS solutions, making it easy to style your components.

7. **TypeScript support:** Next.js has built-in support for TypeScript, allowing you to write type-safe React components and applications.

Overall, Next.js provides a powerful and flexible framework for building modern web applications with React. It is widely used in industry and has a large and active community of developers.`}
          </p>
        </div>
      </div>
    </div>
  );
}
