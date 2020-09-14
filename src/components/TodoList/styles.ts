import { Col, Container as ContainerStyled, Row } from 'styled-bootstrap-grid'
import styled from 'styled-components'

export const Container = styled(ContainerStyled)`
  margin-top: 32px;
`

export const ListRowWrapper = styled(Row)`
  margin: 32px auto;
  max-width: 800px;
`

export const ListItem = styled.div`
  border-radius: 16px;
  cursor: pointer;
  display: flex;
  margin-top: 8px;
  padding: 16px;
  width: 100%;
  transition: background-color ease 0.3s;

  &:hover {
    background-color: ${(props) => `${props.theme.colors.primary}0f`};
  }
`

export const ColCheckboxWrapper = styled(Col)`
  display: flex;
  justify-content: flex-end;
`

export const AddNewButton = styled.button`
  background-color: ${(props) => `${props.theme.colors.primary}94`};
  border-radius: 50px;
  border: none;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  font-size: 32px;
  height: 80px;
  outline: none;
  width: 80px;
  transition: background-color ease 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
`

export const AddNewWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const EmptyList = styled.div`
  text-align: center;
  width: 100%;
`
