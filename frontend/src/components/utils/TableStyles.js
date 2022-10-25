import styled from 'styled-components'

export const Styles = styled.div`
.table {
  border: 1px solid #ddd;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`
// tr {
//   :last-child {
//     .td {
//       border-bottom: 0;
//     }
//   }
// }

// .th,
// .td {
//   padding: 20px;
//   border-bottom: 1px solid #ddd;
//   border-right: 1px solid #ddd;
//   overflow: hidden;
//   display: flex;
//   justify-content : center;
//   text-align: center;

//   :last-child {
//     border-right: 0;
//   }
// }

// &.sticky {
//   overflow: scroll;
//   .header,
//   .footer {
//     position: sticky;
//     z-index: 1;
//     width: fit-content;
//   }

//   .header {
//     top: 0;
//     color: white;
//     background-color : #003180;
//     box-shadow: 0px 3px 3px #ccc;
//   }

//   .footer {
//     bottom: 0;
//     box-shadow: 0px -3px 3px #ccc;
//   }

//   .body {
//     position: relative;
//     z-index: 0;
//   }

//   [data-sticky-td] {
//     position: sticky;
//   }

//   [data-sticky-last-left-td] {
//     box-shadow: 2px 0px 3px #ccc;
//   }

//   [data-sticky-first-right-td] {
//     box-shadow: -2px 0px 3px #ccc;
//   }
// }