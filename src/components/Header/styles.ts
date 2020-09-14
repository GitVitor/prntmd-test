import styled from 'styled-components'
import { Container as ContainerBootstrap } from 'styled-bootstrap-grid'

export const RowDate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  * {
    text-transform: uppercase;
  }
`

export const DateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  text-transform: uppercase;
`

export const Day = styled.div`
  font-size: 24px;
  font-weight: bold;
`

export const MonthYear = styled.div`
  font-size: 12px;
  margin-left: 8px;
`

export const Container = styled(ContainerBootstrap)`
  margin-top: 16px;
  padding: 16px;
  border-bottom: 1px solid ${(props) => props.theme.colors.secondary};
`
