/**
 * Intent: Default Welcome Intent
 * Fulfillment: default
 */

module.exports = {

    fulfillment: function (agent) {
    
        agent.add(
            `I could not understand that.`
        )

    }

}
