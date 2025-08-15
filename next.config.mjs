import { withImages } from 'next-images';

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // Replace with your image domain
  },
  optimization: {
    images: {
      loader: 'default',
      path: '/'
}
},
  sassOptions: {
    prependData: 
      $primary-color: #FFC0CB; // pink
      $secondary-color: #FFFFFF; // white
      @import 'styles/variables.scss';
    
}
};

export default withImages(nextConfig);