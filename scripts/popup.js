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

// Saves options to chrome.storage
const saveOptions = () => {
    const removeEditLink = document.getElementById('removeEditLink').checked;
    const removeForumList = document.getElementById('removeForumList').checked;
    const removeRecentNewsList = document.getElementById('removeRecentNewsList').checked;
    const removeRecommendationsList = document.getElementById('removeRecommendationsList').checked;
    const removeInterestStacksList = document.getElementById('removeInterestStacksList').checked;
    const removeReviewsList = document.getElementById('removeReviewsList').checked;
    const removeThemeSongList = document.getElementById('removeThemeSongList').checked;
    const removeVAList = document.getElementById('removeVAList').checked;
    const removeStaffList = document.getElementById('removeStaffList').checked;
    const removeRelatedAnimeList = document.getElementById('removeRelatedAnimeList').checked;
    const removeMALXJapan = document.getElementById('removeMALXJapan').checked;
    const removeBackgroundDetail = document.getElementById('removeBackgroundDetail').checked;
    const removeFeaturedArticlesList = document.getElementById('removeFeaturedArticlesList').checked;
    const removeEpisodeList = document.getElementById('removeEpisodeList').checked;
    const collapseSynopsisText = document.getElementById('collapseSynopsisText').checked;
    const removeAlternativeTitlesList = document.getElementById('removeAlternativeTitlesList').checked;
    const removeInformationList = document.getElementById('removeInformationList').checked;
    const removeStatisticsList = document.getElementById('removeStatisticsList').checked;
    const removeAvailableAtList = document.getElementById('removeAvailableAtList').checked;
    const removeResourcesList = document.getElementById('removeResourcesList').checked;
    const removeStreamingPlatformsList = document.getElementById('removeStreamingPlatformsList').checked;
    const removePreviewVideo = document.getElementById('removePreviewVideo').checked;
    const removeMembersCountResult = document.getElementById('removeMembersCountResult').checked;
    const autoCompleteOnRatingActivation = document.getElementById('autoCompleteOnRatingActivation').checked;
    const collapseBackgroundDetail = document.getElementById('collapseBackgroundDetail').checked;
    const collapseEpisodeList = document.getElementById('collapseEpisodeList').checked;
    const collapseRelatedAnimeList = document.getElementById('collapseRelatedAnimeList').checked;
    const collapseVAList = document.getElementById('collapseVAList').checked;
    const collapseStaffList = document.getElementById('collapseStaffList').checked;
    const collapseThemeSongList = document.getElementById('collapseThemeSongList').checked;
    const collapseReviewsList = document.getElementById('collapseReviewsList').checked;
    const collapseInterestStacksList = document.getElementById('collapseInterestStacksList').checked;
    const collapseRecommendationsList = document.getElementById('collapseRecommendationsList').checked;
    const collapseRecentNewsList = document.getElementById('collapseRecentNewsList').checked;
    const collapseForumList = document.getElementById('collapseForumList').checked;
    const collapseFeaturedArticlesList = document.getElementById('collapseFeaturedArticlesList').checked;
    const collapseStreamingPlatformsList = document.getElementById('collapseStreamingPlatformsList').checked;
    const collapseResourcesList = document.getElementById('collapseResourcesList').checked;
    const collapseAvailableAtList = document.getElementById('collapseAvailableAtList').checked;
    const collapseStatisticsList = document.getElementById('collapseStatisticsList').checked;
    const collapseInformationList = document.getElementById('collapseInformationList').checked;
    const collapseAlternativeTitlesList = document.getElementById('collapseAlternativeTitlesList').checked;
    const removeBreadcrumbList = document.getElementById('removeBreadcrumbList').checked;

    toggleData = {
        "removeEditLink": removeEditLink,
        "removeForumList": removeForumList,
        "removeRecentNewsList": removeRecentNewsList,
        'removeRecommendationsList': removeRecommendationsList,
        "removeInterestStacksList": removeInterestStacksList,
        "removeReviewsList": removeReviewsList,
        "removeThemeSongList": removeThemeSongList,
        "removeVAList": removeVAList,
        "removeStaffList" : removeStaffList,
        "removeRelatedAnimeList": removeRelatedAnimeList,
        "removeMALXJapan": removeMALXJapan,
        "removeBackgroundDetail": removeBackgroundDetail,
        "removeFeaturedArticlesList": removeFeaturedArticlesList,
        "removeEpisodeList": removeEpisodeList,
        "collapseSynopsisText": collapseSynopsisText,
        "removeAlternativeTitlesList": removeAlternativeTitlesList,
        "removeInformationList": removeInformationList,
        "removeStatisticsList": removeStatisticsList,
        "removeAvailableAtList": removeAvailableAtList,
        "removeResourcesList": removeResourcesList,
        "removeStreamingPlatformsList": removeStreamingPlatformsList,
        "removePreviewVideo": removePreviewVideo,
        "removeMembersCountResult": removeMembersCountResult,
        "autoCompleteOnRatingActivation": autoCompleteOnRatingActivation,
        "collapseBackgroundDetail": collapseBackgroundDetail,
        "collapseEpisodeList": collapseEpisodeList,
        "collapseRelatedAnimeList": collapseRelatedAnimeList,
        "collapseVAList": collapseVAList,
        "collapseStaffList": collapseStaffList,
        "collapseThemeSongList": collapseThemeSongList,
        "collapseReviewsList": collapseReviewsList,
        "collapseInterestStacksList": collapseInterestStacksList,
        "collapseRecommendationsList": collapseRecommendationsList,
        "collapseRecentNewsList": collapseRecentNewsList,
        "collapseForumList": collapseForumList,
        "collapseFeaturedArticlesList": collapseFeaturedArticlesList,
        "collapseStreamingPlatformsList": collapseStreamingPlatformsList,
        "collapseResourcesList": collapseResourcesList,
        "collapseAvailableAtList": collapseAvailableAtList,
        "collapseStatisticsList": collapseStatisticsList,
        "collapseInformationList": collapseInformationList,
        "collapseAlternativeTitlesList": collapseAlternativeTitlesList,
        "removeBreadcrumbList": removeBreadcrumbList
    }
    chrome.storage.sync.set(toggleData)

    // send
    toggleData["s"] = "popup"
    chrome.runtime.sendMessage(toggleData, (response) => {
        console.log("Received response from background script:", response);
    });
};

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
const restoreOptions = () => {
    chrome.storage.sync.get(
        toggleNames,
        (items) => {
            document.getElementById('removeEditLink').checked = items.removeEditLink;
            document.getElementById('removeForumList').checked = items.removeForumList;
            document.getElementById('removeRecentNewsList').checked = items.removeRecentNewsList;
            document.getElementById('removeRecommendationsList').checked = items.removeRecommendationsList;
            document.getElementById('removeInterestStacksList').checked = items.removeInterestStacksList;
            document.getElementById('removeReviewsList').checked = items.removeReviewsList;
            document.getElementById('removeThemeSongList').checked = items.removeThemeSongList;
            document.getElementById('removeVAList').checked = items.removeVAList;
            document.getElementById('removeStaffList').checked = items.removeStaffList;
            document.getElementById('removeRelatedAnimeList').checked = items.removeRelatedAnimeList;
            document.getElementById('removeMALXJapan').checked = items.removeMALXJapan;
            document.getElementById('removeBackgroundDetail').checked = items.removeBackgroundDetail;
            document.getElementById('removeFeaturedArticlesList').checked = items.removeFeaturedArticlesList;
            document.getElementById('removeEpisodeList').checked = items.removeFeaturedArticlesList;
            document.getElementById('collapseSynopsisText').checked = items.collapseSynopsisText;
            document.getElementById('removeAlternativeTitlesList').checked = items.removeAlternativeTitlesList;
            document.getElementById('removeInformationList').checked = items.removeInformationList;
            document.getElementById('removeStatisticsList').checked = items.removeStatisticsList;
            document.getElementById('removeAvailableAtList').checked = items.removeAvailableAtList;
            document.getElementById('removeResourcesList').checked = items.removeResourcesList;
            document.getElementById('removeStreamingPlatformsList').checked = items.removeStreamingPlatformsList;
            document.getElementById('removePreviewVideo').checked = items.removePreviewVideo;
            document.getElementById('removeMembersCountResult').checked = items.removeMembersCountResult;
            document.getElementById('autoCompleteOnRatingActivation').checked = items.autoCompleteOnRatingActivation;
            document.getElementById('collapseBackgroundDetail').checked = items.collapseBackgroundDetail;
            document.getElementById('collapseEpisodeList').checked = items.collapseEpisodeList;
            document.getElementById('collapseRelatedAnimeList').checked = items.collapseRelatedAnimeList;
            document.getElementById('collapseVAList').checked = items.collapseVAList;
            document.getElementById('collapseStaffList').checked = items.collapseStaffList;
            document.getElementById('collapseThemeSongList').checked = items.collapseThemeSongList;
            document.getElementById('collapseReviewsList').checked = items.collapseReviewsList;
            document.getElementById('collapseInterestStacksList').checked = items.collapseInterestStacksList;
            document.getElementById('collapseRecommendationsList').checked = items.collapseInterestStacksList;
            document.getElementById('collapseRecentNewsList').checked = items.collapseRecentNewsList;
            document.getElementById('collapseForumList').checked = items.collapseForumList;
            document.getElementById('collapseFeaturedArticlesList').checked = items.collapseFeaturedArticlesList;
            document.getElementById('collapseStreamingPlatformsList').checked = items.collapseStreamingPlatformsList;
            document.getElementById('collapseResourcesList').checked = items.collapseResourcesList;
            document.getElementById('collapseAvailableAtList').checked = items.collapseAvailableAtList;
            document.getElementById('collapseStatisticsList').checked = items.collapseStatisticsList;
            document.getElementById('collapseInformationList').checked = items.collapseInformationList;
            document.getElementById('collapseAlternativeTitlesList').checked = items.collapseAlternativeTitlesList;
            document.getElementById('removeBreadcrumbList').checked = items.removeBreadcrumb;
        }
    );
};

//Checkbox feature
function loadEventListeners(){
    //background
    let collapseBackgroundCheckbox = document.getElementById('collapseBackgroundDetail');
    let removeBackgroundCheckbox = document.getElementById('removeBackgroundDetail');

    collapseBackgroundCheckbox.addEventListener('click', () =>{
        if(collapseBackgroundCheckbox.checked){
            removeBackgroundCheckbox.checked = false;
        }
    })

    removeBackgroundCheckbox.addEventListener('click', () =>{
        if(removeBackgroundCheckbox.checked){
            collapseBackgroundCheckbox.checked = false;
        }
    })

    //Episode Videos
    let collapseEpisode = document.getElementById('collapseEpisodeList');
    let removeEpisode = document.getElementById('removeEpisodeList');

    collapseEpisode.addEventListener('click', () =>{
        if(collapseEpisode.checked){
            removeEpisode.checked = false;
        }
    })

    removeEpisode.addEventListener('click', () =>{
        if(removeEpisode.checked){
            collapseEpisode.checked = false;
        }
    })

    //Related Anime
    let collapseRelatedAnime = document.getElementById('collapseRelatedAnimeList');
    let removeRelatedAnime = document.getElementById('removeRelatedAnimeList'); 

    collapseRelatedAnime.addEventListener('click', () =>{
        if(collapseRelatedAnime.checked){
            removeRelatedAnime.checked = false;
        }
    })

    removeRelatedAnime.addEventListener('click', () =>{
        if(removeRelatedAnime.checked){
            collapseRelatedAnime.checked = false;
        }
    })

    //Related characters and VAs
    let collapseVA = document.getElementById('collapseVAList');
    let removeVA = document.getElementById('removeVAList'); 

    collapseVA.addEventListener('click', () =>{
        if(collapseVA.checked){
            removeVA.checked = false;
        }
    })

    removeVA.addEventListener('click', () =>{
        if(removeVA.checked){
            collapseVA.checked = false;
        }
    })

    //Staff
    let collapseStaff = document.getElementById('collapseStaffList');
    let removeStaff = document.getElementById('removeStaffList'); 

    collapseStaff.addEventListener('click', () =>{
        if(collapseStaff.checked){
            removeStaff.checked = false;
        }
    })

    removeStaff.addEventListener('click', () =>{
        if(removeStaff.checked){
            collapseStaff.checked = false;
        }
    })

    //Themes
    let collapseTheme = document.getElementById('collapseThemeSongList');
    let removeTheme = document.getElementById('removeThemeSongList'); 

    collapseTheme.addEventListener('click', () =>{
        if(collapseTheme.checked){
            removeTheme.checked = false;
        }
    })

    removeTheme.addEventListener('click', () =>{
        if(removeTheme.checked){
            collapseTheme.checked = false;
        }
    })

    //Reviews
    let collapseReview = document.getElementById('collapseReviewsList');
    let removeReview = document.getElementById('removeReviewsList'); 

    collapseReview.addEventListener('click', () =>{
        if(collapseReview.checked){
            removeReview.checked = false;
        }
    })

    removeReview.addEventListener('click', () =>{
        if(removeReview.checked){
            collapseReview.checked = false;
        }
    })

    //Interest stacks
    let collapseInterest = document.getElementById('collapseInterestStacksList');
    let removeInterest = document.getElementById('removeInterestStacksList'); 

    collapseInterest.addEventListener('click', () =>{
        if(collapseInterest.checked){
            removeInterest.checked = false;
        }
    })

    removeInterest.addEventListener('click', () =>{
        if(removeInterest.checked){
            collapseInterest.checked = false;
        }
    })

    //Recommendation
    let collapseRecommendation = document.getElementById('collapseRecommendationsList');
    let removeRecommendation = document.getElementById('removeRecommendationsList'); 

    collapseRecommendation.addEventListener('click', () =>{
        if(collapseRecommendation.checked){
            removeRecommendation.checked = false;
        }
    })

    removeRecommendation.addEventListener('click', () =>{
        if(removeRecommendation.checked){
            collapseRecommendation.checked = false;
        }
    })

    //Recent News
    let collapseRecentNews = document.getElementById('collapseRecentNewsList');
    let removeRecentNews = document.getElementById('removeRecentNewsList'); 

    collapseRecentNews.addEventListener('click', () =>{
        if(collapseRecentNews.checked){
            removeRecentNews.checked = false;
        }
    })

    removeRecentNews.addEventListener('click', () =>{
        if(removeRecentNews.checked){
            collapseRecentNews.checked = false;
        }
    })

    //Forum
    let collapseForum = document.getElementById('collapseForumList');
    let removeForum = document.getElementById('removeForumList'); 

    collapseForum.addEventListener('click', () =>{
        if(collapseForum.checked){
            removeForum.checked = false;
        }
    })

    removeForum.addEventListener('click', () =>{
        if(removeForum.checked){
            collapseForum.checked = false;
        }
    })

    //Featured articles
    let collapseFeaturedArticles = document.getElementById('collapseFeaturedArticlesList');
    let removeFeaturedArticles = document.getElementById('removeFeaturedArticlesList'); 

    collapseFeaturedArticles.addEventListener('click', () =>{
        if(collapseFeaturedArticles.checked){
            removeFeaturedArticles.checked = false;
        }
    })

    removeFeaturedArticles.addEventListener('click', () =>{
        if(removeFeaturedArticles.checked){
            collapseFeaturedArticles.checked = false;
        }
    })

    //Streaming platform
    let collapseStreamingPlatforms = document.getElementById('collapseStreamingPlatformsList');
    let removeStreamingPlatforms = document.getElementById('removeStreamingPlatformsList'); 

    collapseStreamingPlatforms.addEventListener('click', () =>{
        if(collapseStreamingPlatforms.checked){
            removeStreamingPlatforms.checked = false;
        }
    })

    removeStreamingPlatforms.addEventListener('click', () =>{
        if(removeStreamingPlatforms.checked){
            collapseStreamingPlatforms.checked = false;
        }
    })

    //Resources
    let collapseResources = document.getElementById('collapseResourcesList');
    let removeResources = document.getElementById('removeResourcesList'); 

    collapseResources.addEventListener('click', () =>{
        if(collapseResources.checked){
            removeResources.checked = false;
        }
    })

    removeResources.addEventListener('click', () =>{
        if(removeResources.checked){
            collapseResources.checked = false;
        }
    })
    
    //Available at
    let collapseAvailableAt = document.getElementById('collapseAvailableAtList');
    let removeAvailableAt = document.getElementById('removeAvailableAtList'); 

    collapseAvailableAt.addEventListener('click', () =>{
        if(collapseAvailableAt.checked){
            removeAvailableAt.checked = false;
        }
    })

    removeAvailableAt.addEventListener('click', () =>{
        if(removeAvailableAt.checked){
            collapseAvailableAt.checked = false;
        }
    })

    //Statistics
    let collapseStatistics = document.getElementById('collapseStatisticsList');
    let removeStatistics = document.getElementById('removeStatisticsList'); 

    collapseStatistics.addEventListener('click', () =>{
        if(collapseStatistics.checked){
            removeStatistics.checked = false;
        }
    })

    removeStatistics.addEventListener('click', () =>{
        if(removeStatistics.checked){
            collapseStatistics.checked = false;
        }
    })

    //Information
    let collapseInformation = document.getElementById('collapseInformationList');
    let removeInformation = document.getElementById('removeInformationList'); 

    collapseInformation.addEventListener('click', () =>{
        if(collapseInformation.checked){
            removeInformation.checked = false;
        }
    })

    removeInformation.addEventListener('click', () =>{
        if(removeInformation.checked){
            collapseInformation.checked = false;
        }
    })

    //Alternative titles
    let collapseAlternativeTitles = document.getElementById('collapseAlternativeTitlesList');
    let removeAlternativeTitles = document.getElementById('removeAlternativeTitlesList'); 

    collapseAlternativeTitles.addEventListener('click', () =>{
        if(collapseAlternativeTitles.checked){
            removeAlternativeTitles.checked = false;
        }
    })

    removeAlternativeTitles.addEventListener('click', () =>{
        if(removeAlternativeTitles.checked){
            collapseAlternativeTitles.checked = false;
        }
    })
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.addEventListener('DOMContentLoaded', loadEventListeners);
document.getElementById('save').addEventListener('click', saveOptions);

