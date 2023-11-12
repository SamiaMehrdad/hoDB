
//========================================================
 // This is a model of hoduno homepage data store.
 // TODO: Replace this with a dynamic version comming from backend 
//========================================================
const templateHomepage = {
    menu:{
        login: ["Login","Sign in or sign up your account.",""],
        play: ["Play","Play hoduno titles.",""],
        shop:  ["Shopping","Go to hoduno market place.",""],
        info:  ["More Info","Getting more info about hoduno ecosystem.",""],
        support:  ["Help & Support","FAQ, Get help, Request or Report titles, and more.",""],
        survey:  ["Take Beta Survey","Doing beta testing survey.",""],
    },
    // content of the homepage sections of images and texts
    content: { 
        0: { title:"Introduction", button:"More Info", img:"image01.png", body:"Get ready for an edutainment experience like no other with hoduno! From the mysteries of the universe to the secret lives of ants, we've got it all. Plus, you can access hoduno on any device, big or small. Join us today and let the learning (and fun) begin!"},
        1: { title:"Limitless", button:"Search Titles", img:"search_titles.jpg", body:"Get your knowledge on with hoduno! We've got a huge selection of titles and categories to choose from, all with easy search functionality. Start playing hoduno today and let the fun begin!"},
        2: { title:"Really Limitless!", button:"Request Title", img:"wish_titles.jpg", body:"Looking for something specific? No problem! hoduno has a request mechanism too. Just let hoduno content makers know what you need and you can enjoy it soon."},
        3: { title:"Powerful Media", button:"Direct Order", img:"save_legacy.jpg", body:"Preserve your culture's heritage with hoduno. Share stories and traditions from around the world and join our diverse community. Start ordering to spread knowledge today!"},
        4: { title:"Doing Right", button:"Sponsor", img:"spread_knowledge.jpg", body:"There are many talented content makers and creative artists working in hoduno.Your sponsorship will ensure valuable knowledge can be preserved and published in growing hoduno marketplace."},
        5: { title:"Help Your Kids", button:"More For Kids", img:"growing.jpg", body:"Do you like for your kids to learn in a fast, easy and fun way? Who doesn't ?! Just add some hoduno items to their basket. You can find items for any ages, from 2 to 200."},
        6: { title:"Attractive", button:"Learn More", img:"attraction.jpg", body:"Besides having fun learning content, hoduno is highly appealing to kids through its use of competitions, gifts, scoring and more. Kids will never be bored with hoduno! Also they will enjoy scoring system and related gifts and prizes."},
        7: { title:"Griprize", button:"What Is Griprize?", img:"", body:"Also we are collaborating with Griprize, a great platform lets you motivate your beloved ones to do goods by prizing them. Here you can set something for your kids to be prized by, if they fulfill the title you have chosen."},
        8: { title:"Make Money", button:"Be Maker", img:"make_and_sell.jpg", body:"There is infinite opportunities for content making in hoduno. We've made all powerful but easy tools for it, and you need just some creativity and passion to make awesome titles."},
        9: { title:"Run Buisness", button:"Build Store", img:"passion_living.jpg", body:"Also you can run your own store within the hoduno and publish your favorite titles. We've provided all tools that a store manager needs to  succeed in this new and big marketplace."},
    },
    // single text of the homepage sections
    text:{ 
        0: "hoduno provides an all-inclusive solution for creating and utilizing entertaining educational materials.",
        1: "There is an effective supervising and reporting mechanism in hoduno.This lets hoduno to be clean of any unappreciated or incorrect content.",
        2: "This is a real WIN-WIN platform. If enjoy learning, if wanna motivate others to learn, if do business as maker or store owner, or if spread knowledge by ordering or sponsoring, all are winners.",
        3: "Thanks the people, organizations or companies who are backing us as platinum sponsor.",
    },
    // exciting stories of the users
    showcase:{ 
        0: { img:"story1.jpg", name:"Magas, 21", body:"I'm totally amazed. By hoduno, I could find and enjoy learning materials related to my lovely, rich culture. Even I ordered some and I had it ready in a short time. Thanks hoduno."},
        1: { img:"story2.jpg", name:"Zoghali, 16", body:"By hoduno now I can learn what I love to learn very fast, easy and with lots of fun. Now my knowledge in many areas is gonna be outstanding! And it happened unbelievably easy."},
        2: { img:"story3.jpg", name:"Nanjoon, 44", body:"My kid starts to learning almost everything by hoduno. I can not imagine how I could be able to motivate my kid to learn, as much as hoduno did! Thanks to hoduno motivation."},
        3: { img:"story4.jpg", name:"Sibil, 35", body:"I started to make hoduno content just to find how is it. But now, after a while, I have a real, growing business around it. I make money and enjoy my work at the same time!"},
    },
    sponsor:{
        0: { logo: "", url: "", name: "Company A"},
        1: { logo: "", url: "", name: "Company B"},
        2: { logo: "", url: "", name: "Company C"},
        3: { logo: "", url: "", name: "Company D"},
        4: { logo: "", url: "", name: "Company E"},
        5: { logo: "", url: "", name: "Company F"},
        6: { logo: "", url: "", name: "Company G"},
    },
    footer:{
        0:{ title:"About", url:"/about"},
        1:{ title:"Contact", url:"/contact"},
        2:{ title:"Privacy", url:"/privacy"},
        3:{ title:"Terms", url:"/terms"},
        4:{ title:"FAQ", url:"/faq"},
        5:{ title:"Help", url:"/help"},
        6:{ title:"Sponsor", url:"/sponsor"},
        7:{ title:"Makers", url:"/maker"},
        8:{ title:"Stores", url:"/store"},
        9:{ title:"Orders", url:"/order"},
        10:{ title:"Report", url:"/report"},
        11:{ title:"Search", url:"/search"},
        12:{ title:"Kids", url:"/kids"},
        13:{ title:"Griprize?", url:"/griprize"},
    }
};

module.exports = templateHomepage;