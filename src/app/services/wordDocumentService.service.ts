import { Injectable } from '@angular/core';
import * as JSZip from 'jszip';


@Injectable({
  providedIn: 'root',
})
export class WordDocumentService {
  constructor() {}

  async readDocument(file): Promise<string> {
    const zip = await JSZip.loadAsync(file);
    const contentXml = await zip.file('word/document.xml').async('text');
    // const parser = new DOMParser();
    // const xmlDoc = parser.parseFromString(contentXml, 'text/xml');


//          let text = '';
//          const parser = new xml2js.Parser();
//          parser.parseString(contentXml, (err, result) => {
//            if (err) throw err;
//            const paragraphs = result['w:document']['w:body'][0]['w:p'];
//            for (let i = 0; i < paragraphs.length; i++) {
//              const runs = paragraphs[i]['w:r'];
//              for (let j = 0; j < runs.length; j++) {
//                const texts = runs[j]['w:t'];
//                for (let k = 0; k < texts.length; k++) {
//                  text += texts[k];
//                }
//              }
//              text += '\n';
//            }
//          });
// console.log(text);

    return 'text';
  }
}
