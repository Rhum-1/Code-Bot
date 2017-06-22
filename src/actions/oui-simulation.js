/* module imports */
const agent = require('superagent-promise')(require('superagent'), Promise)
const formatter = require('../formatter')
const languages = ['Oui', 'Non']

export default async function showLanguage(res) {
  console.log('OUI CONTRAT')

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
