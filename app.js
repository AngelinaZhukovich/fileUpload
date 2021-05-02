import {upload} from './upload.js'

upload (selector,'#file', options, {
    multi: true,
    accept: ['.png', '.jpg', '.jpeg']

})