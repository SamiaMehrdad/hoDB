
/*
*menu
    * key 'title' indicates menu title (optional)
    * value array [0] = menu content, [1] = hover hint, [2] = icon code (optional), 
*/
const hString = {
    studio: {
        button: {
              },
        menu: {
                mn0: 
                {
                    title:  'Add',
                    single: ['Single','Load a single image file.','&#xnnnn'],
                    folder: ['Folder','Load all images files of a folder.','&#xnnnn'],
                    sheet:  ['Sheet','Load a multi image graphic file.','&#xnnnn'],
                },
                mn1:
                {
                    title:   'Action',
                    flip:    ['Flip','Exchange images of pair.','&#xnnnn'],
                    details: ['Details','','&#xnnnn'],
                    allies:  ['Allies','','&#xnnnn'],
                    adverse: ['Adverse','','&#xnnnn'],
                    delete:  ['Delete','','&#xnnnn'],
                },
                mn2:
                {
                    title:   'Action',
                    details: ['Details','','&#xnnnn'],
                    allies:  ['Allies','','&#xnnnn'],
                    adverse: ['Adverse','','&#xnnnn'],
                    delete:  ['Delete','','&#xnnnn'],
                },
                mn3:
                {
                    title: 'Sort by',
                    order: ['Order','','&#xnnnn'],
                    value: ['Value','','&#xnnnn'],
                    relateion: ['Relation','','&#xnnnn'],
                },
                mn4:
                {
                    title: 'Modify',
                    settings: ['Settings','','&#xnnnn'],
                    Graphics: ['Graphics','','&#xnnnn'],
                    audio: ['Audio','','&#xnnnn'],
                }, 
                mn5: //genre
                {
                    //title:  '',
                    direct:  ['Direct','','&#xnnnn'], 
                    somehow: ['Somehow','','&#xnnnn'],
                    mystery: ['Mystery','','&#xnnnn'], 
                },
                mn6: //restrict asking to
                {
                    //title:  '',
                    none: ['None','','&#xnnnn'],


                },
            },
        radio: {
                prjLeitner: ['Apply Leitner technique ','Set this if you want player app ask questions based on Leitner technique.'],
                prjPooling: ['Pooling mode','Questions will be select from the list of all questions'],
                prjOneWay:  ['One way asking','Never use answers as question.'],
                prjMask:    ['Mask other questions','When a question is asked, hide all other questions and only how the potential answers.'],
                prjAnsTimer: ['Answering timer %10 sec',''],
                prjPenalty: ['Penalty time inc %10 sec',''],
                prjTriggCorrect: ['Trigger on correct answer',''],
                prjTriggWrong:   ['Trigger on wrong answer',''],
                prjShuffle:  ['Shuffle every %10 Triggers',''],
                prjLockPenalty:  ['Penalty',''],
                prjLockBomb:     ['Bomb',''],
                prjLockTimer:    ['Timer',''],
                prjLockLearn:    ['Learning',''],

            },
        label: {

            },
        },
    publisher: 
        {

        },               

}

module.exports = hString;