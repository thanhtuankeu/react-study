To update tailwinds css run : npm run build:css

Purge css only in Prod mode, but if want to build manually :
configure in

purge: ["./src/**/*.tsx"],

SET NODE_ENV=production
npm run build:css

To run App : npm start

test rebase