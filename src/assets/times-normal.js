﻿import { jsPDF } from 'jspdf';
var font =
var callAddFont = function () {
  this.addFileToVFS('times-normal.ttf', font);
  this.addFont('times-normal.ttf', 'times', 'normal');
};
jsPDF.API.events.push(['addFonts', callAddFont]);