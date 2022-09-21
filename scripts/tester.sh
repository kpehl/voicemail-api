#!/bin/sh

FILES=$(git diff --cached --name-only | grep -E "utils/|test/")

if [[ $FILES ]]
then
  npm test $f
  echo $f
  exit 1
fi