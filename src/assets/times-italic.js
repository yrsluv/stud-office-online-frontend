﻿import { jsPDF } from "jspdf"
var callAddFont = function () {
this.addFileToVFS('times-italic.ttf', font);
this.addFont('times-italic.ttf', 'times', 'italic');
};
jsPDF.API.events.push(['addFonts', callAddFont])