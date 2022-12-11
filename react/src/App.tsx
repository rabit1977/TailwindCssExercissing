import Form from './Form';

let statuses = ['empty', 'typing', 'submitting', 'success', 'error'];

export default function App() {
  return (
    <>
      {statuses.map((status) => (
        <section
          style={{
            width: '40%',
            margin: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          key={status}
        >
          <h4>Form ({status}):</h4>
          <Form status={status} />
        </section>
      ))}
    </>
  );
}
