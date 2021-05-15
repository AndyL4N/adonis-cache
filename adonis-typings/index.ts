/*
 * @Kaperskyguru/adonis-cache
 *
 * (c) Solomon Eseme <kaperskyguru@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

declare module '@ioc:Kaperskyguru/Cache' {
	/**
	 * Shape of adonis-cache config.
	 */
	export interface CacheConfig {
		driver: string
	}
}