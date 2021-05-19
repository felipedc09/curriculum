const path = require('path');
const fs = require('fs');

 function getCurriculumns(){
    const curriculumnsPath = path.join(__dirname, 'curriculums');
    const filesNames = fs.readdirSync(curriculumnsPath);
    
    function readAll(){
        try {
            return filesNames
        } catch (error) {
            console.log('Unable to scan directory: ' + err);
        }
    }

    function readById(id){
        try {
            const fileName = filesNames.find((file)=> file.split('.')[0] === id);
            console.log(`${curriculumnsPath}/${fileName}`)
            let rawdata = fs.readFileSync(`${curriculumnsPath}/${fileName}`);
            let curriculum = JSON.parse(rawdata);
            return curriculum
        } catch (error) {
            console.log('Unable to find file: ' + error);
        }
    }
    
    return {
        readAll,
        readById
    }
}

module.exports = getCurriculumns;