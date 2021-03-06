#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { CdkuserstackStack } from '../lib/cdkuserstack-stack';

const app = new cdk.App();
new CdkuserstackStack(app, 'CdkuserstackStack');

app.synth()
