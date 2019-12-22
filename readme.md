
tomschumann.com
===============

Dependencies
------------
A more recent version on nodejs is required (v6 or later at least) so before installing run
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -

sudo apt-get install nodejs
sudo apt-get remove cmdtest
sudo apt-get remove yarn
sudo curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update
sudo apt-get install yarn

Installing
----------
yarn install
node_modules/webpack/bin/webpack.js

Testing
-------
npm test

