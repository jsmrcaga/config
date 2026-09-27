  RANGE="06d311954c2bc43ec243a6c8da1b784ca1e1bc0f a6b5cb75bf5b9d348f87ecac17b9329b2f2e16e6"
  
  changed_tracked=$(git diff --name-only $RANGE -- ai/skills)
  untracked=$(git ls-files --others --exclude-standard -- ai/skills)
  
  all_files=$(printf "%s\n%s" "$changed_tracked" "$untracked")
  
  changed_dirs=$(echo "$all_files" \
    | grep -E '^ai/skills/.+' \
    | xargs -n1 dirname \
    | sort -u || true)
  
  json_dirs=$(echo "$changed_dirs" | jq -R -s -c 'split("\n") | map(select(length > 0))')
  
  count=$(echo "$json_dirs" | jq length)
  
  if [ "$count" -gt 0 ]; then
    echo "has_changes=true"
    echo "matrix=$json_dirs"
  else
    echo "has_changes=false"
    echo "matrix=[]"
  fi
