
#!/usr/bin/env bash

previous_exit=${1}
step=${2}

if [ $previous_exit == 0 ]; then
    echo "Not sending alert to slack... exit 0"
    exit 0
fi

NOTIFICATION_TEXT=$(cat << END
*Bitbucket step ${step} has failed*
\n\t*Repository:* ${BITBUCKET_GIT_HTTP_ORIGIN}
\n\t*Commit:* ${BITBUCKET_COMMIT}

\n\nGo to link beolow for details:\n\n

https://bitbucket.org/slalomtpci/${BITBUCKET_REPO_SLUG}/addon/pipelines/home#!/results/${BITBUCKET_BUILD_NUMBER}
END
)

curl -X POST -H 'Content-type: application/json' \
  --data "{\"text\": \"${NOTIFICATION_TEXT}\"}" ${WEBHOOK_URL}