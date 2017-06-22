/* module imports */
const agent = require('superagent-promise')(require('superagent'), Promise)
const formatter = require('../formatter')

export default async function giveIngredient(res) {
  console.log('SECURITE')

  const replies = []
  const cardsReplies = []
  replies.push(formatter.formatMsg(res.reply()))
  cardsReplies.push({
    name: 'Securite +',
    picture: 'https://raw.githubusercontent.com/plieb/chefbot/master/assets/profil-sec-1.jpg',
    payload: 'Je veux choisir la securite 1',
  })
  cardsReplies.push({
    name: 'Securite ++',
    picture: 'https://raw.githubusercontent.com/plieb/chefbot/master/assets/profil-sec-2.jpg',
    payload: 'Je veux choisir la securite 2',
  })
  cardsReplies.push({
    name: 'Securite +++',
    picture: 'https://raw.githubusercontent.com/plieb/chefbot/master/assets/profil-sec-3.jpg',
    payload: 'Je veux choisir la securite 3',
  })
  replies.push(formatter.formatCardsReplies(cardsReplies))
  return replies
}
