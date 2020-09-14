export type BreakpointKeys = 'xs' | 'sm' | 'md' | 'lg'

export const breakpoints: Record<BreakpointKeys, string> = {
  xs: '480px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
}

// import { breakpoints } from '../styles/variables'
// function mediaUpBreakpoint(size: any) {
//   return `@media(min-width: ${size})`
// }

//   ${mediaUpBreakpoint(breakpoints.md)} {
//     height: 600px;
//   }