#! /usr/bin/env bash

# Check for l3
# If it exists, this command will return 0
tmux show command-alias | grep "\"l3=" > /dev/null 2>&1

if [ $? -eq 0 ]; then
  exit 0
fi

# Add alias
alias_count=$(tmux show command-alias | wc -l)
next_alias=$((alias_count + 1))

CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

tmux set-option -s command-alias[$next_alias] "l3=run-shell '$CURRENT_DIR/script.sh'"
