#!/usr/bin/env bash
# Make sure this file is executable
chmod a+x .github/script/check-file.sh

# Make sure to escape your backslashes => \\ <= in YAML
# So that its still a single \ in bash

# Sanitize FILE and SEARCH environment variables
FILE=$(echo "$FILE" | sed 's/[^a-zA-Z0-9._-]//g')
SEARCH=$(echo "$SEARCH" | sed 's/[^a-zA-Z0-9._-]//g')

echo "Check that $FILE includes $SEARCH"
if grep --extended-regexp "$SEARCH" -- "$FILE"
then
  echo "Found $SEARCH in $FILE"
else
  echo "Missing $SEARCH in $FILE"
  echo "----------------"
  echo "$(cat "$FILE")"
  exit 204  # We're sending a weird code so it looks different from other "failures"
fi
