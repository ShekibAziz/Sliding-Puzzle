import React from 'react'
import PuzzleTile from '../Atoms/PuzzleTile'
import styled from 'styled-components'

export default function Puzzle({ puzzleNumbers, handleTileClick }) {
  return (
    <Molecule>
      {puzzleNumbers?.map((row, col) => (
        <Row key={col}>
          {row?.map((tileNum, row) => (
            <PuzzleTile
              onClick={handleTileClick}
              col={row}
              row={col}
              key={tileNum}
              num={tileNum}
            />
          ))}
        </Row>
      ))}
    </Molecule>
  )
}

const Molecule = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Row = styled.div`
  display: flex;
`
