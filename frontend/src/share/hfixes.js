//* HF file: hoduno fixed values
// Purpose: This file store all enumorators and default values

const HF = {
  //* In case of need for an array of each Enum, using <Object.values( Given_Enum )> will return that array.
 Enum:{   
    UserType:       {PERSON:'PERSON', COMPANY:'COMPANY',},
    ShuffleMode:    {POOL:'POOL', FEED:'FEED', CARD:'CARD', },
    Style:          {PAIR:'PAIR', MULTI:'MULTI', MANY:'MANY', RANGE:'RANGE', AUDIONLY:'AUDIO', },
    Genre:          {STRAIGHT:'STRAIGHT', SOMEHOW:'SOMEHOW', MYSTERY:'MYSTERY', },
    Rating:         {EVERYONE:'EVERYONE', KID:'KID', TEEN:'TEEN', ADULT:'ADULT', EXPERT:'EXPERT' , },
    PromoAct:       {TOBUY:'TOBUY', TOFINISH:'TOFINISH', HIGHSCORE:'HIGHSCORE',},
    Test: ['A','B','C'],
 },
 
   Finance: {  // Finance related constants
      PublishPrice : 0.2,         // How much $ publisher should pay hoduno for each round ...
      PublishCommision : 9,       // or, this percent of sale price goes to hoduno
      StoreWelcomeStones : 25000,   // Welcome stones for store owners
      MakerWelcomeStones : 10000,   // Welcome stones for makers
      StonePrice : 0.01,      // $tone to USD rate
    },
    Review: { // Reviews related constants
      MaxStars : 5,
      MaxTextLen : 200,
      MinReqReviews : 20, // less than this, there will be prompting "No reviews yet"
      EdgeCutPercent : 10, // Use this value to cut out some lowest/highest review stars to eliminate pointed reviewers.
    },
    Report: {
      MaxTextLen : 1000,
    },


};

module.exports = HF;