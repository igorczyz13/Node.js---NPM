// const gulp = require('gulp');

// function showGulp(done) {
//     const user = {
//         name: 'Adam'
//     }
//     console.log(user.name);
//     done()
// }

// exports.showGulp = showGulp

const gulp = require('gulp');

function text1(done) {
    console.log(123);
    done();
}

function text2(done) {
    console.log('abcd');
    done();
}

exports.showTextS = gulp.series(text1, text2)
exports.showTextP = gulp.parallel(text1, text2)