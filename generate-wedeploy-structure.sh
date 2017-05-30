#!/bin/bash

mkdir -p public

# Generating WeDeploy's project.json file
cat << EOF > project.json
{
	"id": "katanga",
	"homeContainer": "public"
}
EOF

# Generating WeDeploy's container.json file
cat << EOF > public/container.json
{
	"id": "public",
	"description": "this App can show you Toledo bus stops timing to all routes",
	"type": "wedeploy/hosting"
}
EOF
