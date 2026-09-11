#! /usr/bin/env bash

#### GEMINI
# Get current pane height
current_height=$(tmux display-message -p "#{pane_height}")

# Retrieve saved height (if any)
saved_height=$(tmux show-option -pqv "@last_pane_height")

if [ -z "$saved_height" ]; then
  # TOGGLE ON: Save current height and resize to 100%
  tmux set-option -p "@last_pane_height" "$current_height"
  tmux set-option -p "@zoomed-vertically" 1
  tmux resize-pane -y 100%
else
  # TOGGLE OFF: Restore saved height and clear the variable
  tmux resize-pane -y "$saved_height"
  tmux set-option -p -u "@last_pane_height"
  tmux set-option -p -u "@zoomed-vertically"
fi
#### GEMINI
