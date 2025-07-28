export const PROBLEMS_DATA = {
  "twoPointer": {
    "category": "I. Two Pointer Patterns",
    "patterns": {
      "converging": {
        "name": "Pattern 1: Two Pointers - Converging (Sorted Array Target Sum)",
        "problems": [
          "1. Two Sum",
          "11. Container With Most Water",
          "15. 3Sum",
          "16. 3Sum Closest",
          "18. 4Sum",
          "167. Two Sum II - Input Array Is Sorted",
          "349. Intersection of Two Arrays",
          "392. Is Subsequence",
          "881. Boats to Save People",
          "977. Squares of a Sorted Array",
          "259. 3Sum Smaller"
        ]
      },
      "fastSlow": {
        "name": "Pattern 2: Two Pointers - Fast & Slow (Cycle Detection)",
        "problems": [
          "141. Linked List Cycle",
          "202. Happy Number",
          "287. Find the Duplicate Number"
        ]
      },
      "fixedSeparation": {
        "name": "Pattern 3: Two Pointers - Fixed Separation (Nth Node from End)",
        "problems": [
          "19. Remove Nth Node From End of List",
          "876. Middle of the Linked List",
          "2095. Delete the Middle Node of a Linked List"
        ]
      },
      "inPlaceModification": {
        "name": "Pattern 4: Two Pointers - In-place Array Modification",
        "problems": [
          "26. Remove Duplicates from Sorted Array",
          "27. Remove Element",
          "75. Sort Colors",
          "80. Remove Duplicates from Sorted Array II",
          "283. Move Zeroes",
          "443. String Compression",
          "905. Sort Array By Parity",
          "2337. Move Pieces to Obtain a String",
          "2938. Separate Black and White Balls"
        ]
      },
      "backspaceComparison": {
        "name": "Pattern 5: Two Pointers - String Comparison with Backspaces",
        "problems": [
          "844. Backspace String Compare"
        ]
      },
      "expandingCenter": {
        "name": "Pattern 6: Two Pointers - Expanding From Center (Palindromes)",
        "problems": [
          "5. Longest Palindromic Substring",
          "647. Palindromic Substrings"
        ]
      },
      "stringReversal": {
        "name": "Pattern 7: Two Pointers - String Reversal",
        "problems": [
          "151. Reverse Words in a String",
          "344. Reverse String",
          "345. Reverse Vowels of a String",
          "541. Reverse String II"
        ]
      }
    }
  },
  "slidingWindow": {
    "category": "II. Sliding Window Patterns",
    "patterns": {
      "fixedSize": {
        "name": "Pattern 8: Sliding Window - Fixed Size (Subarray Calculation)",
        "problems": [
          "346. Moving Average from Data Stream",
          "643. Maximum Average Subarray I",
          "2985. Calculate Compressed Mean",
          "3254. Find the Power of K-Size Subarrays I",
          "3318. Find X-Sum of All K-Long Subarrays I"
        ]
      },
      "variableSize": {
        "name": "Pattern 9: Sliding Window - Variable Size (Condition-Based)",
        "problems": [
          "3. Longest Substring Without Repeating Characters",
          "76. Minimum Window Substring",
          "209. Minimum Size Subarray Sum",
          "219. Contains Duplicate II",
          "424. Longest Repeating Character Replacement",
          "713. Subarray Product Less Than K",
          "904. Fruit Into Baskets",
          "1004. Max Consecutive Ones III",
          "1438. Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit",
          "1493. Longest Subarray of 1's After Deleting One Element",
          "1658. Minimum Operations to Reduce X to Zero",
          "1838. Frequency of the Most Frequent Element",
          "2461. Maximum Sum of Distinct Subarrays With Length K",
          "2516. Take K of Each Character From Left and Right",
          "2762. Continuous Subarrays",
          "2779. Maximum Beauty of an Array After Applying Operation",
          "2981. Find Longest Special Substring That Occurs Thrice I",
          "3026. Maximum Good Subarray Sum",
          "3346. Maximum"
        ]
      },
      "monotonicQueue": {
        "name": "Pattern 10: Sliding Window - Monotonic Queue for Max/Min",
        "problems": [
          "239. Sliding Window Maximum",
          "862. Shortest Subarray with Sum at Least K",
          "1696. Jump Game VI"
        ]
      },
      "charFrequencyMatching": {
        "name": "Pattern 11: Sliding Window - Character Frequency Matching",
        "problems": [
          "438. Find All Anagrams in a String",
          "567. Permutation in String"
        ]
      }
    }
  },
  "trees": {
    "category": "III. Tree Traversal Patterns (DFS & BFS)",
    "patterns": {
      "bfs": {
        "name": "Pattern 12: Tree BFS - Level Order Traversal",
        "problems": [
          "102. Binary Tree Level Order Traversal",
          "103. Binary Tree Zigzag Level Order Traversal",
          "199. Binary Tree Right Side View",
          "515. Find Largest Value in Each Tree Row",
          "1161. Maximum Level Sum of a Binary Tree"
        ]
      },
      "dfsPreorder": {
        "name": "Pattern 13: Tree DFS - Recursive Preorder Traversal",
        "problems": [
          "100. Same Tree",
          "101. Symmetric Tree",
          "105. Construct Binary Tree from Preorder and Inorder Traversal",
          "114. Flatten Binary Tree to Linked List",
          "226. Invert Binary Tree",
          "257. Binary Tree Paths",
          "988. Smallest String Starting From Leaf"
        ]
      },
      "dfsInorder": {
        "name": "Pattern 14: Tree DFS - Recursive Inorder Traversal",
        "problems": [
          "94. Binary Tree Inorder Traversal",
          "98. Validate Binary Search Tree",
          "173. Binary Search Tree Iterator",
          "230. Kth Smallest Element in a BST",
          "501. Find Mode in Binary Search Tree",
          "530. Minimum Absolute Difference in BST"
        ]
      },
      "dfsPostorder": {
        "name": "Pattern 15: Tree DFS - Recursive Postorder Traversal",
        "problems": [
          "104. Maximum Depth of Binary Tree",
          "110. Balanced Binary Tree",
          "124. Binary Tree Maximum Path Sum",
          "145. Binary Tree Postorder Traversal",
          "337. House Robber III",
          "366. Find Leaves of Binary Tree",
          "543. Diameter of Binary Tree",
          "863. All Nodes Distance K in Binary Tree",
          "1110. Delete Nodes And Return Forest",
          "2458. Height of Binary Tree After Subtree Removal Queries"
        ]
      },
      "lca": {
        "name": "Pattern 17: Tree - Lowest Common Ancestor (LCA) Finding",
        "problems": [
          "235. Lowest Common Ancestor of a Binary Search Tree",
          "236. Lowest Common Ancestor of a Binary Tree"
        ]
      },
      "serialization": {
        "name": "Pattern 18: Tree - Serialization and Deserialization",
        "problems": [
          "297. Serialize and Deserialize Binary Tree",
          "572. Subtree of Another Tree",
          "652. Find Duplicate Subtrees"
        ]
      }
    }
  },
  "graphs": {
    "category": "IV. Graph Traversal Patterns (DFS & BFS)",
    "patterns": {
      "dfsComponents": {
        "name": "Pattern 19: Graph DFS - Connected Components / Island Counting",
        "problems": [
          "130. Surrounded Regions",
          "200. Number of Islands",
          "417. Pacific Atlantic Water Flow",
          "547. Number of Provinces",
          "695. Max Area of Island",
          "733. Flood Fill",
          "841. Keys and Rooms",
          "1020. Number of Enclaves",
          "1254. Number of Closed Islands",
          "1905. Count Sub Islands",
          "2101. Detonate the Maximum Bombs"
        ]
      },
      "bfsComponents": {
        "name": "Pattern 20: Graph BFS - Connected Components / Island Counting",
        "problems": [
          "127. Word Ladder",
          "542. 01 Matrix",
          "994. Rotting Oranges",
          "1091. Shortest Path in Binary Matrix"
        ]
      },
      "dfsCycle": {
        "name": "Pattern 21: Graph DFS - Cycle Detection (Directed Graph)",
        "problems": [
          "207. Course Schedule",
          "210. Course Schedule II",
          "802. Find Eventual Safe States",
          "1059. All Paths from Source Lead to Destination"
        ]
      },
      "bfsTopological": {
        "name": "Pattern 22: Graph BFS - Topological Sort (Kahn's Algorithm)",
        "problems": [
          "207. Course Schedule",
          "210. Course Schedule II",
          "269. Alien Dictionary",
          "310. Minimum Height Trees",
          "444. Sequence Reconstruction",
          "1136. Parallel Courses",
          "1857. Largest Color Value in a Directed Graph",
          "2050. Parallel Courses III",
          "2115. Find All Possible Recipes from Given Supplies",
          "2392. Build a Matrix With Conditions"
        ]
      },
      "deepCopy": {
        "name": "Pattern 23: Graph - Deep Copy / Cloning",
        "problems": [
          "133. Clone Graph"
        ]
      },
      "dijkstra": {
        "name": "Pattern 24: Graph - Shortest Path (Dijkstra's Algorithm)",
        "problems": [
          "743. Network Delay Time",
          "778. Swim in Rising Water",
          "1514. Path with Maximum Probability",
          "1631. Path With Minimum Effort",
          "1976. Number of Ways to Arrive at Destination",
          "2045. Second Minimum Time to Reach Destination",
          "2203. Minimum Weighted Subgraph With the Required Paths",
          "2290. Minimum Obstacle Removal to Reach Corner",
          "2577. Minimum Time to Visit a Cell In a Grid",
          "2812. Find the Safest Path in a Grid"
        ]
      },
      "bellmanFord": {
        "name": "Pattern 25: Graph - Shortest Path (Bellman-Ford / BFS+K)",
        "problems": [
          "787. Cheapest Flights Within K Stops"
        ]
      },
      "unionFind": {
        "name": "Pattern 26: Graph - Union-Find (Disjoint Set Union - DSU)",
        "problems": [
          "200. Number of Islands",
          "261. Graph Valid Tree",
          "305. Number of Islands II",
          "323. Number of Connected Components in an Undirected Graph",
          "547. Number of Provinces",
          "684. Redundant Connection",
          "721. Accounts Merge",
          "737. Sentence Similarity II",
          "947. Most Stones Removed with Same Row or Column",
          "952. Largest Component Size by Common Factor",
          "959. Regions Cut By Slashes",
          "1101. The Earliest Moment When Everyone Become Friends"
        ]
      }
    }
  },
  "dynamicProgramming": {
    "category": "V. Dynamic Programming (DP) Patterns",
    "patterns": {
      "fibonacci": {
        "name": "Pattern 27: DP - 1D Array (Fibonacci Style)",
        "problems": [
          "70. Climbing Stairs",
          "91. Decode Ways",
          "198. House Robber",
          "213. House Robber II",
          "337. House Robber III",
          "509. Fibonacci Number",
          "740. Delete and Earn",
          "746. Min Cost Climbing Stairs"
        ]
      },
      "kadane": {
        "name": "Pattern 28: DP - 1D Array (Kadane's Algorithm for Max/Min Subarray)",
        "problems": [
          "53. Maximum Subarray"
        ]
      },
      "coinChange": {
        "name": "Pattern 29: DP - 1D Array (Coin Change / Unbounded Knapsack Style)",
        "problems": [
          "322. Coin Change",
          "377. Combination Sum IV",
          "518. Coin Change II"
        ]
      },
      "zeroOneKnapsack": {
        "name": "Pattern 30: DP - 1D Array (0/1 Knapsack Subset Sum Style)",
        "problems": [
          "416. Partition Equal Subset Sum",
          "494. Target Sum"
        ]
      },
      "wordBreak": {
        "name": "Pattern 31: DP - 1D Array (Word Break Style)",
        "problems": [
          "139. Word Break",
          "140. Word Break II"
        ]
      },
      "lcs": {
        "name": "Pattern 32: DP - 2D Array (Longest Common Subsequence - LCS)",
        "problems": [
          "583. Delete Operation for Two Strings",
          "1143. Longest Common Subsequence"
        ]
      },
      "editDistance": {
        "name": "Pattern 33: DP - 2D Array (Edit Distance / Levenshtein Distance)",
        "problems": [
          "72. Edit Distance"
        ]
      },
      "uniquePaths": {
        "name": "Pattern 34: DP - 2D Array (Unique Paths on Grid)",
        "problems": [
          "62. Unique Paths",
          "63. Unique Paths II",
          "64. Minimum Path Sum",
          "120. Triangle",
          "221. Maximal Square",
          "931. Minimum Falling Path Sum",
          "1277. Count Square Submatrices with All Ones"
        ]
      },
      "intervalDP": {
        "name": "Pattern 35: DP - Interval DP",
        "problems": [
          "312. Burst Balloons",
          "546. Remove Boxes"
        ]
      },
      "catalan": {
        "name": "Pattern 36: DP - Catalan Numbers",
        "problems": [
          "95. Unique Binary Search Trees II",
          "96. Unique Binary Search Trees",
          "241. Different Ways to Add Parentheses"
        ]
      },
      "lis": {
        "name": "Pattern 37: DP - Longest Increasing Subsequence (LIS)",
        "problems": [
          "300. Longest Increasing Subsequence",
          "354. Russian Doll Envelopes",
          "1671. Minimum Number of Removals to Make Mountain Array",
          "2407. Longest Increasing Subsequence II"
        ]
      }
    }
  },
  "heap": {
    "category": "VI. Heap (Priority Queue) Patterns",
    "patterns": {
      "topK": {
        "name": "Pattern 38: Heap - Top K Elements (Selection/Frequency)",
        "problems": [
          "215. Kth Largest Element in an Array",
          "347. Top K Frequent Elements",
          "451. Sort Characters By Frequency",
          "506. Relative Ranks",
          "703. Kth Largest Element in a Stream",
          "973. K Closest Points to Origin",
          "1046. Last Stone Weight",
          "2558. Take Gifts From the Richest Pile"
        ]
      },
      "twoHeaps": {
        "name": "Pattern 39: Heap - Two Heaps for Median Finding",
        "problems": [
          "295. Find Median from Data Stream",
          "1825. Finding MK Average"
        ]
      },
      "kWayMerge": {
        "name": "Pattern 40: Heap - K-way Merge",
        "problems": [
          "23. Merge k Sorted Lists",
          "373. Find K Pairs with Smallest Sums",
          "378. Kth Smallest Element in a Sorted Matrix",
          "632. Smallest Range Covering Elements from K Lists"
        ]
      },
      "scheduling": {
        "name": "Pattern 41: Heap - Scheduling / Minimum Cost (Greedy with Priority Queue)",
        "problems": [
          "253. Meeting Rooms II",
          "767. Reorganize String",
          "857. Minimum Cost to Hire K Workers",
          "1642. Furthest Building You Can Reach",
          "1792. Maximum Average Pass Ratio",
          "1834. Single-Threaded CPU",
          "1942. The Number of the Smallest Unoccupied Chair",
          "2402. Meeting Rooms III"
        ]
      }
    }
  },
  "backtracking": {
    "category": "VII. Backtracking Patterns",
    "patterns": {
      "subsets": {
        "name": "Pattern 42: Backtracking - Subsets (Include/Exclude)",
        "problems": [
          "17. Letter Combinations of a Phone Number",
          "77. Combinations",
          "78. Subsets",
          "90. Subsets II"
        ]
      },
      "permutations": {
        "name": "Pattern 43: Backtracking - Permutations",
        "problems": [
          "31. Next Permutation",
          "46. Permutations",
          "60. Permutation Sequence"
        ]
      },
      "combinationSum": {
        "name": "Pattern 44: Backtracking - Combination Sum",
        "problems": [
          "39. Combination Sum",
          "40. Combination Sum II"
        ]
      },
      "parentheses": {
        "name": "Pattern 45: Backtracking - Parentheses Generation",
        "problems": [
          "22. Generate Parentheses",
          "301. Remove Invalid Parentheses"
        ]
      },
      "wordSearch": {
        "name": "Pattern 46: Backtracking - Word Search / Path Finding in Grid",
        "problems": [
          "79. Word Search",
          "212. Word Search II",
          "2018. Check if Word Can Be Placed In Crossword"
        ]
      },
      "nQueens": {
        "name": "Pattern 47: Backtracking - N-Queens / Constraint Satisfaction",
        "problems": [
          "37. Sudoku Solver",
          "51. N-Queens"
        ]
      },
      "palindromePartitioning": {
        "name": "Pattern 48: Backtracking - Palindrome Partitioning",
        "problems": [
          "131. Palindrome Partitioning"
        ]
      }
    }
  },
  "greedy": {
    "category": "VIII. Greedy Patterns",
    "patterns": {
      "intervalMerging": {
        "name": "Pattern 49: Greedy - Interval Merging/Scheduling",
        "problems": [
          "56. Merge Intervals",
          "57. Insert Interval",
          "759. Employee Free Time",
          "986. Interval List Intersections",
          "2406. Divide Intervals Into Minimum Number of Groups"
        ]
      },
      "jumpGame": {
        "name": "Pattern 51: Greedy - Jump Game Reachability/Minimization",
        "problems": [
          "45. Jump Game II",
          "55. Jump Game"
        ]
      },
      "buySellStock": {
        "name": "Pattern 52: Greedy - Buy/Sell Stock",
        "problems": [
          "121. Best Time to Buy and Sell Stock",
          "122. Best Time to Buy and Sell Stock II"
        ]
      },
      "gasStation": {
        "name": "Pattern 53: Greedy - Gas Station Circuit",
        "problems": [
          "134. Gas Station"
        ]
      },
      "taskScheduling": {
        "name": "Pattern 54: Greedy - Task Scheduling (Frequency Based)",
        "problems": [
          "621. Task Scheduler"
        ]
      }
    }
  },
  "binarySearch": {
    "category": "IX. Binary Search Patterns",
    "patterns": {
      "sortedArray": {
        "name": "Pattern 55: Binary Search - On Sorted Array/List",
        "problems": [
          "35. Search Insert Position",
          "69. Sqrt(x)",
          "74. Search a 2D Matrix",
          "278. First Bad Version",
          "374. Guess Number Higher or Lower",
          "540. Single Element in a Sorted Array",
          "704. Binary Search",
          "1539. Kth Missing Positive Number"
        ]
      },
      "rotatedArray": {
        "name": "Pattern 56: Binary Search - Find Min/Max in Rotated Sorted Array",
        "problems": [
          "33. Search in Rotated Sorted Array",
          "81. Search in Rotated Sorted Array II",
          "153. Find Minimum in Rotated Sorted Array",
          "162. Find Peak Element",
          "852. Peak Index in a Mountain Array",
          "1095. Find in Mountain Array"
        ]
      },
      "onAnswer": {
        "name": "Pattern 57: Binary Search - On Answer / Condition Function",
        "problems": [
          "410. Split Array Largest Sum",
          "774. Minimize Max Distance to Gas Station",
          "875. Koko Eating Bananas",
          "1011. Capacity To Ship Packages Within D Days",
          "1482. Minimum Number of Days to Make m Bouquets",
          "1760. Minimum Limit of Balls in a Bag",
          "2064. Minimized Maximum of Products Distributed to Any Store",
          "2226. Maximum Candies Allocated to K Children"
        ]
      },
      "firstLastOccurrence": {
        "name": "Pattern 58: Binary Search - Find First/Last Occurrence",
        "problems": [
          "34. Find First and Last Position of Element in Sorted Array",
          "658. Find K Closest Elements"
        ]
      },
      "medianSortedArrays": {
        "name": "Pattern 59: Binary Search - Median of Two Sorted Arrays",
        "problems": [
          "4. Median of Two Sorted Arrays"
        ]
      }
    }
  },
  "stack": {
    "category": "X. Stack Patterns",
    "patterns": {
      "validParentheses": {
        "name": "Pattern 60: Stack - Valid Parentheses Matching",
        "problems": [
          "20. Valid Parentheses",
          "32. Longest Valid Parentheses",
          "921. Minimum Add to Make Parentheses Valid",
          "1249. Minimum Remove to Make Valid Parentheses",
          "1963. Minimum Number of Swaps to Make the String Balanced"
        ]
      },
      "monotonicStack": {
        "name": "Pattern 61: Stack - Monotonic Stack",
        "problems": [
          "402. Remove K Digits",
          "496. Next Greater Element I",
          "503. Next Greater Element II",
          "739. Daily Temperatures",
          "901. Online Stock Span",
          "907. Sum of Subarray Minimums",
          "962. Maximum Width Ramp",
          "1475. Final Prices With a Special Discount in a Shop",
          "1673. Find the Most Competitive Subsequence"
        ]
      },
      "expressionEvaluation": {
        "name": "Pattern 62: Stack - Expression Evaluation (RPN/Infix)",
        "problems": [
          "150. Evaluate Reverse Polish Notation",
          "224. Basic Calculator",
          "227. Basic Calculator II",
          "772. Basic Calculator III"
        ]
      },
      "simulation": {
        "name": "Pattern 63: Stack - Simulation / Backtracking Helper",
        "problems": [
          "71. Simplify Path",
          "394. Decode String",
          "735. Asteroid Collision"
        ]
      },
      "minStack": {
        "name": "Pattern 64: Stack - Min Stack Design",
        "problems": [
          "155. Min Stack"
        ]
      },
      "largestRectangle": {
        "name": "Pattern 65: Stack - Largest Rectangle in Histogram",
        "problems": [
          "84. Largest Rectangle in Histogram",
          "85. Maximal Rectangle"
        ]
      }
    }
  },
  "bitManipulation": {
    "category": "XI. Bit Manipulation Patterns",
    "patterns": {
      "xor": {
        "name": "Pattern 66: Bitwise XOR - Finding Single/Missing Number",
        "problems": [
          "136. Single Number",
          "137. Single Number II",
          "268. Missing Number",
          "389. Find the Difference"
        ]
      },
      "andSetBits": {
        "name": "Pattern 67: Bitwise AND - Counting Set Bits (Hamming Weight)",
        "problems": [
          "191. Number of 1 Bits"
        ]
      },
      "countingBits": {
        "name": "Pattern 70: Bitwise DP - Counting Bits Optimization",
        "problems": [
          "338. Counting Bits"
        ]
      },
      "powerCheck": {
        "name": "Pattern 69: Bitwise Operations - Power of Two/Four Check",
        "problems": [
          "231. Power of Two",
          "342. Power of Four"
        ]
      }
    }
  },
  "linkedList": {
    "category": "XII. Linked List Manipulation Patterns",
    "patterns": {
      "inPlaceReversal": {
        "name": "Pattern 71: Linked List - In-place Reversal",
        "problems": [
          "83. Remove Duplicates from Sorted List",
          "92. Reverse Linked List II",
          "206. Reverse Linked List",
          "25. Reverse Nodes in k-Group",
          "234. Palindrome Linked List",
          "82. Remove Duplicates from Sorted List II"
        ]
      },
      "mergeSorted": {
        "name": "Pattern 72: Linked List - Merging Two Sorted Lists",
        "problems": [
          "21. Merge Two Sorted Lists"
        ]
      },
      "addition": {
        "name": "Pattern 73: Linked List - Addition of Numbers",
        "problems": [
          "2. Add Two Numbers",
          "369. Plus One Linked List"
        ]
      },
      "intersection": {
        "name": "Pattern 74: Linked List - Intersection Detection",
        "problems": [
          "160. Intersection of Two Linked Lists"
        ]
      },
      "reordering": {
        "name": "Pattern 75: Linked List - Reordering / Partitioning",
        "problems": [
          "24. Swap Nodes in Pairs",
          "61. Rotate List",
          "86. Partition List",
          "143. Reorder List",
          "328. Odd Even Linked List"
        ]
      }
    }
  },
  "arrayMatrix": {
    "category": "XIII. Array/Matrix Manipulation Patterns",
    "patterns": {
      "inPlaceRotation": {
        "name": "Pattern 76: Array/Matrix - In-place Rotation",
        "problems": [
          "48. Rotate Image",
          "189. Rotate Array"
        ]
      },
      "spiralTraversal": {
        "name": "Pattern 77: Array/Matrix - Spiral Traversal",
        "problems": [
          "54. Spiral Matrix",
          "885. Spiral Matrix III",
          "2326. Spiral Matrix IV"
        ]
      },
      "setMatrixZeroes": {
        "name": "Pattern 78: Array/Matrix - Set Matrix Zeroes (In-place Marking)",
        "problems": [
          "73. Set Matrix Zeroes"
        ]
      },
      "productExceptSelf": {
        "name": "Pattern 79: Array - Product Except Self (Prefix/Suffix Products)",
        "problems": [
          "238. Product of Array Except Self"
        ]
      },
      "plusOne": {
        "name": "Pattern 80: Array - Plus One (Handling Carry)",
        "problems": [
          "66. Plus One"
        ]
      },
      "mergeSortedArray": {
        "name": "Pattern 81: Array - Merge Sorted Array (In-place from End)",
        "problems": [
          "88. Merge Sorted Array"
        ]
      },
      "cyclicSort": {
        "name": "Pattern 82: Array - Cyclic Sort",
        "problems": [
          "41. First Missing Positive",
          "268. Missing Number",
          "287. Find the Duplicate Number",
          "442. Find All Duplicates in an Array",
          "448. Find All Numbers Disappeared in an Array"
        ]
      },
      "maxProductSubarray": {
        "name": "Pattern 83: Array - Kadane's Variant for Maximum Product",
        "problems": [
          "152. Maximum Product Subarray"
        ]
      }
    }
  },
  "strings": {
    "category": "XIV. String Manipulation Patterns",
    "patterns": {
      "palindromeCheck": {
        "name": "Pattern 84: String - Palindrome Check (Two Pointers / Reverse)",
        "problems": [
          "9. Palindrome Number",
          "125. Valid Palindrome",
          "680. Valid Palindrome II"
        ]
      },
      "anagramCheck": {
        "name": "Pattern 85: String - Anagram Check (Frequency Count/Sort)",
        "problems": [
          "49. Group Anagrams",
          "242. Valid Anagram"
        ]
      },
      "romanToInteger": {
        "name": "Pattern 86: String - Roman to Integer Conversion",
        "problems": [
          "13. Roman to Integer"
        ]
      },
      "stringToInteger": {
        "name": "Pattern 87: String - String to Integer (atoi)",
        "problems": [
          "8. String to Integer (atoi)"
        ]
      },
      "multiplyStrings": {
        "name": "Pattern 88: String - Multiply Strings (Manual Simulation)",
        "problems": [
          "43. Multiply Strings"
        ]
      },
      "stringMatching": {
        "name": "Pattern 89: String Matching - Naive / KMP / Rabin-Karp",
        "problems": [
          "28. Find the Index of the First Occurrence in a String",
          "214. Shortest Palindrome",
          "686. Repeated String Match",
          "796. Rotate String",
          "3008. Find Beautiful Indices in the Given Array II"
        ]
      },
      "repeatedSubstring": {
        "name": "Pattern 90: String - Repeated Substring Pattern Detection",
        "problems": [
          "459. Repeated Substring Pattern"
        ]
      }
    }
  },
  "design": {
    "category": "XV. Design Patterns",
    "patterns": {
      "general": {
        "name": "Pattern 91: Design (General/Specific)",
        "problems": [
          "146. LRU Cache",
          "155. Min Stack",
          "208. Implement Trie (Prefix Tree)",
          "211. Design Add and Search Words Data Structure",
          "225. Implement Stack using Queues",
          "232. Implement Queue using Stacks",
          "251. Flatten 2D Vector",
          "271. Encode and Decode Strings",
          "295. Find Median from Data Stream",
          "341. Flatten Nested List Iterator",
          "346. Moving Average from Data Stream",
          "353. Design Snake Game",
          "359. Logger Rate Limiter",
          "362. Design Hit Counter",
          "379. Design Phone Directory",
          "380. Insert Delete GetRandom O(1)",
          "432. All O`one Data Structure",
          "460. LFU Cache",
          "604. Design Compressed String Iterator",
          "622. Design Circular Queue",
          "641. Design Circular Deque",
          "642. Design Search Autocomplete System",
          "706. Design HashMap",
          "715. Range Module",
          "900. RLE Iterator",
          "981. Time Based Key-Value Store",
          "1146. Snapshot Array",
          "1348. Tweet Counts Per Frequency"
        ]
      }
    }
  }
};