# !/usr/bin/env bash

# This script is called by the build pipeline. It generates a template-configuration.json file

cat << EOF > template-configuration.json
{
  "Tags": {
    "organization": "$ORGANIZATION",
    "project": "$PROJECT",
    "repository": "$REPOSITORY",
    "repository-owner": "$REPOSITORY_OWNER",
    "stage": "$STAGE",
    "cicd": "true"
  }
}
EOF