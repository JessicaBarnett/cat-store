/*
    Small utility functions for conversions, etc
*/

export const slugify = (str: string, delimeter = '-') => {
   return str.toLowerCase().trim().replace(/\s+/g, delimeter);
}