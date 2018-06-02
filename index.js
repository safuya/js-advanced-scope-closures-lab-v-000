function produceDrivingRange(blockRange) {
  return (block1, block2) => {
    const diff = Math.abs(/\d+/.exec(block1)[0] - /\d+/.exec(block2)[0])
    if (diff > blockRange) {
      return `${diff - blockRange} blocks out of range`
    } else {
      return `within range by ${blockRange - diff}`
    }
  }
}

const produceTipCalculator = tip => cost => cost * tip
