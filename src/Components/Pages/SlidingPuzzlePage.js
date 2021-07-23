import React from 'react'
import PuzzleSize from '../Molecules/PuzzleSize'
import Puzzle from '../Molecules/Puzzle'
import Score from '../Molecules/Score'
import GameOver from '../Molecules/GameOver'
import styled from 'styled-components'

export default function SlidingPuzzlePage() {
  const [score, setScore] = React.useState(0)
  const [puzzleSize, setPuzzleSize] = React.useState()
  const [puzzleNumbers, setPuzzleNumbers] = React.useState()
  const [gameOver, setGameOver] = React.useState(false)

  function getRandomInt(max) {
    const min = 0
    return Math.floor(Math.random() * (max - min) + min) //The maximum is exclusive and the minimum is inclusive
  }

  const createRandomPuzzle = () => {
    const maxNumber = puzzleSize * puzzleSize
    const allPossibleNumbers = [...Array(maxNumber).keys()].slice(1)
    const arr2D = []
    let row = []

    while (allPossibleNumbers.length) {
      const randomInt = getRandomInt(allPossibleNumbers.length)
      row.push(allPossibleNumbers[randomInt])
      allPossibleNumbers.splice(randomInt, 1)

      if (row.length === puzzleSize || allPossibleNumbers.length === 0) {
        arr2D.push([...row])
        row = []
      }
    }
    arr2D[arr2D.length - 1].push(0)
    return arr2D
  }

  const gameOverFn = (puzzleNumbers) => {
    const flatPuzzleNumbers = puzzleNumbers.flat()
    //if the empty tile is not at the end
    if (flatPuzzleNumbers[flatPuzzleNumbers.length - 1] !== 0) return

    //remove the empty tile
    flatPuzzleNumbers.pop()

    //make sure every number is bigger than the previous one
    const gameIsDone = flatPuzzleNumbers.every(
      (curr, i, arr) => !i || arr[i - 1] <= curr
    )

    if (!gameIsDone) return
    setGameOver(true)
  }

  //swap 2 positions on the board
  const swap = (col1, row1, col2, row2) => {
    setScore(score + 1)
    const newPuzzleNumbers = puzzleNumbers.map((row) => row.slice())
    const value1 = puzzleNumbers[row1][col1]
    const value2 = puzzleNumbers[row2][col2]
    newPuzzleNumbers[row1][col1] = value2
    newPuzzleNumbers[row2][col2] = value1
    setPuzzleNumbers(newPuzzleNumbers)

    gameOverFn(newPuzzleNumbers)
  }

  //check if the currently clicked tile is allowed to move.
  //if so move it to the space of the white tile.
  const handleTileClick = (tileVal, col, row) => {
    if (tileVal === 0) {
      return
    }
    //above
    if (col - 1 > -1 && puzzleNumbers[row][col - 1] === 0) {
      swap(col, row, col - 1, row)
    }
    //below
    if (row + 1 < puzzleSize && puzzleNumbers[row + 1][col] === 0) {
      swap(col, row, col, row + 1)
    }
    //left
    if (row - 1 > -1 && puzzleNumbers[row - 1][col] === 0) {
      swap(col, row, col, row - 1)
    }
    //right
    if (col + 1 < puzzleSize && puzzleNumbers[row][col + 1] === 0) {
      swap(col, row, col + 1, row)
    }
  }

  React.useEffect(() => {
    if (puzzleSize) {
      const newPuzzleNumbers = createRandomPuzzle()
      setPuzzleNumbers(newPuzzleNumbers)
      gameOverFn(newPuzzleNumbers)
    }
  }, [puzzleSize])

  return (
    <Page>
      {!puzzleSize && <PuzzleSize setPuzzleSize={setPuzzleSize} />}
      {puzzleSize && (
        <>
          <Score score={score} />
          <Puzzle
            puzzleNumbers={puzzleNumbers}
            handleTileClick={handleTileClick}
          />
          <GameOver
            setScore={setScore}
            setPuzzleSize={setPuzzleSize}
            setGameOver={setGameOver}
            gameOver={gameOver}
            score={score}
          />
        </>
      )}
    </Page>
  )
}

const Page = styled.div`
  margin: 30px;
`
