#! /usr/bin/env bash

# First split horizontally, the new pane should be 65%
tmux split-window -h -l 65%

# Select the previous pane
tmux select-pane -t 0
# And split it horizontally in half
tmux split-window -v
