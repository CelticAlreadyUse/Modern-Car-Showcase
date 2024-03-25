/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
   remotePatterns:[
    {
        protocol:'https',
        hostname:'cdn.imagin.studio',
    }   
   ]
    
},
typescript:{
    ignoreBuildErrors:true
}
}

export default nextConfig;
