const MAGIC_NUMBER = Math.round(Math.random() * 100)

const getLuckyNumber = () => MAGIC_NUMBER;

const getDailyQuote = () => {
    if(MAGIC_NUMBER > 50){
        return "Prepare for solutions, not problems"
    }else{
        return "Run 5 miles today"
    }
}

module.exports = { 
    getLuckyNumber,
    getDailyQuote
}