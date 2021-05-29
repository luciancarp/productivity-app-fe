import styled from 'styled-components'

const Loading = () => {
  return (
    <Container>
      <AnimationContainer>
        <StyledLoading />
      </AnimationContainer>
    </Container>
  )
}

const StyledLoading = styled.div`
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  border: 16px solid ${(props) => props.theme.background};
  border-radius: 50%;
  border-top: 16px solid ${(props) => props.theme.primary};
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s ease-out infinite; /* Safari */
  animation: spin 2s ease-out infinite;
`

const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const AnimationContainer = styled.div`
  box-shadow: inset 0px 0px 16px 5px ${(props) => props.theme.secondShadow};
  padding: 0;
  border-radius: 50%;
`

export default Loading
