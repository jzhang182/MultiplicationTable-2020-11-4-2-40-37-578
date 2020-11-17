export class MultiplicationTable {
  public render(start: number, end: number): string {
    const errMessage = this.validateInput(start, end)
    if (errMessage !== 'OK') return errMessage

    const expressions = this.generateExpressions(start, end)
    const table = this.generateTable(expressions)

    return table
  }

  private validateInput(start: number, end: number): string {
    if (start > end) return ''
    if (start < 1 || start > 10 || end < 1 || end > 10) return 'Error: Input numbers are out of range.'
    return 'OK'
  }

  private generateExpressions(start: number, end: number): Expression[][] {
    const expressions: Expression[][] = []
    for (let i = 0; i <= end - start; i++) {
      // expressions.push([])
      expressions[i] = []
      for (let j = 0; j <= i; j++) {
        const expression: Expression = {
          firstFactor: start + j,
          secondFactor: start + i,
          product: (start + i) * (start + j)
        }
        expressions[i].push(expression)
      }
    }
    return expressions
  }

  private generateTable(expressions: Expression[][]): string {
    let ret = ''
    const indices: number[] = []
    indices.push(0)
    for (let i = expressions.length - 1; i >= 0; i--) {
      let currentRow = ''
      for (let j = 0; j <= i; j++) {
        currentRow += `${expressions[i][j].firstFactor}*${expressions[i][j].secondFactor}=${expressions[i][j].product}`
        if (i === expressions.length - 1) {
          indices.push(currentRow.length)
        }
        else {
          if (currentRow.length !== indices[j + 1] && j !== i) currentRow += ' '
        }
        (j === i && j !== expressions.length - 1) ? currentRow += '\n' : currentRow += '  '
      }
      ret = currentRow + ret
    }
    // const ret = expressions.map(row => row
    //   .map(({ firstFactor, secondFactor, product }) => `${firstFactor}*${secondFactor}=${product}`)
    //   .join('  '))
    //   .join('\n')
    return ret.trimEnd()
  }
}

interface Expression {
  firstFactor: number,
  secondFactor: number,
  product: number
}
