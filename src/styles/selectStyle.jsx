// import ReactSelect from "react-select"
// import styled from 'styled-components'


// const Select = styled(ReactSelect)`
//   &.Select--multi {
//     .Select-value {
//       display: inline-flex;
//       align-items: center;
//     }
//   }
//   &.Select--placeholder {
//     font-size: smaller;
//   }
//   &.Select--input {
//     width: 150px;
//     height: 100px;
//   }
// `

// export (props) => <Select multi {...props} />

const dot = (color = '#ccc') => ({
    alignItems: 'center',
    display: 'flex',
  
    ':before': {
      content: '" "',
      display: 'block',
      marginRight: 8,
      height: 20,
      width: 150,
    },
  });
  
export const selectStyle = {
    control: styles => ({ ...styles, backgroundColor: 'white' }),
    input: styles => ({ ...styles, ...dot() }),
  };