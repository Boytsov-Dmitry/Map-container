import ErrorRepository from "../ErrorRepository";

test("initialization of error list and adding error", () => {
    const errorList = new ErrorRepository()
    errorList.errorsContainer.set("1", "test")

    expect(errorList.errorsContainer.size).toBe(1)
})

test("search of error list by code (without error)", () => {
    const errorList = new ErrorRepository()
    errorList.errorsContainer.set("1", "test")

    const ideal = "test"

    expect(errorList.translate('1')).toBe(ideal)
});

test("search of error list by code (with error)", () => {
    const errorList = new ErrorRepository()
    errorList.errorsContainer.set("1", "test")

    expect(() => errorList.translate('4')).toThrow();
})