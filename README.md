
# Getting started

To get the project set up in your local environment install dependencies:

```bash
npm install
```

# Run the tests

```bash
npm run test -s
```

# Files

- `test/scrabble_test.js`: The tests for the Scrabble logic.
- `index.js`: Implements game logic.
- `dictionary.js`: Helpers to test if words are valid.
- `score.js`: Helpers to calculate score.
- `rules.js`: Helpers to check if tile placements are valid.


# Solution

My solution uses a board(2-d-matrix) to keep track of game state. Helpers are broken into modules by functionality. Based on if the new word is placed along a row, or down a column, *findWordByRow* or *findWordByColumn*  is called to generate a list of valid words for the turn and then the list is used to generate a score.

## findWordByRow
1. Starts at the coordinates of first tile placed
2. While there are tiles to the left, for each tile:
    * Add the letter to the firstPartOfWord string
    * Check if there are tiles above or below
      * If there are tiles above or below, call findWordByColumn
        * If findWordByColumn returns a valid word, add to allWordsForPlay array
3. While there are tiles to the right, for each tile:
    * Add the letter to the lastPartOfWord string
    * Check if there are tiles above or below
      * If there are tiles above or below, call findWordByColumn
          * If findWordByColumn returns a valid word, add to allWordsForPlay array
4. Add firstPartOfWord and lastPartOfWord to get full currentWord
5. If currentWord is in the dictionary add it to the allWordsForPlay array
6. Return allWordsForPlay

findWordByColumn works the same way. It was tempting to combine the functions into one that could be customized, but it unnecessarily increased complexity and decreased readability. findWordByRow is commented and findWordByColumn explicitly defines its variables, making it longer but more intuitive.

This is a fun problem with lots of possible solutions! Another solution I briefly considered was to generate all words from the board on each turn by traversing the board and comparing against a dictionary of words already played this game to determine which new words were generated that turn. I opted against this solution because of it's increased memory usage and quadratic run time. Arguably the board is a set size and only a relatively small number of words can be placed on the board, so it's not necessary to optimize for worst case scenarios with massive input, but I found I was able to organize my code better by functionality with the chosen approach. 

Given more time I'd be keen to improve modularity and organization of the code. Also I'd like to test for additional edge-cases and write more tests.

## playTiles
1. Runs validation function *rules.isFirstMoveValid* if it is the first move
2. Runs validation function *_arePlacementsValid* to make sure pieces are physically placed correctly (placed on board, in an open spot, all in one axis)
3. If *rules.isFirstMoveValid*  and *_arePlacementsValid* are valid, it places the tiles on the board with *_moveTiles* and scores the word by running *_scoreWords* (which calls *findWordByRow* or *findWordByColumn*)
4. If there were no valid words, it runs *_moveTiles* to remove tiles from board
5. Sets score in ScrabbleGame and returns score by running *_setScore*
