﻿import { jsPDF } from 'jspdf';
var font =
var callAddFont = function () {
  this.addFileToVFS('times-bolditalic.ttf', font);
  this.addFont('times-bolditalic.ttf', 'times', 'bolditalic');
};
jsPDF.API.events.push(['addFonts', callAddFont]);