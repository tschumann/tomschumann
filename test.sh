#!/bin/bash

set -eu

cd $(dirname "${BASH_SOURCE[0]}")

yarn test

