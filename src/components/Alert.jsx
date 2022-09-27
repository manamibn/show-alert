function Alert(props) {
  const { allChecked } = props;
  return (
    <div>
      <header>Alert!</header>
      <div style={{ color: "red" }}>
        {allChecked ? "All done" : "You didn't finish your tasks today!"}
      </div>
    </div>
  );
}

export default Alert;
