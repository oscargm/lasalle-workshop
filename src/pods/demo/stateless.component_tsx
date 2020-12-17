import * as React from 'react';

export const StatelessComponent = () => {
  const handleClick = (event) => {
    console.log('handleClick', event);
  };
  return (
    <div>
      <h4>Stateless component</h4>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
};

interface StateLessComponentProps {
  title: string;
  buttonText: string;
}
export const StateLessComponentWithProps = (props: StateLessComponentProps) => {
  const { title, buttonText } = props;

  const handleClick = (event) => {
    console.log('handleClick', event);
  };
  return (
    <div>
      <h4>{title}</h4>
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
};

interface StateFullComponentProps {
  title: string;
}
export const StateFullComponentWithProps = (props: StateFullComponentProps) => {
  const { title } = props;

  const [buttonText, setButtonText] = React.useState<string>('Click me!');
  const [buttonDisabled, setButtonDisabled] = React.useState<boolean>(false);

  const handleClick = (event) => {
    console.log('handleClick', event);
    setButtonText("you've already clicked me");
    setButtonDisabled(true);
  };
  return (
    <div>
      <h4>{title}</h4>
      <button onClick={handleClick} disabled={buttonDisabled}>
        {buttonText}
      </button>
    </div>
  );
};
