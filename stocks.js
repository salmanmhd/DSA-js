// best time to buy and sell stocks
// Ques 1 - Best Time to Buy and Sell Stock
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// input: prices = [7,1,5,3,6,4] ----->>>>> Output: 5
// input: prices = [7,6,4,3,1] ----->>>>> Output: 0

function maxProfit1(prices) {
  let maxProfit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] < prices[i]) {
        continue;
      } else {
        let temp = prices[j] - prices[i];
        if (temp > maxProfit) maxProfit = temp;
      }
    }
  }

  return maxProfit;
}

// greedy done
function maxProfit(prices) {
  let minPrice = prices[0] || 0;
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }

    profit = Math.max(profit, prices[i] - minPrice);
  }

  return profit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
