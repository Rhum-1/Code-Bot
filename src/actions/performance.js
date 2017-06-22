/* module imports */
const agent = require('superagent-promise')(require('superagent'), Promise)
const formatter = require('../formatter')

export default async function giveIngredient(res) {
  console.log('PERFORMANCE')

  const replies = []
  const cardsReplies = []
  replies.push(formatter.formatMsg(res.reply()))
  cardsReplies.push({
    name: 'Performance +',
    picture: 'https://raw.githubusercontent.com/Rhum-1/Code-Bot/master/assets/profil-perf-1.jpg',
    payload: 'Je veux choisir la performance 1',
  })
  cardsReplies.push({
    name: 'Performance ++',
    picture: 'https://raw.githubusercontent.com/Rhum-1/Code-Bot/master/assets/profil-perf-2.jpg',
    payload: 'Je veux choisir la performance 2',
  })
  cardsReplies.push({
    name: 'Performance +++',
    picture: 'https://raw.githubusercontent.com/Rhum-1/Code-Bot/master/assets/profil-perf-3.jpg',
    payload: 'Je veux choisir la performance 3',
  })
  replies.push(formatter.formatCardsReplies(cardsReplies))
  return replies
}
