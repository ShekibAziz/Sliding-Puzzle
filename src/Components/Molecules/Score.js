import React from 'react'
import { Statistic, Card } from 'antd'
import styled from 'styled-components'

export default function Score({ score }) {
  return (
    <Molecule>
      <Card style={{ width: 300 }}>
        <Statistic
          title="Number of Moves"
          value={score}
          precision={0}
          valueStyle={{ color: '#18a007' }}
        />
      </Card>
    </Molecule>
  )
}

const Molecule = styled.div`
  display: flex;
  justify-content: center;
`
