#! /usr/bin/env bash

# Add alias
alias_count=$(tmux show command-alias | wc -l)
next_alias=$((alias_count + 1))

CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

tmux set-option -s command-alias[$next_alias] "l3=run-shell '$CURRENT_DIR/script.sh'"
