# Workflow

The following workflow is based on some assumptions: 
- The content type of the request payload is always: **x-www-form-urlencoded**

## Survey

## Create

```json
{
    "name": "...",
    "description": "..."
}
```

## Get Collection

The first step is to pull all surveys from `http://xxx/surveys`. 
The payload looks similar to:

```json
{
    "meta": {
        "total": 0,
        "limit": 20,
        "offset": 0
    },
    "data": [
        {
            "id": "xxxx-xxxx-xxxx-xxxx",
            "name": "...",
            "description": "...",
            "hash": "...",
            "invitation_code": "...",
            "user_id": "",
            "created_at": "...",
            "updated_at": "...",
            "finished_at": "..."
        }
    ]
}
```

The `hash` should be used to check if a new participant joined the survey.
If the stored local hash does not match to the remote hash of the survey anymore,
the cipher texts for new participants must be calculated and submitted.

## Survey Question

The operator can have one of the following values: 
- sum
- avg

## Create

```json
{
    "name": "...",
    "description": "...",
    "operator": "..."
}
```

## Survey Participants

The `http://xxx/survey-participants?filter[survey_id]=xxx` returns all survey participants for the survey `xxx`. 
The response payload looks similar to the following dump:

```json
{
    "meta": {
        "total": 0,
        "limit": 20,
        "offset": 0
    },
    "data": [
        {
            "id": "xxxx-xxxx-xxxx-xxxx",
            "public_key": "...",
            "survey_id": "xxx",
            "user_id": "..."
        }
    ]
}
```

## Survey Result

## Get

```json
{
    "questions": [
        {
            "id": "xxx",
            "content": ""
        }
    ]
}
```

## Survey Question Participant Results

### Submit

The computed cipher text for a participant must be submitted to the url: `http://xxx/survey-question-participant-results`.
The request payload should look like this:

```json
{
    "content": "{....}",
    "survey_id": "xxx",
    "question_id": "xxx",
    "target_participant_id": "xxx",
    "source_participant_id": "yyy"
}
```
