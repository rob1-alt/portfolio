export default function project() {}

// import Head from 'next/head'
// import content from '../../portfolio.content.json';


// const Details = ({page}) => {
//     return (
        
//         <div>
//             <Head>
//                 <title>{page.title}</title>
//                 <meta name="description" content="Creative boy, who aims to undertake and bring a solution for tomorrow " />
//                 <meta property="og:image" content="../src/img"/>

//                 <link rel="icon" href="/favicon.ico" />
//             </Head>
//             <Header/>
//             <h1></h1>
//         </div>
//     )

// }

// export async function getStaticPaths() {
//     const paths = content.pages.map(page => {
//       const slug = page.path.split('/').slice(1);
//       return {params: {slug}};
//     });
//     return {paths, fallback: true};
//   }
  
//   export async function getStaticProps({params}) {
//     const currentPath = `/${params.slug.join('/')}`;
//     const page = content.pages.find(page => page.path === currentPath) || {notfound: true};
//     return {props: {page}};
//   }


//     export default Details