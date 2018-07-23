import styled from 'styled-components'

export const SearchResults = styled.div`
    position: absolute;
    display: block;
    height: 100px;
    width: 200px;
    margin: 0 auto;
    margin-top: -10px;
    z-index: 25;
    overflow: hidden;
    border: 1px solid #bdbaba;
    border-radius: 3px;
    background-color: white;
    font-size: 10px;
    text-align: center;
    & > ul {
      height: 100px;
      width: 200px;
      padding-left: 0;
      margin: 0 auto;
      overflow-y: auto;
      list-style-type: none;
    }
    & > ul > li {
      height: 20px;
      width: 200px;
      padding-top: 10px;
      padding-bottom: 10px;
      margin: 0 auto;
      border-bottom: 1px solid #bdbaba;
      cursor: pointer;
      text-decoration: none;
      color: #505050;
    }
    & ::-webkit-scrollbar { 
      display: none; 
    }
`

export const WrapperDiv = styled.div`
  font-family: Open Sans;
  color: black;
  font-weight: 500;
`

export const Field = styled.div` 
  font-family: Open Sans;
  color: black;
  font-weight: 500;
`
export const Select = styled.select` 
  width: 200px;
  margin: 10px 0;
  padding: 5px;
  color: #505050;
  cursor: pointer;
`

export const CenteredForm = styled.form`
   margin: 0 auto;
   margin-top: 20px;
   margin-bottom: 10px;
   padding: 20px 60px;
   border: 1px solid #bdbaba; 
   border-radius: 5px;
`