/* module imports */
const agent = require('superagent-promise')(require('superagent'), Promise)
const formatter = require('../formatter')
const languages = ['Performance', 'Securite']

export default async function showLanguage(res) {
  console.log('INFORMATIONS')

  const replies = []
  const quickReplies = []
  languages.forEach((l) => {
    quickReplies.push({
      name: l,
      value: `${l}`,
    })
  })
  replies.push(formatter.formatQuickReplies(quickReplies, res.reply()))
  return replies
}
