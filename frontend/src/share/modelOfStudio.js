
/*
*menu
    * key "title" indicates menu title (optional)
    * value array [0] = menu content, [1] = hover hint, [2] = icon code (optional), 
*/
const templateStudio = {
    button: {
        add: ["Add","Translatable user hint about this.","&#xnnnn"],
        action: ["Action","Translatable user hint about this.","&#xnnnn"],
        sort: ["Sort","Translatable user hint about this.","&#xnnnn"],
        modify: ["Modify","Translatable user hint about this.","&#xnnnn"],
        Clone: ["Clone","Translatable user hint about this.",""],
        transfer: ["Transfer","Translatable user hint about this.",""],
        undo: ["Undo","Translatable user hint about this.",""],
        redo: ["Redo","Translatable user hint about this.",""],
        },
    menu: {
            0:{
                title:  "Add",
                single: ["Single","Load a single image file.",""],
                folder: ["Folder","Load all images files of a folder.",""],
                sheet:  ["Sheet","Load a multi image graphic file.",""],
            },
            1:{                    
            title:   "Action",
            flip:    ["Flip","Exchange images of pair.",""],
            details: ["Details","Translatable user hint about this.",""],
            allies:  ["Allies","Translatable user hint about this.",""],
            adverse: ["Adverse","Translatable user hint about this.",""],
            delete:  ["Delete","Translatable user hint about this.",""],
            },
            2:{
            title:   "Action",
            details: ["Details","Translatable user hint about this.",""],
            allies:  ["Allies","Translatable user hint about this.",""],
            adverse: ["Adverse","Translatable user hint about this.",""],
            delete:  ["Delete","Translatable user hint about this.",""],
            },
            3:{
            title: "Sort by",
            value: ["Value","Translatable user hint about this.",""],
            relateion: ["Relation","Translatable user hint about this.",""],
            },
            4:{
            title: "Modify",
            settings: ["Settings","Translatable user hint about this.",""],
            Graphics: ["Graphics","Translatable user hint about this.",""],
            audio: ["Audio","Translatable user hint about this.",""],
            },
            5: { //genre
            //no title
            direct:  ["Direct","Translatable user hint about this.",""],
            somehow: ["Somehow","Translatable user hint about this.",""],
            mystery: ["Mystery","Translatable user hint about this.",""],
            fun:     ["Fun","Translatable user hint about this.",""],
            },
            6: { //restrict asking to
            //no title
            none: ["None","Translatable user hint about this.",""],
            questions: ["Questions","Translatable user hint about this.",""],
            answers: ["Answers","Translatable user hint about this.",""],
            },
            7: { //skills set range
                kids: ["Kids","Translatable user hint about this.",""],
                teens: ["Teens","Translatable user hint about this.",""],
                adults: ["Adults","Translatable user hint about this.",""],
                seniors: ["Seniors","Translatable user hint about this.",""],
                experts: ["Experts","Translatable user hint about this.",""],
                everyone: ["Everyone","Translatable user hint about this.",""],
            },
        },
        radio: { // label and hint both are translatable.
            prjLeitner: ["Apply Leitner technique ","Set this if you want player app ask questions based on Leitner technique."],
            prjPooling: ["Pooling mode","Questions will be select from the list of all questions"],
            prjOneWay:  ["One way asking","Never use answers as question."],
            prjMask:    ["Mask other questions","When a question is asked, hide all other questions and only how the potential answers."],
            prjRemAnswer: ["Remove answered questions","When a question is answered, remove it from the list of questions."],
            prjAnsTimer: ["Answering timer !10 sec","Translatable user hint about this."],
            prjPenalty: ["Penalty time add !10 sec","Translatable user hint about this."],
            prjTriggCorrect: ["Trigger on correct answer","Translatable user hint about this."],
            prjTriggWrong:   ["Trigger on wrong answer","Translatable user hint about this."],
            prjShuffle:  ["Shuffle every %10 Triggers","Translatable user hint about this."],
            prjLockPenalty:  ["Penalty","Translatable user hint about this."],
            prjLockBomb:     ["Bomb","Translatable user hint about this."],
            prjLockTimer:    ["Timer","Translatable user hint about this."],
            prjLockLearn:    ["Learning","Translatable user hint about this."],

        },
    label: {
        test: "Translatable Test",

        },

};



module.exports = templateStudio;