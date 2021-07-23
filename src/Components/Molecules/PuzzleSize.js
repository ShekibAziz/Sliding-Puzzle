import React from 'react'
import styled from 'styled-components'
import { Button, InputNumber, Card } from 'antd'
export default function PuzzleSize({ setPuzzleSize }) {
  const [tempPuzzleSize, setTempPuzzleSize] = React.useState(6)

  const handleButtonClick = () => {
    setPuzzleSize(tempPuzzleSize)
  }

  return (
    <Molecule>
      <StyledCard title={'Please specify puzzle size (2-12)'}>
        <Content>
          <InputNumber
            min={2}
            max={12}
            defaultValue={tempPuzzleSize}
            onChange={setTempPuzzleSize}
            value={tempPuzzleSize}
          />
          <Button onClick={handleButtonClick} type={'primary'}>
            Ok
          </Button>
        </Content>
      </StyledCard>
    </Molecule>
  )
}

const Molecule = styled.div`
  display: flex;
  justify-content: center;
`
const StyledCard = styled(Card)`
  width: 400px;
`
const Content = styled.div`
  display: flex;
  justify-content: center;
`
