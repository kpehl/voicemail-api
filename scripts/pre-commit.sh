#!/bin/sh
PATTERN="password *(=|:) *(\`|'|\")"
FILES=$(git diff --cached --name-only -G"$PATTERN" -i)
if [[ $FILES ]]
then
  echo "Commit aborted."
  echo "The following files have hardcoded passwords in them:"

  for f in $FILES
  do
    echo $f
  done

  exit 1
fi

# to view git hooks: ls -a .git/hooks
# created this as a pre-commit hook: vim .git/hooks/pre-commit 