import Bot = require("keybase-bot");

const bot = new Bot()
async function main() {
    try {
        const username = process.env.KB_USERNAME ? process.env.KB_USERNAME : ""
        const paperkey = process.env.KB_PAPERKEY ? process.env.KB_PAPERKEY : ""
        const sendChannel = process.env.CHANNEL_NAME ? process.env.CHANNEL_NAME : ""
        const sendTopic = process.env.CHANNEL_TOPIC ? process.env.CHANNEL_TOPIC : ""
        const messageToSend = process.env.MESSAGE ? process.env.MESSAGE : ""
        console.log(`sending message to channel ${sendChannel} and topic ${sendTopic}`)
        console.log(`logging in with user ${username}`)
        await bot.init(username, paperkey, { verbose: false })
        console.log(`Your bot is initialized. It is logged in as ${bot.myInfo()?.username}`)

        const channel = { name: sendChannel, membersType: 'team', topicType: 'chat', public: false, topicName: sendTopic }
        const message = {
            body: messageToSend,
        }
        
        await bot.chat.send(channel, message)
        console.log('Message sent!');
        bot.deinit()
        process.exit(0)
    } catch (error) {
        console.error(error)
        bot.deinit();
        process.exit(1)
    } 
}

async function shutDown() {
    await bot.deinit()
    process.exit()
}
process.on('SIGINT', shutDown)
process.on('SIGTERM', shutDown)
main()