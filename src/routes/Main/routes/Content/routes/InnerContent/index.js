/**
 *
 * @authors Your Name (you@example.org)
 * @date    2017-08-16 14:27:38
 * @version $Id$
 */
module.exports = {
	path: ':mId',
	getComponent(nextState, cb) {
		require.ensure([], (require) => {
			cb(null, require('./components/InnerContent').default)
		}, "inner")
	}
}
