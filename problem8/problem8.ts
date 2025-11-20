import { log } from "console";

function nextRound(n: number, k: number, scores: number[]): number {
  const kthScore = scores[k - 1];

  let count = 0;

  for (let i = 0; i < n; i++) {
    if (scores[i] >= kthScore && scores[i] > 0) {
      count++;
    }
  }

  return count;
}


const input = `8 5
10 9 8 7 7 7 5 5`;

const lines = input.trim().split("\n");
console.log(lines)
const [n, k] = lines[0].split(" ").map(Number);
const scores = lines[1].split(" ").map(Number);

console.log(nextRound(n, k, scores));
