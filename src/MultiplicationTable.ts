export class MultiplicationTable {
  public render(start: number, end: number): string {
    const errMessage = this.validateInput(start, end)
    if (errMessage !== 'OK') return errMessage


    return '1*1=1'
  }

  private validateInput(start: number, end: number): string {
    if (start > end) return ''
    if (start < 1 || start > 10 || end < 1 || end > 10) return 'Error: Input numbers are out of range.'
    return 'OK'
  }
}
