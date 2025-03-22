import Alert from 'react-bootstrap/Alert';

function BasicAlert() {
  return (
    <>
      {[
        
        'info',
       
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
         <h1>Benvenuti in EpiBooks!</h1>
        </Alert>
      ))}
    </>
  );
}

export default BasicAlert;