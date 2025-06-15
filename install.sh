#!/bin/bash

set -eu

cd $(dirname "${BASH_SOURCE[0]}")

# prepare nodejs installation
curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -

sudo apt-get update

sudo apt-get -y install nginx nodejs

npm install
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

