const htmlFactory = {
    cardFactory: (employee) => {
        return `
        <article class="employee">
            <header class="employee_name">
                <h1>${employee.name}</h1>
            </header>
            <section class="employee_department">
                Works in the ${employee.department.name}.
            </section>
            <section class="employee_computer">
                Currently using a ${employee.computer.name}
            </section>
        </article>            
        `
    }
}
export default htmlFactory