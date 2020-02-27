
class DataReader {

    constructor() {
        this.rows = {}; // indexed by y-position
    }

    read() {
        new pdfreader.PdfReader().parseFileItems("covid.pdf", function(err, item) {
            if (!item || item.page) {
                // end of file, or page
                this.printRows();
                console.log("PAGE:", item.page);
                rows = {}; // clear rows for next page
              } else if (item.text) {
                // accumulate text items into rows object, per line
                (rows[item.y] = rows[item.y] || []).push(item.text);
              }
        
            //  if(item != undefined) {
            //      fs.appendFile('covid.json', item.text + ' ', (data) => {
            //          console.log(data)
            //      })
            //  } 
          });
    }

    printRows() {
        Object.keys(this.rows) // => array of y-positions (type: float)
        .sort((y1, y2) => parseFloat(y1) - parseFloat(y2)) // sort float positions
        .forEach(y => console.log((this.rows[y] || []).join("")));
    }

}

export {
    DataReader
}