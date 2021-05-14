const NameTag = ({ firstName, lastName, style }) => {
  // destructure props
  return (
    <div className="nametag">
      <p style={style}>First Name: {firstName}</p>
      <p style={style}>Last Name: {lastName}</p>
    </div>
  );
};

export default NameTag;

// we added the prop style for our example hoc to work
