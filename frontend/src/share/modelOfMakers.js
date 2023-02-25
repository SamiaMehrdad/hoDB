
/*
*menu
    * key "title" indicates menu title (optional)
    * value array [0] = menu content, [1] = hover hint, [2] = icon code (optional), 
    * any key with value "_" will be a separator.
*/
const templateMakers = {
    button: {
        test: ["Action","Translatable user hint about this.","&#xnnnn"],

        },
    menu: {
            0:{
                 title: "Kooft",
                edit: ["Edit","Edit this case.",""],
                clone: ["Clone","Make an identical copy of this case.",""],
                transfer: ["Transfer ","Transfer the ownership of this case to others.",""], //
                publish:  ["Publish","Publish this case.",""],
                _: "",
                delete: ["Delete","Delete this case. WARNING: This action can not be undone!",""],
            },
            1:{
               // No title
                line1: ["Line 1","Translatable user hint about this.","X"],
                _1: "",
                publish:  ["Publish","Publish this case.",""],
                line2: ["Line 2","Translatable user hint about this.","Y"],
            },
        },
        radio: { // label and hint both are translatable.

        },
    label: {
        test: "Translatable Test",

        },

};



module.exports = templateMakers;