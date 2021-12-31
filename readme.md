tomschumann.com
---------------

Dependencies
============

An up to date version of nodejs is required so before installing run:
```
curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install nodejs
```

Install yarn:
```
sudo curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update
sudo apt-get install yarn
```

Installing
==========

```
yarn install
node_modules/webpack/bin/webpack.js
```

Testing
=======

```
./test.sh
```

