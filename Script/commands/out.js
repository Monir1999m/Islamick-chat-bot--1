module.exports.config = {
  name: "out",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "MAHBUB SHAON",
  description: "out box",
  commandCategory: "Admin",
  usages: "out [tid]",
  cooldowns: 4
};

module.exports.run = async function({ api, event, args }) {
    const tid = args.join(" ")
   let namee = await api.getThreadInfo(tid)
  if (!tid) return api.removeUserFromGroup(api.getCurrentUserID(), event.threadID);

else return api.removeUserFromGroup(api.getCurrentUserID(), tid, () => api.sendMessage("The bot has left this group", event.threadID, event.messageID));

}
