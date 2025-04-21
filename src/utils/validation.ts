export function isValidYear(year: string): boolean {
    return /^\d{4}$/.test(year);
  }
  
  export function isNumericId(id: string): boolean {
    return /^\d+$/.test(id);
  }
  