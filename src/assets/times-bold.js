﻿import { jsPDF } from 'jspdf';
var font =
var callAddFont = function () {
  this.addFileToVFS('times-bold.ttf', font);
  this.addFont('times-bold.ttf', 'times', 'bold');
};
jsPDF.API.events.push(['addFonts', callAddFont]);