function ExpenseList({ expenses }) {

  return (
    <div>
      <h2>Expenses</h2>

      {expenses.map((exp, index) => (
        <div key={index}>
          <p>{exp.category} - ₹{exp.amount}</p>
          <p>{exp.description}</p>
          <p>{exp.date}</p>
        </div>
      ))}

    </div>
  );
}

export default ExpenseList;