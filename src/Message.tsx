function Message() {
  const name = "William";
  let count = 0;

  if (name) {
    count++;
    return (
      <>
        <h1>{name}</h1>
        <h2>Count: {count}</h2>
      </>
    );
  }
  return (
    <>
      <h1>Hello No-Name</h1>
      <h2>Count: {count}</h2>
    </>
  );
}

export default Message;
