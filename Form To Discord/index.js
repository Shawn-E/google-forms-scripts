const config = {
    webhook: ""
}

function DiscordNotify(res) {
    const DiscordPayload = {
        embeds: [{
            type: 'rich',
            title: "New Form Submission",
            fields: []
        }]
    };

    for (question of res.response.getItemResponses()) {
        const answer = question.getResponse() || "Question Not Answered";
        const QuestionData = {
            name: question.getItem().getTitle(),
            value: answer
        };
        DiscordPayload.embeds[0].fields.push(QuestionData)
    }

    UrlFetchApp.fetch(config.webhook, {
        method: 'post',
        payload: JSON.stringify(DiscordPayload),
        contentType: 'application/json'
    });
}
