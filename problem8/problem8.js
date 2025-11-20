"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function nextRound(n, k, scores) {
    var kthScore = scores[k - 1]; // score of k-th place (1-indexed)
    var count = 0;
    for (var i = 0; i < n; i++) {
        if (scores[i] >= kthScore && scores[i] > 0) {
            count++;
        }
    }
    return count;
}
// Example usage:
var input = "8 5\n10 9 8 7 7 7 5 5";
var lines = input.trim().split("\n");
console.log(lines);
var _a = lines[0].split(" ").map(Number), n = _a[0], k = _a[1];
var scores = lines[1].split(" ").map(Number);
console.log(nextRound(n, k, scores));
