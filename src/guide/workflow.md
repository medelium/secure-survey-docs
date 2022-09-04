# Workflow

The following workflow is based on some assumptions: 
- The content type of the request payload is always: **x-www-form-urlencoded**

## Creator Steps
1. Create a questionnaire
2. Create question(s) for a questionnaire
3. Add participant(s) manually or via invitation code

## Participant Steps
1. Accept invitation code.
2. Submit encrypted question answer for each other participant
3. Pull questionnaire result

## Participant Loop Steps
1. Check if the hash of a participated questionnaire changed
2. If the hash changed repeat Steps **2** & **3** of [Participant Steps](#participant-steps)

## Questionnaire

### Create

```json
{
    "name": "...",
    "description": "..."
}
```

### Read (Collection)

The first step is to pull all questionnaires from `http://xxx/questionnaires`. 
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

The `hash` should be used to check if a new participant joined the questionnaire.
If the stored local hash does not match to the remote hash of the questionnaire anymore,
the cipher texts for new participants must be calculated and submitted.

## Question

The operator can have one of the following values: 
- sum
- avg

### Create

```json
{
    "name": "...",
    "description": "...",
    "operator": "..."
}
```

## Participants

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

## Result

### Get

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

## Question Participant Results

### Submit

The computed cipher text for a participant must be submitted to the url: `http://xxx/question-participant-results`.
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
