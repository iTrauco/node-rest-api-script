import axios from "axios";
import ora from "ora";

const getEmployees = async () => {
  const { data } = await axios(
    "http://dummy.restapiexample.com/api/v1/employees"
  );
  return data;
};

const findEmployeeByName = (employees, name) => {
  return employees.find(({ employee_name }, index) => {
    return employee_name.trim() === name;
  });
};

const deleteEmployee = async id => {
  await axios.delete(`http://dummy.restapiexample.com/api/v1/delete/${id}`);
};

export const manageEmployees = async employeeName => {
  const spinner = ora("Getting employees").start();
  try {
    const employees = await getEmployees();
    spinner.text = "Finding empoyee ID";
    const employee = findEmployeeByName(employees, employeeName);

    if (!employee) {
      spinner.warn(`User not found`)
      return;
    }

    spinner.text = "Deleting employee";
    await deleteEmployee(employee.id);
    spinner.succeed(
      `Successfully removed ${employee.employee_name} with ID = ${
        employee.id
      } from record`
    );
  } catch (error) {
    spinner.fail("Failed to delete employee");
    console.log(error.message);
  }
};
