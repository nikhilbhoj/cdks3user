import cdk = require('@aws-cdk/core');
import { SecretValue } from '@aws-cdk/core';
import iam = require('@aws-cdk/aws-iam');

export class CdkuserstackStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    const myusername = 'nikhilbhojdemo'

    const user = new iam.User(this, 'MyUser', { password: SecretValue.plainText('1234'),
    userName: myusername });
    //const group = new iam.Group(this, 'MyGroup');

//    const policy = new iam.Policy(this, 'MyPolicy');

    const policy = new iam.ManagedPolicy(this,'MyS3Policy',
     { managedPolicyName: 'MyS3Policy'});
     policy.addStatements(new iam.PolicyStatement(
       {  effect: iam.Effect.ALLOW,resources: ['arn:aws:s3:::*'], 
       actions: ['s3:GetAccelerateConfiguration',
       's3:GetAccelerateConfiguration',
       's3:GetAccountPublicAccessBlock',
       's3:GetAnalyticsConfiguration',
       's3:GetBucketAcl',
       's3:GetBucketCORS',
       's3:GetBucketLocation',
       's3:GetBucketLogging',
       's3:GetBucketNotification',
       's3:GetBucketPolicy',
        's3:GetBucketPolicyStatus',
        's3:GetBucketPublicAccessBlock',
        's3:GetBucketRequestPayment',
        's3:GetBucketTagging',
        's3:GetBucketVersioning',
        's3:GetBucketWebsite',
        's3:GetEncryptionConfiguration',
        's3:GetInventoryConfiguration',
        's3:GetLifecycleConfiguration',
        's3:GetMetricsConfiguration',
        's3:GetObjectAcl',
        's3:GetObjectTagging',
        's3:GetObjectTorrent',
        's3:GetObjectVersion',
        's3:GetObjectVersionAcl',
        's3:GetObjectVersionForReplication',
        's3:GetObjectVersionTagging',
        's3:GetObjectVersionTorrent',
        's3:GetReplicationConfiguration',
        's3:ListBucket',
        's3:ListBucketByTags',
        's3:ListBucketMultipartUploads',
        's3:ListBucketVersions',
        's3:ListJobs',
        's3:ListMultipartUploadParts',
        's3:ListAllMyBuckets'] }));
    policy.attachToUser(user);
 
  }
}
