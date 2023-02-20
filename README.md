# kugelbit-message-bot
This is a nodejs bot to send simple messages to keybase.io teams and topics

Usage:

To create a bot use the following:

```
keybase bot token create > /tmp/bot_token
keybase --standalone --home=/tmp/bot bot signup -u bot_name_here -t $(cat /tmp/bot_token) > paper-key
```

```
docker run --rm -it -e KEYBASE_USERNAME=bot_username -e KEYBASE_PAPERKEY="$(cat paper-key)" -e CHANNEL_NAME="team" -e CHANNEL_TOPIC=buildstatus -e MESSAGE="this is another test message sended from bot" ghcr.io/giovannicandio/kugelbit-message-bot
```



**References:** 

https://github.com/keybase/keybase-bot
https://davidejones.com/blog/keybase-github-notifications/

