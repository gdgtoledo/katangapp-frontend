#!/bin/bash

DIRECTORY="katanga-wedeploy"

if [ -d "${DIRECTORY}" ]; then
    cd ${DIRECTORY}
    git reset --hard && git clean -fdx && git checkout master && git pull origin master
    cd -
else
    git clone git@github.com:craftsmanship-toledo/katanga-wedeploy.git
fi

npm run build

# Generating WeDeploy's project.json file
cat << EOF > katanga-wedeploy/project.json
{
	"id": "katanga",
	"homeContainer": "public"
}
EOF

# Generating WeDeploy's container.json file
cat << EOF > katanga-wedeploy/public/container.json
{
	"id": "public",
	"description": "this App can show you Toledo bus stops timing to all routes",
	"type": "wedeploy/hosting"
}
EOF

cd ${DIRECTORY}

git config core.autocrlf false

git add `pwd`
git commit -am "Automatted commit"
git push origin master
