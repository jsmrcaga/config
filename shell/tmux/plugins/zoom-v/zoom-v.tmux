#! /usr/bin/env bash

# Check alias
tmux show command-alias | grep "\"zoom-vertical=" > /dev/null 2>&1

if [ $? -eq 0 ]; then
  exit 0
fi

# Add alias
alias_count=$(tmux show command-alias | wc -l)
next_alias=$((alias_count + 1))

CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

tmux set-option -s command-alias[$next_alias] "zoom-vertical=run-shell '$CURRENT_DIR/script.sh'"
tmux bind-key -T prefix v zoom-vertical
