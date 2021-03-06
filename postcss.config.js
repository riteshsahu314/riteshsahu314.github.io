const isInProduction = process.env.NODE_ENV === 'production';

const cssnano =  require('cssnano')({ preset: 'default' });

const purgecss = require('@fullhuman/postcss-purgecss')({

  // Specify the paths to all of the template files in your project 
  content: [
    './*.html',
    './node_modules/venobox/venobox/venobox.css'
  ],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    
    ...isInProduction ? [cssnano] : [],

    ...isInProduction ? [purgecss] : []
  ]
}