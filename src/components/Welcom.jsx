import Alert from 'react-bootstrap/Alert';

function BasicAlert() {
  return (
    <>
      {[
        
        'info',
       
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
         EpikBook!
        </Alert>
      ))}
    </>
  );
}

export default BasicAlert;