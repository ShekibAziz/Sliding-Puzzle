import React from 'react'
import styled from 'styled-components'

export default function PuzzleTile({ onClick, num, col, row }) {
  return (
    <Atom onClick={() => onClick(num, col, row)} num={num}>
      {num > 0 ? num : ''}
    </Atom>
  )
}

const Atom = styled.span`
  background-color: ${({ num }) => (num === 0 ? '#fff' : '#9393f0')};
  color: ${({ num }) => (num === 0 ? '#fff' : '')};
  display: inline-flex;
  width: 70px;
  height: 70px;
  font-size: 30px;
  justify-content: center;
  align-items: center;
  border: 4px solid white;
`
