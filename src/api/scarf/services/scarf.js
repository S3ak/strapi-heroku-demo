'use strict';

/**
 * scarf service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::scarf.scarf');
