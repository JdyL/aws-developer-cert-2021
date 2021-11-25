// Next todo is: https://www.examtopics.com/exams/amazon/aws-certified-developer-associate/view/22/

export const data = [
  {
    question:
      "When launching containers in Amazon ECS, where may PortMapping be defined?",
    choices: [
      "A. Security groups",
      "B. Amazon Elastic Container Registry (Amazon ECR)",
      "C. Container agent",
      "D. Task definition",
    ],
    answer: ["D. Task definition"],
  },
  {
    question:
      "How should access keys be handled in AWS according to best practices? (Select two.)",
    choices: [
      "A. Use the same access key in all applications for consistency.",
      "B. Delete all access keys for the account root user.",
      "C. Leave unused access keys in the account for tracking purposes.",
      "D. Embed and encrypt access keys in code for continuous deployment.",
      "E. Use Amazon IAM roles instead of access keys where possible.",
    ],
    answer: [
      "B. Delete all access keys for the account root user.",
      "E. Use Amazon IAM roles instead of access keys where possible.",
    ],
  },
  {
    question:
      "What is the run order of the hooks for in-place deployments in an AWS CodeDeploy deployment?",
    choices: [
      "A. Before Install -> Application Stop -> Application Start -> After Install",
      "B. Application Stop -> Before Install -> After Install -> Application Start",
      "C. Before Install -> Application Stop -> Validate Service -> Application Start",
      "D. Application Stop -> Before Install -> Validate Service -> Application Start",
    ],
    answer: [
      "B. Application Stop -> Before Install -> After Install -> Application Start",
    ],
  },
  {
    question:
      "Data is read from an Amazon DynamoDB database by an application. The program gets several ProvisionedThroughputExceeded errors many times a day for a duration of 15 seconds.\n\nWhat should be done with this exception?",
    choices: [
      "A. Create a new global secondary index for the table to help with the additional requests.",
      "B. Retry the failed read requests with exponential backoff.",
      "C. Immediately retry the failed read requests.",
      "D. Use the DynamoDB ג€UpdateItemג€ API to increase the provisioned throughput capacity of the table.",
    ],
    answer: ["B. Retry the failed read requests with exponential backoff."],
  },
  {
    question:
      "What section of the document root must be included in an AWS CloudFormation template to include objects specified by the AWS Serverless Application Model (SAM) in addition to Resources?",
    choices: ["A. Conditions", "B. Globals", "C. Transform", "D. Properties"],
    answer: ["C. Transform"],
  },

  {
    question:
      "A developer recognizes the need for centralized storage of application-level logs while designing an application that runs on Amazon EC2 in an Amazon VPC.\n\nWhich AWS service can be utilized to store these logs securely?",
    choices: [
      "A. Amazon EC2 VPC Flow Logs",
      "B. Amazon CloudWatch Logs",
      "C. Amazon CloudSearch",
      "D. AWS CloudTrail",
    ],
    answer: ["B. Amazon CloudWatch Logs"],
  },
  {
    question:
      "What are the requirements for configuring container instances in an AWS Elastic Beanstalk multi-container Docker environment?",
    choices: [
      "A. An Amazon ECS task definition",
      "B. An Amazon ECS cluster",
      "C. A Dockerfile in an application package",
      "D. A CLI for Elastic Beanstalk",
    ],
    answer: ["A. An Amazon ECS task definition"],
  },
  {
    question:
      "A developer must install a serverless RESTful API on AWS regularly and consistently.\n\nWhich strategies will be effective? (Select two.)",
    choices: [
      "A. Define a Swagger file. Use AWS Elastic Beanstalk to deploy the Swagger file.",
      "B. Define a Swagger file. Use AWS CodeDeploy to deploy the Swagger file.",
      "C. Deploy a SAM template with an inline Swagger definition.",
      "D. Define a Swagger file. Deploy a SAM template that references the Swagger file.",
      "E. Define an inline Swagger definition in a Lambda function. Invoke the Lambda function.",
    ],
    answer: [
      "C. Deploy a SAM template with an inline Swagger definition.",
      "D. Define a Swagger file. Deploy a SAM template that references the Swagger file.",
    ],
  },
  {
    question:
      "Amazon Kinesis is used to load data into a stock market monitoring application. The Kinesis stream cannot keep up with the incoming data during simulated peak data rates testing.\n\nWhat step will enable Kinesis to handle peak-hour traffic?",
    choices: [
      "A. Install the Kinesis Producer Library (KPL) for ingesting data into the stream.",
      "B. Reduce the data retention period to allow for more data ingestion using DecreaseStreamRetentionPeriod.",
      "C. Increase the shard count of the stream using UpdateShardCount.",
      "D. Ingest multiple records into the stream in a single call using PutRecords.",
    ],
    answer: [
      "C. Increase the shard count of the stream using UpdateShardCount.",
    ],
  },
  {
    question:
      "AWS services must be accessed and API calls must be made by an application running on an Amazon EC2 instance.\nWhat is the SAFEST approach to grant access to AWS services with the least amount of administration overhead?",
    choices: [
      "A. Use AWS KMS to store and retrieve credentials.",
      "B. Use EC2 instance profiles.",
      "C. Use AWS root user to make requests to the application.",
      "D. Store and retrieve credentials from AWS CodeCommit.",
    ],
    answer: ["B. Use EC2 instance profiles."],
  },

  {
    question:
      "With production-distributed applications created as AWS Lambda functions, a developer must investigate performance issues. Other components of the applications are invoked by these distributed Lambda applications.\nWhat is the best way for a developer to discover and resolve the root cause of production performance issues?",
    choices: [
      "A. Add logging statements to the Lambda functions, then use Amazon CloudWatch to view the logs.",
      "B. Use AWS CloudTrail and then examine the logs.",
      "C. Use AWS X-Ray, then examine the segments and errors.",
      "D. Run Amazon Inspector agents and then analyze performance.",
    ],
    answer: ["C. Use AWS X-Ray, then examine the segments and errors."],
  },
  {
    question:
      "What is the advantage of instantiating AWS clients outside the scope of the handler when constructing a Lambda function?",
    choices: [
      "A. Legibility and stylistic convention",
      "B. Taking advantage of connection re-use",
      "C. Better error handling",
      "D. Creating a new instance per invocation",
    ],
    answer: ["B. Taking advantage of connection re-use"],
  },
  {
    question:
      "Thousands of sensitive audio and video data must be stored in an Amazon S3 bucket. All data written to this bucket must be encrypted according to organizational security rules.\n\nHow can this policy's compliance be ensured?",
    choices: [
      "A. Use AWS Lambda to send notifications to the security team if unencrypted objects are pun in the bucket.",
      "B. Configure an Amazon S3 bucket policy to prevent the upload of objects that do not contain the x-amz-server-side-encryption header.",
      "C. Create an Amazon CloudWatch event rule to verify that all objects stored in the Amazon S3 bucket are encrypted.",
      "D. Configure an Amazon S3 bucket policy to prevent the upload of objects that contain the x-amz-server-side-encryption header.",
    ],
    answer: [
      "B. Configure an Amazon S3 bucket policy to prevent the upload of objects that do not contain the x-amz-server-side-encryption header.",
    ],
  },
  {
    question:
      "Before code is released into the production environment, the release process workflow of an application needs human review.\n\nWhat is the MOST EFFECTIVE method to do this using AWS CodePipeline?",
    choices: [
      "A. Use multiple pipelines to allow approval",
      "B. Use an approval action in a stage",
      "C. Disable the stage transition to allow manual approval",
      "D. Disable a stage just prior the deployment stage",
    ],
    answer: ["B. Use an approval action in a stage"],
  },
  {
    question:
      "When attempting to start or stop an Amazon EC2 instance using a boto3 script, the developer gets the following error message.\n\n\nWhat is the developer's responsibility in resolving this error message?",
    choices: [
      "A. Assign an IAM role to the EC2 instance to allow necessary API calls on behalf of the client.",
      "B. Implement an exponential backoff algorithm for optimizing the number of API requests made to Amazon EC2.",
      "C. Increase the overall network bandwidth to handle higher API request rates.",
      "D. Upgrade to the latest AWS CLI version so that boto3 can handle higher request rates.",
    ],
    answer: [
      "B. Implement an exponential backoff algorithm for optimizing the number of API requests made to Amazon EC2.",
    ],
  },

  {
    question:
      "On an EC2 instance, an application is executing. The developer wishes to keep a statistic about his program in Amazon CloudWatch.\n\nHow should this requirement be implemented optimally?",
    choices: [
      "A. Use the PUT Object API call to send data to an S3 bucket. Use an event notification to invoke a Lambda function to publish data to CloudWatch.",
      "B. Publish the metric data to an Amazon Kinesis Stream using a PutRecord API call. Subscribe a Lambda function that publishes data to CloudWatch.",
      "C. Use the CloudWatch PutMetricData API call to submit a custom metric to CloudWatch. Provide the required credentials to enable the API call.",
      "D. Use the CloudWatch PutMetricData API call to submit a custom metric to CloudWatch. Launch the EC2 instance with the required IAM role to enable the API call.",
    ],
    answer: [
      "D. Use the CloudWatch PutMetricData API call to submit a custom metric to CloudWatch. Launch the EC2 instance with the required IAM role to enable the API call.",
    ],
  },
  {
    question:
      "What are the best practices for using bespoke libraries in AWS Lambda?",
    choices: [
      "A. Host the library on Amazon S3 and reference to it from the Lambda function.",
      "B. Install the library locally and upload a ZIP file of the Lambda function.",
      "C. Import the necessary Lambda blueprint when creating the function.",
      "D. Modify the function runtime to include the necessary library.",
    ],
    answer: [
      "D. Modify the function runtime to include the necessary library.",
    ],
  },
  {
    question:
      "Amazon DynamoDB is used by a corporation to manage and track orders. The order date is used to split the DynamoDB table. During a sales event, the company receives a large spike in orders, forcing DynamoDB writes to choke, and the used throughput is considerably lower than the permitted throughput.\nHow can this issue be rectified with MINIMAL expenses, according to AWS best practices?",
    choices: [
      "A. Create a new DynamoDB table for every order date.",
      "B. Increase the read and write capacity units of the DynamoDB table.",
      "C. Add a random number suffix to the partition key values.",
      "D. Add a global secondary index to the DynamoDB table.",
    ],
    answer: ["C. Add a random number suffix to the partition key values."],
  },
  {
    question:
      "An Amazon S3 bucket is used to host a static website. JavaScript is used on many HTML pages on the site to retrieve photos from another Amazon S3 bucket. When people explore the site, certain photos are not shown.\n\nWhat may be the underlying source of the problem?",
    choices: [
      "A. The referenced Amazon S3 bucket is in another region.",
      "B. The images must be stored in the same Amazon S3 bucket.",
      "C. Port 80 must be opened on the security group in which the Amazon S3 bucket is located.",
      "D. Cross Origin Resource Sharing must be enabled on the Amazon S3 bucket.",
    ],
    answer: [
      "D. Cross Origin Resource Sharing must be enabled on the Amazon S3 bucket.",
    ],
  },
  {
    question:
      "A business processes papers that arrive through an Amazon S3 bucket. Through a web user interface, users may upload documents to an S3 bucket. When files are received in S3, an AWS Lambda function is executed to handle them, however the Lambda function periodically times out.\n\nWhat happens to the S3 event if the Lambda function is setup with the default settings?",
    choices: [
      "A. Notification of a failed S3 event is send as an email through Amazon SNS.",
      "B. The S3 event is sent to the default Dead Letter Queue.",
      "C. The S3 event is processed until it is successful.",
      "D. The S3 event is discarded after the event is retried twice.",
    ],
    answer: ["D. The S3 event is discarded after the event is retried twice."],
  },
  {
    question:
      "A considerable amount of read capacity is being used by queries to an Amazon DynamoDB database. There are a high number of huge characteristics in the table. The program does not need the whole set of attribute data.\n\nHow may DynamoDB expenses be lowered while application performance be maximized?",
    choices: [
      "A. Batch all the writes, and perform the write operations when no or few reads are being performed.",
      "B. Create a global secondary index with a minimum set of projected attributes.",
      "C. Implement exponential backoffs in the application.",
      "D. Load balance the reads to the table using an Application Load Balancer.",
    ],
    answer: [
      "B. Create a global secondary index with a minimum set of projected attributes.",
    ],
  },
  {
    question:
      "Data is stored in an S3 bucket by an application operating on EC2 instances. All data must be encrypted in transit, according to security rules.\n\nHow can the developer encrypt all traffic to the S3 bucket?",
    choices: [
      "A. Install certificates on the EC2 instances.",
      "B. Create a bucket policy that allows traffic where SecureTransport is true.",
      "C. Create an HTTPS redirect on the EC2 instances.",
      "D. Create a bucket policy that denies traffic where SecureTransport is false.",
    ],
    answer: [
      "D. Create a bucket policy that denies traffic where SecureTransport is false.",
    ],
  },
  {
    question:
      "An program overwrites an item in Amazon S3, then reads the identical object instantaneously.\n\nWhy might the program sometimes get an object's previous version?",
    choices: [
      "A. S3 overwrite PUTS are eventually consistent, so the application may read the old object.",
      "B. The application needs to add extra metadata to label the latest version when uploading to Amazon S3.",
      "C. All S3 PUTS are eventually consistent, so the application may read the old object.",
      "D. The application needs to explicitly specify latest version when retrieving the object.",
    ],
    answer: [
      "A. S3 overwrite PUTS are eventually consistent, so the application may read the old object.",
    ],
  },
  {
    question:
      "A legacy service has a SOAP interface that is XML-based. The developer want to use the Amazon API Gateway to expose the service's capabilities to external customers.\n\nWhich approach is necessary to do this?",
    choices: [
      "A. Create a RESTful API with the API Gateway; transform the incoming JSON into a valid XML message for the SOAP interface using mapping templates.",
      "B. Create a RESTful API with the API Gateway; pass the incoming JSON to the SOAP interface through an Application Load Balancer.",
      "C. Create a SOAP API with the API Gateway; pass the incoming XML to the SOAP interface through an Application Load Balancer.",
      "D. Create a SOAP API with the API Gateway; transform the incoming XML into a valid message for the SOAP interface using mapping templates.",
    ],
    answer: [
      "A. Create a RESTful API with the API Gateway; transform the incoming JSON into a valid XML message for the SOAP interface using mapping templates.",
    ],
  },
  {
    question:
      "As a big state machine, the existing design makes use of several Lambda functions calling one another. This state machine's coordination is handled by old bespoke code that is prone to failure.\n\nWhich AWS Service can assist with state machine refactoring and management?",
    choices: [
      "A. AWS Data Pipeline",
      "B. AWS SNS with AWS SQS",
      "C. Amazon Elastic MapReduce",
      "D. AWS Step Functions",
    ],
    answer: ["D. AWS Step Functions"],
  },
  {
    question:
      "A business is building a new online game using the Amazon ECS platform. The design will have four separate Amazon ECS services, each of which will need unique permissions to various AWS services. By bin packing the containers depending on memory reservation, the business hopes to optimize the utilization of the underlying Amazon EC2 instances.\n\nWhich configuration would enable the Development team to accomplish these criteria in the most secure manner possible?",
    choices: [
      "A. Create a new Identity and Access Management (IAM) instance profile containing the required permissions for the various ECS services, then associate that instance role with the underlying EC2 instances.",
      "B. Create four distinct IAM roles, each containing the required permissions for the associated ECS service, then configure each ECS service to reference the associated IAM role.",
      "C. Create four distinct IAM roles, each containing the required permissions for the associated ECS service, then, create an IAM group and configure the ECS cluster to reference that group.",
      "D. Create four distinct IAM roles, each containing the required permissions for the associated ECS service, then configure each ECS task definition to referenׁe the associated IAM role.",
    ],
    answer: [
      "D. Create four distinct IAM roles, each containing the required permissions for the associated ECS service, then configure each ECS task definition to referenׁe the associated IAM role.",
    ],
  },
  {
    question:
      "A developer wishes to search and filter log data in order to troubleshoot an application. Amazon CloudWatch Logs stores the application logs. To count exceptions in the application logs, the Developer sets a new metric filter. The logs, on the other hand, return no results.\nWhat is the cause for the absence of filtered results?",
    choices: [
      "A. A setup of the Amazon CloudWatch interface VPC endpoint is required for filtering the CloudWatch Logs in the VPC",
      "B. CloudWatch Logs only publishes metric data for events that happen after the filter is created",
      "C. The log group for CloudWatch Logs should be first streamed to Amazon Elasticsearch Service before metric filtering returns the results",
      "D. Metric data points for logs groups can be filtered only after they are exported to an Amazon S3 bucket",
    ],
    answer: [
      "B. CloudWatch Logs only publishes metric data for events that happen after the filter is created",
    ],
  },
  {
    question:
      "For its application database tier, a corporation uses Amazon RDS MySQL instances, and for its web tier, Apache Tomcat servers. Repeated read requests make up the majority of database queries from web apps.\nWhich AWS service would benefit from the addition of an in-memory store for repeated read queries?",
    choices: [
      "A. Amazon RDS Multi-AZ",
      "B. Amazon SQS",
      "C. Amazon ElastiCache",
      "D. Amazon RDS read replica",
    ],
    answer: ["C. Amazon ElastiCache"],
  },
  {
    question:
      "As a big state machine, the existing design makes use of several Lambda functions calling one another. This state machine's coordination is handled by old bespoke code that is prone to failure.\n\nWhich AWS Service can assist with state machine refactoring and management?",
    choices: [
      "A. AWS Data Pipeline",
      "B. AWS SNS with AWS SQS",
      "C. Amazon Elastic MapReduce",
      "D. AWS Step Functions",
    ],
    answer: ["D. AWS Step Functions"],
  },
  {
    question:
      "An API Gateway and AWS Lambda are used in a serverless application.\n\nWhere should the Lambda function's session data be stored between function calls?",
    choices: [
      "A. In an Amazon DynamoDB table",
      "B. In an Amazon SQS queue",
      "C. In the local filesystem",
      'D. In an SQLite session table using ג€"DSQLITE_ENABLE_SESSION',
    ],
    answer: ["A. In an Amazon DynamoDB table"],
  },
  {
    question:
      "A Linux, Apache, MySQL, and PHP (LAMP) stack is used to construct an on-premises application. The developer want to host this application on Amazon Web Services.\n\nWhich of the following AWS service sets is appropriate for running this stack?",
    choices: [
      "A. Amazon API Gateway, Amazon S3",
      "B. AWS Lambda, Amazon DynamoDB",
      "C. Amazon EC2, Amazon Aurora",
      "D. Amazon Cognito, Amazon RDS",
      "E. Amazon ECS, Amazon EBS",
    ],
    answer: ["C. Amazon EC2, Amazon Aurora"],
  },
  {
    question:
      "When a developer calls the Amazon CloudWatch API, he receives HTTP 400: ThrottlingException errors sporadically. When a call is not successful, no data is obtained.\n\nWhich best practice should be implemented first in order to remedy this issue?",
    choices: [
      "A. Contact AWS Support for a limit increase.",
      "B. Use the AWS CLI to get the metrics",
      "C. Analyze the applications and remove the API call",
      "D. Retry the call with exponential backoff",
    ],
    answer: ["D. Retry the call with exponential backoff"],
  },
  {
    question:
      "Where in the application source bundle should an Elastic Beanstalk configuration file called healthcheckur1.config be placed?",
    choices: [
      "A. In the root of the application",
      "B. In the bin folder",
      "C. In healthcheckur1.config.ebextension under root",
      "D. In the .ebextensions folder",
    ],
    answer: ["D. In the .ebextensions folder"],
  },
  {
    question:
      "A corporation uses Amazon API Gateway and the API Gateway native API key validation to maintain a REST service. Users can now join up for the service through a new registration website that was recently developed by the corporation. The registration page uses CreateApiKey to generate a new API key and sends it to the user. The user receives a 403 Forbidden error when attempting to call the API with this key. Existing API users are unaffected and can continue to utilize it.\nWhat changes to the code will allow these additional users to access the API?",
    choices: [
      "A. The createDeployment method must be called so the API can be redeployed to include the newly created API key.",
      "B. The updateAuthorizer method must be called to update the APIג€™s authorizer to include the newly created API key.",
      "C. The importApiKeys method must be called to import all newly created API keys into the current stage of the API.",
      "D. The createUsagePlanKey method must be called to associate the newly created API key with the correct usage plan.",
    ],
    answer: [
      "D. The createUsagePlanKey method must be called to associate the newly created API key with the correct usage plan.",
    ],
  },
  {
    question:
      "Multiple EC2 instances are used to execute an application behind an ELB.\n\nWhere is the ideal place to store session data so that it can be consistently delivered over numerous requests?",
    choices: [
      "A. Write data to Amazon ElastiCache",
      "B. Write data to Amazon Elastic Block Store.",
      "C. Write data to Amazon EC2 Instance Store.",
      "D. Write data to the root filesystem.",
    ],
    answer: ["A. Write data to Amazon ElastiCache"],
  },
  {
    question:
      "A development team is now supporting an application that saves cumulative gaming outcomes in an in-memory store. A database is used to keep individual outcomes. The team must employ automated scaling as part of the migration to AWS. The team is aware that this will result in uneven outcomes.\n\nWhere should the team keep these gathered game outcomes in order to achieve the highest level of consistency without jeopardizing performance?",
    choices: [
      "A. Amazon S3",
      "B. Amazon RDS",
      "C. Amazon ElastiCache",
      "D. Amazon Kinesis",
    ],
    answer: ["C. Amazon ElastiCache"],
  },
  {
    question:
      "A developer is developing an application for Amazon EC2 instances. To read and write records, the application must establish a connection to an Amazon DynamoDB database. The security staff must change access keys on a regular basis.\nWhich technique will meet these criteria?",
    choices: [
      "A. Create an IAM role with read and write access to the DynamoDB table. Generate access keys for the user and store the access keys in the application as environment variables.",
      "B. Create an IAM user with read and write access to the DynamoDB table. Store the user name and password in the application and generate access keys using an AWS SDK.",
      "C. Create an IAM role, configure read and write access for the DynamoDB table, and attach to the EC2 instances.",
      "D. Create an IAM user with read and write access to the DynamoDB table. Generate access keys for the user and store the access keys in the application as a credentials file.",
    ],
    answer: [
      "C. Create an IAM role, configure read and write access for the DynamoDB table, and attach to the EC2 instances.",
    ],
  },
  {
    question:
      "Returning consumers may log in to see personalized web pages on an e-commerce site. The process is shown below:\n\nOn EC2 instances, an application is executing. The database that records user accounts and preferences is hosted on Amazon RDS. While waiting for the login stage to finish, the website freezes or loads slowly. The remainder of the site's components are properly optimized.\n\nWhich of the following strategies will effectively fix this situation? (Select two.)",
    choices: [
      "A. Implement the user login page as an asynchronous Lambda function.",
      "B. Use Amazon ElastiCache for MemCached to cache user data.",
      "C. Use an Amazon Application Load Balancer to load balance the traffic to the website.",
      "D. Call the database asynchronously so the code can continue executing.",
      "E. Batch login requests from hundreds of users together as a single read request to the database.",
    ],
    answer: [
      "B. Use Amazon ElastiCache for MemCached to cache user data.",
      "D. Call the database asynchronously so the code can continue executing.",
    ],
  },
  {
    question:
      "An application developer is tasked with integrating Amazon CloudWatch into an on-premises environment.\n\nAccording to AWS security best practices, how should the application use CloudWatch?",
    choices: [
      "A. Configure AWS credentials in the application server with an AWS SDK",
      "B. Implement and proxy API-calls through an EC2 instance",
      "C. Store IAM credentials in the source code to enable access",
      "D. Add the application server SSH-key to AWS",
    ],
    answer: [
      "A. Configure AWS credentials in the application server with an AWS SDK",
    ],
  },
  {
    question:
      "A developer attempts to use the command aws configure after installing the AWS CLI and gets the following error:\naws: command not found Error: aws: command not found\n\nWhich of the following is the most probable source of this error?",
    choices: [
      "A. The aws executable is not in the PATH environment variable.",
      "B. Access to the aws executable has been denied to the installer.",
      "C. Incorrect AWS credentials were provided.",
      "D. The aws script does not have an executable file mode.",
    ],
    answer: ["A. The aws executable is not in the PATH environment variable."],
  },
  {
    question:
      "In an Amazon DynamoDB database, a game holds user game data. Individual users should not have access to the gaming data of other players.\n\nHow is this possible?",
    choices: [
      "A. Encrypt the game data with individual user keys.",
      "B. Restrict access to specific items based on certain primary key values.",
      "C. Stage data in SQS queues to inject metadata before accessing DynamoDB.",
      "D. Read records from DynamoDB and discard irrelevant data client-side.",
    ],
    answer: [
      "B. Restrict access to specific items based on certain primary key values.",
    ],
  },
  {
    question:
      "A developer created a static website hosted on Amazon S3 that uses Amazon API Gateway and AWS Lambda to conduct web service queries. The site is now displaying an error message that reads as follows:\nThe requested resource does not have an Access-Control-Allow-Origin€TM header. As a result, origin € null€TM is denied access. `\n\nWhat is the Developer's responsibility in resolving this issue?",
    choices: [
      "A. Enable cross-origin resource sharing (CORS) on the S3 bucket.",
      "B. Enable cross-origin resource sharing (CORS) for the method in API Gateway",
      "C. Add the Access-Control-Request-Method header to the request",
      "D. Add the Access-Control-Request-Headers header to the request",
    ],
    answer: [
      "B. Enable cross-origin resource sharing (CORS) for the method in API Gateway",
    ],
  },
  {
    question:
      "A developer must use an AWS CloudFormation template to launch a new AWS Lambda function.\n\nWhich processes are responsible for deploying Lambda functions? (Select two.)",
    choices: [
      "A. Upload the code to an AWS CodeCommit repository, then add a reference to it in an AWS::Lambda::Function resource in the template.",
      "B. Create an AWS::Lambda::Function resource in the template, then write the code directly inside the CloudFormation template.",
      "C. Upload a .ZIP file containing the function code to Amazon S3, then add a reference to it in an AWS::Lambda::Function resource in the template.",
      "D. Upload a .ZIP file to AWS CloudFormation containing the function code, then add a reference to it in an AWS::Lambda::Function resource in the template.",
      "E. Upload the function code to a private Git repository, then add a reference to it in an AWS::Lambda::Function resource in the template.",
    ],
    answer: [
      "B. Create an AWS::Lambda::Function resource in the template, then write the code directly inside the CloudFormation template.",
      "C. Upload a .ZIP file containing the function code to Amazon S3, then add a reference to it in an AWS::Lambda::Function resource in the template.",
    ],
  },
  {
    question:
      "A developer want to utilize AWS X-Ray to monitor the end-to-end performance of a user request across the whole software stack. The developer modified the program, tested it, and discovered that it is capable of sending traces to AWS X-Ray. The traces, on the other hand, are not accessible when the program is deployed to an EC2 instance.\n\nWhich of the following is most likely to result in this situation? (Select two.)",
    choices: [
      "A. The traces are reaching X-Ray, but the Developer does not have access to view the records.",
      "B. The X-Ray daemon is not installed on the EC2 instance.",
      "C. The X-Ray endpoint specified in the application configuration is incorrect.",
      "D. The instance role does not have ג€xray:BatchGetTracesג€ and ג€xray:GetTraceGraphג€ permissions.",
      "E. The instance role does not have ג€xray:PutTraceSegmentsג€ and ג€xray:PutTelemetryRecordsג€ permissions.",
    ],
    answer: [
      "B. The X-Ray daemon is not installed on the EC2 instance.",
      "E. The instance role does not have ג€xray:PutTraceSegmentsג€ and ג€xray:PutTelemetryRecordsג€ permissions.",
    ],
  },
  {
    question:
      "An application extracts metadata from files uploaded to an S3 bucket using Lambda functions; the information is then saved in Amazon DynamoDB. The program begins to behave strangely, and the developer want to investigate the Lambda function code's logs for faults.\n\nWhere would the Developer look for logs based on this system configuration?",
    choices: [
      "A. Amazon S3",
      "B. AWS CloudTrail",
      "C. Amazon CloudWatch",
      "D. Amazon DynamoDB",
    ],
    answer: ["C. Amazon CloudWatch"],
  },
  {
    question:
      "The upload to Amazon S3 of a 15 GB item fails. The error message reads as follows: €The size of the item you are proposing to upload exceeds the maximum permitted.\n\nHow will the Developer submit this object?",
    choices: [
      "A. Upload the object using the multi-part upload API.",
      "B. Upload the object over an AWS Direct Connect connection.",
      "C. Contact AWS Support to increase the object size limit.",
      "D. Upload the object to another AWS region.",
    ],
    answer: ["A. Upload the object using the multi-part upload API."],
  },
  {
    question: "What is the purpose of an Amazon SQS delay queue?",
    choices: [
      "A. Messages are hidden for a configurable amount of time when they are first added to the queue.",
      "B. Messages are hidden for a configurable amount of time after they are consumed from the queue.",
      "C. The consumer can poll the queue for a configurable amount of time before retrieving a message.",
      "D. Message cannot be deleted for a configurable amount of time after they are consumed from the queue.",
    ],
    answer: [
      "A. Messages are hidden for a configurable amount of time when they are first added to the queue.",
    ],
  },
  {
    question:
      "A huge e-commerce site is being developed that will use Amazon S3 to distribute static items. More than 300 GET requests per second will be served from the Amazon S3 bucket.\n\nWhat changes should be made to improve performance? (Select two.)",
    choices: [
      "A. Integrate Amazon CloudFront with Amazon S3.",
      "B. Enable Amazon S3 cross-region replication.",
      "C. Delete expired Amazon S3 server log files.",
      "D. Configure Amazon S3 lifecycle rules.",
      "E. Randomize Amazon S3 key name prefixes.",
    ],
    answer: [
      "A. Integrate Amazon CloudFront with Amazon S3.",
      "B. Enable Amazon S3 cross-region replication.",
    ],
  },
  {
    question:
      "A developer has designed a software package that will be distributed utilizing IAM roles across many EC2 servers.\n\nWhat measures may be taken to validate IAM access to Amazon Kinesis Streams records? (Select two.)",
    choices: [
      "A. Use the AWS CLI to retrieve the IAM group.",
      "B. Query Amazon EC2 metadata for in-line IAM policies.",
      "C. Request a token from AWS STS, and perform a describe action.",
      'D. Perform a get action using the ג€"-dry-run argument.',
      "E. Validate the IAM role policy with the IAM policy simulator.",
    ],
    answer: [
      'D. Perform a get action using the ג€"-dry-run argument.',
      "E. Validate the IAM role policy with the IAM policy simulator.",
    ],
  },
  {
    question:
      "Page load times on a website steadily increase as more people visit the system concurrently. According to the analysis, a user profile is being loaded from a database on each web page viewed by a user, which increases database load and page load delay. The developer chooses to cache the user profile data in order to remedy this problem.\n\nWhich caching approach would most effectively solve this situation?",
    choices: [
      "A. Create a new Amazon EC2 Instance and run a NoSQL database on it. Cache the profile data within this database using the write-through caching strategy.",
      "B. Create an Amazon ElastiCache cluster to cache the user profile data. Use a cache-aside caching strategy.",
      "C. Use a dedicated Amazon RDS instance for caching profile data. Use a write-through caching strategy.",
      "D. Create an ElastiCache cluster to cache the user profile data. Use a write-through caching strategy.",
    ],
    answer: [
      "B. Create an Amazon ElastiCache cluster to cache the user profile data. Use a cache-aside caching strategy.",
    ],
  },
  {
    question:
      "A Linux EC2 instance operating on Amazon Web Services requires management of the AWS architecture.\n\nHow may an Amazon EC2 instance be configured to perform secure AWS API calls?",
    choices: [
      "A. Sign the AWS CLI command using the signature version 4 process.",
      "B. Run the aws configure AWS CLI command and specify the access key id and secret access key.",
      "C. Specify a role for the EC2 instance with the necessary privileges.",
      "D. Pass the access key id and secret access key as parameters for each AWS CLI command.",
    ],
    answer: [
      "C. Specify a role for the EC2 instance with the necessary privileges.",
    ],
  },
  {
    question:
      "What is needed to use AWS X-Ray to trace Lambda-based applications?",
    choices: [
      "A. Send logs from the Lambda application to an S3 bucket; trigger a Lambda function from the bucket to send data to AWS X-Ray.",
      "B. Trigger a Lambda function from the application logs in Amazon CloudWatch to submit tracing data to AWS X-Ray.",
      "C. Use an IAM execution role to give the Lambda function permissions and enable tracing.",
      "D. Update and add AWS X-Ray daemon code to relevant parts of the Lambda function to set up the trace.",
    ],
    answer: [
      "C. Use an IAM execution role to give the Lambda function permissions and enable tracing.",
    ],
  },
  {
    question:
      "A developer wishes to lower the execution time of a complete Amazon DynamoDB database scan during off-peak hours without impairing typical workloads. During non-peak hours, workloads average around half of the highly constant read capacity units.\n\nHow would the Developer optimize this scan if he or she were the developer?",
    choices: [
      "A. Use parallel scans while limiting the rate",
      "B. Use sequential scans",
      "C. Increase read capacity units during the scan operation",
      "D. Change consistency to eventually consistent during the scan operation",
    ],
    answer: ["A. Use parallel scans while limiting the rate"],
  },
  {
    question:
      "A development team has released ten applications that are operating on Amazon EC2 instances. A graphical representation of the data is required by the Operations team.\nFor each application, there is one critical performance metric. For convenient monitoring, all of these metrics should be presented on a single screen.\nWhich actions should the developer take to use Amazon CloudWatch to do this?",
    choices: [
      "A. Create a custom namespace with a unique metric name for each application.",
      "B. Create a custom dimension with a unique metric name for each application.",
      "C. Create a custom event with a unique metric name for each application.",
      "D. Create a custom alarm with a unique metric name for each application.",
    ],
    answer: [
      "A. Create a custom namespace with a unique metric name for each application.",
    ],
  },
  {
    question:
      "On AWS, a business hosts a multi-tiered web application. During a recent increase in traffic, one of Amazon RDS's key relational databases was unable to handle the volume. Certain read queries for frequently visited objects failed, resulting in error messages being shown to users.\n\nWhat can be done to reduce the effect of future traffic surges on database read queries most efficiently?",
    choices: [
      "A. Use Amazon S3 to cache database query results.",
      "B. Use Amazon RDS as a custom origin for Amazon CloudFront.",
      "C. Use local storage and memory on Amazon EC2 instances to cache data.",
      "D. Use Amazon ElastiCache in front of the primary database to cache data.",
    ],
    answer: [
      "D. Use Amazon ElastiCache in front of the primary database to cache data.",
    ],
  },
  {
    question:
      "A business need a fully managed source control solution that is compatible with AWS. By sharing sets of changes peer-to-peer, the service must guarantee that revision control synchronizes various dispersed repositories. All users must be productive regardless of whether they are connected to a network.\n\nWhich version control system should I use?",
    choices: [
      "A. Subversion",
      "B. AWS CodeBuild",
      "C. AWS CodeCommit",
      "D. AWS CodeStar",
    ],
    answer: ["C. AWS CodeCommit"],
  },
  {
    question:
      "A developer is tasked with the responsibility of creating a cache layer in front of Amazon RDS. In the event of a service outage, it is costly to regenerate cached material.\n\nWhich of the following implementations would work best in terms of uptime?",
    choices: [
      "A. Implement Amazon ElastiCache Redis in Cluster Mode",
      "B. Install Redis on an Amazon EC2 instance.",
      "C. Implement Amazon ElastiCache Memcached.",
      "D. Migrate the database to Amazon Redshift.",
    ],
    answer: ["A. Implement Amazon ElastiCache Redis in Cluster Mode"],
  },
  {
    question:
      "A corporation is deploying one of their apps using AWS CodePipeline. The delivery pipeline is triggered by modifications to the master branch of an AWS CodeCommit repository and utilizes AWS CodeBuild for the test and build phases, as well as AWS CodeDeploy for application deployment.\nFor many months, the pipeline has operated effectively with no adjustments. AWS CodeDeploy failed to deploy the updated application as planned after a recent modification to the application's source code.\n\nWhat may be the underlying causes? (Select two.)",
    choices: [
      "A. The change was not made in the master branch of the AWS CodeCommit repository.",
      "B. One of the earlier stages in the pipeline failed and the pipeline has terminated.",
      "C. One of the Amazon EC2 instances in the companyג€™s AWS CodePipeline cluster is inactive.",
      "D. The AWS CodePipeline is incorrectly configured and is not executing AWS CodeDeploy.",
      "E. AWS CodePipeline does not have permissions to access AWS CodeCommit.",
    ],
    answer: [
      "A. The change was not made in the master branch of the AWS CodeCommit repository.",
      "B. One of the earlier stages in the pipeline failed and the pipeline has terminated.",
    ],
  },
  {
    question:
      "A developer wishes to get a list of objects from an Amazon DynamoDB table's global secondary index.\n\nWhich DynamoDB API call should the developer use to utilize the fewest read capacity units possible?",
    choices: [
      "A. Scan operation using eventually-consistent reads",
      "B. Query operation using strongly-consistent reads",
      "C. Query operation using eventually-consistent reads",
      "D. Scan operation using strongly-consistent reads",
    ],
    answer: ["C. Query operation using eventually-consistent reads"],
  },
  {
    question:
      "There are two categories of members on a video-hosting website: those who pay a charge and those who do not. Each video upload creates a message in Amazon Simple Queue Service (SQS). Each video is processed by a fleet of Amazon EC2 instances that poll Amazon SQS.\nThe developer must guarantee that the developer processes the films submitted by paying users first.\n\nHow is the developer to achieve this criterion?",
    choices: [
      "A. Create two SQS queues; one for paying members, and one for non-paying members. Poll the paying member queue first and then poll the non-paying member queue.",
      "B. Use SQS to set priorities on individual items within a single queue; give the paying membersג€™ videos the highest priority.",
      "C. Use SQS to set priorities on individual items within a single queue and use Amazon SNS to encode the videos.",
      "D. Create two Amazon SNS topics: one for paying members and one for non-paying members. Use SNS topic subscription priorities to differentiate between the two types of members.",
    ],
    answer: [
      "A. Create two SQS queues; one for paying members, and one for non-paying members. Poll the paying member queue first and then poll the non-paying member queue.",
    ],
  },
  {
    question:
      "The development team is now hard at work developing an API that will be provided through the Amazon API gateway. Three environments will service the API: development, test, and production. All three phases of the API Gateway are set to consume 237 GB of cache.\n\nWhich deployment option is the MOST cost-effective?",
    choices: [
      "A. Create a single API Gateway with all three stages.",
      "B. Create three API Gateways, one for each stage in a single AWS account.",
      "C. Create an API Gateway in three separate AWS accounts.",
      "D. Enable the cache for development and test environments only when needed.",
    ],
    answer: [
      "D. Enable the cache for development and test environments only when needed.",
    ],
  },
  {
    question:
      "A client wishes to host its source code on AWS Elastic Beanstalk. The client should undertake deployment with minimum downtime and should keep application access logs exclusively on existing instances.\n\nWhich deployment strategy would meet these criteria?",
    choices: [
      "A. Rolling",
      "B. All at once",
      "C. Rolling with an additional batch",
      "D. Immutable",
    ],
    answer: ["A. Rolling"],
  },
  {
    question:
      "A development team is composed of ten individuals. The manager wishes to grant access to user-specific folders in an Amazon S3 bucket, similar to a home directory for each team member. The sample of the IAM policy for the team member with the username €TeamMemberX€ is as follows:\n\n\nRather of generating unique policies for each team member, how may this policy excerpt be made general for all team members?",
    choices: [
      "A. Use IAM policy condition",
      "B. Use IAM policy principal",
      "C. Use IAM policy variables",
      "D. Use IAM policy resource",
    ],
    answer: ["C. Use IAM policy variables"],
  },
  {
    question:
      "A business requires security for its current website, which is hosted behind an Elastic Load Balancer. Amazon EC2 instances hosting the website are CPU restricted.\n\nHow can the website be secured without raising the CPU burden on the Amazon EC2 web servers? (Select two.)",
    choices: [
      "A. Configure an Elastic Load Balancer with SSL pass-through.",
      "B. Configure SSL certificates on an Elastic Load Balancer.",
      "C. Configure an Elastic Load Balancer with a Loadable Storage System.",
      "D. Install SSL certificates on the EC2 instances.",
      "E. Configure an Elastic Load Balancer with SSL termination.",
    ],
    answer: [
      "B. Configure SSL certificates on an Elastic Load Balancer.",
      "E. Configure an Elastic Load Balancer with SSL termination.",
    ],
  },
  {
    question:
      "A developer will handle AWS services through the AWS CLI on a local development server.\n\nWhat can be done to guarantee that the CLI executes commands using the Developer's IAM permissions?",
    choices: [
      "A. Specify the Developerג€™s IAM access key ID and secret access key as parameters for each CLI command.",
      "B. Run the aws configure CLI command, and provide the Developerג€™s IAM access key ID and secret access key.",
      "C. Specify the Developerג€™s IAM user name and password as parameters for each CLI command.",
      "D. Use the Developerג€™s IAM role when making the CLI command.",
    ],
    answer: [
      "B. Run the aws configure CLI command, and provide the Developerג€™s IAM access key ID and secret access key.",
    ],
  },
  {
    question:
      "In an Amazon DynamoDB database, a business caches session information for a web application. The organization want to automate the process of deleting obsolete entries from the table.\n\nWhat is the easiest method for doing this?",
    choices: [
      "A. Write a script that deletes old records; schedule the scripts as a cron job on an Amazon EC2 instance.",
      "B. Add an attribute with the expiration time; enable the Time To Live feature based on that attribute.",
      "C. Each day, create a new table to hold session data; delete the previous dayג€™s table.",
      "D. Add an attribute with the expiration time; name the attribute ItemExpiration.",
    ],
    answer: [
      "B. Add an attribute with the expiration time; enable the Time To Live feature based on that attribute.",
    ],
  },
  {
    question:
      "A programmer is developing a new application that will make advantage of Amazon S3. To comply with regulatory standards, the Developer must encrypt data in transit.\n\nHow is this accomplished by the Developer?",
    choices: [
      "A. Use s3:x-amz-acl as a condition in the S3 bucket policy.",
      "B. Use Amazon RDS with default encryption.",
      "C. Use aws:SecureTransport as a condition in the S3 bucket policy.",
      "D. Turn on S3 default encryption for the S3 bucket.",
    ],
    answer: [
      "C. Use aws:SecureTransport as a condition in the S3 bucket policy.",
    ],
  },
  {
    question:
      "A developing program requires the storage of hundreds of video files. Prior to storage, the data must be encrypted inside the program using a unique key for each video file.\n\nHow should the application's developer code it?",
    choices: [
      "A. Use the KMS Encrypt API to encrypt the data. Store the encrypted data key and data.",
      "B. Use a cryptography library to generate an encryption key for the application. Use the encryption key to encrypt the data. Store the encrypted data.",
      "C. Use the KMS GenerateDataKey API to get a data key. Encrypt the data with the data key. Store the encrypted data key and data.",
      "D. Upload the data to an S3 bucket using server side-encryption with an AWS KMS key.",
    ],
    answer: [
      "C. Use the KMS GenerateDataKey API to get a data key. Encrypt the data with the data key. Store the encrypted data key and data.",
    ],
  },
  {
    question:
      "An existing serverless application handles picture files that have been uploaded. At the moment, the process is implemented using a single Lambda function that accepts an image file, processes it, and saves it in Amazon S3. The application's users now demand picture thumbnail production. Users desire to minimize the time required to complete picture uploads.\n\nHow can thumbnail creation be integrated into an application while still adhering to user expectations and requiring little modifications to current code?",
    choices: [
      "A. Change the existing Lambda function handling the uploads to create thumbnails at the time of upload. Have the function store both the image and thumbnail in Amazon S3.",
      "B. Create a second Lambda function that handles thumbnail generation and storage. Change the existing Lambda function to invoke it asynchronously.",
      "C. Create an S3 event notification with a Lambda function destination. Create a new Lambda function to generate and store thumbnails.",
      "D. Create an S3 event notification to an SQS Queue. Create a scheduled Lambda function that processes the queue, and generates and stores thumbnails.",
    ],
    answer: [
      "C. Create an S3 event notification with a Lambda function destination. Create a new Lambda function to generate and store thumbnails.",
    ],
  },
  {
    question:
      "A developer wishes to give systems administrators access to the log data of an application operating on an EC2 instance.\nIn Amazon CloudWatch, which of the following provides monitoring of this metric?",
    choices: [
      "A. Retrieve the log data from CloudWatch using the GetMetricData API call.",
      "B. Retrieve the log data from AWS CloudTrail using the LookupEvents API call.",
      "C. Launch a new EC2 instance, configure Amazon CloudWatch Events, and then install the application.",
      "D. Install the Amazon CloudWatch Logs agent on the EC2 instance that the application is running on.",
    ],
    answer: [
      "D. Install the Amazon CloudWatch Logs agent on the EC2 instance that the application is running on.",
    ],
  },
  {
    question:
      "A business is creating an application that will operate on several Amazon EC2 instances in an Auto Scaling group and will have access to an Amazon EC2 database. The program must save the credentials necessary to connect to the database. Periodic secret rotation must be supported in the application, and the program should remain unchanged when a secret changes.\n\nHow can these needs be met in the SAFEST manner possible?",
    choices: [
      "A. Associate an IAM role to the EC2 instance where the application is running with permission to access the database.",
      "B. Use AWS Systems Manager Parameter Store with the SecureString data type to store secrets.",
      "C. Configure the application to store secrets in Amazon S3 object metadata.",
      "D. Hard code the database secrets in the application code itself.",
    ],
    answer: [
      "B. Use AWS Systems Manager Parameter Store with the SecureString data type to store secrets.",
    ],
  },
  {
    question:
      "On Amazon EC2, a developer is developing an application. During testing, the developer experienced a €Access Denied€ error on many API requests to AWS services. The developer must alter the permissions previously granted to the instance.\n\nHow can these needs be accomplished with the fewest possible adjustments and downtime?",
    choices: [
      "A. Make a new IAM role with the needed permissions. Stop the instance. Attach the new IAM role to the instance. Start the instance.",
      "B. Delete the existing IAM role. Attach a new IAM role with the needed permissions.",
      "C. Stop the instance. Update the attached IAM role adding the needed permissions. Start the instance.",
      "D. Update the attached IAM role adding the needed permissions.",
    ],
    answer: ["D. Update the attached IAM role adding the needed permissions."],
  },
  {
    question:
      "A cluster of Amazon EC2 instances hosts an application. When attempting to read items encrypted using server-side encryption using AWS KMS managed keys (SSE-KMS) from a single Amazon S3 bucket, the application encounters the following error:\n\n\nWhich measures should be made in combination to avoid this failure? (Select two.)",
    choices: [
      "A. Contact AWS Support to request an AWS KMS rate limit increase.",
      "B. Perform error retries with exponential backoff in the application code.",
      "C. Contact AWS Support to request a S3 rate limit increase.",
      "D. Import a customer master key (CMK) with a larger key size.",
      "E. Use more than one customer master key (CMK) to encrypt S3 data.",
    ],
    answer: [
      "A. Contact AWS Support to request an AWS KMS rate limit increase.",
      "B. Perform error retries with exponential backoff in the application code.",
    ],
  },
  {
    question:
      "A corporation has numerous developers stationed across the world who are progressively upgrading code for a development project. When developers upload code simultaneously, internet connection is poor, and uploading code for deployment in AWS Elastic Beanstalk takes a long time.\n\nWhich approach will result in the smallest amount of administrative work and the shortest upload and deployment times?",
    choices: [
      "A. Allow the Developers to upload the code to an Amazon S3 bucket, and deploy it directly to Elastic Beanstalk.",
      "B. Allow the Developers to upload the code to a central FTP server to deploy the application to Elastic Beanstalk.",
      "C. Create an AWS CodeCommit repository, allow the Developers to commit code to it, and then directly deploy the code to Elastic Beanstalk.",
      "D. Create a code repository on an Amazon EC2 instance so that all Developers can update the code, and deploy the application from the instance to Elastic Beanstalk.",
    ],
    answer: [
      "C. Create an AWS CodeCommit repository, allow the Developers to commit code to it, and then directly deploy the code to Elastic Beanstalk.",
    ],
  },
  {
    question:
      "What are the procedures for launching a templatized serverless application using the AWS CLI?",
    choices: [
      "A. Use AWS CloudFormation get-template then CloudFormation execute-change-set.",
      "B. Use AWS CloudFormation validate-template then CloudFormation create-change-set.",
      "C. Use AWS CloudFormation package then CloudFormation deploy.",
      "D. Use AWS CloudFormation create-stack then CloudFormation update-stack.",
    ],
    answer: ["C. Use AWS CloudFormation package then CloudFormation deploy."],
  },
  {
    question:
      "A program is supposed to process a large number of files. Each file processes an AWS Lambda call in four minutes. The Lambda function returns no useful data.\n\nWhat is the quickest method for processing all of the files?",
    choices: [
      "A. First split the files to make them smaller, then process with synchronous RequestResponse Lambda invocations.",
      "B. Make synchronous RequestResponse Lambda invocations and process the files one by one.",
      "C. Make asynchronous Event Lambda invocations and process the files in parallel.",
      "D. First join all the files, then process it all at once with an asynchronous Event Lambda invocation.",
    ],
    answer: [
      "C. Make asynchronous Event Lambda invocations and process the files in parallel.",
    ],
  },
  {
    question:
      "A developer has created a web application that is accessible to customers and is running on an Amazon EC2 instance. Every request made to the program is logged. Normally, the program operates without incident, but a traffic surge creates numerous logs, causing the disk to fill up and finally run out of memory. According to company policy, all historical logs must be consolidated for analysis.\n\nWhich long-term remedy should the developer use to avoid a recurrence of the issue?",
    choices: [
      "A. Set up log rotation to rotate the file every day. Also set up log rotation to rotate after every 100 MB and compress the file.",
      "B. Install the Amazon CloudWatch agent on the instance to send the logs to CloudWatch. Delete the logs from the instance once they are sent to CloudWatch.",
      "C. Enable AWS Auto Scaling on Amazon Elastic Block Store (Amazon EBS) to automatically add volumes to the instance when it reaches a specified threshold.",
      "D. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to pull the logs from the instance. Configure the rule to delete the logs after they have been pulled.",
    ],
    answer: [
      "B. Install the Amazon CloudWatch agent on the instance to send the logs to CloudWatch. Delete the logs from the instance once they are sent to CloudWatch.",
    ],
  },
  {
    question:
      "An application must handle the client's IP address. The application has been transferred to Amazon Web Services and is now protected by an Application Load Balancer (ALB). However, it seems as if all client IP addresses have become identical. The application must retain its horizontal scalability.\n\nWhat is the MOST cost-effective solution to this issue based on this scenario?",
    choices: [
      "A. Remove the application from the ALB. Delete the ALB and change Amazon Route 53 to direct traffic to the instance running the application.",
      "B. Remove the application from the ALB. Create a Classic Load Balancer in its place. Direct traffic to the application using the HTTP protocol.",
      "C. Alter the application code to inspect the X-Forwarded-For header. Ensure that the code can work properly if a list of IP addresses is passed in the header.",
      "D. Alter the application code to inspect a custom header. Alter the client code to pass the IP address in the custom header.",
    ],
    answer: [
      "C. Alter the application code to inspect the X-Forwarded-For header. Ensure that the code can work properly if a list of IP addresses is passed in the header.",
    ],
  },
  {
    question:
      "Users will be required to access AWS services and will be able to update their own passwords, according to an application being developed by a business.\nWhich of the following would allow the organization to manage users and authorization while allowing users to change their passwords on their own?",
    choices: [
      "A. Amazon Cognito identify pools and AWS STS",
      "B. Amazon Cognito identity pools and AWS IAM",
      "C. Amazon Cognito user pools and AWS KMS",
      "D. Amazon Cognito user pools and identity pools",
    ],
    answer: ["D. Amazon Cognito user pools and identity pools"],
  },
  {
    question:
      "A developer has configured an Amazon Kinesis Stream with four shards to accept records at a rate of up to 2500 per second. To handle these records, a Lambda function has been configured.\n\nWhich records will be processed first?",
    choices: [
      "A. Lambda will receive each record in the reverse order it was placed into the stream following a LIFO (last-in, first-out) method",
      "B. Lambda will receive each record in the exact order it was placed into the stream following a FIFO (first-in, first-out) method.",
      "C. Lambda will receive each record in the exact order it was placed into the shard following a FIFO (first-in, first-out) method. There is no guarantee of order across shards.",
      "D. The Developer can select FIFO, (first-in, first-out), LIFO (last-in, last-out), random, or request specific record using the getRecords API.",
    ],
    answer: [
      "C. Lambda will receive each record in the exact order it was placed into the shard following a FIFO (first-in, first-out) method. There is no guarantee of order across shards.",
    ],
  },
  {
    question:
      "A developer is doing testing on a Docker-based application that communicates with Amazon DynamoDB using the AWS SDK. The program utilized IAM access credentials in the local development environment. The application is now prepared for ECS cluster deployment.\n\nIn production, how should the application authenticate with AWS services?",
    choices: [
      "A. Configure an ECS task IAM role for the application to use",
      "B. Refactor the application to call AWS STS AssumeRole based on an instance role",
      "C. Configure AWS access key/secret access key environment variables with new credentials",
      "D. Configure the credentials file with a new access key/secret access key",
    ],
    answer: ["A. Configure an ECS task IAM role for the application to use"],
  },
  {
    question:
      "A real-time application processes millions of events that are received over an API.\n\nWhich service might be utilized to enable concurrent processing of data by several users in the most cost-effective manner possible?",
    choices: [
      "A. Amazon SNS with fanout to an SQS queue for each application",
      "B. Amazon SNS with fanout to an SQS FIFO (first-in, firtst-out) queue for each application",
      "C. Amazon Kinesis Firehouse",
      "D. Amazon Kinesis Streams",
    ],
    answer: ["D. Amazon Kinesis Streams"],
  },
  {
    question:
      "A developer has created a serverless application that makes use of a variety of AWS services. The business logic is implemented using Lambda functions that rely on third-party libraries. Amazon API Gateway will be used to provide the Lambda function endpoints. The Lambda function will be used to store the data in Amazon DynamoDB. Although the developer is prepared to launch the program, he or she must have the ability to turn back.\n\nHow, given these criteria, can this deployment be automated?",
    choices: [
      "A. Deploy using Amazon Lambda API operations to create the Lambda function by providing a deployment package.",
      "B. Use an AWS CloudFormation template and use CloudFormation syntax to define the Lambda function resource in the template.",
      "C. Use syntax conforming to the Serverless Application Model in the AWS CloudFormation template to define the Lambda function resource.",
      "D. Create a bash script which uses AWS CLI to package and deploy the application.",
    ],
    answer: [
      "C. Use syntax conforming to the Serverless Application Model in the AWS CloudFormation template to define the Lambda function resource.",
    ],
  },
  {
    question:
      "A firm is developing an application that will use an Amazon DynamoDB database to monitor athlete performance. A partition key (user id) and a sort key (sport name) uniquely identify each item in the database. The following illustration depicts the table's design:\n\n(Please note that not all table characteristics are shown.)\nA developer is requested to create a leaderboard application that would show the best performers (user id) for each sport name depending on their score.\n\nWhich approach will enable the developer to most effectively retrieve results from the DynamoDB table?",
    choices: [
      "A. Use a DynamoDB query operation with the key attributes of user_id and sport_name and order the results based on the score attribute.",
      "B. Create a global secondary index with a partition key of sport_name and a sort key of score, and get the results",
      "C. Use a DynamoDB scan operation to retrieve scores and user_id based on sport_name, and order the results based on the score attribute.",
      "D. Create a local secondary index with a primary key of sport_name and a sort key of score and get the results based on the score attribute.",
    ],
    answer: [
      "B. Create a global secondary index with a partition key of sport_name and a sort key of score, and get the results",
    ],
  },
  {
    question:
      "A developer is developing a serverless application that needs every ten minutes invocation of an AWS Lambda function.\n\nHow can the function be triggered in an automated and serverless manner?",
    choices: [
      "A. Deploy an Amazon EC2 instance based on Linux, and edit its /etc/crontab file by adding a command to periodically invoke the Lambda function.",
      "B. Configure an environment variable named PERIOD for the Lambda function. Set the value to 600.",
      "C. Create an Amazon CloudWatch Events rule that triggers on a regular schedule to invoke the Lambda function.",
      "D. Create an Amazon SNS topic that has a subscription to the Lambda function with a 600-second timer.",
    ],
    answer: [
      "C. Create an Amazon CloudWatch Events rule that triggers on a regular schedule to invoke the Lambda function.",
    ],
  },
  {
    question:
      "A developer has submitted an update to an application that is delivered through Amazon CloudFront to a worldwide user base. Users are not able to view the latest modifications once the application is deployed.\n\nHow can the Developer address this concern?",
    choices: [
      "A. Remove the origin from the CloudFront configuration and add it again.",
      "B. Disable forwarding of query strings and request headers from the CloudFront distribution configuration.",
      "C. Invalidate all the application objects from the edge caches.",
      "D. Disable the CloudFront distribution and enable it again to update all the edge locations.",
    ],
    answer: ["C. Invalidate all the application objects from the edge caches."],
  },
  {
    question:
      "Images are stored in an S3 bucket by an application. Notifications from Amazon S3 are utilized to invoke a Lambda code that resizes the pictures. Each photograph is processed in less than a second.\n\nHow will AWS Lambda deal with the increased traffic?",
    choices: [
      "A. Lambda will scale out to execute the requests concurrently.",
      "B. Lambda will handle the requests sequentially in the order received.",
      "C. Lambda will process multiple images in a single execution.",
      "D. Lambda will add more compute to each execution to reduce processing time.",
    ],
    answer: ["A. Lambda will scale out to execute the requests concurrently."],
  },
  {
    question:
      "A retailer's developer must include a fraud detection solution into the order processing system. Verification of an order by the fraud detection solution takes between ten and thirty minutes. At its height, the website can process up to 100 orders per minute.\n\nHow can the fraud detection technology be integrated into the order processing pipeline in the most scalable manner?",
    choices: [
      "A. Add all new orders to an Amazon SQS queue. Configure a fleet of 10 EC2 instances spanning multiple AZs with the fraud detection solution installed on them to pull orders from this queue. Update the order with a pass or fails status.",
      "B. Add all new orders to an SQS queue. Configure an Auto Scaling group that uses the queue depth metric as its unit of scale to launch a dynamically-sized fleet of EC2 instances spanning multiple AZs with the fraud detection solution installed on them to pull orders from this queue. Update the order with a pass or fails status.",
      "C. Add all new orders to an Amazon Kinesis Stream. Subscribe a Lambda function to automatically read batches of records from the Kinesis Stream. The Lambda function includes the fraud detection software and will update the order with a pass or fail status.",
      "D. Write all new orders to Amazon DynamoDB. Configure DynamoDB Streams to include all new orders. Subscribe a Lambda function to automatically read batches of records from the Kinesis Stream. The Lambda function includes the fraud detection software and will update the order with a pass or fail status.",
    ],
    answer: [
      "B. Add all new orders to an SQS queue. Configure an Auto Scaling group that uses the queue depth metric as its unit of scale to launch a dynamically-sized fleet of EC2 instances spanning multiple AZs with the fraud detection solution installed on them to pull orders from this queue. Update the order with a pass or fails status.",
    ],
  },
  {
    question:
      "A developer is required to create an application that makes advantage of Amazon DynamoDB. The criteria include that the DynamoDB table's contents must be 7KB in size and that reads must be highly consistent. The read pace is limited to three items per second, whereas the write rate is limited to ten things per second.\n\nWhat size DynamoDB table should the developer create to satisfy these requirements?",
    choices: [
      "A. Read: 3 read capacity units Write: 70 write capacity units",
      "B. Read: 6 read capacity units Write: 70 write capacity units",
      "C. Read: 6 read capacity units Write: 10 write capacity units",
      "D. Read: 3 read capacity units Write: 10 write capacity units",
    ],
    answer: ["B. Read: 6 read capacity units Write: 70 write capacity units"],
  },
  {
    question:
      "An application becomes unresponsive due to the following error: The bucket given does not exist.\n\nWhere IS THE BEST PLACE TO START THE ANALYSIS OF THE ROOT CAUSES?",
    choices: [
      "A. Check the Elastic Load Balancer logs for DeleteBucket requests.",
      "B. Check the application logs in Amazon CloudWatch Logs for Amazon S3 DeleteBucket errors.",
      "C. Check AWS X-Ray for Amazon S3 DeleteBucket alarms.",
      "D. Check AWS CloudTrail for a DeleteBucket event.",
    ],
    answer: ["D. Check AWS CloudTrail for a DeleteBucket event."],
  },
  {
    question:
      "A business wishes to establish continuous integration for its AWS workloads. The firm wishes to activate unit tests in its pipeline in response to updates to its code repository and to be alerted of pipeline failure events.\n\nHow are these stipulations to be met?",
    choices: [
      "A. Store the source code in AWS CodeCommit. Create a CodePipeline to automate unit testing. Use Amazon SNS to trigger notifications of failure events.",
      "B. Store the source code in GitHub. Create a CodePipeline to automate unit testing. Use Amazon SES to trigger notifications of failure events.",
      "C. Store the source code on GitHub. Create a CodePipeline to automate unit testing. Use Amazon CloudWatch to trigger notifications of failure events.",
      "D. Store the source code in AWS CodeCommit. Create a CodePipeline to automate unit testing. Use Amazon CloudWatch to trigger notification of failure events.",
    ],
    answer: [
      "A. Store the source code in AWS CodeCommit. Create a CodePipeline to automate unit testing. Use Amazon SNS to trigger notifications of failure events.",
    ],
  },
  {
    question:
      "A status dashboard is shown by an application. A 1 KB message from a SQS queue is used to update the status. Although the status changes seldom, the Developer must keep the time between the message's arrival in the queue and the dashboard update as short as possible.\n\nWhich strategy results in the smallest delay between dashboard updates?",
    choices: [
      "A. Retrieve the messages from the queue using long polling every 20 seconds.",
      "B. Reduce the size of the messages by compressing them before sending.",
      "C. Retrieve the messages from the queue using short polling every 10 seconds.",
      "D. Reduce the size of each message payload by sending it in two parts.",
    ],
    answer: [
      "A. Retrieve the messages from the queue using long polling every 20 seconds.",
    ],
  },
  {
    question:
      "A developer must construct an AWS application that will consume Amazon SQS messages ranging in size from 1KB to 1GB.\n\nHow should Amazon Simple Queue Service (SQS) messages be managed?",
    choices: [
      "A. Use Amazon S3 and the Amazon SQS CLI.",
      "B. Use Amazon S3 and the Amazon SQS Extended Client Library for Java.",
      "C. Use Amazon EBS and the Amazon SQS CLI.",
      "D. Use Amazon EFS and the Amazon SQS CLI.",
    ],
    answer: [
      "B. Use Amazon S3 and the Amazon SQS Extended Client Library for Java.",
    ],
  },
  {
    question:
      "A developer is using AWS CLI, however it is stalling out when performing list commands on a large number of resources.\n\nHow can this time-out be avoided?",
    choices: [
      "A. Use pagination",
      "B. Use shorthand syntax",
      "C. Use parameter values",
      "D. Use quoting strings",
    ],
    answer: ["A. Use pagination"],
  },
  {
    question:
      "A developer has developed a Lambda function and is discovering that it is taking longer than planned to execute. The Developer determined that increasing computing capacity might enhance performance after some debugging.\nWhat is the best way for the developer to boost Lambda computing resources?",
    choices: [
      "A. Run on a larger instance size with more compute capacity.",
      "B. Increase the maximum execution time.",
      "C. Specify a larger compute capacity when calling the Lambda function.",
      "D. Increase the allocated memory for the Lambda function.",
    ],
    answer: ["D. Increase the allocated memory for the Lambda function."],
  },
  {
    question:
      "Certain queries are passing via an Amazon API Gateway endpoint /MyAPI, however, they do not reach the AWS Lambda function behind /MyAPI, according to a developer. A second Lambda function sometimes operates at the maximum concurrency allowed for the particular AWS account, according to the Developer.\nWhat can the Developer do to solve this problem?",
    choices: [
      "A. Manually reduce the concurrent execution limit at the account level",
      "B. Add another API Gateway stage for /MyAPI, and shard the requests",
      "C. Configure the second Lambda functionג€™s concurrency execution limit",
      "D. Reduce the throttling limits in the API Gateway /MyAPI endpoint",
    ],
    answer: [
      "C. Configure the second Lambda functionג€™s concurrency execution limit",
    ],
  },
  {
    question:
      "A business is developing a stock trading application that needs processing trade requests with a sub-millisecond latency. Amazon DynamoDB is utilized to store all of the trade data necessary for each request to be processed. After doing load testing on the application, the development team determined that the latency requirement is not met owing to data retrieval delays. Due to unexpectedly large increases in request volume, DynamoDB read capacity must be greatly over-provisioned to prevent throttling.\n\nWhat efforts should be made to achieve latency requirements while also lowering the application's operating costs?",
    choices: [
      "A. Add Global Secondary Indexes for trading data.",
      "B. Store trading data in Amazon S3 and use Transfer Acceleration.",
      "C. Add retries with exponential back-off for DynamoDB queries",
      "D. Use DynamoDB Accelerator to cache trading data.",
    ],
    answer: ["D. Use DynamoDB Accelerator to cache trading data."],
  },
  {
    question:
      "A business provides services to a large number of downstream customers. Each customer has the option of connecting to one or more services. As a result, a complicated architecture that is difficult to manage and scales poorly has emerged. To administer various customer services, the organization requires a single interface.\nWhich AWS service should this architecture be refactored with?",
    choices: [
      "A. AWS Lambda",
      "B. AWS X-Ray",
      "C. Amazon SQS",
      "D. Amazon API Gateway",
    ],
    answer: ["D. Amazon API Gateway"],
  },
  {
    question:
      "A custom library is used by an application to perform HTTP calls directly to AWS service endpoints. The program is suffering transitory problems, which cause processes to halt when they are encountered for the first time. The application has been requested to be more robust by adding error retries and exponential backoff.\n\nHow should a developer apply the modifications with the LITTLEEST amount of custom code possible?",
    choices: [
      "A. Add a Retry-After HTTP header to API requests",
      "B. Use the AWS CLI to configure the retry settings in a named profile",
      "C. Change the custom library to retry on 5xx errors only",
      "D. Use an AWS SDK and set retry-specific configurations",
    ],
    answer: ["D. Use an AWS SDK and set retry-specific configurations"],
  },
  {
    question:
      "Amazon Kinesis Data Streams enables an application to ingest and handle huge streams of data records in real time. Utilizing the Amazon Kinesis Client Library, Amazon EC2 instances ingest and process data from the shards of the Kinesis data stream (KCL). The program manages failure situations and eliminates the need for backup personnel. The program indicates that a particular shard is getting much more data than anticipated. The €hot€ shard is resharded to react to variations in the pace of data flow.\n\nIf the initial number of shards in the Kinesis data stream is four, and the number of shards increases to six after resharding, what is the maximum number of EC2 instances that can be deployed to process data from all the shards?",
    choices: ["A. 12", "B. 6", "C. 4", "D. 1"],
    answer: ["B. 6"],
  },
  {
    question:
      "There are three separate environments in a company: development, quality assurance, and production. The company wishes to deploy its code in three stages: development, QA, and finally production.\nWhat AWS service may be used to fulfill this need?",
    choices: [
      "A. Use AWS CodeCommit to create multiple repositories to deploy the application.",
      "B. Use AWS CodeBuild to create, configure, and deploy multiple build application projects.",
      "C. Use AWS Data Pipeline to create multiple data pipeline provisions to deploy the application.",
      "D. Use AWS CodeDeploy to create multiple deployment groups.",
    ],
    answer: ["D. Use AWS CodeDeploy to create multiple deployment groups."],
  },
  {
    question:
      "An organization is hosting huge files in Amazon S3 and developing a web application to provide end users with meta-data about the files. A user picks an item to download based on its information. The company requires a technique for indexing files and retrieving metadata with a single-digit millisecond delay.\n\nWhich Amazon Web Services (AWS) service should be utilized to do this?",
    choices: [
      "A. Amazon DynamoDB",
      "B. Amazon EC2",
      "C. AWS Lambda",
      "D. Amazon RDS",
    ],
    answer: ["A. Amazon DynamoDB"],
  },
  {
    question:
      "A developer has created a web application and want to swiftly deploy it on an AWS Tomcat server. The developer want to be free of the responsibility of managing the underlying infrastructure.\n\nAccording to these criteria, what is the simplest approach to deploy the application?",
    choices: [
      "A. AWS CloudFormation",
      "B. AWS Elastic Beanstalk",
      "C. Amazon S3",
      "D. AWS CodePipeline",
    ],
    answer: ["B. AWS Elastic Beanstalk"],
  },
  {
    question:
      "A developer must re-implement the order fulfillment system's business logic. To determine where to acquire an item, the business logic must make queries to several sellers. The whole procedure might take up to a week.\n\nWhat is the MOST EFFECTIVE and SIMPLICIT method of implementing a system that satisfies these requirements?",
    choices: [
      "A. Use AWS Step Functions to execute parallel Lambda functions, and join the results.",
      "B. Create an AWS SQS for each vendor, poll the queue from a worker instance, and joint the results.",
      "C. Use AWS Lambda to asynchronously call a Lambda function for each vendor, and join the results.",
      "D. Use Amazon CloudWatch Events to orchestrate the Lambda functions.",
    ],
    answer: [
      "A. Use AWS Step Functions to execute parallel Lambda functions, and join the results.",
    ],
  },
  {
    question:
      "A business is moving from a monolithic architecture to one based on microservices. The developers must redesign the program in such a way that the many microservices may interact asynchronously without compromising performance.\n\nWhich managed Amazon Web Services (AWS) services will offer asynchronous message passing? (Select two.)",
    choices: [
      "A. Amazon SQS",
      "B. Amazon Cognito",
      "C. Amazon Kinesis",
      "D. Amazon SNS",
      "E. Amazon ElastiCache",
    ],
    answer: ["A. Amazon SQS", "D. Amazon SNS"],
  },
];
