export class RandomNumberGenerator {
    public static getRandomNumber(): number {
        return Math.floor(Math.random() * (999999 - 100000)) + 100000;
        // const control = <FormArray>this.myFormdata.controls['inputs'];
        // const random = this._fb.group({numbers: +quickpicked, pari: 25});
        // control.setControl(i, random)
    
    
      }
}
