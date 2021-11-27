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
    imageUrl:
      "https://www.examtopics.com/assets/media/exam-media/03756/0014900001.png",
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
      "B. The updateAuthorizer method must be called to update the API's authorizer to include the newly created API key.",
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
      "C. One of the Amazon EC2 instances in the company's AWS CodePipeline cluster is inactive.",
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
      "B. Use SQS to set priorities on individual items within a single queue; give the paying members' videos the highest priority.",
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
      "A. Specify the Developer's IAM access key ID and secret access key as parameters for each CLI command.",
      "B. Run the aws configure CLI command, and provide the Developer's IAM access key ID and secret access key.",
      "C. Specify the Developer's IAM user name and password as parameters for each CLI command.",
      "D. Use the Developer's IAM role when making the CLI command.",
    ],
    answer: [
      "B. Run the aws configure CLI command, and provide the Developer's IAM access key ID and secret access key.",
    ],
  },
  {
    question:
      "In an Amazon DynamoDB database, a business caches session information for a web application. The organization want to automate the process of deleting obsolete entries from the table.\n\nWhat is the easiest method for doing this?",
    choices: [
      "A. Write a script that deletes old records; schedule the scripts as a cron job on an Amazon EC2 instance.",
      "B. Add an attribute with the expiration time; enable the Time To Live feature based on that attribute.",
      "C. Each day, create a new table to hold session data; delete the previous day's table.",
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
    imageUrl:
      "https://www.examtopics.com/assets/media/exam-media/03756/0010400001.png",
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
    imageUrl:
      "https://www.examtopics.com/assets/media/exam-media/03756/0006200001.png",
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
      "C. Configure the second Lambda function's concurrency execution limit",
      "D. Reduce the throttling limits in the API Gateway /MyAPI endpoint",
    ],
    answer: [
      "C. Configure the second Lambda function's concurrency execution limit",
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
  {
    question:
      "Amazon S3 is structured as follows: S3:/BUCKET/FOLDERNAME/FILENAME.zip\n\nWhich S3 best practice would enhance speed when a single bucket receives thousands of PUT requests per second?",
    choices: [
      "A. Prefix folder names with user id; for example, s3://BUCKET/2013-FOLDERNAME/FILENAME.zip",
      "B. Prefix file names with timestamps; for example, s3://BUCKET/FOLDERNAME/2013-26-05-15-00-00-FILENAME.zip",
      "C. Prefix file names with random hex hashes; for example, s3://BUCKET/FOLDERNAME/23a6-FILENAME.zip",
      "D. Prefix folder names with random hex hashes; for example, s3://BUCKET/23a6-FOLDERNAME/FILENAME.zip",
    ],
    answer: [
      "D. Prefix folder names with random hex hashes; for example, s3://BUCKET/23a6-FOLDERNAME/FILENAME.zip",
    ],
  },
  {
    question:
      "Amazon API Gateway is used in a company's new mobile application. As the development team completes a new version of its APIs, a developer must roll out the API modification securely and transparently.\n\nWhat is the SIMPLEST method for a developer to deploy a new API version to a restricted number of consumers using API Gateway?",
    choices: [
      "A. Create a new API in API Gateway. Direct a portion of the traffic to the new API using an Amazon Route 53 weighted routing policy.",
      "B. Validate the new API version and promote it to production during the window of lowest expected utilization.",
      "C. Implement an Amazon CloudWatch alarm to trigger a rollback if the observed HTTP 500 status code rate exceeds a predetermined threshold.",
      "D. Use the canary release deployment option in API Gateway. Direct a percentage of the API traffic using the canarySettings setting.",
    ],
    answer: [
      "D. Use the canary release deployment option in API Gateway. Direct a percentage of the API traffic using the canarySettings setting.",
    ],
  },
  {
    question:
      "A firm is compiling a website using AWS CodeBuild from source code saved in AWS CodeCommit. Due to a recent modification to the source code, the CodeBuild project is unable to assemble the website correctly.\n\nHow is the developer to determine the root cause of the failures?",
    choices: [
      "A. Modify the buildspec.yml file to include steps to send the output of build commands to Amazon CloudWatch.",
      "B. Use a custom Docker image that includes the AWS X-Ray agent in the AWS CodeBuild project configuration.",
      "C. Check the build logs of the failed phase in the last build attempt in the AWS CodeBuild project build history.",
      "D. Manually re-run the build process on a local machine so that the output can be visualized.",
    ],
    answer: [
      "C. Check the build logs of the failed phase in the last build attempt in the AWS CodeBuild project build history.",
    ],
  },
  {
    question:
      "Over SSH, a developer connects to AWS CodeCommit. The SSH keys used to connect to AWS CodeCommit are associated with the following user:\n\nThe developer is responsible for creating and deleting branches.\n\nWhich particular IAM permissions, based on the concept of least privilege, should be added?",
    choices: [
      "A. ג€codecommit:CreateBranchג€ ג€codecommit:DeleteBranchג€",
      "B. ג€codecommit:Put*ג€",
      "C. ג€codecommit:Update*ג€",
      "D. ג€codecommit:*ג€",
    ],
    answer: ["C. ג€codecommit:Update*ג€"],
    imageUrl:
      "https://www.examtopics.com/assets/media/exam-media/03756/0009400001.png",
  },
  {
    question:
      "Amazon Kinesis Streams is being used by a web application to store clickstream data that may not be utilized for up to 12 hours.\n\nHow can the developer encrypt data in the Kinesis Streams at rest?",
    choices: [
      "A. Enable SSL connections to Kinesis",
      "B. Use Amazon Kinesis Consumer Library",
      "C. Encrypt the data once it is at rest with a Lambda function",
      "D. Enable server-side encryption in Kinesis Streams",
    ],
    answer: ["D. Enable server-side encryption in Kinesis Streams"],
  },

  {
    question:
      "Amazon CloudFront is being used by an organization to guarantee that its users have low-latency access to their online application. The business determined that all communication between users and CloudFront, as well as all traffic between CloudFront and the web application, should be encrypted.\n\nHow are these stipulations to be met? (Select two.)",
    choices: [
      "A. Use AWS KMS to encrypt traffic between CloudFront and the web application.",
      "B. Set the Origin Protocol Policy to ג€HTTPS Onlyג€.",
      "C. Set the Originג€™s HTTP Port to 443.",
      "D. Set the Viewer Protocol Policy to ג€HTTPS Onlyג€ or ג€Redirect HTTP to HTTPSג€.",
      "E. Enable the CloudFront option Restrict Viewer Access.",
    ],
    answer: [
      "B. Set the Origin Protocol Policy to ג€HTTPS Onlyג€.",
      "D. Set the Viewer Protocol Policy to ג€HTTPS Onlyג€ or ג€Redirect HTTP to HTTPSג€.",
    ],
  },
  {
    question:
      "The Amazon API Gateway exposes a collection of APIs to clients. The API Gateway has enabled caching for these APIs. Customers have requested an option to clear this cache for each API.\n\nWhat may be done to enable API clients to invalidate the API Cache?",
    choices: [
      "A. Ask customers to use AWS credentials to call the InvalidateCache API.",
      "B. Ask customers to invoke an AWS API endpoint which invalidates the cache.",
      "C. Ask customers to pass an HTTP header called Cache-Control:max-age=0.",
      "D. Ask customers to add a query string parameter called ג€INVALIDATE_CACHEג€ when making an API call.",
    ],
    answer: [
      "C. Ask customers to pass an HTTP header called Cache-Control:max-age=0.",
    ],
  },
  {
    question:
      "A developer is updating a bespoke application that is currently running on AWS Elastic Beanstalk.\nWhat solutions will update the Elastic Beanstalk environment with the new application version after the Developer completes the changes? (Select two.)",
    choices: [
      "A. Package the application code into a .zip file, and upload, then deploy the packaged application from the AWS Management Console",
      "B. Package the application code into a .tar file, create a new application version from the AWS Management Console, then update the environment by using AWS CLI",
      "C. Package the application code into a .tar file, and upload and deploy the packaged application from the AWS Management Console",
      "D. Package the application code into a .zip file, create a new application version from the packaged application by using AWS CLI, then update the environment by using AWS CLI",
      "E. Package the application code into a .zip file, create a new application version from the AWS Management Console, then rebuild the environment by using AWS CLI",
    ],
    answer: [
      "A. Package the application code into a .zip file, and upload, then deploy the packaged application from the AWS Management Console",
      "D. Package the application code into a .zip file, create a new application version from the packaged application by using AWS CLI, then update the environment by using AWS CLI",
    ],
  },
  {
    question:
      "Amazon API Gateway is used by a business to manage access to a collection of microservices built as AWS Lambda functions. The corporation makes a small breaking update to one of the APIs in response to a bug report.\nTo minimize the effect of the new API's deployment on current customers, the business intends to provide clients six months to transition from v1 to v2.\n\nWhich strategy should the developer use to deal with this change?",
    choices: [
      "A. Update the underlying Lambda function and provide clients with the new Lambda invocation URL.",
      "B. Use API Gateway to automatically propagate the change to clients, specifying 180 days in the phased deployment parameter.",
      "C. Use API Gateway to deploy a new stage named v2 to the API and provide users with its URL.",
      "D. Update the underlying Lambda function, create an Amazon CloudFront distribution with the updated Lambda function as its origin.",
    ],
    answer: [
      "C. Use API Gateway to deploy a new stage named v2 to the API and provide users with its URL.",
    ],
  },
  {
    question:
      "A program may have hundreds of users. Each user may access the application through various devices. The Developer want to give these users unique IDs regardless of the device they are using.\n\nWhich mechanism should be utilized to generate unique identifiers?",
    choices: [
      "A. Create a user table in Amazon DynamoDB as key-value pairs of users and their devices. Use these keys as unique identifiers.",
      "B. Use IAM-generated access key IDs for the users as the unique identifier, but do not store secret keys.",
      "C. Implement developer-authenticated identities by using Amazon Cognito, and get credentials for these identities.",
      "D. Assign IAM users and roles to the users. Use the unique IAM resource ID as the unique identifier.",
    ],
    answer: [
      "C. Implement developer-authenticated identities by using Amazon Cognito, and get credentials for these identities.",
    ],
  },

  {
    question: "How does AWS KMS's Envelope Encryption work?",
    choices: [
      "A. The Customer Master Key is used to encrypt/decrypt a data key. The Plaintext Data Key is used to encrypt customer data.",
      "B. Two encryption keys are used. The Customer Master Key encrypts customer data. The Data Key is used to re-encrypt the encrypted data.",
      "C. Two encryption keys are used. The Data Key encrypts customer data. The ׀¡ustomer Master Key is used to re-encrypt the encrypted data.",
      "D. The Customer Master Key is used to encrypt/decrypt a data key. The Encrypted Data Key is used to encrypt customer data.",
    ],
    answer: [
      "A. The Customer Master Key is used to encrypt/decrypt a data key. The Plaintext Data Key is used to encrypt customer data.",
    ],
  },
  {
    question:
      "A development team is now working on a case management system that will enable the processing and evaluation of medical claims. Users log in to share medical and financial information.\nSensitive data such as medical records, medical imaging, bank statements, and invoices are uploaded to Amazon S3 as part of the program. All papers must be sent and kept securely. All access to documents must be documented for auditing purposes.\n\nWhich technique is the MOST SECURE?",
    choices: [
      "A. Use S3 default encryption using Advanced Encryption Standard-256 (AES-256) on the destination bucket.",
      "B. Use Amazon Cognito for authorization and authentication to ensure the security of the application and documents.",
      "C. Use AWS Lambda to encrypt and decrypt objects as they are placed into the S3 bucket.",
      "D. Use client-side encryption/decryption with Amazon S3 and AWS KMS.",
    ],
    answer: [
      "D. Use client-side encryption/decryption with Amazon S3 and AWS KMS.",
    ],
  },
  {
    question:
      "A developer wants to monitor an application that is deployed on Amazon EC2 instances using AWS X-Ray.\n\nWhat procedures must be taken to do the monitoring?",
    choices: [
      "A. Deploy the X-Ray SDK with the application and use X-Ray annotation.",
      "B. Install the X-Ray daemon and instrument the application code.",
      "C. Install the X-Ray daemon and configure it to forward data to Amazon CloudWatch Events.",
      "D. Deploy the X-Ray SDK with the application and instrument the application code.",
    ],
    answer: [
      "B. Install the X-Ray daemon and instrument the application code.",
    ],
  },
  {
    question:
      "A development team is deploying a two-tier application in production using AWS Elastic Beanstalk. The application comprises of a load-balanced web tier and an Amazon RDS database layer. The team want to partition the RDS instance from the Elastic Beanstalk instance.\n\nHow is this possible?",
    choices: [
      "A. Use the Elastic Beanstalk CLI to disassociate the database.",
      "B. Use the AWS CLI to disassociate the database.",
      "C. Change the deployment policy to disassociate the database.",
      "D. Recreate a new Elastic Beanstalk environment without Amazon RDS.",
    ],
    answer: [
      "D. Recreate a new Elastic Beanstalk environment without Amazon RDS.",
    ],
  },
  {
    question:
      "A developer is developing a Lambda function to create and export a file. While the program is running, it needs 100 MB of temporary storage for transient files. These files are no longer required after the function has been completed.\n\nHow can the developer manage temporary files most efficiently?",
    choices: [
      "A. Store the files in EBS and delete the files at the end of the Lambda function.",
      "B. Copy the files to EFS and delete the files at the end of the Lambda function.",
      "C. Store the files in the /tmp directory and delete the files at the end of the Lambda function.",
      "D. Copy the files to an S3 bucket with a lifecycle policy to delete the files.",
    ],
    answer: [
      "C. Store the files in the /tmp directory and delete the files at the end of the Lambda function.",
    ],
  },
  {
    question:
      "A corporation is transferring its on-premises web application from a single server to AWS. To balance the demand, the firm wants to deploy numerous servers behind an Elastic Load Balancer (ELB) and to keep session data in memory on the web server. The organization does not want to lose session data in the event of a server failure or outage, and it also wants to minimize user downtime.\n\nWhere should the organization relocate session data to most effectively decrease downtime and increase the fault tolerance of customers' session data?",
    choices: [
      "A. An Amazon ElastiCache for Redis cluster",
      "B. A second Amazon EBS volume",
      "C. The web serverג€™s primary disk",
      "D. An Amazon EC2 instance dedicated to session data",
    ],
    answer: ["A. An Amazon ElastiCache for Redis cluster"],
  },
  {
    question:
      "A developer is monitoring an Amazon EC2 instance that is executing an application. The application reads data from an Amazon DynamoDB database, and the developer has created a custom Amazon CloudWatch measure with a 1 second granularity. If there are any difficulties, the developer want to be alerted through Amazon SNS within 30 seconds.\n\nWhich CloudWatch method meets this criterion?",
    choices: [
      "A. Configure a high-resolution CloudWatch alarm.",
      "B. Set up a custom AWS Lambda CloudWatch log.",
      "C. Use a Cloud Watch stream.",
      "D. Change to a default CloudWatch metric.",
    ],
    answer: ["A. Configure a high-resolution CloudWatch alarm."],
  },
  {
    question:
      "A developer is attempting to get data from the demoman-table database in Amazon DynamoDB. The developer set the AWS CLI to utilize the credentials of a particular IAM user and ran the following command:\n\nThe command produced errors and returned no rows.\n\nWhich of the following is the MOST LIKELY CAUSE of these problems?",
    choices: [
      "A. The command is incorrect; it should be rewritten to use put-item with a string argument.",
      "B. The developer needs to log a ticket with AWS Support to enable access to the demoman-table.",
      "C. Amazon DynamoDB cannot be accessed from the AWS CLI and needs to be called via the REST API.",
      "D. The IAM user needs an associated policy with read access to demoman-table.",
    ],
    answer: [
      "D. The IAM user needs an associated policy with read access to demoman-table.",
    ],
    imageUrl:
      "https://www.examtopics.com/assets/media/exam-media/03756/0017600001.jpg",
  },
  {
    question:
      "A developer is working on a mobile app and requires any changes to user profile data to be distributed to all devices that access the same identity. The developer does not wish to maintain the user profile data on a back end.\nWhat is the most efficient approach for the Developer to use Amazon Cognito to meet these requirements?",
    choices: [
      "A. Use Cognito federated identities.",
      "B. Use a Cognito user pool.",
      "C. Use Cognito Sync.",
      "D. Use Cognito events.",
    ],
    answer: ["C. Use Cognito Sync."],
  },
  {
    question:
      "A legacy program running on-premises caches data files locally and writes shared pictures to local drives.\n\nWhat is required to enable horizontal scalability during the application's migration to AWS?",
    choices: [
      "A. Modify the application to have both shared images and caching data written to Amazon EBS.",
      "B. Modify the application to read and write cache data on Amazon S3, and also store shared images on S3.",
      "C. Modify the application to use Amazon S3 for serving shared images; cache data can then be written to local disks.",
      "D. Modify the application to read and write cache data on Amazon S3, while continuing to write shared images to local disks.",
    ],
    answer: [
      "C. Modify the application to use Amazon S3 for serving shared images; cache data can then be written to local disks.",
    ],
  },

  {
    question:
      "A developer is working on a financial transaction management program. Multi-factor authentication (MFA) will be needed as part of the login protocol to increase security.\n\nWhich services are available to the developer in order to achieve these requirements?",
    choices: [
      "A. Amazon DynamoDB to store MFA session data, and Amazon SNS to send MFA codes",
      "B. Amazon Cognito with MFA",
      "C. AWS Directory Service",
      "D. AWS IAM with MFA enabled",
    ],
    answer: ["B. Amazon Cognito with MFA"],
  },
  {
    question:
      "The Lambda function below is invoked through an API request made using Amazon API Gateway. The Lambda function typically executes in less than a second.\nThe Lambda function's pseudocode is displayed in the exhibit.\n\n\nWhich two measures may be performed to increase this Lambda function's performance without raising the cost of the solution? (Select two.)",
    choices: [
      "A. Package only the modules the Lambda function requires",
      "B. Use Amazon DynamoDB instead of Amazon RDS",
      "C. Move the initialization of the variable Amazon RDS connection outside of the handler function",
      "D. Implement custom database connection pooling with the Lambda function",
      "E. Implement local caching of Amazon RDS data so Lambda can re-use the cache",
    ],
    answer: [
      "A. Package only the modules the Lambda function requires",
      "E. Implement local caching of Amazon RDS data so Lambda can re-use the cache",
    ],
  },
  {
    question:
      "A developer has constructed a huge Lambda function, but deployment encounters the following error:\nClientError: When invoking the CreateFunction action, an error occurred (InvalidParameterValueException): The unzipped file size must not exceed XXXXXXX bytes€TM, where XXXXXXXX is the current Lambda limit.\n\nWhat is the Developer's role in resolving this issue?",
    choices: [
      "A. Submit a limit increase request to AWS Support to increase the function to the size needed.",
      "B. Use a compression algorithm that is more efficient than ZIP.",
      "C. Break the function into multiple smaller Lambda functions.",
      "D. ZIP the ZIP file twice to compress it further.",
    ],
    answer: ["C. Break the function into multiple smaller Lambda functions."],
  },

  {
    question:
      "A developer is working on a financial transaction management program. Multi-factor authentication (MFA) will be needed as part of the login protocol to increase security.\n\nWhich services are available to the developer in order to achieve these requirements?",
    choices: [
      "A. Amazon DynamoDB to store MFA session data, and Amazon SNS to send MFA codes",
      "B. Amazon Cognito with MFA",
      "C. AWS Directory Service",
      "D. AWS IAM with MFA enabled",
    ],
    answer: ["D. AWS IAM with MFA enabled"],
  },
  {
    question:
      "A server-side application running on Amazon EC2 instances needs access assets contained in an Amazon S3 bucket that have been secured using AWS KMS encryption keys (SSE-KMS). To decrypt the items, the program must have access to the customer master key (CMK).\n\nWhich sequence of actions will provide access to the application? (Select two.)",
    choices: [
      "A. Write an S3 bucket policy that grants the bucket access to the key.",
      "B. Grant access to the key in the IAM EC2 role attached to the applicationג€™s EC2 instances.",
      "C. Write a key policy that enables IAM policies to grant access to the key.",
      "D. Grant access to the key in the S3 bucketג€™s ACL",
      "E. Create a Systems Manager parameter that exposes the KMS key to the EC2 instances.",
    ],
    answer: [
      "B. Grant access to the key in the IAM EC2 role attached to the applicationג€™s EC2 instances.",
      "C. Write a key policy that enables IAM policies to grant access to the key.",
    ],
  },
  {
    question:
      "Amazon Cognito is being used by a social networking firm to synchronize profiles across many mobile devices, enabling end users to enjoy a consistent experience.\n\nWhich of the following setups enables customers to be notified quietly whenever an update is ready for their other devices?",
    choices: [
      "A. Modify the user pool to include all the devices which keep them in sync.",
      "B. Use the SyncCallback interface to receive notifications on the application.",
      "C. Use an Amazon Cognito stream to analyze the data and push the notifications.",
      "D. Use the push synchronization feature with the appropriate IAM role.",
    ],
    answer: [
      "D. Use the push synchronization feature with the appropriate IAM role.",
    ],
  },
  {
    question:
      "A developer wrote configuration requirements for an AWS Elastic Beanstalk application in a file entitled healthcheckurl.yaml in their application source bundle's.ebextensions/directory. The following information is included in the file:\n\nFollowing the application's start, the health check is not executed on the right route, despite the fact that it is legitimate.\n\nHow can this configuration file be corrected?",
    choices: [
      "A. Convert the file to JSON format.",
      "B. Rename the file to a .config extension.",
      "C. Change the configuration section from options_settings to resources.",
      "D. Change the namespace of the option settings to a custom namespace.",
    ],
    answer: ["B. Rename the file to a .config extension."],
    imageUrl:
      "https://www.examtopics.com/assets/media/exam-media/03756/0008400001.png",
  },
  {
    question:
      "A developer is developing an AWS Lambda function to produce and publish a weekly newsletter to 100,000 subscribers dynamically. This mail includes both static and dynamic content. The developer need a highly scalable and quick storage location for the photographs that will be hyperlinked throughout the newsletter.\n\nWhere is the developer supposed to save these images?",
    choices: [
      "A. Use an Amazon DynamoDB table with DynamoDB Streams and read capacity auto scaling enabled.",
      "B. Use an Amazon S3 bucket and S3 Transfer Acceleration to speed up the image download.",
      "C. Use an Amazon Aurora database with a public DNS endpoint and auto scaling enabled.",
      "D. Use an Amazon S3 backed Amazon CloudFront distribution with a high Time-to-Live (TTL) to maximize caching.",
    ],
    answer: [
      "D. Use an Amazon S3 backed Amazon CloudFront distribution with a high Time-to-Live (TTL) to maximize caching.",
    ],
  },
  {
    question:
      "An application is being developed that will use Amazon SQS to handle messages from a large number of independent senders. Messages from each sender must be handled in the order in which they are received.\n\nWhich SQS functionality should the developer implement?",
    choices: [
      "A. Configure each sender with a unique MessageGroupId",
      "B. Enable MessageDeduplicationIds on the SQS queue",
      "C. Configure each message with unique MessageGroupIds.",
      "D. Enable ContentBasedDeduplication on the SQS queue",
    ],
    answer: ["A. Configure each sender with a unique MessageGroupId"],
  },
  {
    question:
      "A developer wishes to improve the performance of reads from an unencrypted Amazon S3 bucket. Each second, the program needs 100,000 read requests. Priority is given to cost-effectiveness.\n\nWhat is the MOST SIMPLE method for implementing these requirements?",
    choices: [
      "A. Create 20 or more prefixes in Amazon S3. Place files by prefixes. Read in parallel by prefixes.",
      "B. Create 20 or more AWS accounts. Create a bucket in each account. Read in parallel by bucket.",
      "C. Deploy Memcached on Amazon EC2. Cache the files in memory. Retrieve from the Memcached cache.",
      "D. Copy all files to Amazon DynamoDB. Index the files with S3 metadata. Retrieve from DynamoDB.",
    ],
    answer: [
      "A. Create 20 or more prefixes in Amazon S3. Place files by prefixes. Read in parallel by prefixes.",
    ],
  },
  {
    question:
      "A developer used Amazon API Gateway, Amazon S3, AWS Lambda, and Amazon RDS to construct a dashboard for an application. The developer need an authentication system that enables users to log in and access their dashboard. It must be available through mobile apps, desktop applications, and tablets, and it must maintain user preferences across platforms.\n\nWhich AWS service should the developer use to accommodate this situation of authentication?",
    choices: [
      "A. AWS KMS",
      "B. Amazon Cognito",
      "C. AWS Directory Service",
      "D. Amazon IAM",
    ],
    answer: ["B. Amazon Cognito"],
  },

  {
    question:
      "A business operates a two-tier application that runs on an Amazon EC2 server and manages all of its AWS-based e-commerce operations. During peak periods, the backend servers responsible for processing orders become overburdened with requests. As a consequence, certain orders are unable to be processed. A developer must provide a way for refactoring the program.\n\nWhich initiatives will provide more flexibility during peak periods while staying economically viable? (Select two.)",
    choices: [
      "A. Increase the backend T2 EC2 instance sizes to x1 to handle the largest possible load throughout the year.",
      "B. Implement an Amazon SQS queue to decouple the front-end and backend servers.",
      "C. Use an Amazon SNS queue to decouple the front-end and backend servers.",
      "D. Migrate the backend servers to on-premises and pull from an Amazon SNS queue.",
      "E. Modify the backend servers to pull from an Amazon SQS queue.",
    ],
    answer: [
      "B. Implement an Amazon SQS queue to decouple the front-end and backend servers.",
      "E. Modify the backend servers to pull from an Amazon SQS queue.",
    ],
  },
  {
    question:
      "A developer wishes to protect sensitive configuration data, including passwords, database strings, and application licensing numbers. Access to this sensitive data must be monitored for audit reasons in the future.\n\nWhere, in accordance with security best practices and operational needs, should sensitive information be stored?",
    choices: [
      "A. In an encrypted file on the source code bundle; grant the application access with Amazon IAM",
      "B. In the Amazon EC2 Systems Manager Parameter Store; grant the application access with IAM",
      "C. On an Amazon EBS encrypted volume; attach the volume to an Amazon EC2 instance to access the data",
      "D. As an object in an Amazon S3 bucket; grant an Amazon EC2 instance access with an IAM role",
    ],
    answer: [
      "B. In the Amazon EC2 Systems Manager Parameter Store; grant the application access with IAM",
    ],
  },
  {
    question:
      "A developer has been requested to modify the source code for an AWS Lambda function. AWS CloudFormation templates are used to administer the function. The template is designed to load the source code from a bucket on Amazon S3. The Developer prepared a.ZIP file deployment package containing the modifications manually and placed it in the appropriate location on Amazon S3. When the function is executed, the modifications to the code are not implemented.\n\nWhat procedure must be followed to ensure that the function is updated to reflect the changes?",
    choices: [
      "A. Delete the .ZIP file on S3, and re-upload by using a different object key name.",
      "B. Update the CloudFormation stack with the correct values for the function code properties S3Bucket, S3Key, or S3ObjectVersion.",
      "C. Ensure that the function source code is base64-encoded before uploading the deployment package to S3.",
      "D. Modify the execution role of the Lambda function to allow S3 access permission to the deployment package .ZIP file.",
    ],
    answer: [
      "B. Update the CloudFormation stack with the correct values for the function code properties S3Bucket, S3Key, or S3ObjectVersion.",
    ],
  },
  {
    question:
      "A business requires data encryption at rest but wishes to utilize an AWS managed service while maintaining control over its own master key.\n\nWhich of the following Amazon Web Services (AWS) services is appropriate for meeting these requirements?",
    choices: [
      "A. SSE with Amazon S3",
      "B. SSE with AWS KMS",
      "C. Client-side encryption",
      "D. AWS IAM roles and policies",
    ],
    answer: ["B. SSE with AWS KMS"],
  },
  {
    question:
      "A developer is creating a distributed application that will be constructed utilizing a microservices architecture and will span numerous Amazon Web Services accounts. The operations team of the business need the ability to examine and troubleshoot application problems from a centralized account.\n\nHow is the developer to adhere to these specifications?",
    choices: [
      "A. Use an Amazon X-Ray agent with role assumption to publish data into the centralized account.",
      "B. Use Amazon X-Ray and create a new IAM user to publish the access keys into the centralized account.",
      "C. Use VPC Flow Logs to collect applications logs across different accounts.",
      "D. Enable AWS CloudTrail to publish the trails in an Amazon S3 bucket in the centralized account.",
    ],
    answer: [
      "A. Use an Amazon X-Ray agent with role assumption to publish data into the centralized account.",
    ],
  },

  {
    question:
      "A developer is developing a Linux application that will be hosted on AWS Elastic Beanstalk. The application's requirements indicate that it must retain full capacity throughout upgrades while keeping costs to a minimum.\n\nWhich deployment policy for Elastic Beanstalk should the developer select for the environment?",
    choices: [
      "A. Immutable",
      "B. Rolling",
      "C. All at Once",
      "D. Rolling with additional batch",
    ],
    answer: ["D. Rolling with additional batch"],
  },
  {
    question:
      "A recent migration of a company's web, application, and NoSQL database layers to AWS. Auto Scaling is being used by the organization to scale the web and application layers.\nOver 95% of Amazon DynamoDB queries are for repeated reads.\n\nHow can the NoSQL layer of DynamoDB be scaled up to handle these repetitive requests?",
    choices: [
      "A. Amazon EMR",
      "B. Amazon DynamoDB Accelerator",
      "C. Amazon SQS",
      "D. Amazon CloudFront",
    ],
    answer: ["B. Amazon DynamoDB Accelerator"],
  },
  {
    question:
      "A developer wishes to encrypt new objects that an application uploads to an Amazon S3 bucket. There must be a record of who used the key throughout this procedure. There should be no difference in the application's performance.\n\nWhich form of encryption satisfies these criteria?",
    choices: [
      "A. Server-side encryption using S3-managed keys",
      "B. Server-side encryption with AWS KMS-managed keys",
      "C. Client-side encryption with a client-side symmetric master key",
      "D. Client-side encryption with AWS KMS-managed keys",
    ],
    answer: ["B. Server-side encryption with AWS KMS-managed keys"],
  },
  {
    question:
      "A developer is writing transactions to the €SystemUpdates€ DynamoDB database, which has five write capacity units.\n\nWhich of the following options provides the maximum read throughput?",
    choices: [
      "A. Eventually consistent reads of 5 read capacity units reading items that are 4 KB in size",
      "B. Strongly consistent reads of 5 read capacity units reading items that are 4 KB in size",
      "C. Eventually consistent reads of 15 read capacity units reading items that are 1 KB in size",
      "D. Strongly consistent reads of 15 read capacity units reading items that are 1 KB in size",
    ],
    answer: [
      "C. Eventually consistent reads of 15 read capacity units reading items that are 1 KB in size",
    ],
  },
  {
    question:
      "A smartphone application that allows users to see photographs from an S3 bucket is being developed by a developer. Users must be able to log in using their Amazon credentials as well as their Facebook® and/or Google® accounts.\nHow will the Developer be able to implement this authentication feature?",
    choices: [
      "A. Use Amazon Cognito with web identity federation.",
      "B. Use Amazon Cognito with SAML-based identity federation.",
      "C. Use AWS IAM Access/Secret keys in the application code to allow Get* on the S3 bucket.",
      "D. Use AWS STS AssumeRole in the application code and assume a role with Get* permissions on the S3 bucket.",
    ],
    answer: ["A. Use Amazon Cognito with web identity federation."],
  },

  {
    question:
      "A business created a set of APIs that are provided through the Amazon API Gateway. The API requests must be authenticated using a supplier of OpenID-based identification, such as Amazon or Facebook. Access to the APIs should be based on a specific authorisation mechanism.\n\nWhich approach is the most straightforward and secure to employ when developing an authentication and authorisation strategy for APIs?",
    choices: [
      "A. Use Amazon Cognito user pools and a custom authorizer to authenticate and authorize users based on JSON Web Tokens.",
      "B. Build a OpenID token broker with Amazon and Facebook. Users will authenticate with these identify providers and pass the JSON Web Token to the API to authenticate each API call.",
      "C. Store user credentials in Amazon DynamoDB and have the application retrieve temporary credentials from AWS STS. Make API calls by passing user credentials to the APIs for authentication and authorization.",
      "D. Use Amazon RDS to store user credentials and pass them to the APIs for authentications and authorization.",
    ],
    answer: [
      "A. Use Amazon Cognito user pools and a custom authorizer to authenticate and authorize users based on JSON Web Tokens.",
    ],
  },
  {
    question:
      "When a Developer attempts to execute an AWS CodeBuild project, an error occurs because the cumulative length of all environment variables exceeds the maximum character limit.\n\nWhat is the suggested course of action?",
    choices: [
      "A. Add the export LC_ALL=ג€en_US.utf8ג€ command to the pre_build section to ensure POSIX localization.",
      "B. Use Amazon Cognito to store key-value pairs for large numbers of environment variables.",
      "C. Update the settings for the build project to use an Amazon S3 bucket for large numbers of environment variables.",
      "D. Use AWS Systems Manager Parameter Store to store large numbers of environment variables.",
    ],
    answer: [
      "D. Use AWS Systems Manager Parameter Store to store large numbers of environment variables.",
    ],
  },
  {
    question:
      "A developer has developed an application that can concurrently upload tens of thousands of items to Amazon S3 under a single AWS account. As part of the new criteria, data stored in S3 must be encrypted on the server using AWS KMS (SSE-KMS). After making this update, the application's performance degrades.\n\nWhich of the following is the MOST LIKELY source of application latency?",
    choices: [
      "A. Amazon S3 throttles the rate at which uploaded objects can be encrypted using Customer Master Keys.",
      "B. The AWS KMS API calls limit is less than needed to achieve the desired performance.",
      "C. The client encryption of the objects is using a poor algorithm.",
      "D. KMS requires that an alias be used to create an independent display name that can be mapped to a CMK.",
    ],
    answer: [
      "B. The AWS KMS API calls limit is less than needed to achieve the desired performance.",
    ],
  },
  {
    question:
      "A business has a website built in PHP and WordPress and is hosted on AWS Elastic Beanstalk. The website requires a new version to be deployed in the Elastic Beanstalk environment. The firm cannot afford to have the website unavailable in the event of an update failure. Deployments must have a negligible effect and be reversible as quickly as feasible.\n\nWhich type of deployment should be used?",
    choices: ["A. All at once", "B. Rolling", "C. Snapshots", "D. Immutable"],
    answer: ["D. Immutable"],
  },
  {
    question:
      "A developer is developing an AWS Lambda function to handle data coming from an Amazon Kinesis Data Stream. When the Lambda function parses the data and comes across an empty field, it returns an error. The function duplicates the records in the Kinesis stream. There are no duplicate entries when the Developer examines the stream output without using the Lambda function.\n\nWhat accounts for the duplicates?",
    choices: [
      "A. The Lambda function did not advance the Kinesis stream pointer to the next record after the error.",
      "B. The Lambda event source used asynchronous invocation, resulting in duplicate records.",
      "C. The Lambda function did not handle the error, and the Lambda service attempted to reprocess the data.",
      "D. The Lambda function is not keeping up with the amount of data coming from the stream.",
    ],
    answer: [
      "C. The Lambda function did not handle the error, and the Lambda service attempted to reprocess the data.",
    ],
  },

  {
    question:
      "The code of a developer is saved in an Amazon S3 bucket. The code must be distributed across many AWS Lambda accounts in the same Region as the S3 bucket as an AWS Lambda function. The Lambda function will be launched using a custom AWS CloudFormation template for each account.\n\nWhat is the MOST SECURE method for granting access to Lambda code stored in an S3 bucket?",
    choices: [
      "A. Grant the CloudFormation execution role S3 list and get permissions. Add a bucket policy to Amazon S3 with the Principal of ג€AWSג€: [account numbers]",
      "B. Grant the CloudFormation execution role S3 get permissions. Add a bucket policy to Amazon S3 with the Principal of ג€*ג€.",
      "C. Use a service-based link to grant the Lambda function S3 list and get permissions by explicitly adding the S3 bucketג€™s account number in the resource.",
      "D. Use a service-based link to grant the Lambda function S3 get permissions and add a Resource of ג€*ג€ to allow access to the S3 bucket.",
    ],
    answer: [
      "A. Grant the CloudFormation execution role S3 list and get permissions. Add a bucket policy to Amazon S3 with the Principal of ג€AWSג€: [account numbers]",
    ],
  },
  {
    question:
      "A developer creates an AWS Lambda function and uploads it to Amazon S3 in the form of a.ZIP file. The developer modifies the code and sends an updated.ZIP file to Amazon S3. Lambda, on the other hand, runs the preceding code.\n\nHow can the Developer resolve this in the LEAST obtrusive manner possible?",
    choices: [
      "A. Create another Lambda function and specify the new .ZIP file.",
      "B. Call the update-function-code API.",
      "C. Remove the earlier .ZIP file first, then add the new .ZIP file.",
      "D. Call the create-alias API.",
    ],
    answer: ["B. Call the update-function-code API."],
  },
  {
    question:
      "A supplier is now developing a new RESTful API that will allow consumers to inquire the status of their orders. The following API endpoint was requested by the consumers.\nhttp://www.supplierdomain.com/status/customerID\n\nWhich of the following application architectures satisfies the specification? (Select two.)",
    choices: [
      "A. Amazon SQS; Amazon SNS",
      "B. Elastic Load Balancing; Amazon EC2",
      "C. Amazon ElastiCache; Amazon Elacticsearch Service",
      "D. Amazon API Gateway; AWS Lambda",
      "E. Amazon S3; Amazon CloudFront",
    ],
    answer: [
      "B. Elastic Load Balancing; Amazon EC2",
      "E. Amazon S3; Amazon CloudFront",
    ],
  },
  {
    question:
      "A developer wishes to activate AWS X-Ray for a secure application hosted on Amazon ECS.\n\nWhich sequence of actions enables X-Ray? (Select three.)",
    choices: [
      "A. Create a Docker image that runs the X-Ray daemon.",
      "B. Add instrumentation to the application code for X-Ray.",
      "C. Install the X-Ray daemon on the underlying EC2 instance.",
      "D. Configure and use an IAM EC2 instance role.",
      "E. Register the application with X-Ray.",
      "F. Configure and use an IAM role for tasks.",
    ],
    answer: [
      "A. Create a Docker image that runs the X-Ray daemon.",
      "B. Add instrumentation to the application code for X-Ray.",
      "F. Configure and use an IAM role for tasks.",
    ],
  },
  {
    question:
      "A developer is hard at work on a project that would store hundreds of millions of product reviews in an Amazon DynamoDB database. The records include the following data elements:\n\n\nWhich field would provide the MOST consistent performance when used as the partition key in DynamoDB?",
    choices: ["A. starRating", "B. reviewID", "C. comment", "D. productID"],
    answer: ["D. productID"],
    imageUrl:
      "https://www.examtopics.com/assets/media/exam-media/03756/0000300001.png",
  },

  {
    question:
      "A developer has created a Lambda function that will be responsible for adding new customers to an RDS database hundreds of times per hour. Lambda is set to use 512MB of RAM and is based on the following pseudocode:\n\nThe developer observes that the Lambda execution time is much longer than intended after testing the Lambda function.\n\nWhat actions should the developer take to boost performance?",
    choices: [
      "A. Increase the amount of RAM allocated to the Lambda function, which will increase the number of threads the Lambda can use.",
      "B. Increase the size of the RDS database to allow for an increased number of database connections each hour.",
      "C. Move the database connection and close statement out of the handler. Place the connection in the global space.",
      "D. Replace RDS wit Amazon DynamoDB to implement control over the number of writes per second.",
    ],
    answer: [
      "C. Move the database connection and close statement out of the handler. Place the connection in the global space.",
    ],
    imageUrl:
      "https://www.examtopics.com/assets/media/exam-media/03756/0000600001.png",
  },
  {
    question:
      "A development team chooses to utilize AWS X-Ray to monitor application code in order to undertake performance analysis and root cause investigation.\n\nWhat steps must the team take to begin using X-Ray? (Select two.)",
    choices: [
      "A. Log instrumentation output into an Amazon SQS queue.",
      "B. Use a visualization tool to view application traces.",
      "C. Instrument application code using the AWS SDK.",
      "D. Install the X-Ray agent on the application servers.",
      "E. Create an Amazon DynamoDB table to store the trace logs.",
    ],
    answer: [
      "C. Instrument application code using the AWS SDK.",
      "D. Install the X-Ray agent on the application servers.",
    ],
  },
  {
    question:
      "Lambda functions are packaged for deployment in a variety of settings, such as development, test, and production. Each ecosystem is endowed with its own collection of resources, such as databases.\n\nHow can the Lambda function make use of the current environment's resources?",
    choices: [
      "A. Apply tags to the Lambda functions.",
      "B. Hardcore resources in the source code.",
      "C. Use environment variables for the Lambda functions.",
      "D. Use separate function for development and production.",
    ],
    answer: ["C. Use environment variables for the Lambda functions."],
  },
  {
    question:
      "A business wishes to relocate its web application to AWS and use Auto Scaling to manage peak demands. According to the Solutions Architect, the optimum measure for an Auto Scaling event is the concurrent user count.\n\nWhat information should the developer utilize to determine how to autoscale depending on concurrent users?",
    choices: [
      "A. An Amazon SNS topic to be triggered when a concurrent user threshold is met",
      "B. An Amazon Cloudwatch Networkin metric",
      "C. Amazon CloudFront to leverage AWS Edge Locations",
      "D. A Custom Amazon CloudWatch metric for concurrent users.",
    ],
    answer: ["D. A Custom Amazon CloudWatch metric for concurrent users."],
  },
  {
    question:
      "To facilitate the adoption of microservices, a company's management team has directed all development teams to design their services in such a way that API queries are limited to the data store for that service. One team is developing its own Payments service with its own database; the service requires data from the Accounts database. Both instances make use of Amazon DynamoDB.\n\nWhich technique will result in the simplest, most decoupled, and most reliable mechanism for obtaining near-real-time Accounts database updates?",
    choices: [
      "A. Use Amazon Glue to perform frequent ETL updates from the Accounts database to the Payments database.",
      "B. Use Amazon ElastiCache in Payments, with the cache updated by triggers in the Accounts database.",
      "C. Use Amazon Kinesis Data Firehose to deliver all changes from the Accounts database to the Payments database.",
      "D. Use Amazon DynamoDB Streams to deliver all changes from the Accounts database to the Payments database.",
    ],
    answer: [
      "D. Use Amazon DynamoDB Streams to deliver all changes from the Accounts database to the Payments database.",
    ],
  },

  {
    question:
      "An on-premises application makes regular requests to Amazon S3 for file storage. As the application's use grows, €LimitExceeded€ faults are reported.\n\nWhat has to be done to resolve this error?",
    choices: [
      "A. Implement exponential backoffs in the application.",
      "B. Load balance the application to multiple servers.",
      "C. Move the application to Amazon EC2.",
      "D. Add a one second delay to each API call.",
    ],
    answer: ["A. Implement exponential backoffs in the application."],
  },
  {
    question:
      "A batch job runs every night, loading 1 million new records into a DynamoDB table. The records are only required for one hour, and the table must be empty by the batch job the following night.\nWhich strategy is the MOST EFFECTIVE and COST-EFFECTIVE for supplying an empty table?",
    choices: [
      "A. Use DeleteItem using a ConditionExpression.",
      "B. Use BatchWriteItem to empty all of the rows.",
      "C. Write a recursive function that scans and calls out DeleteItem.",
      "D. Create and then delete the table after the task has completed.",
    ],
    answer: [
      "D. Create and then delete the table after the task has completed.",
    ],
  },
  {
    question:
      "A developer ran an AWS CLI command and encountered the following error:\n\n\nWhat step should the developer take to make this mistake understandable to humans?",
    choices: [
      "A. Make a call to AWS KMS to decode the message.",
      "B. Use the AWS STS decode-authorization-message API to decode the message.",
      "C. Use an open source decoding library to decode the message.",
      "D. Use the AWS IAM decode-authorization-message API to decode this message.",
    ],
    answer: [
      "B. Use the AWS STS decode-authorization-message API to decode the message.",
    ],
    imageUrl:
      "https://www.examtopics.com/assets/media/exam-media/03756/0002800001.png",
  },
  {
    question:
      "A gaming application saves player scores in an Amazon DynamoDB database with the following four columns: user id, user name, user score, and user rank. Users are only permitted to edit their names. Web identity federation authenticates a user.\n\nWhich set of criteria should be put to the dynamodb: PutItem API call's policy associated with the role?\nA.\n\nB.\n\nC.\n\nD.",
    choices: [
      "A. https://www.examtopics.com/assets/media/exam-media/03756/0014600001.png",
      "B. https://www.examtopics.com/assets/media/exam-media/03756/0014700001.png",
      "C. https://www.examtopics.com/assets/media/exam-media/03756/0014700002.png",
      "D. https://www.examtopics.com/assets/media/exam-media/03756/0014700003.png",
    ],
    answer: [
      "C. https://www.examtopics.com/assets/media/exam-media/03756/0014700002.png",
    ],
  },
  {
    question:
      "A developer has created an application that makes use of Amazon Cognito's authentication and authorisation capabilities. When a user logs in successfully, the application produces a user record in an Amazon DynamoDB database.\n\nHow should the user be authenticated and a record created in the DynamoDB table?",
    choices: [
      "A. Authenticate and get a token from an Amazon Cognito user pool. Use the token to access DynamoDB.",
      "B. Authenticate and get a token from an Amazon Cognito identity pool. Use the token to access DynamoDB.",
      "C. Authenticate and get a token from an Amazon Cognito user pool. Exchange the token for AWS credentials with an Amazon Cognito identity pool. Use the credentials to access DynamoDB.",
      "D. Authenticate and get a token from an Amazon Cognito identity pool. Exchange the token for AWS credentials with an Amazon Cognito user pool. Use the credentials to access DynamoDB.",
    ],
    answer: [
      "C. Authenticate and get a token from an Amazon Cognito user pool. Exchange the token for AWS credentials with an Amazon Cognito identity pool. Use the credentials to access DynamoDB.",
    ],
  },

  {
    question:
      "A developer must alter an Alexa skill that is powered by an AWS Lambda function in order to provide access to an Amazon DynamoDB database in a second account. A role has been established in the second account with rights to access the table.\n\nWhat method should be used to access the table?",
    choices: [
      "A. Modify the Lambda function execution roleג€™s permissions to include the new role.",
      "B. Change the Lambda function execution role to be the new role.",
      "C. Assume the new role in the Lambda function when accessing the table.",
      "D. Store the access key and the secret key for the new role and use then when accessing the table.",
    ],
    answer: [
      "C. Assume the new role in the Lambda function when accessing the table.",
    ],
  },
  {
    question:
      "A business has developed a Java AWS Lambda function that will be invoked whenever a user uploads an image to an Amazon S3 bucket. The code changes the original picture to a variety of various formats before copying the generated photos to another Amazon S3 bucket.\nNo photos are being transferred to the second Amazon S3 bucket, as discovered by the developers. They evaluated the code on an Amazon EC2 instance with 1GB of RAM and discovered that it runs in an average of 500 seconds.\n\nWhich of the following is the MOST LIKELY source of the problem?",
    choices: [
      "A. The Lambda function has insufficient memory and needs to be increased to 1 GB to match the Amazon EC2 instance",
      "B. Files need to be copied to the same Amazon S3 bucket for processing, so the second bucket needs to be deleted.",
      "C. Lambda functions have a maximum execution limit of 300 seconds, therefore the function is not completing.",
      "D. There is a problem with the Java runtime for Lambda, and the function needs to be converted to node.js.",
    ],
    answer: [
      "C. Lambda functions have a maximum execution limit of 300 seconds, therefore the function is not completing.",
    ],
  },
  {
    question:
      "A developer is combining an Amazon API Gateway with an AWS Lambda function in order to create an application. When the developer attempts to use the API, he or she gets the following error:\nWed Nov 08 01:13:00 UTC 2017 : Method completed with status: 502\n\nWhat is the developer's responsibility in resolving the error?",
    choices: [
      "A. Change the HTTP endpoint of the API to an HTTPS endpoint",
      "B. Change the format of the payload sent to the API Gateway",
      "C. Change the format of the Lambda function response to the API call",
      "D. Change the authorization header in the API call to access the Lambda function",
    ],
    answer: [
      "C. Change the format of the Lambda function response to the API call",
    ],
  },
  {
    question:
      "A gaming firm is in the process of creating a mobile game application for the iOS® and Android® operating systems. This mobile game encrypts user data and keeps it locally on the device.\nThe firm wants to enable consumers to play the game on numerous devices, which necessitates data synchronization between platforms.\n\nWhich service should be utilized to synchronize user data across devices without requiring a backend application to be created?",
    choices: [
      "A. AWS Lambda",
      "B. Amazon S3",
      "C. Amazon DynamoDB",
      "D. Amazon Cognito",
    ],
    answer: ["D. Amazon Cognito"],
  },
  {
    question:
      "A program at a company logs all information to Amazon S3. Every time a new log file is created, an AWS Lambda function is called to process it. The code works and collects all of the essential data. When looking through the Lambda function logs, however, duplicate entries with the same request ID are discovered.\nWhat's the source of the duplicate entries?",
    choices: [
      "A. The S3 bucket name was specified incorrectly.",
      "B. The Lambda function failed, and the Lambda service retried the invocation with a delay.",
      "C. There was an S3 outage, which caused duplicate entries of the same log file.",
      "D. The application stopped intermittently and then resumed.",
    ],
    answer: [
      "B. The Lambda function failed, and the Lambda service retried the invocation with a delay.",
    ],
  },

  {
    question:
      "A developer has been tasked with the responsibility of developing a real-time dashboard web application that visualizes the key prefixes and storage capacity of items stored in Amazon S3 buckets.\nThe Amazon S3 metadata will be stored in Amazon DynamoDB.\n\nWhat is the most cost-effective and best solution for keeping the real-time dashboard current with the condition of the objects in the Amazon S3 buckets?",
    choices: [
      "A. Use an Amazon CloudWatch event backed by an AWS Lambda function. Issue an Amazon S3 API call to get a list of all Amazon S3 objects and persist the metadata within DynamoDB. Have the web application poll the DynamoDB table to reflect this change.",
      "B. Use Amazon S3 Event Notification backed by a Lambda function to persist the metadata into DynamoDB. Have the web application poll the DynamoDB table to reflect this change.",
      "C. Run a cron job within an Amazon EC2 instance to list all objects within Amazon S3 and persist the metadata into DynamoDB. Have the web application poll the DynamoDB table to reflect this change.",
      "D. Create a new Amazon EMR cluster to get all the metadata about Amazon S3 objects; persist the metadata into DynamoDB. Have the web application poll the DynamoDB table to reflect this change.",
    ],
    answer: [
      "B. Use Amazon S3 Event Notification backed by a Lambda function to persist the metadata into DynamoDB. Have the web application poll the DynamoDB table to reflect this change.",
    ],
  },
  {
    question:
      "On AWS Lambda, a developer is developing an image microservice. The service relies on a number of libraries that are not included in the Lambda runtime environment.\n\nWhich approach should the developer choose while developing the Lambda deployment package?",
    choices: [
      "A. Create a ZIP file with the source code and all dependent libraries.",
      "B. Create a ZIP file with the source code and a script that installs the dependent libraries at runtime.",
      "C. Create a ZIP file with the source code. Stage the dependent libraries on an Amazon S3 bucket indicated by the Lambda environment variable LD_LIBRARY_PATH",
      "D. Create a ZIP file with the source code and a buildspec.yaml file that installs the dependent libraries on AWS Lambda.",
    ],
    answer: [
      "A. Create a ZIP file with the source code and all dependent libraries.",
    ],
  },
  {
    question:
      "Which of the following are effective use cases for Amazon ElastiCache? (Select two.)",
    choices: [
      "A. Improve the performance of S3 PUT operations.",
      "B. Improve the latency of deployments performed by AWS CodeDeploy.",
      "C. Improve latency and throughput for read-heavy application workloads.",
      "D. Reduce the time required to merge AWS CodeCommit branches.",
      "E. Improve performance of compute-intensive applications.",
    ],
    answer: [
      "C. Improve latency and throughput for read-heavy application workloads.",
      "E. Improve performance of compute-intensive applications.",
    ],
  },
  {
    question:
      "A developer is developing a web application that requires authentication but also requires guest access in order to allow restricted access to users who do not want to login.\n\nWhich service can assist the application in allowing guest access?",
    choices: [
      "A. IAM temporary credentials using AWS STS.",
      "B. Amazon Directory Service",
      "C. Amazon Cognito with unauthenticated access enabled",
      "D. IAM with SAML integration",
    ],
    answer: ["C. Amazon Cognito with unauthenticated access enabled"],
  },
  {
    question:
      "A web application is developed to enable new users to register using their email addresses. The program will store user characteristics and anticipates millions of users signing up.\n\nWhat should the developer do to accomplish the design objectives?",
    choices: [
      "A. Amazon Cognito user pools",
      "B. AWS Mobile Hub user data storage",
      "C. Amazon Cognito Sync",
      "D. AWS Mobile Hub cloud logic",
    ],
    answer: ["A. Amazon Cognito user pools"],
  },

  {
    question:
      "A business is transferring its on-premises MySQL database to Amazon RDS for MySQL. The firm has read-intensive workloads and wants to ensure that its code is refactored to obtain the best possible read performance for its queries.\n\nHow is this aim to be accomplished?",
    choices: [
      "A. Add database retries to effectively use RDS with vertical scaling",
      "B. Use RDS with multi-AZ deployment",
      "C. Add a connection string to use an RDS read replica for read queries",
      "D. Add a connection string to use a read replica on an EC2 instance.",
    ],
    answer: [
      "C. Add a connection string to use an RDS read replica for read queries",
    ],
  },
  {
    question:
      "Each day, a business runs an application that is responsible for processing several thousand external callbacks. The company's system administrators want to know the total number of calls received on a rolling basis, and they want this data to be accessible for a period of ten days.\nAdditionally, the organization want to be able to send automatic notifications when the number of callbacks surpasses predefined criteria.\n\nWhat is the MOST cost-effective method for tracking and alerting on these statistics?",
    choices: [
      "A. Push callback data to an Amazon RDS database that can be queried to show historical data and to alert on exceeded thresholds.",
      "B. Push callback data to AWS X-Ray and use AWS Lambda to query, display, and alert on exceeded thresholds.",
      "C. Push callback data to Amazon Kinesis Data Streams and invoke an AWS Lambda function that stores data in Amazon DynamoDB and sends the required alerts.",
      "D. Push callback data to Amazon CloudWatch as a custom metric and use the CloudWatch alerting mechanisms to alert System Administrators.",
    ],
    answer: [
      "D. Push callback data to Amazon CloudWatch as a custom metric and use the CloudWatch alerting mechanisms to alert System Administrators.",
    ],
  },
  {
    question:
      "A business has an internet-facing application that makes use of Web Identity Federation to receive a temporary credential from Amazon Web Services Security Token Service (AWS STS).\nThe application then makes use of the token to get access to AWS services.\nTake a look at the following response:\n\n\nWhich rights are connected with the application's call, based on the answer displayed?",
    choices: [
      "A. Permissions associated with the role AROACLKWSDQRAOEXAMPLE:app1",
      "B. Permissions associated with the default role used when the AWS service was built",
      "C. Permission associated with the IAM principal that owns the AccessKeyID ASgeIAIOSFODNN7EXAMPLE",
      "D. Permissions associated with the account that owns the AWS service",
    ],
    answer: [
      "A. Permissions associated with the role AROACLKWSDQRAOEXAMPLE:app1",
    ],
    imageUrl:
      "https://www.examtopics.com/assets/media/exam-media/03756/0005900001.jpg",
  },
  {
    question:
      "AWS Elastic Beanstalk applications must be deployed in several regions and each region requires a unique Amazon Machine Image (AMI).\n\nWhich AWS CloudFormation template key should be used to define the region-specific AMI?",
    choices: ["A. Parameters", "B. Outputs", "C. Mappings", "D. Resources"],
    answer: ["C. Mappings"],
  },
  {
    question:
      "On AWS, an application makes use of third-party APIs. The developer needs to monitor API faults in the code and wants to be notified when the number of failures exceeds a predefined threshold.\n\nHow is the Developer going to fulfill these requirements?",
    choices: [
      "A. Publish a custom metric on Amazon CloudWatch and use Amazon SES for notification.",
      "B. Use an Amazon CloudWatch API-error metric and use Amazon SNS for notification.",
      "C. Use an Amazon CloudWatch API-error metric and use Amazon SES for notification.",
      "D. Publish a custom metric on Amazon CloudWatch and use Amazon SNS for notification.",
    ],
    answer: [
      "D. Publish a custom metric on Amazon CloudWatch and use Amazon SNS for notification.",
    ],
  },

  {
    question:
      "It takes 40 seconds for an application to process instructions received through Amazon SQS message.\n\nAssuming the SQS queue is set with the default VisibilityTimeout value, what is the BEST approach to guarantee that no other instances may obtain a message that has already been handled or is still being processed after it is received?",
    choices: [
      "A. Use the ChangeMessageVisibility API to increase the VisibilityTimeout, then use the DeleteMessage API to delete the message.",
      "B. Use the DeleteMessage API call to delete the message from the queue, then call DeleteQueue API to remove the queue.",
      "C. Use the ChangeMessageVisibility API to decrease the timeout value, then use the DeleteMessage API to delete the message.",
      "D. Use the DeleteMessageVisibility API to cancel the VisibilityTimeout, then use the DeleteMessage API to delete the message.",
    ],
    answer: [
      "A. Use the ChangeMessageVisibility API to increase the VisibilityTimeout, then use the DeleteMessage API to delete the message.",
    ],
  },
  {
    question:
      "A developer constructed a Lambda function for the backend of a web application. When the Lambda function is tested using the AWS Lambda interface, the developer can see that it is being performed, but no log data is created in Amazon CloudWatch Logs, even after several minutes.\n\nWhat may have resulted in this situation?",
    choices: [
      "A. The Lambda function does not have any explicit log statements for the log data to send it to CloudWatch Logs.",
      "B. The Lambda function is missing CloudWatch Logs as a source trigger to send log data.",
      "C. The execution role for the Lambda function is missing permissions to write log data to the CloudWatch Logs.",
      "D. The Lambda function is missing a target CloudWatch Log group.",
    ],
    answer: [
      "C. The execution role for the Lambda function is missing permissions to write log data to the CloudWatch Logs.",
    ],
  },
  {
    question:
      "An application will consume data at a rapid rate from a variety of sources and must store it in an Amazon S3 bucket.\n\nWhich service would be the most effective in accomplishing this task?",
    choices: [
      "A. Amazon Kinesis Firehose",
      "B. Amazon S3 Acceleration Transfer",
      "C. Amazon SQS",
      "D. Amazon SNS",
    ],
    answer: ["A. Amazon Kinesis Firehose"],
  },
  {
    question:
      "Which approaches will aid in mitigating this circumstance? (Select two.)",
    choices: [
      "A. Implement retries with exponential backoff",
      "B. Use a PutRecord API instead of PutRecords",
      "C. Reduce the frequency and/or size of the requests",
      "D. Use Amazon SNS instead of Kinesis",
      "E. Reduce the number of KCL consumers",
    ],
    answer: [
      "A. Implement retries with exponential backoff",
      "C. Reduce the frequency and/or size of the requests",
    ],
    imageUrl:
      "https://www.examtopics.com/assets/media/exam-media/03756/0016900001.png",
  },
  {
    question:
      "A developer is creating a fault-tolerant environment that will store client sessions.\n\nHow can the developer assure that no sessions are lost in the event of a failure of an Amazon EC2 instance?",
    choices: [
      "A. Use sticky sessions with an Elastic Load Balancer target group.",
      "B. Use Amazon SQS to save session data.",
      "C. Use Amazon DynamoDB to perform scalable session handling.",
      "D. Use Elastic Load Balancer connection draining to stop sending requests to failing instances.",
    ],
    answer: ["C. Use Amazon DynamoDB to perform scalable session handling."],
  },

  {
    question:
      "A developer is developing an application's authentication and authorisation mechanisms. The developer must take care that user credentials are never made public.\n\nHow should the developer tackle this requirement?",
    choices: [
      "A. Store the user credentials in Amazon DynamoDB. Build an AWS Lambda function to validate the credentials and authorize users.",
      "B. Deploy a custom authentication and authorization API on an Amazon EC2 instance. Store the user credentials in Amazon S3 and encrypt the credentials using Amazon S3 server-side encryption.",
      "C. Use Amazon Cognito to configure a user pool, and user the Cognito API to authenticate and authorize the user.",
      "D. Store the user credentials in Amazon RDS. Enable the encryption option for the Amazon RDS DB instances. Build an API using AWS Lambda to validate the credentials and authorize users.",
    ],
    answer: [
      "C. Use Amazon Cognito to configure a user pool, and user the Cognito API to authenticate and authorize the user.",
    ],
  },
  {
    question:
      "A business maintains an AWS CloudFormation template in the form of a single file. The template is capable of launching and establishing a whole infrastructure stack.\n\nWhich best practice would improve the template's maintainability?",
    choices: [
      "A. Use nested stacks for common template patterns.",
      "B. Embed credentials to prevent typos.",
      "C. Remove mappings to decrease the number of variables.",
      "D. Use AWS::Include to reference publicly-hosted template files.",
    ],
    answer: ["A. Use nested stacks for common template patterns."],
  },
  {
    question:
      "On AWS, a developer is developing a new sophisticated application. The application is composed of a number of microservices that are hosted on Amazon EC2. The developer want to ascertain which microservice incurs the most amount of delay while processing a request.\n\nWhich technique should the developer use to determine this?",
    choices: [
      "A. Instrument each microservice request using the AWS X-Ray SDK. Examine the annotations associated with the requests.",
      "B. Instrument each microservice request using the AWS X-Ray SDK. Examine the subsegments associated with the requests.",
      "C. Instrument each microservice request using the AWS X-Ray SDK. Examine the Amazon CloudWatch EC2 instance metrics associated with the requests.",
      "D. Instrument each microservice request using the Amazon CloudWatch SDK. Examine the CloudWatch EC2 instance metrics associated with the requests.",
    ],
    answer: [
      "B. Instrument each microservice request using the AWS X-Ray SDK. Examine the subsegments associated with the requests.",
    ],
  },
  {
    question:
      "A deployment package utilizes the AWS CLI to put files into any S3 bucket in the account, using environment variables to keep access keys. The package is operating on Amazon EC2 instances that have been updated to run with an assumed IAM role and a more restricted policy that restricts access to a single bucket. Following the update, the Developer login into the host and retains the ability to write to all of the account's S3 buckets.\n\nWhat is the MOST LIKELY REASON for this occurrence?",
    choices: [
      "A. An IAM inline policy is being used on the IAM role",
      "B. An IAM managed policy is being used on the IAM role",
      "C. The AWS CLI is corrupt and needs to be reinstalled",
      "D. The AWS credential provider looks for instance profile credentials last",
    ],
    answer: [
      "D. The AWS credential provider looks for instance profile credentials last",
    ],
  },
  {
    question:
      "A business requires a new REST API that can deliver data on the contents of an Amazon S3 bucket, such as the number of items stored inside. The organization has opted to build the new API as a microservice and to use AWS Lambda and Amazon API Gateway.\n\nHow could the developer verify that the microservice gets access to the required Amazon S3 bucket while keeping to security best practices?",
    choices: [
      "A. Create an IAM user that has permissions to access the Amazon S3 bucket, and store the IAM user credentials in the Lambda function source code.",
      "B. Create an IAM role that has permissions to access the Amazon S3 bucket and assign it to the Lambda function as its execution role.",
      "C. Create an Amazon S3 bucket policy that specifies the Lambda service as its principal and assign it to the Amazon S3 bucket.",
      "D. Create an IAM role, attach the AmazonS3FullAccess managed policy to it, and assign the role to the Lambda function as its execution role.",
    ],
    answer: [
      "B. Create an IAM role that has permissions to access the Amazon S3 bucket and assign it to the Lambda function as its execution role.",
    ],
  },

  {
    question:
      "A developer is tasked with the task of developing a mobile application on a shoestring budget. The solution needs a scalable service that enables clients to register and authenticate for the mobile application utilizing the organization's existing SAML 2.0 identity provider.\n\nWhich Amazon Web Services (AWS) offering should be utilized to fulfill these requirements?",
    choices: [
      "A. AWS Lambda",
      "B. Amazon Cognito",
      "C. AWS IAM",
      "D. Amazon EC2",
    ],
    answer: ["B. Amazon Cognito"],
  },
  {
    question:
      "A developer is developing a mobile application that will operate without requiring users to log in.\n\nWhich approach is the MOST EFFECTIVE for granting people access to AWS resources?",
    choices: [
      "A. Use an identity provider to securely authenticate with the application.",
      "B. Create an AWS Lambda function to create an IAM user when a user accesses the application.",
      "C. Create credentials using AWS KMS and apply these credentials to users when using the application.",
      "D. Use Amazon Cognito to associate unauthenticated users with an IAM role that has limited access to resources.",
    ],
    answer: [
      "D. Use Amazon Cognito to associate unauthenticated users with an IAM role that has limited access to resources.",
    ],
  },
  {
    question:
      "A developer has built an S3 bucket called s3:/mycoolapp and configured server-wide logging with a path of s3:/mycoolapp/logs. The developer copied 100 KB of Cascading Style Sheets (CSS) files to the subdirectory s3:/mycoolapp/css and then ceased work. When the developer returned a few days later, the bucket had grown to 50 GB in size.\n\nWhat is the MOST LIKELY REASON for this occurrence?",
    choices: [
      "A. The CSS files were not compressed and S3 versioning was enabled.",
      "B. S3 replication was enabled on the bucket.",
      "C. Logging into the same bucket caused exponential log growth.",
      "D. An S3 lifecycle policy has moved the entire CSS file to S3 Infrequent Access.",
    ],
    answer: ["C. Logging into the same bucket caused exponential log growth."],
  },
  {
    question:
      "A developer is developing a new application that will be accessible to users through an Amazon API Gateway-created API. The users must be validated using the Security Assertion Markup Language (SAML) by a third-party identity provider. After users have been validated, they will need access to further AWS services, such as Amazon S3 and Amazon DynamoDB.\n\nHow are these stipulations to be met?",
    choices: [
      "A. Use an Amazon Cognito user pool with SAML as the resource server.",
      "B. Use Amazon Cognito identity pools with a SAML identity provider as one of the authentication providers.",
      "C. Use the AWS IAM service to provide the sign-up and sign-in functionality.",
      "D. Use Amazon CloudFront signed URLs to connect with the SAML identity provider.",
    ],
    answer: [
      "B. Use Amazon Cognito identity pools with a SAML identity provider as one of the authentication providers.",
    ],
  },
  {
    question:
      "A developer is building a serverless website containing HTML files, photos, videos, and JavaScript content (client-side scripts).\nWhich service combination should the Developer utilize to build the website?",
    choices: [
      "A. Amazon S3 and Amazon CloudFront",
      "B. Amazon EC2 and Amazon ElastiCache",
      "C. Amazon ECS and Redis",
      "D. AWS Lambda and Amazon API Gateway",
    ],
    answer: ["A. Amazon S3 and Amazon CloudFront"],
  },
  {
    question:
      "Where should the appspec.yml file be stored for AWS CodeDeploy to function properly?",
    choices: [
      "A. In the root of the application source code directory structure",
      "B. In the bin folder along with all the complied code",
      "C. In an S3 bucket",
      "D. In the same folder as the application configuration files",
    ],
    answer: [
      "A. In the root of the application source code directory structure",
    ],
  },
  {
    question:
      "A developer is developing a serverless web application and managing many development branches. The developer want to avoid having to update the Amazon API Gateway target endpoint with each new code push.\n\nWhich solution would enable the developer to efficiently submit code without having to update the API Gateway?",
    choices: [
      "A. Associate different AWS Lambda functions to an API Gateway target endpoint.",
      "B. Create different stages in API Gateway, then associate API Gateway with AWS Lambda.",
      "C. Create aliases and versions in AWS Lambda.",
      "D. Tag the AWS Lambda functions with different names.",
    ],
    answer: ["C. Create aliases and versions in AWS Lambda."],
  },
  {
    question:
      "AWS Lambda produces a 3MB JSON file on a daily basis and then uploads it to an Amazon S3 bucket. Because the file includes sensitive information, the Developer must encrypt it before to uploading it to the bucket.\n\nWhich of the following should the Developer change to guarantee that the data is encrypted before being uploaded to the bucket?",
    choices: [
      "A. Use the default AWS KMS customer master key for S3 in the Lambda function code.",
      "B. Use the S3 managed key and call the GenerateDataKey API to encrypt the file.",
      "C. Use the GenerateDateKey API, then use that data key to encrypt the file in the Lambda function code.",
      "D. Use a custom KMS customer master key created for S3 in the Lambda function code.",
    ],
    answer: [
      "C. Use the GenerateDateKey API, then use that data key to encrypt the file in the Lambda function code.",
    ],
  },
  {
    question:
      "A developer is developing an application that requires identifying the public IPv4 address of the Amazon EC2 instance on which it is running.\n\nHow is the program going to find this data?",
    choices: [
      "A. Get the instance metadata by retrieving http://169.254.169.254/latest/metadata/.",
      "B. Get the instance user data by retrieving http://169.254.169.254/latest/userdata/.",
      "C. Get the application to run IFCONFIG to get the public IP address.",
      "D. Get the application to run IPCONFIG to get the public IP address.",
    ],
    answer: [
      "A. Get the instance metadata by retrieving http://169.254.169.254/latest/metadata/.",
    ],
  },
  {
    question:
      "A developer must create a mobile application that enables users to read and write data from an Amazon DynamoDB database used to store each user's status.\nThe solution must restrict data access so that users may only access their own data.\n\nWhich of the following solutions is the most secure?",
    choices: [
      "A. Embed AWS access credentials into the application and create DynamoDB queries that limit user access.",
      "B. Use Amazon Cognito identity pools to assign unique identifiers and provide user access.",
      "C. Modify the DynamoDB table to allow public read and writes, then add client-side filtering.",
      "D. Create a web portal for users to create an account on AWS Directory Service.",
    ],
    answer: [
      "B. Use Amazon Cognito identity pools to assign unique identifiers and provide user access.",
    ],
  },
  {
    question:
      "A developer must invoke an AWS Lambda function depending on the lifecycle activity of an item in an Amazon DynamoDB database.\n\nHow does the developer go about developing the solution?",
    choices: [
      "A. Enable a DynamoDB stream that publishes an Amazon SNS message. Trigger the Lambda function synchronously from the SNS message.",
      "B. Enable a DynamoDB stream that publishes an SNS message. Trigger the Lambda function asynchronously from the SNS message.",
      "C. Enable a DynamoDB stream, and trigger the Lambda function synchronously from the stream.",
      "D. Enable a DynamoDB stream, and trigger the Lambda function asynchronously from the stream.",
    ],
    answer: [
      "C. Enable a DynamoDB stream, and trigger the Lambda function synchronously from the stream.",
    ],
  },
  {
    question:
      "A developer need temporary access to resources located in a different account.\n\nWhat is the MOST SECURE method of doing this?",
    choices: [
      "A. Use the Amazon Cognito user pools to get short-lived credentials for the second account.",
      "B. Create a dedicated IAM access key for the second account, and send it by mail.",
      "C. Create a cross-account access role, and use sts:AssumeRole API to get short-lived credentials.",
      "D. Establish trust, and add an SSH key for the second account to the IAM user.",
    ],
    answer: [
      "C. Create a cross-account access role, and use sts:AssumeRole API to get short-lived credentials.",
    ],
  },
  {
    question:
      "AWS Lambda functions must read data from an Amazon RDS MySQL database contained inside a VPC and also connect to a public endpoint on the internet to get extra data.\n\nWhich actions must be made to provide access to both the RDS resource and the public endpoint by the function? (Select two.)",
    choices: [
      "A. Modify the default configuration for the Lambda function to associate it with an Amazon VPC private subnet.",
      "B. Modify the default network access control list to allow outbound traffic.",
      "C. Add a NAT Gateway to the VPC.",
      "D. Modify the default configuration of the Lambda function to associate it with a VPC public subnet.",
      "E. Add an environmental variable to the Lambda function to allow outbound internet access.",
    ],
    answer: [
      "A. Modify the default configuration for the Lambda function to associate it with an Amazon VPC private subnet.",
      "C. Add a NAT Gateway to the VPC.",
    ],
  },
  {
    question:
      "An application uses Amazon DynamoDB as its data storage and requires the ability to read 100 items per second in highly consistent reads. Each item is around 5 KB in size.\n\nWhat should the provisioned read throughput of the table be set to?",
    choices: [
      "A. 50 read capacity units",
      "B. 100 read capacity units",
      "C. 200 read capacity units",
      "D. 500 read capacity units",
    ],
    answer: ["C. 200 read capacity units"],
  },
  {
    question:
      "A developer using AWS CodeDeploy to automate the deployment of an application that connects to a remote MySQL database. The developer wishes to access encrypted secrets such as API keys and database passwords safely.\n\nWhich of the following alternatives would need the LEAST amount of administrative work?",
    choices: [
      "A. Save the secrets in Amazon S3 with AWS KMS server-side encryption, and use a signed URL to access them by using the IAM role from Amazon EC2 instances.",
      "B. Use the instance metadata to store the secrets and to programmatically access the secrets from EC2 instances.",
      "C. Use the Amazon DynamoDB client-side encryption library to save the secrets in DynamoDB and to programmatically access the secrets from EC2 instances.",
      "D. Use AWS SSM Parameter Store to store the secrets and to programmatically access them by using the IAM role from EC2 instances.",
    ],
    answer: [
      "D. Use AWS SSM Parameter Store to store the secrets and to programmatically access them by using the IAM role from EC2 instances.",
    ],
  },
  {
    question:
      "A developer is establishing an Auto Scaling group for instances that must submit a custom metric to Amazon CloudWatch.\n\nWhich technique is the SECUREST approach for authenticating a CloudWatch PUT request?",
    choices: [
      "A. Create an IAM user with PutMetricData permission and put the user credentials in a private repository; have applications pull the credentials as needed.",
      "B. Create an IAM user with PutMetricData permission, and modify the Auto Scaling launch configuration to inject the user credentials into the instance user data.",
      "C. Modify the CloudWatch metric policies to allow the PutMetricData permission to instances from the Auto Scaling group.",
      "D. Create an IAM role with PutMetricData permission and modify the Auto Scaling launching configuration to launch instances using that role.",
    ],
    answer: [
      "D. Create an IAM role with PutMetricData permission and modify the Auto Scaling launching configuration to launch instances using that role.",
    ],
  },
  {
    question:
      "Given the AWS CloudFormation template below:\n\n\nWhich method is the MOST EFFECTIVE for referencing the newly created Amazon S3 bucket from another AWS CloudFormation template?",
    choices: [
      "A. Add an Export declaration to the Outputs section of the original template and use ImportValue in other templates.",
      "B. Add Exported: true to the Contentbucket in the original template and use ImportResource in other templates.",
      "C. Create a custom AWS CloudFormation resource that gets the bucket name from the ContentBucket resource of the first stack.",
      "D. Use Fn::Include to include the existing template in other templates and use the ContentBucket resource directly.",
    ],
    answer: [
      "A. Add an Export declaration to the Outputs section of the original template and use ImportValue in other templates.",
    ],
    imageUrl:
      "https://www.examtopics.com/assets/media/exam-media/03756/0014800001.png",
  },
  {
    question:
      "Given the source code for an AWS Lambda function in the local file store.py, which includes the handler function get store, and the accompanying AWS CloudFormation template:\n\n\nWhat should be done to prepare the template for deployment through the AWS Command Line Interface command aws cloudformation deploy?",
    choices: [
      "A. Use aws cloudformation compile to base64 encode and embed the source file into a modified CloudFormation template.",
      "B. Use aws cloudformation package to upload the source code to an Amazon S3 bucket and produce a modified CloudFormation template.",
      "C. Use aws lambda zip to package the source file together with the CloudFormation template and deploy the resulting zip archive.",
      "D. Use aws serverless create-package to embed the source file directly into the existing CloudFormation template.",
    ],
    answer: [
      "B. Use aws cloudformation package to upload the source code to an Amazon S3 bucket and produce a modified CloudFormation template.",
    ],
    imageUrl:
      "https://www.examtopics.com/assets/media/exam-media/03756/0001000001.png",
  },
  {
    question:
      "How can a developer debug AWS Lambda code delivered using AWS Serverless Application Model (AWS SAM)?",
    choices: [
      "A. Download the Lambda code locally and use the AWS CLI to execute it",
      "B. Use the Lambda console to connect the debugger",
      "C. Use AWS SAM to invoke a function locally in debug mode",
      "D. Connect a third-party-compatible integrated development environment (IDE) to the Lambda debugger endpoint",
    ],
    answer: ["C. Use AWS SAM to invoke a function locally in debug mode"],
  },
  {
    question:
      "AWS CodeBuild generates the source code for an application, develops the Docker image, uploads it to Amazon Elastic Container Registry (Amazon ECR), and tags it with a unique identifier.\n\nIf developers already have the AWS CLI setup on their workstations, how are the Docker images downloaded to the workstations?",
    choices: [
      "A. Run the following: docker pull REPOSITORY URI : TAG",
      "B. Run the output of the following: aws ecr get-login and then run: docker pull REPOSITORY URI : TAG",
      "C. Run the following: aws ecr get-login and then run: docker pull REPOSITORY URI : TAG",
      "D. Run the output of the following: aws ecr get-download-url-for-layer and then run: docker pull REPOSITORY URI : TAG",
    ],
    answer: [
      "B. Run the output of the following: aws ecr get-login and then run: docker pull REPOSITORY URI : TAG",
    ],
  },
  {
    question:
      "A developer is developing a Lambda function and want to use external libraries that are not included in the standard Lambda libraries.\n\nWhich operation would result in the least amount of Lambda compute time being consumed?",
    choices: [
      "A. Install the dependencies and external libraries at the beginning of the Lambda function.",
      "B. Create a Lambda deployment package that includes the external libraries.",
      "C. Copy the external libraries to Amazon S3, and reference the external libraries to the S3 location.",
      "D. Install the external libraries in Lambda to be available to all Lambda functions.",
    ],
    answer: [
      "D. Install the external libraries in Lambda to be available to all Lambda functions.",
    ],
  },
];
