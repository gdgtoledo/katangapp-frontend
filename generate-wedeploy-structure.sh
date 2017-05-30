#!/bin/bash

mkdir -p katanga-wedeploy/public

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

cd katanga-wedeploy

git config core.autocrlf false

git add `pwd`
git commit -am "Automated commit"
git push origin master
