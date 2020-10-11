/*
import React from 'react';
import ReactDOM from 'react-router-dom';
import { Autocomplete } from 'evergreen-ui'




//https://evergreen.segment.com/components/autocomplete/
const CompleteForm: React.FC = ( ) =>{
    return(

<Autocomplete
  title="Fruits"
  onChange={(changedItem) => console.log(changedItem)}
  items={['Apple', 'Apricot', 'Banana', 'Cherry', 'Cucumber']}
>
  {(props) => {
    const { getInputProps, getRef, inputValue } = props
    return (
      <TextInput
        placeholder="Fruits"
        value={inputValue}
        ref={getRef}
        {...getInputProps()}
      />
    )
  }}
</Autocomplete>
    )
}


export default CompleteForm();




*/


/*
<Autocomplete
  title="Custom title"
  onChange={changedItem => console.log(changedItem)}
  items={['Apple', 'Apricot', 'Banana', 'Cherry', 'Cucumber']}
>
  {({
    key,
    getInputProps,
    getToggleButtonProps,
    getRef,
    inputValue,
    openMenu,
    toggleMenu
  }) => (
    <Pane
      key={key}
      ref={getRef}
      display="flex"
    >
      <TextInput
        flex="1"
        placeholder="Many Options!"
        value={inputValue}
        onFocus={openMenu}
        {...getInputProps()}
      />
      <Button onClick={toggleMenu} {...getToggleButtonProps()}>
        Trigger
      </Button>
    </Pane>
  )}
</Autocomplete>
*/