import React from 'react'
import { Modal } from 'antd'
export default function GameOver({
  score,
  gameOver,
  setGameOver,
  setScore,
  setPuzzleSize,
}) {
  const handleOk = () => {
    setScore(0)
    setPuzzleSize(null)
    setGameOver(false)
  }

  return (
    <Modal
      title="You Won!"
      visible={gameOver}
      onCancel={() => setGameOver(false)}
      onOk={handleOk}
    >
      <p>It took you {score} moves to finish the game.</p>
      <p>Would you like to play another game?</p>
    </Modal>
  )
}
