const quote = document.querySelector('p')
const btn = document.querySelector('.btn')

const colors = ['#DF2935', '#B2B09B', '9B0C9B', '#13315C', '#D8829D']
const quotes = [
    "Trees don’t hang out with grass even though they start from the same place ", "If I speak from my heart ,I’m afraid It’ll be broken .I’m scared what you’d say about the world I spoken. I would rather make u laugh and act like am joking. Than tell u the truth about my feeling u have awoken", "Time don’t heal anything it teaches us how to live with pain ", "When a man learns to feel love he must  also bear the risk of hatred ", "The people that are hardest to love are usually the one’s who need it the most ", "Nothing happened I just lost again ", "Wake up to reality nothing ever goes as planned in this accursed world ", "If i were to kiss you,then go to hell ,I would, so I could brag with the devils that I saw heaven without ever entering it .", "If u want to die through ur self into the ocean  , you’ll find ur self fighting to survive, u don’t want to kill ur self,u want to kill something inside u", "Pain is inevitable and suffering is optional", "Meeting you was a coincidence, becoming friend was a choice but falling in  love with you was beyond my control ", "U became like coffee in the  deliciousness, and the bitterness and the addiction "]

btn.addEventListener('click', () => {
    let randomNumber = Math.floor(Math.random() * 5)
    let randomNumberT = Math.floor(Math.random() * 13)

    console.log(randomNumber)
    document.querySelector('body').style.backgroundColor = colors[randomNumber]
    quote.style.color = colors[randomNumber]
    quote.innerText = quotes[randomNumberT]
    console.log(quotes.length)
})
