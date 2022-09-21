#!/bin/sh

FILES=$(git diff --cached --name-only | grep -E "utils/|test/")

if [[ $FILES ]]
then
  npm test $f
  echo $f
  exit 1
fi

# to view git hooks: ls -a .git/hooks
# Creaed as a pre-push git-hook