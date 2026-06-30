export const SKILL_CARD_MAX_TILT = 7

/** Map pointer position within a card rect to 3D tilt degrees. */
export function skillCardTiltFromPointer(
  clientX: number,
  clientY: number,
  rect: Pick<DOMRect, 'left' | 'top' | 'width' | 'height'>,
  maxTilt = SKILL_CARD_MAX_TILT,
) {
  const x = clientX - rect.left
  const y = clientY - rect.top
  const midX = rect.width / 2
  const midY = rect.height / 2

  return {
    rotateY: ((x - midX) / midX) * maxTilt,
    rotateX: -((y - midY) / midY) * maxTilt,
  }
}

if (import.meta.dev) {
  const rect = { left: 0, top: 0, width: 200, height: 100 }
  const center = skillCardTiltFromPointer(100, 50, rect)
  const corner = skillCardTiltFromPointer(200, 0, rect)
  console.assert(center.rotateX === 0 && center.rotateY === 0, 'skillCardTilt: center')
  console.assert(corner.rotateY > 0 && corner.rotateX > 0, 'skillCardTilt: corner')
}
