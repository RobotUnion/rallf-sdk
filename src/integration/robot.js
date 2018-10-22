'use strict';

const dotProp = require('dot-prop');

const dataSymbol = Symbol('_data');
const permissionsSymbol = Symbol('_permissions');

const fs = require('fs-extra');
const path = require('path');

class Robot {
  constructor(cwd) {
    this._cwd = path.resolve(cwd) || null;
  }

  /**
   * Save a JSON object to a file
   * @param {string} filepath 
   * @param {object} data 
   */
  saveJSON(filepath, data) {
    if (!fs.existsSync(this._cwd)) {
      throw new Error('Oopsy, the robot cwd does not exist: ' + this._cwd);
    }

    filepath = path.join(this._cwd, filepath);
    fs.writeJsonSync(filepath, data);
  }

  saveFile(filepath, buffer) {

  }

  /**
   * Read JSON from file
   * @param {string} filepath
   * @return {object} 
  */
  readJSON(filepath) {
    if (!fs.existsSync(this._cwd)) {
      throw new Error('Oopsy, the robot cwd does not exist: ' + this._cwd);
    }

    filepath = path.join(this._cwd, filepath);
    return fs.readJsonSync(filepath);
  }

  /**
   * Check if a file or directory exists synchronously
   * @param {string} filepath 
   * @return {boolean}
   */
  existsSync(filepath) {
    filepath = path.join(this._cwd, filepath);
    return fs.existsSync(filepath);
  }

  /**
   * Check if a file or directory exists asynchronously
   * @param {string} filepath 
   * @param {function (boolean)} callback
   * @return {void}
   */
  exists(filepath, callback) {
    filepath = path.join(this._cwd, filepath);
    fs.exists(filepath, callback);
  }


  /**
   * Delegate a task locally
   * @param {string} task_identifier         - can be the name or the id 
   * @param {*} method                       - method to run
   * @param {*} data                         - data to send to method
   * @param {Object} options                 - Additional options
   * @param {boolean} options.auto_terminate - if task should be terminated on delegateFinish
   * @returns {Promise<any>}
   */
  delegateLocal(task_identifier, method, data, options) {
    return Promise.reject('Oopsy, it seems like delegate is not setup for this task');
  }


  /**
   * Delegate a task in other incubator
   * @param {string} task_identifier         - can be the name or the id 
   * @param {*} method                       - method to run
   * @param {*} data                         - data to send to method
   * @param {Object} options                 - Additional options
   * @param {boolean} options.auto_terminate - if task should be terminated on delegateFinish
   * @returns {Promise<any>}
   */
  delegateExternal(task_identifier, method, data, options) {
    return Promise.reject('Oopsy, it seems like delegate is not setup for this task');
  }
}

module.exports = Robot;

