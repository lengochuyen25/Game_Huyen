// function gameOver() {
//     for (let i = 0; i < balls.length; i++) {
//         if (balls[i].x > padd.paddX && balls[i].y > padd.paddY) {
//             if (balls[i].x - (padd.paddX + padd.paddWidth) <= balls[i].radius &&
//                 balls[i].y - (padd.paddY + padd.paddHeight) <= balls[i].radius) {
//                 alert('Game over' + '    ' + 'Diem cua ban la :' + score);
//                 score=0;
//                 window.location.reload();
//             }
//         }
//     }
// }
// let starTime;
// function drawGame() {
//     if (!starTime) {
//         starTime = new Date().getTime();
//     } else {
//         let longTime = Math.floor((new Date().getTime() - starTime) / 1000);
//         score = longTime;

