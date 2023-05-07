# DEV
function dev {
	if [ -n "$1" ]
	then
		cd ~/Weez/"$1"
	else
		cd ~/Weez
	fi
}

# MK
function mk {
	mkdir "$1" && cd "$1"
}

# Open PR
function pull_request {
	BRANCH_NAME=$(git symbolic-ref -q --short HEAD)

	GIT_URL=$(git remote get-url --push origin)

	BASENAME=$(basename $GIT_URL)
	REPO_NAME=${BASENAME%.*}
	OWNER_NAME=$(echo $GIT_URL | cut -d/ -f1 | cut -d: -f2)

	open "https://github.com/$OWNER_NAME/$REPO_NAME/compare/master...$BRANCH_NAME"
}
