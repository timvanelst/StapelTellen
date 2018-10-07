import { StapelTellen } from "./stapel-tellen";

describe('StapelTellen', () => {

    it('12 should return 3', () => {
        let fixture = new StapelTellen();
        let actual = fixture.calculate('12');
        expect(actual).toBe('3');
    });

    it('123 should return 6', () => {
        let fixture = new StapelTellen();
        let actual = fixture.calculate('123');
        expect(actual).toBe('6');
    });

    it('3754296418 should return 4', () => {
        let fixture = new StapelTellen();
        let actual = fixture.calculate('3754296418');
        expect(actual).toBe('4');
    });
});