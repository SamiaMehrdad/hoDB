// hoduno Database schema definition.
// Object: Report
// What this is: Reporting a title by users for violation
// Created Nov 28, 2022 Mehrdad Samia 
// All URL fields Should be replace with actual strigified equevalent when portable version get generated.
// 

const mongoose = require('mongoose');
const HF = require('../../share/hfixes');

const ReportSchema = mongoose.Schema(
    {
        comment: { type: String, maxLength: HF.Report.MaxTextLen},
    },
    {
        timestamps: true,
    }
     );     