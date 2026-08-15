/**
 * ESSENCE INDONESIA — CENTRAL DATA REGISTRY
 * Re-exports all structured data domains for modular frontend consumption.
 */

// Brand
export * from './brand/identity.js';
export * from './brand/philosophy.js';
export * from './brand/navigation.js';

// Vanilla Vertical (Authoritative Baseline from PDF Catalog)
export * from './vanilla/overview.js';
export * from './vanilla/specifications.js';
export * from './vanilla/craft.js';
export * from './vanilla/applications.js';
export * from './vanilla/sensory.js';

// Coffee Vertical (Schema-Only Mockup Product)
export * from './coffee/overview.js';
export * from './coffee/specifications.js';
export * from './coffee/processing.js';
export * from './coffee/applications.js';

// Quality & Sourcing
export * from './quality/qualityFramework.js';
export * from './sourcing/sourcingFramework.js';
