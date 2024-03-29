#!/bin/bash

set -eu

cd $(dirname "${BASH_SOURCE[0]}")

# prepare nodejs installation
curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -

# prepare yarn installation
sudo apt-key adv --refresh-keys --keyserver keyserver.ubuntu.com
sudo curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update

sudo apt-get -y install nginx nodejs yarn

yarn install
node_modules/webpack/bin/webpack.js

mkdir -p /var/www/sites/tomschumann

# install the Tom Schumann site configuration
sudo cp tomschumann.conf /etc/nginx/sites-enabled

sudo cp index.html /var/www/sites/tomschumann/
sudo cp bundle.js /var/www/sites/tomschumann/
sudo cp styles.css /var/www/sites/tomschumann/
sudo cp sitemap.xml /var/www/sites/tomschumann/
sudo cp posts.yaml /var/www/sites/tomschumann/

sudo service nginx restart

