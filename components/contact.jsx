import contactInfo from '/data/contact/'
import AvailableCommands from '/components/availableCommands/'

const Contact = () => {
  return (
    <>
      <h4>Contact</h4>
      <br />
      <AvailableCommands />
      <br />
      {Object.entries(contactInfo).map(([key, value]) => (
        <div key={key}>
          <strong>{key}:</strong>{' '}
          {key === 'email' ? (
            <a href={`mailto:${value}`}>{value}</a>
          ) : (
            <a href={value}>{value}</a>
          )}
        </div>
      ))}
    </>
  )
}

export default Contact
