const toggleNames = [
    "removeEditLink",
    "removeForumList",
    "removeRecentNewsList",
    "removeRecommendationsList",
    "removeInterestStacksList",
    "removeReviewsList",
    "removeThemeSongList",
    "removeVAList",
    "removeStaffList",
    "removeRelatedAnimeList",
    "removeMALXJapan",
    "removeBackgroundDetail",
    "removeFeaturedArticlesList",
    "removeEpisodeList",
    "collapseSynopsisText",
    "removeAlternativeTitlesList",
    "removeInformationList",
    "removeStatisticsList",
    "removeAvailableAtList",
    "removeResourcesList",
    "removeStreamingPlatformsList",
    "removePreviewVideo",
    "removeMembersCountResult",
    "autoCompleteOnRatingActivation",
    "collapseBackgroundDetail",
    "collapseEpisodeList",
    "collapseRelatedAnimeList",
    "collapseVAList",
    "collapseStaffList",
    "collapseThemeSongList",
    "collapseReviewsList",
    "collapseInterestStacksList",
    "collapseRecommendationsList",
    "collapseRecentNewsList",
    "collapseForumList",
    "collapseFeaturedArticlesList",
    "collapseStreamingPlatformsList",
    "collapseResourcesList",
    "collapseAvailableAtList",
    "collapseStatisticsList",
    "collapseInformationList",
    "collapseAlternativeTitlesList",
    "removeBreadcrumbList"
]

function getDataFromStorage(sendResponse) {
    // Retrieve values from storage (with defaults if not set)
    chrome.storage.sync.get(toggleNames, function (result) {
        const toggleData = result;
        sendResponse(toggleData);
    });

    // Return true to indicate that the response will be sent asynchronously
    return true;
}

// background.js (Background Script)
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.s === "popup") {
        console.log("Received message from :", message.s);
        sendResponse({ farewell: "Received" });

        delete message.s
        chrome.storage.sync.set(message)
    }
    if(message.s === "content"){
        console.log("Received message from :", message.s);
        const responseSent = getDataFromStorage(sendResponse);
        return responseSent;
    }
});
