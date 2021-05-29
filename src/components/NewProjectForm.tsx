import { useState } from 'react'
import styled from 'styled-components'

import { connect, ConnectedProps } from 'react-redux'
import { RootStore } from '../store'
import { createProject } from '../actions/project'

import Input from './Input'
import Button from './Button'

import { spaces } from '../style/global'

const mapStateToProps = (state: RootStore) => ({})
const connector = connect(mapStateToProps, {
  createProject,
})
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & { changeNewProjectMode: (value: boolean) => void }

const NewProjectForm = ({ createProject, changeNewProjectMode }: Props) => {
  const [formData, setFormData] = useState({
    title: '',
  })

  const onChange = (e: React.FormEvent<HTMLInputElement>): void =>
    setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value })

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    createProject(formData)
  }

  return (
    <StyledForm noValidate onSubmit={onSubmit}>
      <Input name='title' onChange={onChange} />

      <Buttons>
        <ButtonContainer>
          <Button type='submit' text='✔️' />
        </ButtonContainer>
        <ButtonContainer>
          <Button text='❌' onClick={() => changeNewProjectMode(false)} />
        </ButtonContainer>
      </Buttons>
    </StyledForm>
  )
}

const StyledForm = styled.form`
  width: 100%;
  margin: 0 0 ${spaces.regular} 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`

const ButtonContainer = styled.div`
  margin: 0 0 0 ${spaces.narrow};
`

export default connector(NewProjectForm)
