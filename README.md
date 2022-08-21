# AWS CLI Commands for creating this lambda function

## Create IAM role
```
aws iam create-role \ 
    --role-name BookMuseumLambdaRole \
    --assume-role-policy-document file://trust-policy.json
```

## Attach a managed policy
```
aws iam attach-role-policy \
    --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole \
    --role-name BookMuseumLambdaRole

```

## Create Lambda function
````
aws lambda create-function \
    --function-name BookMuseum \
    --runtime nodejs14.x \
    --zip-file fileb://book-museum.zip \
    --handler BookMuseum.handler \
    --role arn:aws:iam::{{accountnumber}}:role/BookMuseumLambdaRole
````