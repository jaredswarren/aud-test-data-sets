const { random } = require('faker')
const fs = require('fs')

var faker = require('faker')

const NUM_FILES = 1000
const NUM_USERS_PER_FILE = 10000
const NUM_SEGMENTS_PER_USER = 1000

for (let curr_file_num = 0; curr_file_num < NUM_FILES; curr_file_num++) {
    fileContents = Array(NUM_USERS_PER_FILE)
    for (let curr_user = 0; curr_user <= NUM_USERS_PER_FILE; curr_user++) {
        var uuid = faker.datatype.uuid()
        var line = Array(NUM_SEGMENTS_PER_USER + 1)
        line[0] = uuid
        for (let segment = 1; segment <= NUM_SEGMENTS_PER_USER; segment++) {
            line[segment] = faker.datatype.boolean().toString()
        }
        var lineStr = line.join(',')
        fileContents[curr_user] = lineStr
    }
    fs.writeFileSync('/Users/jarewarr/working/test-data-gen/output/' + curr_file_num + ".csv", fileContents.join('\n'))
}