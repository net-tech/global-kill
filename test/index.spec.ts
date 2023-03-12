import { Module, GlobalKill } from "../src"

describe("GlobalKill", () => {
	beforeEach(() => {
		GlobalKill.reset()
	})

	describe("Module", () => {
		it("should create a new module with the given name and enabled status", () => {
			const moduleName = "testModule"
			const module = new Module(moduleName, true)
			expect(module.name).toBe(moduleName)
			expect(module.enabled).toBe(true)
		})

		it("should create a new module with enabled status true if not specified", () => {
			const moduleName = "testModule"
			const module = new Module(moduleName)
			expect(module.name).toBe(moduleName)
			expect(module.enabled).toBe(true)
		})

		it("should enable and disable the module", () => {
			const moduleName = "testModule"
			const module = new Module(moduleName, false)
			expect(module.enabled).toBe(false)
			module.enable()
			expect(module.enabled).toBe(true)
			module.disable()
			expect(module.enabled).toBe(false)
		})

		it("should remove the module from the list", () => {
			const moduleName = "testModule"
			const module = new Module(moduleName)
			expect(GlobalKill.modules).toHaveLength(1)
			module.remove()
			expect(GlobalKill.modules).toHaveLength(0)
		})
	})

	describe("GlobalKill", () => {
		it("should reset all modules", () => {
			new Module("testModule1")
			new Module("testModule2")
			expect(GlobalKill.modules).toHaveLength(2)
			GlobalKill.reset()
			expect(GlobalKill.modules).toHaveLength(0)
		})

		it("should remove the module with the given name from the list", () => {
			new Module("testModule1")
			new Module("testModule2")
			expect(GlobalKill.modules).toHaveLength(2)
			GlobalKill.remove("testModule1")
			expect(GlobalKill.modules).toHaveLength(1)
			expect(GlobalKill.modules[0].name).toBe("testModule2")
		})

		test("returns the module with the given name", () => {
			const moduleName = "myFeature"
			new Module(moduleName)
			const module = GlobalKill.get(moduleName)
			expect(module?.name).toBe(moduleName)
		})

		test("returns undefined if the module name is not found", () => {
			const moduleName = "invalidModuleName"
			const module = GlobalKill.get(moduleName)
			expect(module).toBeUndefined()
		})
	})
})
