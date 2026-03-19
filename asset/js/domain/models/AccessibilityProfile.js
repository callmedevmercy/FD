export class AccessibilityProfile {
  constructor({ mobility, visual, hearing, serviceAnimal }) {
    this.mobility = mobility || []; // Array of strings, e.g., ["wheelchair"]
    this.visual = visual || [];     // e.g., ["braille"]
    this.hearing = hearing || [];   // e.g., ["captions"]
    this.serviceAnimal = !!serviceAnimal;
  }
}
