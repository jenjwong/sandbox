
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

My solution uses a board(2-d-matrix) to keep track of game state. Helpers are broken into modules by functionality. The *rules module* handles validation of pieces based on physical location on the board. The *words module* handles validation reliant on words. The *score module* handles calculating points for tiles. 

The most challenging problem was scoring multiple words; this was handled with *findWordByRow* and *findWordByColumn*. Depending on if the new word is placed along a row, or down a column, *findWordByRow* or *findWordByColumn*  is called to generate a list of valid words for the turn. findWordByRow/findWordByColumn traverses the main axis and builds up a string of the current word, it also checks to see if there are any tiles adjacent to tiles placed during that turn. If there are adjacent tiles, the function traverses the cross-axis to see if its a valid word.

## findWordByRow Speudocode
1. Starts at the coordinates of first tile placed
2. While there are tiles to the left, for each tile:
    * Add the letter to the firstPartOfWord string
    * If the tile was placed this turn, check if there are tiles above or below
      * If there are tiles above or below and you are traversing the first word, call findWordByColumn
        * If findWordByColumn returns a valid word, add to allWordsForTurn array
3. While there are tiles to the right, for each tile:
    * Add the letter to the lastPartOfWord string
    * If the tile was placed this turn, check if there are tiles above or below
      * If there are tiles above or below and you are traversing the first word, call findWordByColumn
          * If findWordByColumn returns a valid word, add to allWordsForPlay array
4. Add firstPartOfWord and lastPartOfWord to get currentWord
5. If currentWord is in the dictionary add it to the allWordsForTurn array
6. Return allWordsForTurn

findWordByColumn works the same way. It was tempting to combine the functions into one that could be customized and called recursively, but it unnecessarily increased complexity and decreased readability. findWordByRow is commented and findWordByColumn explicitly defines its variables, making it longer but more intuitive.

This is a fun problem with lots of possible solutions! Another solution I briefly considered was to generate all words on each turn by traversing the board and comparing against a dictionary of words already played this game to determine which words were newly generated. Although I think it would be easier to code this solution, I opted against it because of its increased memory usage and quadratic run time. Arguably the board is a set size and only a relatively small number of words can be placed on the board, so it's not necessary to optimize for worst case scenarios with massive input, but my chosen approach lent itself more to logical seperation of functionality.

Given more time I'd be keen to improve modularity and organization of the code. Also I'd like to write more tests for additional edge-cases.

Tests call *playTiles* which coordinates all of the other functions used to generate the score.

## playTiles
1. Runs validation function *_arePlacementsValid* to make sure pieces are physically placed correctly (placed on board, in an open spot, all in one axis, first move is valid)
3. If *_arePlacementsValid* are valid, it places the tiles on the board with *_moveTiles* and scores the word by running *_scoreWords* (which calls *findWordByRow* or *findWordByColumn*)
4. If there were no valid words, it runs *_moveTiles* to remove tiles from board
5. Sets score in ScrabbleGame and returns score by running *_setScore*
