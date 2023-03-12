class Module {
	name: string
	enabled: boolean

	/**
	 * Creates a new module
	 * @param {string} name The identifying name of the module
	 * @param {boolean = true} enabled Whether the module is enabled or not
	 * @returns The module
	 * @example
	 * const feature = new GlobalKill.module('myFeature') // Creating a new module that is enabled.
	 * @example
	 * const feature = new GlobalKill.module('myFeature', false) // Creating a new module that is disabled.
	 */
	constructor(name: string, enabled = true) {
		this.name = name
		this.enabled = enabled

		GlobalKill.modules.push(this)
		return this
	}

	/**
	 * Enables the module
	 * @returns The module
	 * @example
	 * const feature = new GlobalKill.module('myFeature', false) // Creating a new module that is disabled.
	 * feature.enable() // Enabling the module
	 */
	enable(): this {
		this.enabled = true
		return this
	}

	/**
	 * Disables the module
	 * @returns The module
	 * @example
	 * const feature = new GlobalKill.module('myFeature') // Creating a new module that is enabled.
	 * feature.disable() // Disabling the module
	 */
	disable(): this {
		this.enabled = false
		return this
	}

	/**
	 * Removes the module
	 * @returns The new module list
	 * @example
	 * const feature = new GlobalKill.module('myFeature') // Creating a new module that is enabled.
	 * feature.remove() // Removing the module
	 */
	remove(): Module[] {
		return GlobalKill.remove(this.name)
	}
}

class GlobalKill {
	static modules: Module[] = []
	static module: typeof Module = Module

	/**
	 * Resets all modules
	 * @example
	 * globalKill.reset() // Resets all modules
	 */
	static reset(): void {
		this.modules = []
	}

	/**
	 * Removes a module by name
	 * @param {string} name The name of the module to remove
	 * @returns The new module list
	 * @example
	 * GlobalKill.remove('myFeature') // Removes the module with the name 'myFeature'
	 */
	static remove(name: string): Module[] {
		this.modules = this.modules.filter(module => module.name !== name)
		return this.modules
	}

	/**
	 * Gets a module by name
	 * @param {string} name The name of the module to get
	 * @returns The enabled status of the module
	 * @example
	 * GlobalKill.get('myFeature') // Gets the enabled status of the module with the name 'myFeature'
	 */
	static get(name: string): Module | undefined {
		const module = this.modules.find(module => module.name === name)
		return module
	}
}

export { Module, GlobalKill }
