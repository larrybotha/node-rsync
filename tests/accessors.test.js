/*global describe,it*/
'use strict';
var Rsync = require('../rsync');
var assert = require('chai').assert;
var assertOutput = require('./helpers/output').assertOutput;


describe('accessors', function () {

    describe('#executable', function () {

      it('should set the executable to use', function () {
        var rsync = Rsync.build({
          'source':      'a.txt',
          'destination': 'b.txt',
          'executable':  '/usr/local/bin/rsync'
        });

        assert.equal('/usr/local/bin/rsync', rsync.executable(), 'executable was set');
        assertOutput(rsync, '/usr/local/bin/rsync a.txt b.txt');
      });

    });

    describe('#executableShell', function () {

      it('should set the the executable shell to use', function () {
        var rsync = Rsync.build({
          'source':           'a.txt',
          'destination':      'b.txt',
          'executableShell':  '/bin/zsh'
        });

        assert.equal('/bin/zsh', rsync.executableShell(), 'executableShell was set');
      });

    });

});
